import * as React from "react";

// styles
const pageStyles = {
  color: "#99AADD",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  fontSize: "2rem",
};
const headingAccentStyles = {
  color: "#99AADD",
  fontSize: "1rem",
};
const codeStyles = {
  color: "#99AADD",
  padding: 4,
  backgroundColor: "#E0FFFF",
  fontSize: "1rem",
  borderRadius: 5,
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
  color: "#88AADD",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const descriptionStyle = {
  color: "#99AADD",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const footerStyle = {
  color: "#99AADD",
  width: "100%",
  textAlign: "center",
  paddingBottom: "0.5rem",
  paddingTop: "0.5rem",
};
// data
const links = [
  {
    text: "About Me",
    url: "about",
    description: "Otto's profile page",
  },

  {
    text: "Blog Posts",
    url: "blog",
    description: "Non-daliy updates and articles written or digested by Otto.",
  },
  {
    text: "Repository",
    url: "https://github.com/ottoqwq",
    description:
      "Otto's personal GitHub repository. Contains all of Otto's work.",
  },
  {
    text: "Channel",
    url: "https://t.me/otttos_daily",
    description: "Otto's Telegram channel",
  },
  {
    text: "Music Box",
    url: "music",
    description: "Digested musics from Otto",
  },
];

// markup
const IndexPage = () => {
  return (
    <main align="center" style={pageStyles}>

      <title>Otto's Blog | OttoDeng</title>
      <h1 style={headingStyles}>
        Otto's Blog
        <br/>
        <span style={headingAccentStyles}>
          ——谈论很多自己的事，可能也是隐藏自己的手段。{" "}
        </span>
      </h1>

      <ul style={listStyles}>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`}
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <p>现在升起来吧!升起来吧，你伟大的正午！</p>
      <footer style={footerStyle}>
        <hr class="css-1avyp1d"></hr>
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
        <a href="https://OttoQwQ.me">OttoQwQ.me</a>

      </footer>
    </main>
  );
};

export default IndexPage;
