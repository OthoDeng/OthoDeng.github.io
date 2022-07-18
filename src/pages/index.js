import * as React from "react";

// styles
const pageStyles = {
  color: "#d895bc",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
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
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
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

// data
const links = [
  {
    text: "Repository",
    url: "https://github.com/ottoqwq",
    description:
      "Otto's personal GitHub repository. Contains all of Otto's work.",
    color: "#d868a9",
  },
  {
    text: "Posts",
    url: "posts",
    description: "Non-daliy updates and articles written or digested by Otto.",
  },
  {
    text: "Channel",
    url: "https://t.me/otttos_daily",
    description: "Otto's Telegram channel",
  },
  {
    text: "About Me",
    url: "about",
    description: "Otto's profile page",
  },
];

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Otto's Blog | OttoDeng</title>
      <h1 style={headingStyles}>
        Otto's Blog
        <br />
        <span style={headingAccentStyles}>
          ——人生得意须尽欢，莫使金樽空对月{" "}
        </span>
      </h1>
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
      <footer>
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
  );
};

export default IndexPage;
