import { Link } from "gatsby";
import * as React from "react";

// styles
const pageStyles = {
  color: "#c868a9",
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
  color: "#F2ABBD",
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

const footerStyle = {
  color: "#F2ABBD",
  textAlign: "center",
  width: "100%",
  paddingBottom: "0.5rem",
  paddingTop: "0.5rem",
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
    text: "18岁写下的话",
    url: "/blog/2023-1-20-在18岁写下的话",
    date: "2023/1/20",
    brief: "感谢各位的陪伴！",
  },
  {
    text: "2022-12-31-2022总结",
    url: "/blog/2022-12-31-2022总结",
    date: "2022/12/31",
    brief: "结束的梦，谢谢陪伴",
  },
  {
    text: "关于对表意工具的想法（上）",
    url: "/blog/2022-8-27-关于对表意工具的想法（上）",
    date: "2022/8/27",
    brief: "工具论？",
  },
  {
    text: "Hello New World",
    url: "/blog/2022-7-18-hello-new-world",
    date: "2022/7/18",
    brief: "Of rebuilding my site",
  },
  {
    text: "关于诗歌鉴赏一些笔记",
    url: "/study/CHI/2022-7-17-of-poetry",
    date: "2022/7/17",
    brief: "柳暗花明又一村",
  },
  {
    text: "神圣时间——禁锢在没有节日的时代",
    url: "/blog/2022-4-11-神圣时间/",
    date: "2022/4/11",
    brief: "且看到庆典时刻享欢庆之时",
  },
  {
    text: "Gentoo on rpi4",
    url: "/blog/2022-1-2-Gentoo-on-rpi4/",
    date: "2022/1/2",
    brief: "能装，都能装",
  },
  {
    text: "媒介化生存",
    url: "/blog/2021-8-21-媒介化生存",
    date: "2021/8/21",
    brief: "赛博真嗣会梦到电子橙汁吗",
  },
    {
    text: "韶华集",
    url: "/study/CHI/韶华集",
    date: "持续更新……",
    brief: "作文中万用的韶华与骚话",
  },
];

// components
const Posts = () => {
  return (
    <main style={pageStyles}>
      <title>Otto's Posts</title>
      <ul style={listStyles}>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a style={linkStyle} href={`${link.url}`}>
                {link.text}
              </a>
              <div style={descriptionStyle}>{link.brief}</div>
              <div>{link.date}</div>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>

      <footer style={footerStyle}>
        <hr class="css-1avyp1d"></hr>
        <a href="/">Go Home</a> 
        <p>
          Projects by{" "}
          <a style={codeStyles} href="https://github.com/ottoqwq">
            {" "}
            Otto Deng
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

export default Posts;
