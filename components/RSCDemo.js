// import ClientDemo from "./ClientDemo";

export default async function RSCDemo() {
  console.log("RSCDemo rendered");
  return (
    <div className="rsc">
      <h2>A React Server Component</h2>
      <p>
        Will <strong>ONLY</strong> be rendered on the server or at build time.
      </p>
      <p>
        <strong>NEVER</strong> on the client-side!
      </p>
      {/* <ClientDemo /> */}
    </div>
  );
}

// we can use client component inside server component
// we cant we server component inside client component, but server component can be used as a children props inside client component
// but when we use server component inside client component, server component is converted to client component, when the server component doesnot have any server related code
