import React from "react";

export interface CustomImageProps {
  src: string;
  type?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}
function CustomImage(props: CustomImageProps) {
  const {
    src,
    type = "phone",
    alt = "my custom pic",
    className,
    style,
  } = props;
  const defaultStyle =
    type === "phone"
      ? {
          width: "375",
          height: "812",
          display: "inline-block",
        }
      : {};
  const mergedProps = {
    src,
    alt,
    className,
    style: { ...defaultStyle, ...style },
  };
  return (
    <>
      <img {...mergedProps} />
    </>
  );
}
export default CustomImage;
