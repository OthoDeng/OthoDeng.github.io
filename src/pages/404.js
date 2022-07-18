import * as React from "react";
import { Link } from "gatsby";

// styles
const pageStyles = {
  color: "#d895bc",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#d868a9",
  padding: 4,
  backgroundColor: "#e4dcef",
  fontSize: "1rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        <h2>Sorry{" "}</h2>
        <img
        class="fit-picture"
        src="/src/images/404"
        alt="404 kitty not found"
      ></img>
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        Otto had no idea of what you're looking for
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try contact <code style={codeStyles}><Link to="mailto:ottodeng9@gmail.com"> ottodeng9@gmail.com</Link></code> for
            help.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
