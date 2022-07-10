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
};
const headingAccentStyles = {
  color: "#d868a9",
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

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#dfffdb",
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
    url: "https://github.com/ottoqwq/posts",
    description:
      "Non-daliy updates and articles written or digested by Otto.",
  }
];

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Otto's Blog
        <br />
        <span style={headingAccentStyles}>
          ——人生得意须尽欢，莫使金樽空对月{" "}
        </span>
      </h1>
      <h3 style={headingStyles}>About Me</h3>
      <p>我是个高中生，使用<code style={codeStyles}>Gentoo Linux && Arch Linux</code></p>
      <p>可能少但不抗拒运动，音乐喜欢摇滚乐与巴赫。</p>
      <p>对于一般事物都会去涉猎，但最终会专注于自己热爱的话题</p>
      <p>时常会感慨修短随化，因而希望莫使金樽空对月。</p>
      <p>也就是我的频道名称来源</p>
      <p>认同柏拉图的学说，现在信奉尼采与萨特的学说。</p>
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
            <p>Projects by <a href="https://github.com/ottoqwq">ottoqwq</a> can be found on <a href="https://github.com/ottoqwq/ottoqwq.github.io">GitHub</a></p>
              <p>
        本站的（非加密）内容，如无特别说明，均使用 CC BY 4.0
        协议发布，只要注明来源和修改部分，并且不施加额外的限制，可以将内容分享到任何地方，详情请见
        Creative Commons 网站的说明。
      </p>
      </footer>
    </main>
  );
};

export default IndexPage;
