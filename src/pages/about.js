import { Link } from "gatsby";
import * as React from "react";

// styles
const pageStyles = {
  color: "#F2ABBD",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
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
const codeStyles = {
  color: "#d868a9",
  padding: 4,
  backgroundColor: "#e4dcef",
  fontSize: "1rem",
  borderRadius: 4,
};
const footerStyle = {
  color: "#ce94ae",
  width: "100%",
  textAlign: "center",
  paddingBottom: "0.5rem",
  paddingTop: "0.5rem",
};


const AboutPage = () => {
  return (
    <main align="left" style={pageStyles}>
      <title>About Otto Deng</title>
      <h1 style={headingStyles}>
        <a>About Me</a>
      </h1>
      <h2>Otto 在正式的场合使用名字为 Otto Deng*</h2>
      <p>
        目前是个毕业高中生，有自学CS、
        <a href="https://linux.org">Linux</a>的经历,在résumé自吹有扎实的理科基础</p>
      <p>喜欢打网球,高中时期曾为此晒黑几度</p>
      <h2 style={headingAccentStyles}>音乐</h2>
      <p>喜欢摇滚乐与巴赫（22年）</p>
      <p>现在听一些钢琴曲、lofi、术曲、BOF、Hardcore、东方同人作品（23年上半）（Teto真的很好听你一定要试一下）</p>
      <p>玩音乐游戏，对世嘉系作品都有所涉猎，弹指多指多少会一些。</p>
      <p><num style={headingAccentStyles}>790557664530871</num> 这是我的<Link to="https://maimai.sega.com/">maimai</Link>好友号码</p>
      <h2 style={headingAccentStyles}>思考</h2>
      <p>认同柏拉图的学说（22年），现在信奉尼采与萨特的学说。</p>
      <p>对于一般事物都会去涉猎，但最终会专注于自己热爱的话题</p>
      <p>时常会感慨修短随化，因而希望莫使金樽空对月。</p>
      <p>也就是我的频道名称来源（修改于2023年6月10日）</p>
      <div>
        <h2>
          <span style={headingAccentStyles}>联系方式</span>
        </h2>
        <p>
          个人邮箱是
          <mail>
            <Link style={codeStyles} to="mailto:ottodeng9@gmail.com">
              ottodeng9@gmail.com
            </Link>{" "}
            以及匿名邮箱{" "}
            <Link style={codeStyles} to="mailto:ottodeng9@gmail.com">
              otto@duck.com
            </Link>
          </mail>
        </p>
        <p>
          一般情况下，Otto 会在 <Link to="https://OttoQwQ.t.me">Telegram</Link>{" "}
          以及
          <Link to="https://space.bilibili.com/360701497">BiliBili</Link>{" "}
          上活跃。
        </p>

        <p>
          你也会在其他地方找到 Otto ，一般以{" "}
          <bold style={codeStyles}>Otto the-{"<Related Suffix>"}</bold>{" "}
          或者是<bold style={codeStyles}>奥托小奥托</bold>{" "}的方式呈现(如 <a style={headingAccentStyles}>Otto the-e</a> 最为常见)。
        </p>
      </div>

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

export default AboutPage;
