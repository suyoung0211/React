import { useState } from "react";

const quizData = [
  {
    question:
      "useState를 사용하여 상태를 초기화할 때 올바른 코드 형태는 무엇인가요?",
    options: [
      "const [state, setState] = useState();",
      "const state = useState();",
      "const [state, setState] = useState(initialValue);",
      "const setState = useState(initialValue);",
    ],
    answer: 2,
    explanation:
      "useState는 상태와 상태를 업데이트하는 함수를 반환합니다. 초기값을 설정하려면 useState(initialValue)를 사용해야 하며, [state, setState] 형태로 구조분해 할당합니다.",
  },
  {
    question: "useEffect는 어떤 상황에서 실행되나요?",
    options: [
      "컴포넌트가 처음 렌더링될 때만 실행된다.",
      "컴포넌트가 렌더링될 때마다 실행된다.",
      "의존성 배열에 명시된 값이 변경될 때 실행된다.",
      "컴포넌트가 언마운트될 때만 실행된다.",
    ],
    answer: 2,
    explanation:
      "useEffect는 의존성 배열을 기반으로 실행됩니다. 특정 값이 포함되어 있으면 해당 값이 변경될 때 실행됩니다.",
  },
  {
    question: "useEffect에서 반환된 함수는 언제 실행되나요?",
    options: [
      "컴포넌트가 처음 렌더링될 때",
      "컴포넌트가 언마운트될 때",
      "의존성 배열의 값이 변경될 때",
      "컴포넌트가 업데이트될 때",
    ],
    answer: 1,
    explanation:
      "useEffect에서 반환된 함수는 컴포넌트가 언마운트될 때 실행되며, 의존성 배열 값이 변경될 때도 이전 효과를 정리하기 위해 실행됩니다.",
  },
  {
    question: "useState 상태 업데이트 함수의 특징은?",
    options: [
      "현재 상태를 직접 수정한다.",
      "비동기적으로 상태를 업데이트한다.",
      "상태를 즉시 업데이트한다.",
      "상태를 초기화한다.",
    ],
    answer: 1,
    explanation:
      "useState의 상태 업데이트 함수는 비동기적으로 작동하며, 상태를 직접 수정하지 않고 새로운 값을 설정합니다.",
  },
  {
    question: "useEffect의 의존성 배열을 빈 배열로 설정하면?",
    options: [
      "useEffect가 실행되지 않는다.",
      "처음 렌더링될 때만 실행된다.",
      "렌더링될 때마다 실행된다.",
      "언마운트될 때만 실행된다.",
    ],
    answer: 1,
    explanation:
      "빈 배열로 설정하면 useEffect는 컴포넌트가 처음 렌더링될 때 한 번만 실행됩니다.",
  },
];

function QuizApp() {
  // const [answers, setAnswers] = useState(Array(quizData.length).fill(null));
  const [answers, setAnswers] = useState([null,null,null,null,null]);    // 문제 답을 저장하는 배열
  const [currentIndex, setCurrentIndex] = useState(0);  // 문제 인덱스
  const [submitted, setSubmitted] = useState(false);    // 최종 제출 여부

  const handleSelect = (optionIndex) => {    // 답 optionIndex 선택하면 answers 배열 바꾸기
    if (!submitted) {
      const updated = [...answers];     // 배열 복사하여 updated 참조
      updated[currentIndex] = optionIndex;   // 선택한 번호의 답만 변경
      setAnswers(updated);   // 새로운 배열로 answers 상태 변경
    }
  };

  const allAnswered = answers.every((a) => a !== null);   // 배열의 모든 요소가 답이 있으면 '참' 리턴
  // 채점
  const score = answers.reduce(
    (acc, val, i) => (val === quizData[i].answer ? acc + 1 : acc),    // acc 는 누적 계산 저장, val 는 answers 배열 요소 값
    0    // acc 초기값
  );

  const currentQuiz = quizData[currentIndex];    // currentIndex 위치의 퀴즈
  const userAnswer = answers[currentIndex];      // currentIndex 의 답을 저장. 이전 문제 볼때 선택한 답 표시
  const isCorrect = userAnswer === currentQuiz.answer;   // 선택한 답을 정답과 비교

  return (
    <div
      style={{
        width: "640px",
        margin: "40px auto",
        padding: 20,
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: 12,
          padding: 24,
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2>
          문제 {currentIndex + 1} / {quizData.length}
        </h2>
        <p style={{ fontWeight: "bold" }}>{currentQuiz.question}</p>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {/* 퀴즈의 options 문항 출력 */}
          {currentQuiz.options.map((option, i) => {
            const isSelected = userAnswer === i;    // 선택한 답이면 참
            const isAnswer = currentQuiz.answer === i;

            let borderColor = "1px solid #ccc";    // 모든 옵션의 기본 css
            if (submitted && isAnswer) borderColor = "2px solid green";   // 제출 완료 했을 때 맞는 답 css
            else if (isSelected) borderColor = "2px solid #888";   // 선택한 답의 css

            return (
              <li key={i} style={{ marginBottom: 8 }}>
                <div
                  onClick={() => handleSelect(i)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: borderColor,
                    backgroundColor: isSelected ? "#f9f9f9" : "white",
                    cursor: submitted ? "default" : "pointer",  // 제출한 경우 선택 못함
                  }}
                >
                  {option}
                </div>
              </li>
            );
          })}
        </ul>

        {submitted && (     // 제출 버튼을 누른 뒤에 각 문제 currentIndex 
          <div style={{ marginTop: 12 }}>
            {isCorrect ? (
              <p style={{ color: "green" }}>✅ 정답입니다!</p>
            ) : (
              <p style={{ color: "red" }}>
                ❌ 오답입니다. 정답은:{" "}
                <strong>{currentQuiz.options[currentQuiz.answer]}</strong>
              </p>
            )}
            <p>
              <em>{currentQuiz.explanation}</em>
            </p>
          </div>
        )}

        <div
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            style={{
              padding: "8px 16px",
              backgroundColor: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: 6,
              cursor: currentIndex === 0 ? "not-allowed" : "pointer",
            }}
          >
            ← 이전
          </button>
          {currentIndex < quizData.length - 1 ? (    // currentIndex 가 마지막 문제가 아닐 때만
            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  Math.min(quizData.length - 1, prev + 1)
                )
              }
              style={{
                padding: "8px 16px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              다음 →
            </button>
          ) : (   // currentIndex 가 마지막 문제이면
            !submitted &&        // 제출 버튼을 누르지 않았을 때
            allAnswered && (    // 모든 답이 저장되어 있을 때
              <button
                onClick={() => setSubmitted(true)}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              >
                ✅ 채점하기
              </button>
            )
          )}
        </div>

        {submitted && currentIndex === quizData.length - 1 && (     // 제출하고 마지막 문제 currentIndex 일 때 점수 표시
          <div style={{ marginTop: 20, fontSize: "18px" }}>
            총 점수:{" "}
            <strong>
              {score} / {quizData.length}
            </strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizApp;
