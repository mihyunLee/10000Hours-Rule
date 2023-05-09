import React from "react";
import "./Display.css";

export default function Display() {
  return (
    <div className="display">
      <div className="display-content">
        <p>
          당신은 <span className="user-response">프로그래밍</span>전문가가 되기
          위해서 <br />
        </p>
        <p>
          대략 <span className="user-response">5110</span>일 이상 훈련하셔야
          합니다! :)
        </p>
      </div>
      {/* 훈련하러가기, 공유하기 버튼 */}
    </div>
  );
}
