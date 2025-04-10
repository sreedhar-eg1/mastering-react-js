import { Link, useNavigate } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation } from "@tanstack/react-query";
import { createNewEvent, queryClient } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function NewEvent() {
  const navigate = useNavigate();

  // for getting data we will be using useQuery, for post use useMutation
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
    // here we can add code that we need to perform after data is submitted successfully
    onSuccess: () => {
      // Now after data is submitted the event data will be outdated, we need to fetch it again, which can be done by invalidating that query
      // we need to target the queryKey that was given to query to invalidate
      queryClient.invalidateQueries({ queryKey: ["events"] });
      navigate("/events");
    },
  });

  function handleSubmit(formData) {
    mutate({ event: formData });
  }

  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && <p>Submitting...</p>}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title={"Failed to create event!"}
          message={
            error.info?.message || "Failed to create event, please try again"
          }
        />
      )}
    </Modal>
  );
}
