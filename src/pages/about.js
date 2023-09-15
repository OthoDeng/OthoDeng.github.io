import { Link } from "gatsby";
import * as React from "react";

// styles
const pageStyles = {
  color: "#1A237E",
  padding: 96,
   maxWidth: "800px",
  marginLeft: "auto",
  marginRight: "auto",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  fontSize: "2rem",
};
const headingAccentStyles = {
  color: "#1A237E",
  fontSize: "1rem",
};
const codeStyles = {
  color: "#1A237E",
  padding: 4,
  backgroundColor: "#E8EAF6",
  fontSize: "1rem",
  borderRadius: 5,
};
const footerStyle = {
  color: "#1A237E",
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
      <h2>Otto 在正式的场合使用名字为 Otto Deng※</h2>
      <p>位于江苏南京的一名本科生，有自学CS、Linux的经历，对语言学有一定了解。</p>
<img src="https://img.shields.io/badge/Arch%20Linux-1793d0?style=flat-square&logo=arch-linux&logoColor=ffffff" />&nbsp;
<img src="https://www.gentoo.org/assets/img/logo/gentoo-horizontal.png" width="87px" height="20px" />&nbsp;
<img src="https://img.shields.io/badge/KDE-%2300ADD8.svg?style=flat-square&logo=kde&logoColor=fff" />

      <p>参与社团有但不限于:</p>
        <li><Link to="https://tuna.moe">TUNA</Link></li>THU TUNA Association.
        <li><Link to="https://archlinux.org">Arch Linux</Link></li>a simple, lightweight distribution.
        <li><Link to="https://gentoo.org">Gentoo Linux</Link></li>a highly flexible, source-based Linux distribution.
        <li><Link to="https://github.com/microcai/gentoo-zh">Gentoo-zh</Link></li>Overlay for Gentoo Users.
      <h2>运动</h2>
      <p>比较擅长游泳，获得过几个校级的奖项；喜欢打网球,高中时期曾为此晒黑几度；平日（一般，有且仅在校期间）也会去跑跑步；暑假高强度出勤也让我瘦了不少。</p>

      <h2>音乐</h2>
      <p>喜欢摇滚乐与巴赫（22年）</p>
      <p>现在听一些钢琴曲、lofi、术曲、BOF、Hardcore、东方同人作品（23年上半）（Teto真的很好听你一定要试一下）</p>
      <p>玩音乐游戏，对世嘉系作品都有所涉猎</p>
      <p><num style={headingAccentStyles}>790557664530871</num> 这是我的<Link to="https://maimai.sega.com/">maimai</Link>好友号码</p>

      <h2>思考</h2>
      <p>若与我谈论哲学思想相关话题的话，我很乐意竖起耳朵倾听。</p>
      <p>认同柏拉图的学说（22年），现在信奉尼采与萨特的学说。</p>
      <p>对于一般事物都会去涉猎，但最终会专注于自己热爱的话题。</p>
      <p>时常会感慨修短随化，因而希望莫使金樽空对月。</p>
      <p>也就是我的频道名称来源（修改于2023年6月10日）。</p>

          <h2>联系方式</h2>
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

        <p>你也会在其他地方找到 Otto ，一般以</p>
          <p><bold style={codeStyles}>Otto the-{"<Related Suffix>"}</bold>{" "}</p>
          <p>或者是
          <bold style={codeStyles}>奥托小奥托</bold>{" "}的方式呈现(如 <a style={headingAccentStyles}>Otto the-e</a> 最为常见)。
        </p>

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
        <p>你也留意到Otto 的HTML写得一团浆糊了吗？请帮助他来改进吧！</p>
        </p>
      </footer>
    </main>
  );
};

export default AboutPage;
