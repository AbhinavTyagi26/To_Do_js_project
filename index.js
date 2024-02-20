let quizData = [
  {
    question: "Q1: What is the full form of HTML?",
    a: "Hyper Text Transfer Protocol",
    b: "Hyper Text Trans Protocol",
    c: "Hyper Type Transfer Protocol",
    d: "Hyperledger Text Transfer Protocol",
    Ans: "opt1",
  },
  {
    question: "Q2: What is the full form of CSS?",
    a: "Cascading Style sheet",
    b: "Cascading Style sheets",
    c: "Cascading Style select",
    d: "Cascading Special sheet",
    Ans: "opt1",
  },
  {
    question: "Q3: What is the full form of JS?",
    a: "Javascripting",
    b: "Java style",
    c: "Just Style",
    d: "JavaScript",
    Ans: "opt4",
  },
  {
    question: "Q4: What is the use of HTML?",
    a: "To do robotics",
    b: "To help in making Website",
    c: "To help in style",
    d: "None of them",
    Ans: "opt2",
  },
];

let score = 0;
let result = document.getElementById("result");
let submitBtn = document.getElementById("subBtn");
let question = document.getElementById("question");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let options = document.getElementsByClassName("options");
let questionCount = 0;

function quizQuestion() {
  question.innerHTML = quizData[questionCount].question;
  option1.innerText = quizData[questionCount].a;
  option2.innerText = quizData[questionCount].b;
  option3.innerText = quizData[questionCount].c;
  option4.innerText = quizData[questionCount].d;
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      options[i].checked = options[i].unchecked;
    }
  }
}
submitBtn.onclick = function () {
  let answer;
  for (let i = 0; i < options.length; i++) {
    answer = options[i].id;
    if (options[i].checked) {
      if (quizData[questionCount].Ans == answer) {
        if(!result.classList.contains("result")){
          score++;
        }
      }
      if (questionCount < 3) {
        questionCount++;
        quizQuestion();
      } else {
        result.classList.add("result");
        result.innerHTML = `
         <H3>Score : ${score}/4</H3>
         <button id="playbtn">Play Again</button>
         `;

        result.querySelector("#playbtn").onclick = function () {
          result.classList.remove("result");
          result.innerHTML = "";
          questionCount = 0;
          score = 0;
          quizQuestion();
        };
      }
    }
  }
};

quizQuestion();
