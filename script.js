document.addEventListener("DOMContentLoaded", function() {
    let bodyDiv = document.querySelector("#body");
    let playButton = document.querySelector(".play-button");
    let mainDiv = document.querySelector("#main");
    let selectQuizCategory = document.querySelector(".select-content");
    let quizDiv = document.querySelector("#quiz");
    let nextquestionButton = document.querySelector(".next-btn");
    let questionDiv = document.querySelector(".question");
    let questionDivBox = document.querySelector(".question-box");

    playButton.addEventListener("click", function() {
        mainDiv.style.display = "initial";
        bodyDiv.style.display = "none";
    })

    selectQuizCategory.addEventListener("click", function() {
        mainDiv.style.display = "none";
        quizDiv.style.display = "initial";
        // displayQuestion();
    })
    
    let spaceRelatedQuiz = [
        {
            question: "Which planet is known as the",
            keynote: "Red Planet ?",
            option: ["Venus", "Mars", "Jupiter", "Mercury"],
            answer: "Mars"
        },
        {
            question: "What is the name of our",
            keynote: "Galaxy ?",
            option: ["Andromeda", "Black Eye Galaxy", "Milky Way", "Whirlpool"],
            answer: "Milky Way"
        },
        {
            question: "Which planet has the most",
            keynote: "Moons ?",
            option: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Saturn"
        },
        {
            question: "What is the closest star to",
            keynote: "Earth ?",
            option: ["Proxima Centauri", "Sirius", "Alpha Centauri", "The Sun"],
            answer: "The Sun"
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
        },
    ];
    
    
        function displayQuestion() {
            let index = 0;
            while(index < 10) {
                questionDiv.innerHTML = `
                    <h1>${spaceRelatedQuiz[index].question} <span>${spaceRelatedQuiz[index].keynote}</span></h1>
                `;
                questionDivBox.appendChild(questionDiv);

                nextquestionButton.onclick = index++;
            }
        }
    
    console.log("JS running");
})