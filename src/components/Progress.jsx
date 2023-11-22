export default function Progress({
  index,
  numQuestions,
  points,
  maxPoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Вопрос <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}
