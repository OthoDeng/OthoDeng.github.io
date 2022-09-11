import * as React from "react";

// styles
const pageStyles = {
  color: "#a868a9",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#f5fffa",
};
const codeStyles = {
  color: "#d868a9",
  padding: 4,
  backgroundColor: "#e4dcef",
  fontSize: "0.7rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 34,
};

const linkStyle = {
  color: "#d164cb",
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

// Doc links
const links = [
  {
    text: "语文",
    url: "/study/CHI/",
  },
  {
    text: "数学",
    url: "/study/MATH",
  },
];

const StudyPage = () => {
  return (
    <main align="center" style={pageStyles}>
      <title>踵事增华</title>
      <h1>踵事增华</h1>
      <a style={codeStyles}>烟雨箬笠，朝闻行远自迩</a>
      <p></p>
      <a style={codeStyles}>山花烂漫，夕拾增华踵事</a>
      <ul style={listStyles}>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a style={linkStyle} href={`${link.url}`}>
                {link.text}
                <div style={descriptionStyle}>{link.brief}</div>
              </a>
            </span>
          </li>
        ))}
      </ul>

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

export default StudyPage;

