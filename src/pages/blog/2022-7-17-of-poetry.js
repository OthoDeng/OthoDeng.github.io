import * as React from "react";
import { Link } from "gatsby";
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
  color: "#a991b0",
  fontSize: "0.96rem",
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

const Poetry = () => {
  return (
    <main style={headingAccentStyles}>
      <title>诗歌鉴赏一些笔记 |OttoDeng</title>
      <h1>诗歌鉴赏</h1>
      <p>诗歌一直是让 Otto 头大的一点，借着暑假，Otto做了一些归纳：</p>
      <h2>诗歌类型分类</h2>
      <ol>
        <li>
          <hi style={codeStyles}>山水诗</hi>：李白、王维
        </li>
        <p></p>
        <li>
          <hi style={codeStyles}>送别诗</hi>：还是李白、王维
        </li>
        <p></p>
        <li>
          <hi style={codeStyles}>田园诗</hi>：陶渊明
        </li>
        <p></p>
        <li>
          <hi style={codeStyles}>边塞诗</hi>：南宋与金、南宋与元
        </li>
        <p></p>
        <li>
          <hi style={codeStyles}>象征诗</hi>：屈原
        </li>
      </ol>

      <h3>
        <bold style={paragraphStyles}>山水诗</bold>
      </h3>
      <div>
        李白：<hi style={codeStyles}>纵情山水</hi>
      </div>
      <div>
        王维：信佛、看破红尘 ={">"}安静的景，归隐闲适，
        <hi style={codeStyles}>动静结合、虚实结合</hi>
      </div>
      <p></p>
      <h3>
        <bold style={paragraphStyles}>送别诗</bold>
      </h3>
      <div>李白：情谊深厚</div>
      <div>王维：情谊深厚、看破红尘 ={">"} 思乡</div>
      <p></p>
      <h3 style={paragraphStyles}>田园山水诗</h3>
      <div>
        陶渊明：<hi style={codeStyles}>归隐</hi>；闲适
      </div>
      <p></p>
      <h3 style={paragraphStyles}>边塞诗</h3>
      <ol>
        <li>对边塞风光描写</li>
        <li>战争的残酷、对统治者<hi style={codeStyles}>穷兵黩武</hi>的批判</li>
        <li>思乡</li>
      </ol>
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
export default Poetry;
