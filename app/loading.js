import classes from "./loading.module.css";

// Like page.js -> which is for routing,
// layout.js -> which is for layout
// Loading.js -> which is for loading

// All thie file name are reserved, and have separate meaning
export default function MealsLoadingPage() {
  return <p className={classes.loading}>Fetching meals...</p>;
}
