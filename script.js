document.addEventListener("DOMContentLoaded", function () {

    const bodyDiv = document.querySelector("#body");
    const playButton = document.querySelector(".play-button");
    const mainDiv = document.querySelector("#main");
    const selectQuizCategory = document.querySelectorAll(".select-content");
    const quizDiv = document.querySelector("#quiz");
    const nextquestionButton = document.querySelector(".next-btn");
    const sumbitButton = document.querySelector(".submit-btn");
    const questionDiv = document.querySelector(".question");
    const answerButton = document.querySelectorAll(".answer-text");
    const answerButtonDiv = document.querySelectorAll(".answers");
    const resultDiv = document.querySelector("#result");
    const resultMarks = document.querySelector("#marks");
    const accuracy = document.querySelector("#accuracy");
    const cancelButton = document.querySelector(".cancel");
    const progressBarLoad = document.querySelector(".progress-bar-loader");
    const timerText = document.querySelector(".timer-text");
    const displayTime = document.querySelector(".time-left-box h2");
    const displayPoints = document.querySelector(".points-number");
    const playAgainBtn = document.querySelector(".play-again");
    const homeButton = document.querySelector(".home");

    let selectedAnswer = [];
    let index = 0;
    let questionIndex = 0;
    let correctAnswer = 0;
    let categoryIndex;
    let minute = 0;
    let second = 0;
    let timer = null;
    let m, s;
    let points = 0;
    let click = 0;
    let isAnswered = false;
    let answerColor;
    let optionVariable;

    const quizData = [
        [ 
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
        ],
        [
            {
                question: "Which animal is known as the King of the",
                keynote: "Jungle?",
                option: ["Tiger", "Lion", "Leopard", "Elephant"],
                answer: "Lion"
            },
            {
                question: "Which animal is the",
                keynote: "largest mammal?",
                option: ["Elephant", "Giraffe", "Whale", "Rhino"],
                answer: "Whale"
            },
            {
                question: "Which animal can change its",
                keynote: "color?",
                option: ["Chameleon", "Frog", "Lizard", "Snake"],
                answer: "Chameleon"
            },
            {
                question: "Which animal is called the",
                keynote: "“Ship of the Desert”?",
                option: ["Horse", "Scorpions", "Snake", "Camel"],
                answer: "Camel"
            },
            {
                question: "Which bird cannot",
                keynote: "fly?",
                option: ["Eagle", "Sparrow", "Ostrich", "Parrot"],
                answer: "Ostrich"
            },
            {
                question: "Which animal is famous for its",
                keynote: "black and white stripes?",
                option: ["Zebra", "Horse", "Cow", "Tiger"],
                answer: "Zebra"
            },
            {
                question: "Which animal is the",
                keynote: "fastest on land?",
                option: ["Lion", "Horse", "Cheetah", "Leopard"],
                answer: "Cheetah"
            },
            {
                question: "Which animal sleeps",
                keynote: "standing up?",
                option: ["Camel", "Donkey", "Yak", "Horse"],
                answer: "Horse"
            },
            {
                question: "Which animal is known for its",
                keynote: "long neck?",
                option: ["Deer", "Giraffe", "Camel", "Horse"],
                answer: "Giraffe"
            },
            {
                question: "Which animal is called man's",
                keynote: "best friend?",
                option: ["Dog", "Horse", "Cat", "Rabbit"],
                answer: "Dog"
            }
        ],
        [
            {
                question: "What part of the plant makes",
                keynote: "Food?",
                option: ["Root", "Stem", "Flower", "Leaf"],
                answer: "Leaf"
            },
            {
                question: "Which organ pumps blood in the",
                keynote: "Body?",
                option: ["Brain", "Heart", "Lung", "Liver"],
                answer: "Heart"
            },
            {
                question: "What do bees collect from",
                keynote: "Flowers?",
                option: ["Nectar", "Water", "Pollen", "Honey"],
                answer: "Nectar"
            },
            {
                question: "What is the boiling point of",
                keynote: "Water?",
                option: ["Fifty", "Ninety", "Hundred", "Eighty"],
                answer: "Hundred"
            },
            {
                question: "Which vitamin comes from",
                keynote: "Sunlight?",
                option: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
                answer: "Vitamin D"
            },
            {
                question: "Which part helps humans",
                keynote: "Breathe?",
                option: ["Stomach", "Lungs", "Liver", "Brain"],
                answer: "Lungs"
            },
            {
                question: "Which animal is an",
                keynote: '"Amphibian" ?',
                option: ["Crocodile", "Snake", "Duck", "Frog"],
                answer: "Frog"
            },
            {
                question: "What is the hardest natural",
                keynote: "Substance ?",
                option: ["Gold", "Diamond", "Iron", "Silver"],
                answer: "Diamond"
            },
            {
                question: "What carries blood in the",
                keynote: "Body ?",
                option: ["Veins", "Bones", "Nerves", "Muscles"],
                answer: "Veins"
            },
            {
                question: "Which metal is liquid at",
                keynote: '"Room Temperature" ?',
                option: ["Iron", "Copper", "Mercury", "Zinc"],
                answer: "Mercury"
            }
        ],
        [
            {
                question: "Which fruit is known for",
                keynote: '"Potassium ?"',
                option: ["Apple", "Banana", "Orange", "Grape"],
                answer: "Banana"
            },
            {
                question: "Which food is made from",
                keynote: "Milk ?",
                option: ["Bread", "Rice", "Cheese", "Wheat"],
                answer: "Cheese"
            },
            {
                question: "Which vegetable is orange in",
                keynote: "Color ?",
                option: ["Spinach", "Orange", "Cabbage", "Carrot"],
                answer: "Carrot"
            },
            {
                question: "Which food gives instant",
                keynote: "Energy ?",
                option: ["Sugar", "Rice", "Potato", "Bread"],
                answer: "Sugar"
            },
            {
                question: "Which drink is made from",
                keynote: "Cocoa ?",
                option: ["Tea", "Coffee", "Chocolate", "Juice"],
                answer: "Chocolate"
            },
            {
                question: "Which grain is used to make",
                keynote: "Bread ?",
                option: ["Rice", "Wheat", "Maize", "Oats"],
                answer: "Wheat"
            },
            {
                question: "Which vegetable is used to make",
                keynote: "Salad ?",
                option: ["Potato", "Onion", "Lettuce", "Pumpkin"],
                answer: "Lettuce"
            },
            {
                question: "Which fruit has seeds on the",
                keynote: "Outside ?",
                option: ["Strawberry", "Mango", "Apple", "Orange"],
                answer: "Strawberry"
            },
            {
                question: "Which food is cooked by",
                keynote: "Boiling ?",
                option: ["Rice", "Bread", "Biscuit", "Cake"],
                answer: "Rice"
            },
            {
                question: "Which food is made by",
                keynote: "Bees ?",
                option: ["Jam", "Honey", "Sugar", "Syrup"],
                answer: "Honey"
            }
        ],
        [
            {
                question: "Which vehicle travels in the",
                keynote: "Sky ?",
                option: ["Train", "Car", "Airplane", "Ship"],
                answer: "Airplane"
            },
            {
                question: "Which sea separates",
                keynote: "Europe and Africa?",
                option: ["Red", "Black", "Mediterranean", "Arabian"],
                answer: "Mediterranean"
            },
            {
                question: "Which place do airplanes",
                keynote: "Land ?",
                option: ["Station", "Port", "Garage", "None"],
                answer: "None"
            },
            {
                question: "Which bag is used while",
                keynote: "Traveling ?",
                option: ["Purse", "Backpack", "Wallet", "Pouch"],
                answer: "Backpack"
            },
            {
                question: "Which tool shows",
                keynote: "Directions ?",
                option: ["Compass", "Watch", "Calendar", "Mirror"],
                answer: "Compass"
            },
            {
                question: "Which continent has the most",
                keynote: "Countries ?",
                option: ["Asia", "Europe", "America", "Africa"],
                answer: "Africa"
            },
            {
                question: "Which place do travelers stay",
                keynote: "Overnight?",
                option: ["Office", "Restaurent", "Market", "Hotel"],
                answer: "Hotel"
            },
            {
                question: "Which country uses the currency",
                keynote: '"Forint" ?',
                option: ["Poland", "Hungary", "Romania", "Czechia"],
                answer: "Hungary"
            },
            {
                question: "Which travel item shows",
                keynote: "Time ?",
                option: ["Map", "Clock", "Watch", "Compass"],
                answer: "Watch"
            },
            {
                question: "Which place is visited by",
                keynote: "Tourists ?",
                option: ["Radio", "GPS", "Camera", "Charger"],
                answer: "GPS"
            }
        ],
        [
            {
                question: "Which instrument has black and white",
                keynote: "Keys ?",
                option: ["Piano", "Guitar", "Drums", "Flute"],
                answer: "Piano"
            },
            {
                question: "Which composer became",
                keynote: "Deaf ?",
                option: ["Mozart", "Bach", "Chopin", "Beethoven"],
                answer: "Beethoven"
            },
            {
                question: "Which scale has five",
                keynote: "Notes ?",
                option: ["Major", "Minor", "Pentatonic", "Chromatic"],
                answer: "Pentatonic"
            },
            {
                question: "Which instrument uses",
                keynote: "Strings ?",
                option: ["Drum", "Flute", "Guitar", "Trumpet"],
                answer: "Guitar"
            },
            {
                question: "Which clef is also called the",
                keynote: "Gclef ?",
                option: ["Bass", "Alto", "Tenor", "Treble"],
                answer: "Treble"
            },
            {
                question: "Who sings",
                keynote: "Songs ?",
                option: ["Dancer", "Singer", "Actor", "Composer"],
                answer: "Singer"
            },
            {
                question: "Which music style is",
                keynote: "Energetic and Electronic ?",
                option: ["Jazz", "Rock", "EDM", "Classical"],
                answer: "EDM"
            },
            {
                question: "Which object is used to hear",
                keynote: "Music ?",
                option: ["Speaker", "Camera", "Monitor", "Keyboard"],
                answer: "Speaker"
            },
            {
                question: "Which instrument family is the",
                keynote: "Violin ?",
                option: ["Brass", "Woodwind", "Percussion", "Strings"],
                answer: "Strings"
            },
            {
                question: "Which tempo marking means",
                keynote: "Fast ?",
                option: ["Largo", "Allegro", "Adagio", "Lento"],
                answer: "Allegro"
            }
        ]
    ]



    function showQuiz() {
        mainDiv.style.display = "none";
        quizDiv.style.display = "initial";
        progressBarLoad.style.width = "0%";
        displayPoints.textContent = "0";
        renderQuestion();
        renderOptions();
    }

    function renderQuestion() {
        
        const q = quizData[categoryIndex][index];
        if(index < quizData[categoryIndex].length) {
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
        if(index < quizData[categoryIndex].length) {
            const options = quizData[categoryIndex][index].option;
            answerButton.forEach((btn, i) => {
                btn.innerHTML = `<h1>${options[i]}</h1>`;
            });
        } else {
            return;
        }
    }

    function renderResult() {
        sumbitButton.style.display = "flex";
        nextquestionButton.style.display = "none";
            sumbitButton.addEventListener("click", function() {
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
        
        isAnswered = false;
        renderQuestion();
        renderOptions();
        optionReset();
        nextquestionButton.style.visibility = "hidden";
    }

  

    playButton.addEventListener("click", () => {
        mainDiv.style.display = "initial";
        bodyDiv.style.display = "none";
    });

// Add Event Listner....
    selectQuizCategory.forEach((eachCategory) => {
        eachCategory.addEventListener("click", function() {
            if (this.classList.contains("space")) {
                categoryIndex = 0;
            } else if (this.classList.contains("animal")) {
                categoryIndex = 1;
            } else if (this.classList.contains("science")) {
                categoryIndex = 2;
            } else if (this.classList.contains("food")) {
                categoryIndex = 3;
            } else if (this.classList.contains("travel")) {
                categoryIndex = 4;
            } else if (this.classList.contains("music")) {
                categoryIndex = 5;
            }
            showQuiz();
            timerFunction();
        })
        
    })

    nextquestionButton.addEventListener("click", () => {
        if (isAnswered) return;
        isAnswered = true;
        trueOrFalse();
        let delayFunc = setTimeout(() => {
            displayPoints.textContent = points;
            click = 0;
            if (index + 1 === quizData[categoryIndex].length) {
                progressBarLoad.style.width = `${(index + 1) * 10}%`;
                resetFunction();
                renderResult();
                return;
            }
            
            goToNextQuestion();
            progressBarLoad.style.width = `${index * 10}%`;
        }, 400)
    });
    

    cancelButton.addEventListener("click", function() {
        mainDiv.style.display = "initial";
        quizDiv.style.display = "none";
        selectedAnswer = [];
        index = 0;
        questionIndex = 0;
        correctAnswer = 0;
        categoryIndex = 0;
        resetFunction();
    })

    playAgainBtn.addEventListener("click", function() {
        resultDiv.style.display = "none";
        quizDiv.style.display = "none";
        mainDiv.style.display = "initial";
        sumbitButton.style.display = "none";
        nextquestionButton.style.display = "flex";
        nextquestionButton.style.visibility = "hidden";
        displayPoints.textContent = "0";
        progressBarLoad.style.width = "0%";
        selectedAnswer = [];
        index = 0;
        questionIndex = 0;
        correctAnswer = 0;
        categoryIndex = undefined;
        points = 0;
        click = 0;
        isAnswered = false;
        resetFunction();
        optionReset();
    })

// End of event listner....

    function answerMark() {
        answerButtonDiv.forEach(answer => {
            
            answer.addEventListener("click", function () {
                
                // this.style.backgroundColor = "#fff000"
                answer.style.backgroundColor = "#ffe600"
                answer.style.boxShadow = "0 7px 0 #e1d400"
                answer.firstElementChild.style.backgroundColor = "#fff174"
                optionReset(this);
                answerColor = "red";
                optionVariable = this
                
                nextquestionButton.style.visibility = "visible";
                selectedAnswer[questionIndex] = this.lastElementChild.textContent;

                if (quizData[categoryIndex][index].answer === this.lastElementChild.textContent) {
                    points = points + 25;
                    click = 1;
                    answerColor = "green";
                    optionVariable = this
                } else if (quizData[categoryIndex][index].answer !== this.lastElementChild.textContent && click === 1) {
                    points = points - 25;
                    click = 0;
                }
            });

            
        });

    }
    answerMark();

    function optionReset(option) {
        answerButtonDiv.forEach(answer => {
            if (answer !== option) {
                answer.style.background = "";
                answer.firstElementChild.style.backgroundColor = "";
                answer.style.boxShadow = "";
            }
        })
    }

    function timerFunction() {
        clearInterval(timer);
        

        timer = setInterval(() => {
            if(minute < 10) {
                m = "0" + minute;
            } else {
                m = minute;
            }

            if(second < 10) {
                s = "0" + second;
            } else {
                s = second;
            }

            second++;
            
            if(second === 60) {
                minute++;
                second = 0;
            }
            
            timerText.textContent = `${m}:${s}`;
        }, 1000);
    }
  
    function trueOrFalse() {
        
        if(answerColor === "green") {
            optionVariable.style.backgroundColor = "#49e400";
            optionVariable.style.boxShadow = "0 7px 0 #3cbe00"
            optionVariable.firstElementChild.style.backgroundColor = "#92ff60"
        } else if(answerColor === "red") {
            optionVariable.style.backgroundColor = "#ea0000";
            optionVariable.style.boxShadow = "0 7px 0 #9c0000";
            optionVariable.firstElementChild.style.backgroundColor = "#fa2b2b"
        }

    }

    function resetFunction() {
        clearInterval(timer);
        minute = 0;
        second = 0;
        timerText.textContent = "00:00";
    }

    function answerCheck() {
        for(let i = 0; i < quizData[categoryIndex].length; i++)
            if(quizData[categoryIndex][i].answer === selectedAnswer[i]) {
                correctAnswer++;
            };
    }
    
    function displayResult() {
        resultMarks.textContent = correctAnswer;
        accuracy.textContent = `${correctAnswer * 10}%`;
        displayTime.textContent = `${m}:${s}`;
    }
    
});
