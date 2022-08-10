import { useDispatch, useSelector } from "react-redux";
import { asyncActions } from "../store/async-slice";

function AsyncComponent() {
  const { fetching, error, fetchedData } = useSelector(
    (store) => store.asyncSlice
  );

  const dispatch = useDispatch();
  const fetchData = async () => {
    dispatch(asyncActions.setFetching(true));

    try {
      const response = await fetch("https://api.github.com/users/sanjarxcode");
      if (!response.ok) throw new Error("Fetch errorx");

      const data = await response.json();
      dispatch(asyncActions.setFetchedData(data));
    } catch (error) {
      dispatch(asyncActions.setError(error.message));
    } finally {
      dispatch(asyncActions.setFetching(false));
    }
  }; // is an async operation involving the store
  // this can either be handled in the component, or kept in the store file itself

  return (
    <div style={{ color: "white", margin: "1rem" }}>
      <h1>Async Component</h1>
      {fetching && "Loading..."}
      {error && `${error}`}
      {!fetching &&
        !error &&
        fetchedData &&
        `Fetched data: ${JSON.stringify(fetchedData)}`}
      <br />
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

export default AsyncComponent;
