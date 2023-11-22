import React from "react";

export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Добро пожаловать на викторину React!</h2>
      <h3>{numQuestions} вопросов для проверки вашего мастерства в React</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Вперёд!
      </button>
    </div>
  );
}
