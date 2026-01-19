document.addEventListener("DOMContentLoaded", function () {

    const bodyDiv = document.querySelector("#body");
    const playButton = document.querySelector(".play-button");
    const mainDiv = document.querySelector("#main");
    const selectQuizCategory = document.querySelector(".select-content");
    const quizDiv = document.querySelector("#quiz");
    const nextquestionButton = document.querySelector(".next-btn");
    const questionDiv = document.querySelector(".question");
    const answerButton = document.querySelectorAll(".answer-text");
    const answerButtonDiv = document.querySelectorAll(".answers");
    const resultDiv = document.querySelector("#result");
    const resultMarks = document.querySelector("#marks");
    const accuracy = document.querySelector("#accuracy");

    let selectedAnswer = [];
    let index = 0;
    let questionIndex = 0;
    let correctAnswer = 0;

    const spaceRelatedQuiz = [ 
        {
            question: "Which planet is known as the",
            keynote: "Red Planet ?",
            option: ["Venus", "Mars", "Jupiter", "Mercury"],
            answer: "Mars"
        },
        {
            question: "What is the name of our",
            keynote: "Galaxy ?",
            option: ["Andromeda", "Orion", "Milky Way", "Whirlpool"],
            answer: "Milky Way"
        },
        {
            question: "Which planet has the most",
            keynote: "Moons ?",
            option: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Saturn"
        },
        {
            question: "What is the outermost layer of the",
            keynote: "Sun called?",
            option: ["Core", "Photosphere", "Chromosphere", "Corona"],
            answer: "Corona"
        },
        {
            question: "Which planet is famous for its",
            keynote: "Rings ?",
            option: ["Uranus", "Neptune", "Jupiter", "Saturn"],
            answer: "Saturn"
        },
        {
            question: "What do we call a rock that enters",
            keynote: "Earth's Atmosphere ?",
            option: ["Asteroid", "Comet", "Meteor", "Moon"],
            answer: "Meteor"
        },
        {
            question: "Which planet is the hottest in our",
            keynote: "Solar System ?",
            option: ["Mercury", "Mars", "Venus", "Jupiter"],
            answer: "Venus"
        },
        {
            question: "What force keeps planets in orbit around the",
            keynote: "Sun ?",
            option: ["Magnestism", "Energy", "Gravity", "Speed"],
            answer: "Gravity"
        },
        {
            question: "How long does Earth take to orbit the",
            keynote: "Sun ?",
            option: ["24 hours", "30 days", "365 days", "500 days"],
            answer: "365 days"
        },
        {
            question: "Which planet is known as the",
            keynote: "Gas Giant ?",
            option: ["Mars", "Earth", "Jupiter", "Mercury"],
            answer: "Jupiter"
        }
    ];


    function showQuiz() {
        mainDiv.style.display = "none";
        quizDiv.style.display = "initial";
        renderQuestion();
        renderOptions();
    }

    function renderQuestion() {
        const q = spaceRelatedQuiz[index];
        if(index < spaceRelatedQuiz.length) {
            questionDiv.innerHTML = `
            <h1>
                ${q.question}
                <span id="key-word">${q.keynote}</span>
            </h1>
            `;
        } else {
            return;
        }
    }

    function renderOptions() {
        if(index < spaceRelatedQuiz.length) {
            const options = spaceRelatedQuiz[index].option;
            answerButton.forEach((btn, i) => {
                btn.innerHTML = `<h1>${options[i]}</h1>`;
            });
        } else {
            return;
        }
    }

    function renderResult() {
        nextquestionButton.addEventListener("click", function() {
            quizDiv.style.display = "none";
            resultDiv.style.display = "initial";
            answerCheck();
            displayResult();
            correctAnswer = 0;
        })
    }

    function goToNextQuestion() {
        index++;
        questionIndex++;

        renderQuestion();
        renderOptions();
        nextquestionButton.style.visibility = "hidden";
    }

  

    playButton.addEventListener("click", () => {
        mainDiv.style.display = "initial";
        bodyDiv.style.display = "none";
    });

    selectQuizCategory.addEventListener("click", showQuiz);

    
    nextquestionButton.addEventListener("click", () => {
        if (index + 1 === spaceRelatedQuiz.length) {
            nextquestionButton.firstElementChild.textContent = "Submit";
            renderResult();
        } else {
            goToNextQuestion();
        }
    });

    function answerMark() {
        
        answerButtonDiv.forEach(answer => {
            answer.addEventListener("click", function () {
                nextquestionButton.style.visibility = "visible";
                selectedAnswer[questionIndex] = this.lastElementChild.textContent;
            });

        });

    }
    answerMark();

    function answerCheck() {
        for(let i = 0; i < spaceRelatedQuiz.length; i++)
        if(spaceRelatedQuiz[i].answer === selectedAnswer[i]) {
            correctAnswer++;
        };
    }
    
    function displayResult() {
        resultMarks.textContent = correctAnswer;
        accuracy.textContent = `${correctAnswer * 10}%`
    }
    
});
