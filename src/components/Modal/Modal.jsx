import React from "react";
import "./Modal.css";
import Button from "../../common/Button/Button";

const URL = "https://www.youtube.com/@jejucodingcamp/featured";

export default function Modal({ handleModalClose }) {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener", "noreferrer");
  };

  return (
    <div className="modal-dim" onClick={handleModalClose}>
      <article className="modal">
        <h2 className="modal-tit">화이팅!!♥♥♥</h2>
        <p className="modal-content">당신의 꿈을 응원합니다!</p>
        <img
          className="modal-img"
          src="/assets/licat.png"
          alt="똘망똘망한 라이캣"
        />
        <Button
          handler={() => {
            handleModalClose();
            openLink(URL);
          }}
        >
          종료하고 진짜 훈련하러 가기 GO!GO!
        </Button>
      </article>
    </div>
  );
}
