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
      <title>About Otto</title>
      <h1 style={headingStyles}>
        <a>About Me</a>
      </h1>
      <h3>Otto 在正式的场合使用名字为 Otto Deng*</h3>
      <p>
        目前是个高中生，使用
        </p><p><code style={codeStyles} href="https://linux.org">Linux</code>
      </p>
      <p>打网球，音乐喜欢摇滚乐与巴赫。</p>
      <p>对于一般事物都会去涉猎，但最终会专注于自己热爱的话题</p>
      <p>时常会感慨修短随化，因而希望莫使金樽空对月。</p>
      <p>也就是我的频道名称来源</p>
      <p>认同柏拉图的学说，现在信奉尼采与萨特的学说。</p>
      <div>
        <h2>
          <span style={headingAccentStyles}>联系方式</span>
        </h2>
        <p>
          个人邮箱是
          <mail>
            <Link style={codeStyles} to="mailto:ottodeng9@gmail.com">
              ottodeng9[at]gmail[dot]com
            </Link>
          </mail>
        </p>
        <p>
          一般情况下，Otto 会在 <Link to="https://OttoQwQ.t.me">Telegram</Link>{" "}
          上活跃，为防止垃圾消息过多，因而并未设置用户名。
        </p>

        <p>
          你也会在其他地方找到 Otto ，一般以{" "}
          <bold style={codeStyles}>Otto the-{"<Related Suffix>"}</bold>{" "}
          的方式呈现(如 Otto the-e 最为常见)。
        </p>
      </div>
      <div>
        *由于 "OttoDeng" 可能与另他人相混淆，因而除邮箱（以及谷歌相关帐户）外，
        Otto 少以此名出现
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
