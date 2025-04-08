import { useLoaderData, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

export default function EventPage() {
  // with out the help of defer
  // const events = useLoaderData();

  // if (events.isError) {
  //   return <p>{events.message}</p>;
  // }

  // return <>{<EventsList events={events} />}</>;

  // with the help of defer
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return {isError: true, message: 'Could not fetch data.'}

    // Alternate approach by throwing an error, which route to closest error element spectified in route
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });

    // Instead of creating new response, we can make use of json from react router and return it
    // return response.json({ message: "Could not fetch events." }, {
    //   status: 500
    // });
  } else {
    const resData = await response.json();
    return resData.events;

    // Here we dont need to fetch data and send, here we can send the response directly
    // return response;
  }
}

export function loader() {
  // with react-router version less than 7
  // return defer({
  //   events: loadEvents(),
  // });

  // with version above 7
  return {
    events: loadEvents(),
  };
}
