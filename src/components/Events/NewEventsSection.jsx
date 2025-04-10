// import { useEffect, useState } from 'react';

import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import { useQuery } from '@tanstack/react-query';
import { fetchEvents } from '../../util/http.js';

const MAX = 3

export default function NewEventsSection() {
  // we need to point the function which return promise to thequeryFn, and also we need to pass unique value to querykey which will help in cachinh
  // in turn we get the data and some usefull methods
  const {data, isPending, isError, error} = useQuery({
    queryKey: ['events', {max: MAX}],
    queryFn: ({signal}) => fetchEvents({signal, max: MAX}),
    // if we go to other page and come again, where the time took was more than 5000ms then new request is sent
    staleTime: 5000,
    // for how much time the cached data need to be kept
    // gcTime: 30000
  })

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock title="An error occurred" message={error.info?.message || 'Failed to fetch events.'} />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
