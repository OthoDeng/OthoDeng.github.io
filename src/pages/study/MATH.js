import * as React from "react";

// styles
const pageStyles = {
  color: "#F2ABBD",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const codeStyles = {
  color: "#d868a9",
  padding: 4,
  backgroundColor: "#e4dcef",
  fontSize: "1rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
};

const linkStyle = {
  color: "#ce94ae",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const descriptionStyle = {
  color: "#8b78a5",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};
const footerStyle = {
  color: "#ce94ae",
  width: "100%",
  textAlign: "center",
  paddingBottom: "0.5rem",
  paddingTop: "0.5rem",
};
// data
const links = [
];

// markup
const IndexPage = () => {
  return (
    <main align="center" style={pageStyles}>
      <title>数学</title>
      <h1>数学</h1>
      <div>目前没啥活</div>
      <ul style={listStyles}>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>


      <iframe src="https://cloud.mokeyjay.com/pixiv" width="240px" height="380px" border="0"></iframe>

      <footer style={footerStyle}>
        <hr class="css-1avyp1d"></hr>
        <a href="../">Go Back</a> 
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

export default IndexPage;
