import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error">
      <h2>Oops!!!</h2>
      <h3>Something went wrong...</h3>
      <h3>{err.status}: {err.statusText}</h3>
    </div>
  )
}

export default Error;