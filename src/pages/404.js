import * as React from "react";
import { Link } from "gatsby";
import NotFound from "../images/404.jpeg";

// styles
const pageStyles = {
  color: "#F2ABBD",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
};
const footerStyle = {
  color: "#ce94ae",
  width: "100%",
  textAlign: "center",
  paddingBottom: "0.5rem",
  paddingTop: "0.5rem",
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
        <h2>Sorry(°ー°〃)</h2>
        <p>
          <img src={NotFound} alt="404 not found" width={200} />
        </p>{" "}
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
      <footer style={footerStyle}>
        <hr class="css-1avyp1d"></hr>
        <a href="/">Go Home</a>
        <p>
          Projects by{" "}
          <a href="https://github.com/ottoqwq">
            {" "}
            <hi style={codeStyles}>Otto Deng</hi>
          </a>
          . Powered by <a href="https://www.gatsbyjs.com/">Gatsby</a>
        </p>
        <p>
          Content on this site is licensed under{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>{" "}
          unless specified.
        </p>
      </footer>
    </main>
  );
};

export default NotFoundPage;

