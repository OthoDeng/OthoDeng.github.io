import { Link } from "gatsby";
import * as React from "react";


// styles
const pageStyles = {
  color: "#a868a9",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#EEEEEE",
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
  color: "#a868a9",
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


const NewWorld = () => {
    return (
        <main style={pageStyles}>
            <title>Hello New World| Otto</title>
            <h1 style={headingStyles}>
                Hello New World
                <div><span style={headingAccentStyles}>
                    一曲新词酒一杯，去年天气旧亭台。
                    </span></div>
            </h1>
            <p style={paragraphStyles}>
                  趁着这个暑假，Otto 利用 Gatsby 重建了自己的博客，由于是第一次完全的自己写前端，所以进度十分缓慢
                  （留下了没有技术的泪水）。使用 Gatsbyjs 也是受到朋友博客的推荐，确实算得上是夏哥哥博客中所说的<code style={codeStyles}>后现代“静态网站"</code>力。
            </p>
            <p>
                初见 Gatsbyjs ，由于以前并未自己独立写过 JavaScript，开始上手时感到比较困难，但是经过一番努力，至少……它工作起来了。
            </p>

            <p>以下是夏哥哥对其现代化给出的定义*：</p>
            <ol style={listStyles}>
            <li>开箱即用的现代前端工具链，Gatsby 会在幕后生成 webpack 和 babel 的配置并自动运行它们。</li>
            <li>能够 hot reload 的开发模式，修改前端代码一般能够在 1 秒之类反馈到页面上。</li>
            <li>只需要最小程度的配置就能够启用 prefetch，即当用户浏览某个页面的时候自动加载该页面上链接的其它页面的数据，从而在点击链接跳转的时候加载速度很快。</li>
            <li>有一套从后端到前端的模块化架构。从数据源（文件系统、wordPress 等）到数据（Markdown、元信息等）到页面（HTML, React），提供了一套可扩展的 API，将可定制性充分暴露出来。使用 GraphQL 作为数据的传递方式，同时提供了方便调试 GraphQL 的 web IDE。</li>
            <li>充分满足现代化特性的插件：从 RSS, sitemap, SEO 到 PWA, 静态搜索，自动图片压缩，均有插件提供便利的支持。</li>
            </ol>
            <p>
              另外，在构建的过程中，推荐参考 <Link style={linkStyle} to="https://gatsbyjs.com/docs">Gatsby文档</Link> 和 <Link style={linkStyle} to="https://developer.mozilla.org">MDN</Link> 文档，给 Otto 带来了很多启发。
              本网站目前使用的主题色为樱花粉 (#d895bc) ，仅仅出于个人某一时刻的想法，以后会根据 Otto 的风格以及个人喜好来调整，只能看有没有时间了。（悲） 
            </p>
            <p>
              最后算是一些感悟吧：这几天 Otto 每晚写完作业便开始了苦逼的构建生活。几日之后该网站也算是可以有个像样的页面了。
              假日短短，夏日炎炎，鎏风不息，转眼间便要完结。新世界，对于我来说也许不止是一个网站，
              更是对接下来生活的一个愿景。
            </p>
            <p>
              新世界——新，新在异于过去。新在能”悟以往之不鉴“，新在看到”来者可追“。
              那么新世界接下来会发生什么呢？也请我来悄悄告诉你吧。
            </p>
            <div>*引用自 <Link to="https://sharzy.in/posts/2021-02-05-gatsby-rebuild/">Sharzy</Link> 的博客</div>
            <footer>
                <Link to="/">Go home</Link>
                <p>
                Content on this site is licensed under{" "}
                <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>{" "}
                unless specified.
                </p>
            </footer>
        </main>
    );
};

export default NewWorld;
