const questions = [
    {
        question: "HTML stands for?",
        options: ["Hyper Text Markup Language", "High Transfer Markup Level", "Home Tool Multi Language"],
        answer: 0
    },
    {
        question: "CSS is used for styling webpages.",
        options: ["True", "False"],
        answer: 0
    },
    {
        question: "Which keyword declares a variable in JavaScript?",
        options: ["int", "var", "byte"],
        answer: 1
    },
    {
        question: "Flexbox helps in creating ___ layouts.",
        options: ["Flexible", "Rigid", "Fixed"],
        answer: 0
    },
    {
        question: "JavaScript runs on the browser.",
        options: ["True", "False"],
        answer: 0
    }
];


const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const nextBtn = document.getElementById("next-btn");

const scoreText = document.getElementById("score-text");
const finalMessage = document.getElementById("final-message");

let currentIndex = 0;   
let score = 0;          

function loadQuestion() {
    const currentQ = questions[currentIndex];
    questionText.textContent = currentQ.question;

    optionsContainer.innerHTML = "";

    currentQ.options.forEach((opt, idx) => {
        const button = document.createElement("button");
        button.textContent = opt;
        button.classList.add("option-btn");
        button.addEventListener("click", () => checkAnswer(idx, button));

        optionsContainer.appendChild(button);
    });
}


function checkAnswer(selectedIndex, button) {
    const correctIndex = questions[currentIndex].answer;

    if (selectedIndex === correctIndex) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    document.querySelectorAll(".option-btn").forEach(btn => btn.style.pointerEvents = "none"); 
    nextBtn.style.display = "block";

    setTimeout(nextQuestion, 1100);
}

function nextQuestion() {
    currentIndex++;

    nextBtn.style.display = "none";

    if (currentIndex >= questions.length) {
        showResults();
        return;
    }

    loadQuestion();
}

function showResults() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    scoreText.textContent = `${score} / ${questions.length}`;

    if (score === questions.length) {
        finalMessage.textContent = "Excellent! Perfect Score!";
    } else if (score >= questions.length / 2) {
        finalMessage.textContent = "Great Job!";
    } else {
        finalMessage.textContent = "Try Again!";
    }
}

startBtn.addEventListener("click", () => {
    welcomeScreen.classList.remove("active");
    quizScreen.classList.add("active");

    loadQuestion();
});

restartBtn.addEventListener("click", () => {
    currentIndex = 0;
    score = 0;

    resultScreen.classList.remove("active");
    quizScreen.classList.add("active");

    loadQuestion();
});
