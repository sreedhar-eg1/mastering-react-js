import classes from "./loading.module.css";

// Like page.js -> which is for routing,
// layout.js -> which is for layout
// Loading.js -> which is for loading
// Error.js -> which is for error
// not-found.js -> for handling false route

// All thie file name are reserved, and have separate meaning
export default function MealsLoadingPage() {
  return <p className={classes.loading}>Fetching meals...</p>;
}
