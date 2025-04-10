import { useIsFetching } from "@tanstack/react-query";

export default function Header({ children }) {
  // useIsFetching hook is used to check if the data is fetching or not, it returns numeric value
  const fetching = useIsFetching();

  return (
    <>
      <div id="main-header-loading">{fetching > 0 && <progress />}</div>
      <header id="main-header">
        <div id="header-title">
          <h1>React Events</h1>
        </div>
        <nav>{children}</nav>
      </header>
    </>
  );
}
