

import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import RSCDemo from "@/components/RSCDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";
import { Suspense } from "react";
import UsePromiseDemo from "@/components/UsePromisesDemo";

export default async function Home() {

  return (
    <main>
      <RSCDemo />
      <ClientDemo>
        <RSCDemo />
      </ClientDemo>
      <DataFetchingDemo />
      <ServerActionsDemo />
      <Suspense fallback={<p>Loading users...</p>}><UsePromiseDemo /></Suspense>
    </main>
  );
}
