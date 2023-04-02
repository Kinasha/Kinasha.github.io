import React from "react";
import "./index.css";
const defaultAvatar =
  "https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/26356132181/372b/c442/68e9/75744a5d6251cf62830a7db036f7ddd9.png";
export default function ({ url = defaultAvatar }) {
  return (
    <img className="hero_avatar" src={url} alt="a random avatar picture" />
  );
}
