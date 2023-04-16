import React from "react";
import Book from "../Book";

const data = [
  {
    title: "JavaScript 高级程序设计",
    description: "我的前端启蒙书",
    imageURL: "https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/26839860001/8647/8a03/cd21/e65a0a2b1e45276103a0424b895ed8b5.png",
    URL: "",
  },
  {
    title: "你不知道的 JavaScript",
    description: "JavaScript 语言核心概念",
    imageURL: "https://file.ituring.com.cn/LargeCover/01003352233cf3572e64",
    URL: "",
  },
  {
    title: "Mastering SVG",
    description: "SVG 从入门到精通",
    imageURL: "https://m.media-amazon.com/images/I/51oh1BJPNiL._SX404_BO1,204,203,200_.jpg",
    URL: "",
  },
  {
    title: "CSS 新世界",
    description: "CSS 相关",
    imageURL: "https://kbimages1-a.akamaihd.net/e8c490eb-123b-46e5-b185-b28dfdd4ac69/353/569/90/False/css-5.jpg",
    URL: "",
  },
  {
    title: "Vue 设计与实现",
    description: "",
    imageURL: "https://weread-1258476243.file.myqcloud.com/weread/cover/96/cpPlatform_kmqPY1boCDVyMxq2AvPdCY/t6_cpPlatform_kmqPY1boCDVyMxq2AvPdCY.jpg",
    URL: "https://geekplux.zhubai.love/",
  },
  {
    title: "Wireshark网络分析就这么简单",
    description:"",
    imageURL: "https://pic.arkread.com/cover/ebook/f/52660930.1653701530.jpg!cover_default.jpg",
    URL: "",
  },
];
export default function HomepageTabs(options) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "10vw 10vw 10vw 10vw 10vw 10vw ",
        gridTemplateRows: "25vh 25vh",
        gridGap: "20px",
        padding: "20px",
        justifyContent: "center",
      }}
    >
      {data.map((item, index) => (
        <Book url={item.imageURL} alt={item.description} />
      ))}
    </div>
  );
}
