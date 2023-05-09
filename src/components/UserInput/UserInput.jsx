import React from "react";
import "./UserInput.css";

export default function UserInput() {
  return (
    <>
      <form class="inp-form">
        <div className="inp-box">
          <label>
            나는
            <input class="inp-action" placeholder="예)프로그래밍" />
            전문가가 될 것이다.
          </label>
          <label>
            그래서 앞으로 매일 하루에
            <input class="inp-time" placeholder="예)5시간" /> 시간씩 훈련할
            것이다.
          </label>
        </div>
        <button class="btn-submit" type="submit">
          나는 며칠 동안 훈련을 해야 1만 시간이 될까?
        </button>
      </form>
    </>
  );
}
