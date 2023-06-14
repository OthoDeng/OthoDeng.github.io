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


const MusicPage = () => {
  return (
    <main align="left" style={pageStyles}>
      <title>摸鱼电台</title>
      <h1 style={headingStyles}>
        <a>Otto's Music Box</a>
      </h1>
      <h2>Otto 在正式的场合使用名字为 Otto Deng*</h2>
      <p>
       这里是一些Otto喜欢的音乐，目前使用<Link to="https://music.163.com/">网易云音乐</Link>的iframe框架，有时会附加上一些奇怪的点评，收听时请注意音量。
       </p>
       <ul>
       <h2 style={headingAccentStyles}>钢琴、小提琴与巴赫</h2>

        <h2 style={headingAccentStyles}>轻音乐音乐</h2>

        <h2 style={headingAccentStyles}>一些悲伤的曲子</h2>

        <h2 style={headingAccentStyles}>Lofi、蒸汽波、Citypop</h2>

        <h2 style={headingAccentStyles}>摇滚乐</h2>

        <h2 style={headingAccentStyles}>Otto认为的BOF金曲</h2>

        <h2 style={headingAccentStyles}>东方同人作品</h2>

        <h2 style={headingAccentStyles}>Hardcore</h2>

        <h2 style={headingAccentStyles}>Niconico&Vocaloid</h2>

        <h2 style={headingAccentStyles}>其他音乐</h2>

        </ul>





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

export default MusicPage;
