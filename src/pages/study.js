import { Link } from "gatsby";
import * as React from "react";

// styles
const pageStyles = {
    color: "#a868a9",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    backgroundColor: "#f5fffa",
  };
  const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    fontSize: "2rem",
  };
  const headingAccentStyles = {
    color: "#d868a9",
    fontSize: "1rem",
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
  
  const docLinkStyle = {
    ...linkStyle,
    listStyleType: "none",
    marginBottom: 24,
  };
  
  const descriptionStyle = {
    color: "#8b78a5",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
  };
  
  const badgeStyle = {
    color: "#d868a9",
    backgroundColor: "#e4dcef",
    border: "1px solid #8b78a5",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
    borderRadius: 4,
    padding: "4px 6px",
    display: "inline-block",
    position: "relative",
    top: -2,
    marginLeft: 10,
    lineHeight: 1,
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
            <h1>踵事增华</h1>
            <div>踵事增华，旨在希望通过平时的积累来踔厉奋发</div>
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


      <footer>
        <Link to="/">Go Home</Link>
        <p>
          Projects by <a href="https://github.com/ottoqwq"> Otto Deng</a>.
          Powered by <a href="https://www.gatsbyjs.com/">Gatsby</a>
        </p>
        <p>
          Content on this site is licensed under{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>{" "}
          unless specified.
        </p>
      </footer>
        </main>
    );};

export default StudyPage;