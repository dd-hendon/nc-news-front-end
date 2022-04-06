export default function ErrorPage({ error }) {
  return (
    <>
      <h1 className="error-page-message">
        <br />
        Sorry!
      </h1>
      <br />
      {error ? (
        <>
          <h2 className="error-page-message">
            {`${error.response.status} ${error.response.statusText}`}{" "}
          </h2>{" "}
          <p className="error-page-body">{error.response.data.message} </p>
        </>
      ) : (
        <>
          <h2 className="error-page-message">Resource not found </h2>
          <p className="error-page-body">please check your url </p>
        </>
      )}
    </>
  );
}
