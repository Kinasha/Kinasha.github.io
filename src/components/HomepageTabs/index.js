import React from "react";
import style from "./index.module.css";

const data = [
  {
    title: "科技爱好者周刊",
    description: "阮一峰老师的科技爱好者周刊，我的前端入门读物",
    imageURL: "https://blz.nosdn.127.net/sre/images/nav/cnd5.png",
    URL: "https://github.com/ruanyf/weekly",
  },
  {
    title: "好工具周刊",
    description: "发现并分享有趣，有创意，免费、好用的工具，每周四发布",
    imageURL: "https://imgs.zhubai.love/cf42d578d162447d86250f48d227e7dd.png",
    URL: "https://www.ezindie.com/weekly",
  },
  {
    title: "产品变现周刊",
    description: "分享独立开发者产品变现的周刊",
    imageURL: "https://www.tabhub.app/logo.png",
    URL: "https://www.ezindie.com/weekly",
  },
  {
    title: "DecoHack周刊",
    description:
      "为独立创造者提供独立见解，帮助你发现新产品方向，启动和完善你的项目",
    imageURL: "https://imgs.zhubai.love/10e8aeaef2b540d7b264ff9f8d7fc9f7.png",
    URL: "https://decohack.zhubai.love/",
  },
  {
    title: "GeekPluX",
    description: "商业、技术、财富、个人提升等，Always Exploring",
    imageURL: "https://imgs.zhubai.love/1401319854d844dd8054e4a48a8c692b.jpg",
    URL: "https://geekplux.zhubai.love/",
  },
  {
    title: "前端技术栈周刊",
    description:
      "聚焦前端，记录过去一周探索发现的值得推荐的前端技术栈、文章以及应用",
    imageURL: "https://imgs.zhubai.love/74950c97749f4e94b8f641ef5778655e.png",
    URL: "https://fe-share-weekly.zhubai.love/",
  },
  {
    title: "混沌周刊",
    description: "有关科技，有关开发，有关生活",
    imageURL:
      "https://i0.wp.com/weekly.love/wp-content/uploads/2021/05/cropped-Weekly.png",
    URL: "https://weekly.love/",
  },
  {
    title: "啰里啰唆",
    description:
      "针对互联网和生活爱好者的数字杂志，旨在发现和分享一切有趣的东西",
    imageURL: "https://imgs.zhubai.love/dedd6e3a07eb483aa0476a9fefcabfee.jpg",
    URL: "https://luoliluosuo.zhubai.love/",
  },
  {
    title: "二丫讲梵个人学习周刊",
    description: "分享开源项目/优秀文章/优秀博客，偏运维和Go语言方向",
    imageURL: "https://wiki.eryajf.net/img/logo.png",
    URL: "https://wiki.eryajf.net/pages/11c668/",
  },
  {
    title: "酷玩周刊",
    description: "发掘一切有趣的数字生活",
    imageURL:
      "https://s3.amazonaws.com/revue/profiles/images/000/418/047/thumb/logo.png?1645168658",
    URL: "https://www.getrevue.co/profile/coldplay-weekly",
  },
];
export default function HomepageTabs(options) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "10vw 10vw 10vw 10vw 10vw 10vw 10vw 10vw",
        gridTemplateRows: "25vh 25vh",
        gridGap: "20px",
        padding: "20px",
        justifyContent: "center",
      }}
    >
      {data.map((item, index) => (
        <div
          className={style["tab-container"]}
          key={index}
          style={{
            backgroundImage: `url(${item.imageURL})`,
            backgroundSize: "cover",
          }}
        >
          <div
            className={style["tab-icon"]}
            style={{ backgroundImage: `url(${item.imageURL})` }}
          />
          <div className={style["tab-content"]}>
            <a className={style["tab-content-title"]} href={item.URL}>
              {item.title}
            </a>
            <p className={style["tab-content-desc"]}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
