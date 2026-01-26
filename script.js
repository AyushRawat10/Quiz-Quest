document.addEventListener("DOMContentLoaded", function () {

    const bodyDiv = document.querySelector("#body");
    const playButton = document.querySelector(".play-button");
    const featureContainer = document.querySelectorAll(".feature-container");
    const mainDiv = document.querySelector("#main");
    const navContentAll = document.querySelectorAll(".nav-content-all");
    const selectQuizCategory = document.querySelectorAll(".select-content");
    const quizDiv = document.querySelector("#quiz");
    const nextquestionButton = document.querySelector(".next-btn");
    const sumbitButton = document.querySelector(".submit-btn");
    const questionDiv = document.querySelector(".question");
    const answerButton = document.querySelectorAll(".answer-text");
    const answerButtonDiv = document.querySelectorAll(".answers");
    const resultDiv = document.querySelector("#result");
    const resultMarks = document.querySelector("#marks");
    const totalMarks = document.querySelector("#total-marks");
    const totalLevel = document.querySelector("#total-level");
    const accuracy = document.querySelector("#accuracy");
    const cancelButton = document.querySelector(".cancel");
    const progressBarLoad = document.querySelector(".progress-bar-loader");
    const progressBarNumber = document.querySelector("#single-level");
    const timerText = document.querySelector(".timer-text");
    const displayTime = document.querySelector(".time-left-box h2");
    const displayPoints = document.querySelector(".points-number");
    const playAgainBtn = document.querySelector(".play-again");
    const homeButton = document.querySelector(".home");
    const resultImage = document.querySelector(".result-image");
    const modeDiv = document.querySelector(".mode");
    const analysisBtn = document.querySelector(".analysis-box button");
    const analysisDiv = document.querySelector(".analysis-overlay");
    const cancelAnalysis = document.querySelector(".cross-bg");
    const analysisBody = document.querySelector(".analytical-body");
    const notificationDisplay = document.querySelector("#notification");


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
    let lockAnswer = false;
    let answerColor;
    let optionVariable;
    let lenghtFinder;
    let easyMode, mediumMode, restLength;
    

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
                question: "What gives light to the Earth during the",
                keynote: "Day ?",
                option: ["Moon", "Stars", "Sun", "Jupiter"],
                answer: "Sun"
            },
            {
                question: "Which celestial body orbits the",
                keynote: "Earth ?",
                option: ["Sun", "Mars", "Moon", "Venus"],
                answer: "Moon"
            },
            {
                question: "Which planet has the most",
                keynote: "Moons ?",
                option: ["Uranus", "Neptune", "Jupiter", "Saturn"],
                answer: "Saturn"
            },
            {
                question: "What force keeps planets in orbit around the",
                keynote: "Sun ?",
                option: ["Magnetism", "Gravity", "Energy", "Motion"],
                answer: "Gravity"
            },
            {
                question: "Which layer of the Sun is visible from",
                keynote: "Earth ?",
                option: ["Photosphere", "Core", "Corona", "Chromosphere"],
                answer: "Photosphere"
            },
            {
                question: "What is the name of a rocky object that enters",
                keynote: "Earth's Atmosphere ?",
                option: ["Asteroid", "Comet", "Satellite", "Meteor"],
                answer: "Meteor"
            },
            {
                question: "Which planet is the hottest in the",
                keynote: "Solar System?",
                option: ["Mercury", "Venus", "Mars", "Jupiter"],
                answer: "Venus"
            },
            {
                question: "How long does Earth take to complete one orbit around the",
                keynote: "Sun ?",
                option: ["24 hours", "30 days", "365 days", "500 days"],
                answer: "365 days"
            },
            {
                question: "What type of galaxy is the",
                keynote: "Milky Way ?",
                option: ["Elliptical", "Irregular", "Spiral", "Ring"],
                answer: "Spiral"
            },
            {
                question: "What is the boundary around a black hole",
                keynote: "Called ?",
                option: ["Event Horizon", "Singularity", "Accretion Disk", "Photon Sphere"],
                answer: "Event Horizon"
            },
            {
                question: "Which planet has the strongest winds in the",
                keynote: "Solar System ?",
                option: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                answer: "Neptune"
            },
            {
                question: "What is the name of the first artificial satellite launched into",
                keynote: "Space ?",
                option: ["Voyager 1", "Apollo 11", "Sputnik 1", "Explorer 1"],
                answer: "Sputnik 1"
            },
            {
                question: "Which element fuels nuclear fusion in",
                keynote: "Stars ?",
                option: ["Oxygen", "Helium", "Hydrogen", "Carbon"],
                answer: "Hydrogen"
            }
        ],
        [
            {
                question: "Which animal is known as the King of the",
                keynote: "Jungle ?",
                option: ["Tiger", "Lion", "Leopard", "Elephant"],
                answer: "Lion"
            },
            {
                question: "Which animal is the largest",
                keynote: "Mammal ?",
                option: ["Elephant", "Giraffe", "Whale", "Rhino"],
                answer: "Whale"
            },
            {
                question: "Which animal gives us",
                keynote: "Milk ?",
                option: ["Dog", "Horse", "Goat", "Cow"],
                answer: "Cow"
            },
            {
                question: "Which animal is famous for its",
                keynote: "Long Neck ?",
                option: ["Deer", "Camel", "Giraffe", "Horse"],
                answer: "Giraffe"
            },
            {
                question: "Which bird cannot",
                keynote: "Fly ?",
                option: ["Eagle", "Sparrow", "Ostrich", "Parrot"],
                answer: "Ostrich"
            },
            {
                question: "Which animal is famous for its black and white",
                keynote: "Stripes?",
                option: ["Zebra", "Horse", "Cow", "Tiger"],
                answer: "Zebra"
            },
            {
                question: "Which animal is the",
                keynote: "Fastest on land?",
                option: ["Lion", "Horse", "Cheetah", "Leopard"],
                answer: "Cheetah"
            },
            {
                question: "Which animal sleeps",
                keynote: "Standing up?",
                option: ["Camel", "Donkey", "Yak", "Horse"],
                answer: "Horse"
            },
            {
                question: "Which animal is known as the",
                keynote: "Ship of the Desert ?",
                option: ["Horse", "Camel", "Donkey", "Ox"],
                answer: "Camel"
            },
            {
                question: "Which animal can change its",
                keynote: "Color ?",
                option: ["Chameleon", "Frog", "Snake", "Lizard"],
                answer: "Chameleon"
            },
            {
                question: "Which animal is known for",
                keynote: "Building dams ?",
                option: ["Otter", "Beaver", "Mole", "Badger"],
                answer: "Beaver"
            },
            {
                question: "Which animal has the strongest",
                keynote: "Bite force ?",
                option: ["Shark", "Lion", "Tiger", "Crocodile"],
                answer: "Crocodile"
            },
            {
                question: "Which animal is known for its",
                keynote: "Pouch ?",
                option: ["Kangaroo", "Bear", "Monkey", "Deer"],
                answer: "Kangaroo"
            },
            {
                question: "Which animal is mostly active at",
                keynote: "Night ?",
                option: ["Cow", "Dog", "Owl", "Horse"],
                answer: "Owl"
            },
            {
                question: "Which animal uses",
                keynote: "Echolocation ?",
                option: ["Dolphin", "Shark", "Whale", "Seal"],
                answer: "Dolphin"
            },
            {
                question: "Which animal has the longest",
                keynote: "Lifespan ?",
                option: ["Elephant", "Parrot", "Whale", "Tortoise"],
                answer: "Tortoise"
            },
            {
                question: "What is the scientific name of the",
                keynote: "House cat ?",
                option: ["Felis leo", "Felis catus", "Panthera leo", "Canis lupus"],
                answer: "Felis catus"
            },
            {
                question: "Which animal has three",
                keynote: "Hearts ?",
                option: ["Shark", "Crocodile", "Whale", "Octopus"],
                answer: "Octopus"
            },
            {
                question: "Which mammal can",
                keynote: "Fly ?",
                option: ["Flying squirrel", "Bat", "Eagle", "Penguin"],
                answer: "Bat"
            },
            {
                question: "Which animal has the largest brain relative to",
                keynote: "Body size ?",
                option: ["Human", "Elephant", "Dolphin", "Chimpanzee"],
                answer: "Dolphin"
            },
        ],
        [
            {
                question: "Which organ pumps blood in the",
                keynote: "Human body ?",
                option: ["Brain", "Heart", "Lungs", "Liver"],
                answer: "Heart"
            },
            {
                question: "What gas do plants use for",
                keynote: "Photosynthesis ?",
                option: ["Nitrogen", "Oxygen", "Hydrogen", "Carbon dioxide"],
                answer: "Carbon dioxide"
            },
            {
                question: "Which vitamin is produced in the human body by",
                keynote: "Sunlight ?",
                option: ["Vitamin D", "Vitamin B", "Vitamin A", "Vitamin C"],
                answer: "Vitamin D"
            },
            {
                question: "What do bees collect from",
                keynote: "Flowers ?",
                option: ["Honey", "Water", "Seeds", "Nectar"],
                answer: "Nectar"
            },
            {
                question: "What is the boiling point of water at",
                keynote: "Sea level ?",
                option: ["90°C", "100°C", "80°C", "120°C"],
                answer: "100°C"
            },
            {
                question: "Which blood cells help fight",
                keynote: "Infections ?",
                option: ["White blood cells", "Red blood cells", "Platelets", "Plasma"],
                answer: "White blood cells"
            },
            {
                question: "Which part of the plant transports water from roots to",
                keynote: 'Leaves ?',
                option: ["Phloem", "Cortex", "Xylem", "Stem"],
                answer: "Xylem"
            },
            {
                question: "Which metal is liquid at",
                keynote: "Room temperature ?",
                option: ["Iron", "Diamond", "Mercury", "Silver"],
                answer: "Mercury"
            },
            {
                question: "What type of energy is stored in",
                keynote: "Food ?",
                option: ["Heat energy", "Chemical energy", "Electrical energy", "Kinetic energy"],
                answer: "Chemical energy"
            },
            {
                question: "Which organ is responsible for filtering blood in",
                keynote: 'Humans ?',
                option: ["Heart", "Liver", "Lungs", "Kidney"],
                answer: "Kidney"
            },
            {
                question: "Which acid is present in the human",
                keynote: "Stomach ?",
                option: ["Sulfuric acid", "Nitric acid", "Hydrochloric acid", "Acetic acid"],
                answer: "Hydrochloric acid"
            },
            {
                question: "Which substance conducts electricity",
                keynote: "Best ?",
                option: ["Copper", "Glass", "Rubber", "Plastic"],
                answer: "Copper"
            },
            {
                question: "What is the chemical symbol of",
                keynote: "Potassium ?",
                option: ["P", "Po", "K", "Pt"],
                answer: "K"
            },
            {
                question: "Which part of the brain controls",
                keynote: "Balance and Coordination ?",
                option: ["Cerebrum", "Medulla", "Hypothalamus", "Cerebellum"],
                answer: "Cerebellum"
            },
            {
                question: "Which gas is released during respiration in",
                keynote: "Humans ?",
                option: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
                answer: "Carbon dioxide"
            },
            {
                question: "What is the pH value of pure",
                keynote: "Water ?",
                option: ["5", "6", "8", "7"],
                answer: "7"
            },
            {
                question: "Which enzyme is responsible for breaking down starch into sugars in the",
                keynote: "Human mouth?",
                option: ["Amylase", "Lipase", "Pepsin", "Trypsin"],
                answer: "Amylase"
            }
        ],
        [
            {
                question: "Which nutrient is the main source of energy for the",
                keynote: "Human body ?",
                option: ["Protein", "Carbohydrate", "Fat", "Vitamin"],
                answer: "Carbohydrate"
            },
            {
                question: "Which vitamin is most commonly found in",
                keynote: "Citrus fruits ?",
                option: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
                answer: "Vitamin C"
            },
            {
                question: "Which food product is made by",
                keynote: "Fermenting milk ?",
                option: ["Butter", "Cheese", "Ice cream", "Cream"],
                answer: "Cheese"
            },
            {
                question: "Which mineral is essential for healthy",
                keynote: "Bones and Teeth ?",
                option: ["Iron", "Sodium", "Potassium", "Calcium"],
                answer: "Calcium"
            },
            {
                question: "Which cooking method uses steam to",
                keynote: "Cook food ?",
                option: ["Frying", "Roasting", "Boiling", "Steaming"],
                answer: "Steaming"
            },
            {
                question: "Which vitamin helps in blood",
                keynote: "Clotting ?",
                option: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
                answer: "Vitamin K"
            },
            {
                question: "What type of fat is commonly found in",
                keynote: "Olive oil ?",
                option: ["Saturated", "Trans", "Monounsaturated", "Polyunsaturated"],
                answer: "Monounsaturated"
            },
            {
                question: "Which grain is traditionally used to make",
                keynote: "Pasta ?",
                option: ["Wheat", "Rice", "Barley", "Oats"],
                answer: "Wheat"
            },
            {
                question: "Which food is considered a complete",
                keynote: "Protein ?",
                option: ["Rice", "Beans", "Corn", "Egg"],
                answer: "Egg"
            },
            {
                question: "Which vitamin deficiency causes",
                keynote: "Scurvy ?",
                option: ["Vitamin C", "Vitamin D", "Vitamin A", "Vitamin B1"],
                answer: "Vitamin C"
            },
            {
                question: "Which enzyme is primarily responsible for protein digestion in the",
                keynote: "Stomach ?",
                option: ["Amylase", "Pepsin", "Lipase", "Trypsin"],
                answer: "Pepsin"
            },
            {
                question: "Which mineral is a key component of hemoglobin and helps in",
                keynote: "Oxygen transport ?",
                option: ["Calcium", "Zinc", "Magnesium", "Iron"],
                answer: "Iron"
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
                question: "Which travel document is required for",
                keynote: "International travel ?",
                option: ["License", "Passport", "Ticket", "Identity card"],
                answer: "Passport"
            },
            {
                question: "Which continent has the most",
                keynote: "Countries ?",
                option: ["Asia", "Europe", "America", "Africa"],
                answer: "Africa"
            },
            {
                question: "Which tool is used to find directions while",
                keynote: "Traveling ?",
                option: ["Compass", "Watch", "Calendar", "Mirror"],
                answer: "Compass"
            },
            {
                question: "Which city is known as the",
                keynote: "“City of Canals” ?",
                option: ["Paris", "Amsterdam", "Venice", "Rome"],
                answer: "Venice"
            },
            {
                question: "Which mountain range separates",
                keynote: "Europe and Asia ?",
                option: ["Alps", "Andes", "Ural", "Rockies"],
                answer: "Ural"
            },
            {
                question: "Which sea separates",
                keynote: "Europe from Africa ?",
                option: ["Black Sea", "Red Sea", "Arabian Sea", "Mediterranean Sea"],
                answer: "Mediterranean Sea"
            },
            {
                question: "Which country uses the currency",
                keynote: "“Yen” ?",
                option: ["China", "Japan", "Korea", "Thailand"],
                answer: "Japan"
            },
            {
                question: "Which country uses the currency",
                keynote: '"Forint" ?',
                option: ["Poland", "Hungary", "Romania", "Czechia"],
                answer: "Hungary"
            },
            {
                question: "Which desert is the largest hot desert in the",
                keynote: "World ?",
                option: ["Sahara", "Kalahari", "Gobi", "Thar"],
                answer: "Sahara"
            },
            {
                question: "Which ocean is the deepest in the",
                keynote: "World ?",
                option: ["Atlantic", "Indian", "Arctic", "Pacific"],
                answer: "Pacific"
            },
            {
                question: "Which country has the highest number of UNESCO",
                keynote: "World Heritage Sites ?",
                option: ["China", "Spain", "Italy", "India"],
                answer: "Italy"
            },
            {
                question: "Which country has the longest coastline in the",
                keynote: "World ?",
                option: ["Australia", "Russia", "Canada", "Indonesia"],
                answer: "Canada"
            },
            {
                question: "Which country completely surrounds",
                keynote: "Another country ?",
                option: ["Italy", "South Africa", "Spain", "Switzerland"],
                answer: "South Africa"
            },
            {
                question: "Which city is located on",
                keynote: "Two continents ?",
                option: ["Istanbul", "Athens", "Moscow", "Cairo"],
                answer: "Istanbul"
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
                question: "Who performs",
                keynote: "Songs ?",
                option: ["Dancer", "Singer", "Actor", "Composer"],
                answer: "Singer"
            },
            {
                question: "Which instrument belongs to the",
                keynote: "String family ?",
                option: ["Flute", "Drum", "Guitar", "Trumpet"],
                answer: "Guitar"
            },
            {
                question: "Which term defines the",
                keynote: "Speed of music ?",
                option: ["Pitch", "Tempo", "Scale", "Dynamics"],
                answer: "Tempo"
            },
            {
                question: "Which family does the",
                keynote: "Violin belong to ?",
                option: ["Brass", "Woodwind", "Percussion", "Strings"],
                answer: "Strings"
            },
            {
                question: "Which clef is also known as",
                keynote: "G clef ?",
                option: ["Bass", "Alto", "Treble", "Tenor"],
                answer: "Treble"
            },
            {
                question: "How many notes are there in a",
                keynote: "Standard scale ?",
                option: ["Five", "Six", "Seven", "Eight"],
                answer: "Seven"
            },
            {
                question: "Which music genre is",
                keynote: "Electronic and dance-based ?",
                option: ["Jazz", "Rock", "EDM", "Classical"],
                answer: "EDM"
            },
            {
                question: "Which instrument is mainly used to",
                keynote: "Keep rhythm ?",
                option: ["Violin", "Piano", "Drum", "Flute"],
                answer: "Drum"
            },
            {
                question: "What does the term",
                keynote: "Allegro indicate ?",
                option: ["Slow", "Medium", "Fast", "Very slow"],
                answer: "Fast"
            },
            {
                question: "Which instrument family produces sound by",
                keynote: "Blowing air ?",
                option: ["Strings", "Brass", "Percussion", "Keyboard"],
                answer: "Brass"
            },
            {
                question: "Which note duration is the",
                keynote: "Longest ?",
                option: ["Quarter", "Half", "Whole", "Eighth"],
                answer: "Whole"
            },
            {
                question: "Which instrument does NOT",
                keynote: "Use a bow ?",
                option: ["Violin", "Cello", "Guitar", "Viola"],
                answer: "Guitar"
            },
            {
                question: "Which musical term refers to",
                keynote: "Loudness ?",
                option: ["Pitch", "Tempo", "Dynamics", "Scale"],
                answer: "Dynamics"
            },
            {
                question: "Which scale uses",
                keynote: "Five notes ?",
                option: ["Major", "Minor", "Pentatonic", "Chromatic"],
                answer: "Pentatonic"
            },
            {
                question: "Which device converts electrical signals",
                keynote: "Into sound ?",
                option: ["Microphone", "Speaker", "Amplifier", "Mixer"],
                answer: "Speaker"
            },
            {
                question: "Which composer became",
                keynote: "Deaf later in life ?",
                option: ["Mozart", "Bach", "Chopin", "Beethoven"],
                answer: "Beethoven"
            },
            {
                question: "What term means gradual increase in",
                keynote: "Volume ?",
                option: ["Diminuendo", "Crescendo", "Staccato", "Legato"],
                answer: "Crescendo"
            },
            {
                question: "What is the standard",
                keynote: "Concert pitch ?",
                option: ["A 432 Hz", "A 440 Hz", "C 256 Hz", "G 392 Hz"],
                answer: "A 440 Hz"
            },
            {
                question: "Which instrument is classified as both",
                keynote: "String and percussion ?",
                option: ["Piano", "Harp", "Guitar", "Violin"],
                answer: "Piano"
            },
            {
                question: "Which musical term means playing",
                keynote: "Notes smoothly connected ?",
                option: ["Staccato", "Legato", "Accent", "Fermata"],
                answer: "Legato"
            },
            {
                question: "Which Indian classical system is based on",
                keynote: "Ragas ?",
                option: ["Carnatic", "Western", "Jazz", "Blues"],
                answer: "Carnatic"
            }
        ]
    ]

    function showQuiz() {
        mainDiv.style.display = "none";
        quizDiv.style.display = "initial";
        progressBarLoad.style.width = "0%";
        progressBarNumber.textContent = "0";
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
            sumbitButton.onclick = function () {
                quizDiv.style.display = "none";
                resultDiv.style.display = "initial";
                answerCheck();
                displayResult();
                analysisHandling();
                resetFunction();
                correctAnswer = 0;
            }
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

  
    // Add Event Listner....

    featureContainer.forEach((feature) => {
        feature.addEventListener("click", showNotification);
    });

    playButton.addEventListener("click", () => {
        mainDiv.style.display = "initial";
        bodyDiv.style.display = "none";
        navContentAll.forEach((content) => {
            if(content.classList.contains("nav-content-quest")) {
                content.classList.add("nav-active");
                content.lastElementChild.style.color = "white";
            } 

            content.addEventListener("click", () => {
                if (content.classList.contains("nav-content-home")) {
                    mainDiv.style.display = "none";
                    bodyDiv.style.display = "initial";
                    return;
                }

                if (!content.classList.contains("nav-content-quest")) {
                    showNotification();
                }
            })
        })
    });

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
            lenghtFinder = quizData[categoryIndex].length;
            totalLevel.textContent = lenghtFinder;
            mediumMode = Math.floor(lenghtFinder/2);
            restLength = lenghtFinder - mediumMode;
            easyMode = Math.floor(restLength/2);
            modeHandling();
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
                progressBarLoad.style.width = `${(index + 1) * (100/lenghtFinder)}%`;
                progressBarNumber.textContent = index + 1;
                cancelButton.style.visibility = "hidden";
                lockAnswer = true;
                renderResult();
                return;
            }
            
            goToNextQuestion();
            modeHandling();
            progressBarLoad.style.width = `${index * (100/lenghtFinder)}%`;
            progressBarNumber.textContent = index;
        }, 400)
    });

    cancelButton.addEventListener("click", function() {
        mainDiv.style.display = "initial";
        quizDiv.style.display = "none";
        sumbitButton.style.display = "none";
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
        cancelButton.style.visibility = "visible"
        displayPoints.textContent = "0";
        progressBarLoad.style.width = "0%";
        selectedAnswer = [];
        index = 0;
        questionIndex = 0;
        correctAnswer = 0;
        categoryIndex = 0;
        points = 0;
        click = 0;
        isAnswered = false;
        lockAnswer = false;
        resultImage.innerHTML = "";
        analysisBody.innerHTML = "";
        resetFunction();
        optionReset();
    })

    homeButton.addEventListener("click", function() {
        resultDiv.style.display = "none";
        quizDiv.style.display = "none";
        mainDiv.style.display = "none";
        bodyDiv.style.display = "initial"
        sumbitButton.style.display = "none";
        nextquestionButton.style.display = "flex";
        nextquestionButton.style.visibility = "hidden";
        cancelButton.style.visibility = "visible"
        displayPoints.textContent = "0";
        progressBarLoad.style.width = "0%";
        selectedAnswer = [];
        index = 0;
        questionIndex = 0;
        correctAnswer = 0;
        categoryIndex = 0;
        points = 0;
        click = 0;
        isAnswered = false;
        lockAnswer = false;
        resultImage.innerHTML = "";
        analysisBody.innerHTML = "";
        resetFunction();
        optionReset();
    })

    analysisBtn.addEventListener("click", function() {
        analysisDiv.style.display = "initial";
        resultDiv.style.filter = "blur(5px)";
    })

    cancelAnalysis.onclick = function() {
        analysisDiv.style.display = "none";
        resultDiv.style.filter = "none";
    }

// End of event listner....

    function modeHandling() {
        if(index < easyMode) {
            modeDiv.textContent = "Easy";
            modeDiv.style.background = "linear-gradient(135deg, #38fe10, #9af201, #efff0e)";
        } else if(index < (easyMode + mediumMode)) {
            modeDiv.textContent = "Medium";
            modeDiv.style.background = "linear-gradient(135deg, rgb(255 52 0), rgb(242 148 1), rgb(251 255 0))";
        } else if(index < quizData[categoryIndex].length) {
            modeDiv.textContent = "Hard";
            modeDiv.style.background = "linear-gradient(135deg, rgb(98 0 0), rgb(224 0 0), rgb(255 93 93))";
        }
        
    }

    function answerMark() {
        answerButtonDiv.forEach(answer => {
            answer.addEventListener("click", function () {
                
                if(lockAnswer) return;

                answer.style.backgroundColor = "#ffe600"
                answer.style.boxShadow = "0 7px 0 #e1d400"
                answer.firstElementChild.style.backgroundColor = "#fff174"
                optionReset(this);
                answerColor = "red";
                optionVariable = this;
                
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
        modeDiv.textContent = "";
        modeDiv.style.background = "";
    }

    function answerCheck() {
        for(let i = 0; i < quizData[categoryIndex].length; i++)
            if(quizData[categoryIndex][i].answer === selectedAnswer[i]) {
                correctAnswer++;
            };
    }
    
    function displayResult() {
        resultMarks.textContent = correctAnswer;
        totalMarks.textContent = lenghtFinder;
        let accuracyRate = Math.floor(correctAnswer * (100/lenghtFinder));
        accuracy.textContent = `${accuracyRate}%`;
        displayTime.textContent = `${m}:${s}`;

            let resultImg = document.createElement("img");
            console.log(quizData[categoryIndex].length);
            if(accuracyRate === 0) {
                resultImg.setAttribute("src", "quest-icon/result-0.png");
            } else if(accuracyRate <= 25) {
                resultImg.setAttribute("src", "quest-icon/result-quarter.png");
            } else if(accuracyRate < 50) {
                resultImg.setAttribute("src", "quest-icon/below-half.png");
            } else if(accuracyRate === 50) {
                resultImg.setAttribute("src", "quest-icon/result-5.png");
            } else if(accuracyRate > 50 && accuracyRate < 75) {
                resultImg.setAttribute("src", "quest-icon/above-half.png");
            } else if(accuracyRate >= 75) {
                resultImg.setAttribute("src", "quest-icon/below-goal.png");
            } else if(accuracyRate === 100) {
                resultImg.setAttribute("src", "quest-icon/reach-goal.png");
            };
            resultImg.alt = "Result Image";
            resultImage.appendChild(resultImg);
        
    }

    function analysisHandling() {
        for(let i = 0; i < quizData[categoryIndex].length; i++) {
            const quizAnalysisBox = document.createElement("div");
            const questionAnalysis = document.createElement("div");
            const answerAnalysis = document.createElement("div");
            const correctAnswer = document.createElement("div");
            const userAnswer = document.createElement("div");

            quizAnalysisBox.classList.add("quiz-analysis-box");
            questionAnalysis.classList.add("question-anlalysis");
            answerAnalysis.classList.add("answer-analysis");
            correctAnswer.classList.add("correct-answer");
            userAnswer.classList.add("user-answer");

            if(quizData[categoryIndex][i].answer === selectedAnswer[i]) {
                userAnswer.style.background = "linear-gradient(180deg, #ffffffc2, #46de48a1)";
            } else {
                userAnswer.style.background = "linear-gradient(180deg, #ffffffc2, #de4646a1)";
            }

            questionAnalysis.innerHTML = `<h3>${quizData[categoryIndex][i].question + " " + quizData[categoryIndex][i].keynote}</h3>`
            correctAnswer.innerHTML = `<h4>${quizData[categoryIndex][i].answer}</h4>`;
            userAnswer.innerHTML = `<h4>${selectedAnswer[i]}</h4>`

            answerAnalysis.appendChild(correctAnswer);
            answerAnalysis.appendChild(userAnswer);
            quizAnalysisBox.appendChild(questionAnalysis);
            quizAnalysisBox.appendChild(answerAnalysis);
            analysisBody.appendChild(quizAnalysisBox);
        }
    }

    function showNotification() {
        notificationDisplay.style.display = "flex";

        setTimeout(() => {
            notificationDisplay.style.display = "none";
        }, 3000)
    }

});
