import React, { useState } from "react";
import "./UserInput.css";
import Button from "../../common/Button/Button";

export default function UserInput({ handleSubmit }) {
  const [action, setAction] = useState("");
  const [time, setTime] = useState("");

  const handleActionInput = (e) => {
    setAction(e.target.value);
  };

  const handleTimeInput = (e) => {
    setTime(e.target.value);
  };

  const onResetForm = () => {
    setAction("");
    setTime("");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (action && time) {
      handleSubmit({ action: action, time: time });
      onResetForm();
    }
  };

  return (
    <>
      <form className="inp-form" onSubmit={onSubmit}>
        <h2 className="a11y-hidden">훈련 내용 입력 폼</h2>
        <div className="inp-box">
          <label>
            나는
            <input
              className="inp-action"
              onChange={handleActionInput}
              value={action}
              placeholder="예)프로그래밍"
              required
            />
            전문가가 될 것이다.
          </label>
          <label>
            그래서 앞으로 매일 하루에
            <input
              className="inp-time"
              onChange={handleTimeInput}
              value={time}
              placeholder="예)5시간"
              required
            />
            시간씩 훈련할 것이다.
          </label>
        </div>
        <Button type={"submit"}>
          나는 며칠 동안 훈련을 해야 1만 시간이 될까?
        </Button>
      </form>
    </>
  );
}
