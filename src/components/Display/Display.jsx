import React from "react";
import "./Display.css";
import Button from "../../common/Button/Button";

export default function Display({ data, handleModalOpen }) {
  const convertTime = parseInt(
    10000 / parseInt(data.trainingTime.replace(/[^0-9]/g, ""))
  );

  return (
    <div className="display">
      <h2 className="a11y-hidden">1만 시간 결과 화면</h2>
      <div className="display-content">
        <p>
          당신은 <span className="user-response">{data.expert}</span>전문가가
          되기 위해서 <br />
        </p>
        <p>
          대략 <span className="user-response">{convertTime}</span>일 이상
          훈련하셔야 합니다! :)
        </p>
      </div>
      <div className="display-btns">
        <Button handler={handleModalOpen}>훈련하러 가기 GO!GO!</Button>
        <Button variant={"share"}>공유하기</Button>
      </div>
    </div>
  );
}
