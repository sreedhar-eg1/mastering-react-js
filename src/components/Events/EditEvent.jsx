import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams();

  // const {} = useLoaderData()

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
    staleTime: 5000
  });

  const {mutate} = useMutation({
    mutationFn: updateEvent,
    // onSuccess: () => {
    //   queryClient.invalidateQueries({queryKey: ['events']})
    //   navigate("../");
    // }
    // This function willl be called when we execute mutate
    // All data that was passed while calling mutate can be fetched in onMutate
    onMutate: async (data) => {
      const newEvent = data.event
      // to manipulate the cached data for optimistic updates
      // while doing this we need to cancel all outgoing queries for that id
      await queryClient.cancelQueries({ queryKey: ["events", id] });

      // To get the old data
      const prevEvent = queryClient.getQueryData(['events', id])
      queryClient.setQueryData(['events', id], newEvent)

      // basically this will be the context data
      return {
        prevEvent
      }
    },
    // will we called when there was some error
    // here context will conteain the prevEvent data, to make context get this data, in onMutate, we need to return this data
    onError: (error, data, context) => {
      // when there is error, we are rolling back to preveious data
      queryClient.setQueryData(['events', id], context.prevEvent)
    },
    // while using this optimistic update, we need to add onSettled
    // this will be called when this mutation is done (failed or succeeded)
    onSettled: () => {
      queryClient.invalidateQueries(['events', id])
    }
  })

  function handleSubmit(formData) {
    mutate({id, event: formData})
    navigate('../')
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  // when we use react router then this loading is not usefull, because data is fetched before this page is renderd
  // if (isPending) {
  //   content = (
  //     <div className="center">
  //       <LoadingIndicator />
  //     </div>
  //   );
  // }

  // with the help of react query
  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="An error occurred"
          message={
            error.info?.message ||
            "Failed to fetch event, please try again later"
          }
        />
        <div className="form-actions">
          <Link className="button" to="../Events">
            Okay
          </Link>
        </div>
      </>
    );
  }


  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

export function loader(id) {
  // to trigger a query manually
  return queryClient.fetchQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  })
}
