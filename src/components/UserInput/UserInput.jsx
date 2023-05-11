import React, { useState } from "react";
import "./UserInput.css";
import Button from "../../common/Button/Button";

export default function UserInput({ handleSubmit }) {
  const [expert, setExpert] = useState("");
  const [trainingTime, setTrainingTime] = useState("");

  const handleActionInput = (e) => {
    setExpert(e.target.value);
  };

  const handleTimeInput = (e) => {
    setTrainingTime(e.target.value);
  };

  const onResetForm = () => {
    setExpert("");
    setTrainingTime("");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (expert && trainingTime > 0 && trainingTime < 25) {
      handleSubmit({ expert: expert, trainingTime: trainingTime });
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
              type="text"
              className="inp-action"
              onChange={handleActionInput}
              value={expert}
              placeholder="예)프로그래밍"
              required
            />
            전문가가 될 것이다.
          </label>
          <label>
            그래서 앞으로 매일 하루에
            <input
              type="number"
              min="1"
              max="24"
              className="inp-time"
              onChange={handleTimeInput}
              value={trainingTime}
              placeholder="예)5"
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
