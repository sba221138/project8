import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        在此下載圖片:{" "}
        <a href={data.src.large} target="_blank">
          點擊
        </a>
      </p>
    </div>
  );
};

export default Picture;
