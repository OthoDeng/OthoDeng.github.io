import { Link } from "gatsby";
import * as React from "react";

// styles
const pageStyles = {
  color: "#1A237E",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingAccentStyles = {
  color: "#1A237E",
  fontSize: "1rem",
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


const MusicPage = () => {
  return (
    <main align="left" style={pageStyles}>
      <title>摸鱼电台</title>
      <h1 align="center">
        <a>Otto's Music Box</a>
      </h1>      <p>
       这里是一些Otto喜欢的音乐，目前使用<Link to="https://music.163.com/">网易云音乐</Link>的iframe框架，有时会附加上一些奇怪的点评，收听时请注意音量。
       </p>
      <hr class="css-1avyp1d"></hr>

      <h1 align="center">他还没搞好！</h1>

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
