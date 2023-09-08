import * as React from "react";

// styles
const pageStyles = {
  color: "#3F51B5",
  fontFamily: "var(--font-display)",
  fontSize: "var(--fontsize)",
  fontWeight: "var(--fontweight-brand)",
  maxWidth: "800px",
  marginLeft: "auto",
  marginRight: "auto",
};

const headingAccentStyles = {
  color: "#3F51B5",
  fontSize: "var(--fontsize-h4)",
};
const codeStyles = {
  color: "#1A237E",
  padding: 4,
  backgroundColor: "#E8EAF6",
  borderRadius: 5,
};
const listStyles = {
  marginBottom: "var(--metric-unit-spacing)",
  marginTop: "calc(var(--metric-unit-spacing)*2)",
};
const quickStyle = {
  color: "#5A237E",
  fontStyle: "italic",
};
const linkStyle = {
  color: "#5A237E",
  fontWeight: "var(--fontweight-base)",
  fontSize: "var(--fontsize-base)",
  verticalAlign: "5%",
  lineHeight: 4,
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
    text: "About Me",
    url: "about",
    description: "Otto's profile page",
  },

  {
    text: "Blog Posts",
    url: "blog",
    description: "Articles written or digested by Otto.",
  },
  {
    text: "Repository",
    url: "https://github.com/ottoqwq",
    description:
      "Otto's personal GitHub repository.",
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

// data
const data = [
      {
      text: "译汉时第一人称的使用",
      url: "/study/CHI/2023-8-29-translation/",
      date: "2023/08/29",
      brief: "学习、翻译、英译中、语言、语言习惯",
    },
      {
      text: "余光中：怎样改进英式中文？",
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

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Otto's Blog | OttoDeng</title>
      <h1>
        Otto's Blog
       </h1>
        <h2 style={headingAccentStyles}>
          ——谈论很多自己的事，可能也是隐藏自己的手段。
        </h2>

        {links.map((link) => (
          <a style={quickStyle}>
              <a href={`${link.url}`}>
                {link.text}</a>&emsp;&emsp;&emsp;&emsp;&emsp;
          </a>
        ))}

      <hr class="css-1avyp1d"></hr>

      <ul style={listStyles}>
        {data.map((data) => (
          <li key={data.url} style={{color: data.color }}>
              <div>
              <a style={linkStyle} href={`${data.url}`}>
                {data.text}</a></div>
            关键词：<a style={codeStyles}>{data.brief}</a>
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
