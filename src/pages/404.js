import * as React from "react";
import { Link } from "gatsby";
import NotFound from "../images/404.jpeg";

// styles
const pageStyles = {
  color: "#d895bc",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#d868a9",
  padding: 4,
  backgroundColor: "#e4dcef",
  fontSize: "0.8rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <main align="center" style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        <h2>Sorry</h2>
        <p>
          <img src={NotFound} alt="404 not found" width={200} />
        </p>
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        Otto had no idea of what you're looking for
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try contact{" "}
            <code style={codeStyles}>
              <Link to="mailto:ottodeng9@gmail.com"> ottodeng9@gmail.com</Link>
            </code>{" "}
            for help.
            <br />
          </>
        ) : null}
        <br />
      </p>
      <p>
      <Link style={pageStyles} to="/">
          Go home
        </Link>
      </p>
    </main>
  );
};

export default NotFoundPage;