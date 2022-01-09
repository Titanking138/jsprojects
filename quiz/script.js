const quizData = [
  {
    qustion: "who is current PM of India ?",
    a: "Modi",
    b: "Gandhi",
    c: "Nehru",
    d: "Patel",
    correct: "a",
  },
  {
    qustion: "who is current PM of India ?",
    a: "Modi",
    b: "Gandhi",
    c: "Nehru",
    d: "Patel",
    correct: "a",
  },
  {
    qustion: "who is current PM of India ?",
    a: "Modi",
    b: "Gandhi",
    c: "Nehru",
    d: "Patel",
    correct: "a",
  },
  {
    qustion: "who is current PM of India ?",
    a: "Modi",
    b: "Gandhi",
    c: "Nehru",
    d: "Patel",
    correct: "a",
  },
  {
    qustion: "who is current PM of India ?",
    a: "Modi",
    b: "Gandhi",
    c: "Nehru",
    d: "Patel",
    correct: "a",
  },
  {
    qustion: "who is current PM of India ?",
    a: "Modi",
    b: "Gandhi",
    c: "Nehru",
    d: "Patel",
    correct: "a",
  },
  {
    qustion: "who is current PM of India ?",
    a: "Modi",
    b: "Gandhi",
    c: "Nehru",
    d: "Patel",
    correct: "a",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("Submit");
let quizCount = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[quizCount];

  // questionEl.innerText = currentQuizData.qustion;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener("click", () => {
  quizCount++;
  loadQuiz();
});
