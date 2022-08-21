import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "Powered by React",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];
const Tabs = () => (
  <>
    <a
      class="nav-item clearfix"
      href="https://github.com/ruanyf/weekly"
      target="_blank"
    >
      <div
        class="nav-img"
        style={{
          marginBottom: "40px",
          background:
            'url("https://blz.nosdn.127.net/sre/images/nav/cnd5.png") contain',
          width: "100px",
          height: "100px",
        }}
      ></div>
      <div class="nav-name">科技爱好者周刊</div>
      <p>阮一峰老师的科技爱好者周刊</p>
    </a>
    {/* <a class="nav-item clearfix" href="https://bestxtools.zhubai.love/" target="_blank">
            <div class="nav-img" style="margin-bottom:40px;background-image: url(https://imgs.zhubai.love/cf42d578d162447d86250f48d227e7dd.png);">
            </div>
            <div class="nav-name">好工具周刊</div>
            <p>发现并分享有趣，有创意，免费、好用的工具，每周四发布</p>
          </a>
 <a class="nav-item clearfix" href="https://www.ezindie.com/weekly" target="_blank">
            <div class="nav-img" style="margin-bottom:40px;background-image: url(https://www.ezindie.com/favicon.ico);">
            </div>
            <div class="nav-name">产品变现周刊</div>
            <p>分享独立开发者产品变现的周刊</p>
          </a>
 <a class="nav-item clearfix" href="https://decohack.zhubai.love/" target="_blank">
            <div class="nav-img" style="margin-bottom:40px;background-image: url(https://imgs.zhubai.love/10e8aeaef2b540d7b264ff9f8d7fc9f7.png);">
            </div>
            <div class="nav-name">DecoHack周刊</div>
            <p>为独立创造者提供独立见解，帮助你发现新产品方向，启动和完善你的项目</p>
          </a>
 <a class="nav-item clearfix" href="https://geekplux.zhubai.love/" target="_blank">
            <div class="nav-img" style="margin-bottom:40px;background-image: url(https://imgs.zhubai.love/1401319854d844dd8054e4a48a8c692b.jpg);">
            </div>
            <div class="nav-name">GeekPlux Lab</div>
            <p>商业、技术、财富、个人提升等，Always Exploring</p>
          </a>
 <a class="nav-item clearfix" href="https://fe-share-weekly.zhubai.love/" target="_blank">
            <div class="nav-img" style="margin-bottom:40px;background-image: url(https://imgs.zhubai.love/1600ccee314e4fcb8bae079b029e8bed.jpeg);">
            </div>
            <div class="nav-name">前端技术栈周刊</div>
            <p>聚焦前端，记录过去一周探索发现的值得推荐的前端技术栈、文章以及应用</p>
          </a>
 <a class="nav-item clearfix" href="https://weekly.love/" target="_blank">
            <div class="nav-img" style="margin-bottom:40px;background-image: url(https://i0.wp.com/weekly.love/wp-content/uploads/2021/05/cropped-Weekly.png);">
            </div>
            <div class="nav-name">混沌周刊</div>
            <p>有关科技，有关开发，有关生活</p>
          </a>
 <a class="nav-item clearfix" href="https://luoliluosuo.zhubai.love/" target="_blank">
            <div class="nav-img" style="margin-bottom:40px;background-image: url(https://imgs.zhubai.love/dedd6e3a07eb483aa0476a9fefcabfee.jpg);">
            </div>
            <div class="nav-name">啰里啰唆</div>
            <p>针对互联网和生活爱好者的数字杂志，旨在发现和分享一切有趣的东西</p>
          </a>
<a class="nav-item clearfix" href="https://wiki.eryajf.net/pages/11c668/" target="_blank">
            <div class="nav-img" style="margin-bottom:40px;background-image: url(https://wiki.eryajf.net/img/logo.png);">
            </div>
            <div class="nav-name">二丫讲梵个人学习周刊</div>
            <p>分享开源项目/优秀文章/优秀博客，偏运维和Go语言方向</p>
          </a>
 <a class="nav-item clearfix" href="https://www.getrevue.co/profile/coldplay-weekly" target="_blank">
            <div class="nav-img" style="margin-bottom:40px;background-image: url(https://s3.amazonaws.com/revue/profiles/images/000/418/047/thumb/logo.png?1645168658);">
            </div>
            <div class="nav-name">酷玩周刊</div>
            <p>发掘一切有趣的数字生活</p>
          </a>
 <a class="nav-item clearfix" href="https://produck.zhubai.love/" target="_blank">
            <div class="nav-img" style="margin-bottom:40px;background-image: url(https://imgs.zhubai.love/9e0331125bf942369fd241d51e707851.jpeg);">
            </div>
            <div class="nav-name">产品鸭</div>
            <p>每周读一篇新产品与设计思路介绍，创业者产品创业的精神武装</p>
          </a>
 <a class="nav-item clearfix" href="https://weekly.caixin.com/" target="_blank">
            <div class="nav-img" style="margin-bottom:40px;background-image: url(https://www.caixin.com/favicon.ico);">
            </div>
            <div class="nav-name">财新周刊</div>
            <p>财新网周刊，财新网为原创财经新媒体</p>
          </a>
 <a class="nav-item clearfix" href="https://github.com/ShixiangWang/weekly" target="_blank">
            <div class="nav-img" style="margin-bottom:40px;background-image: url(https://shixiangwang.github.io/favicon.ico);">
            </div>
            <div class="nav-name">生信爱好者周刊</div>
            <p>记录每周值得分享的生信相关内容</p>
          </a>
<a class="nav-item clearfix" href="https://github.com/521xueweihan/HelloGitHub" target="_blank">
            <div class="nav-img" style="margin-bottom:40px;background-image: url(https://hellogithub.com/favicon.ico);">
            </div>
            <div class="nav-name">HelloGithub月刊</div>
            <p>分享GitHub上有趣、入门级的开源项目，每月28好更新</p>
          </a> */}
  </>
);
function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
