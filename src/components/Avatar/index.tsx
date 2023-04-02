import React from "react";
import styles from "./styles.module.css";
const defaultAvatar =
  "https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/26356132181/372b/c442/68e9/75744a5d6251cf62830a7db036f7ddd9.png";
export default function ({ url = defaultAvatar }) {
  return (
    <img className={styles.avatar} src={url} alt="a random avatar picture" />
  );
}
