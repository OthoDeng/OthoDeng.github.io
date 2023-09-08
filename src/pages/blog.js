import * as React from "react";

// styles
const pageStyles = {
  color: "#1A237E",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const codeStyles = {
  color: "#1A237E",
  padding: 4,
  backgroundColor: "#E8EAF6",
  borderRadius: 5,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#5A237E",
  fontWeight: "bold",
  verticalAlign: "5%",
};

const footerStyle = {
  color: "#1A237E",
  textAlign: "center",
  width: "100%",
  paddingBottom: "0.5rem",
  paddingTop: "0.5rem",
};

// data
const links = [
      {
      text: "译汉时第一人称的使用",
      url: "/study/CHI/2023-8-29-translation/",
      date: "2023/08/29",
      brief: "学习、翻译、英译中、语言、语言习惯",
    },
      {
      text: "余光中：怎样改进英式中文？- 论中文的常态与变态",
      url: "/study/CHI/2023-8-13-improve-chinese",
      date: "2023/08/13",
      brief: "学习、中文、英文、语言习惯",
    },
    {
      text: "高考英语词汇考纲3500",
      url: "/study/ENG/高考英语词汇考纲3500/",
      date: "YYYY/06/08",
      brief: "高考、英语、词汇",
    },
    {
    text: "青葱岁月",
    url: "/blog/2023-6-12-青葱岁月",
    date: "2023/06/12",
    brief: "高中、回忆",
  },
    {
    text: "难以忘却的大家",
    url: "/blog/2023-06-12-难以忘却的大家",
    date: "2023/06/12",
    brief: "高中、回忆",
  },
  {
    text: "18岁写下的话",
    url: "/blog/2023-1-20-在18岁写下的话",
    date: "2023/01/20",
    brief: "总结、成年、成长",
  },
  {
    text: "2022年总结",
    url: "/blog/2022-12-31-2022总结",
    date: "2022/12/31",
    brief: "总结、诗歌、2022",
  },
  {
    text: "关于对表意工具的想法（上）",
    url: "/blog/2022-8-27-关于对表意工具的想法（上）",
    date: "2022/08/27",
    brief: "表意工具、工具、语言",
  },
  {
    text: "Hello New World",
    url: "/blog/2022-7-18-hello-new-world",
    date: "2022/07/18",
    brief: "网站、构建、JavaScrpt",
  },
  {
    text: "关于诗歌鉴赏一些笔记",
    url: "/study/CHI/2022-7-17-of-poetry",
    date: "2022/07/17",
    brief: "诗歌、语文、诗人",
  },
  {
    text: "神圣时间——禁锢在没有节日的时代",
    url: "/blog/2022-4-11-神圣时间/",
    date: "2022/04/11",
    brief: "时间、节日、生命、意义",
  },
  {
    text: "Gentoo on rpi4",
    url: "/blog/2022-1-2-Gentoo-on-rpi4/",
    date: "2022/01/2",
    brief: "树莓派4、Gentoo Linux、交叉编译",
  },
      {
    text: "Gentoo on WSL2",
    url: "/blog/2021-10-24-Gentoo_on_WSL2/",
    date: "2021/10/24",
    brief: "WSL2、Gentoo Linux",
  },
    {
    text: "记一次恢复Grub经历",
    url: "/blog/2021-09-19-记一次恢复Grub经历/",
    date: "2021/09/19",
    brief: "修复、Grub、思路、fallback",
  },
  {
    text: "媒介化生存",
    url: "/blog/2021-8-21-媒介化生存/",
    date: "2021/08/21",
    brief: "媒介、传播、人、危机",
  },
    {
    text: "SAMPLE页面",
    url: "/blog/0-0-0-0-sample/",
    date: "0/0/0/0",
    brief: "O.o?",
  },
        {
    text: "404页面",
    url: "/404",
    date: "Not Found",
    brief: "404",
  },
      {
    text: "",
    url: "",
    date: "",
    brief: "",
  },
];

// components
const Posts = () => {
  return (
    <main style={pageStyles}>
      <title>Otto's Blog Posts</title>
      <ul style={listStyles}>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a style={linkStyle} href={`${link.url}`}>
                {link.text}
              </a>
              <p></p>
              <div>Keywords: <a style={codeStyles}>{link.brief}</a></div>
              <div>Date: {link.date}</div>
              <p style={linkStyle}>{link.description}</p>
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
