# Quiz Quest 🎯

Quiz Quest is a **responsive and gamified quiz platform** built using modern web technologies.  
It features dynamic questions, difficulty levels, real-time score tracking, and detailed result analysis.

This project is ideal for **learning JavaScript**, **practice quizzes**, and **portfolio showcasing**.

---

## 🚀 Features

- 🧠 Multiple-choice questions  
- 📊 Real-time score calculation  
- 🎯 Accuracy percentage display  
- 🖼️ Result screen with performance-based images  
- 📈 Detailed result analysis  
- 🎚️ Difficulty levels (Easy / Medium / Hard)  
- ⏱️ Timer-based questions  
- 📱 Fully responsive design  

---

## 🛠️ Tech Stack

- **HTML** – Structure  
- **CSS** – Styling and responsiveness  
- **JavaScript** – Logic, interactivity, and state handling  

---

## 📂 Project Structure

```text
quiz-quest/
├── index.html
├── style.css
├── script.js
└── quest-icon/
    └── images/
```
---

## 📊 Result Analysis

At the end of the quiz, users can view:

- ✅ Total correct answers  
- 🎯 Accuracy percentage  
- 🖼️ Performance-based result image  
- 🏷️ Motivational heading based on score range  
- ❌ Review of incorrect answers  
- ✔️ Correct answers shown for comparison  

This detailed analysis helps users clearly understand their **strengths**, identify **mistakes**, and learn the **correct answers** for better improvement.

---

## 🔮 Future Enhancements

- 🏆 **Leaderboard System**  
  Compare scores with other users and track top performers.

- 🌙 **Dark Mode**  
  A visually comfortable dark theme for night-time usage.

- 📂 **Category-Based Quizzes**  
  Allow users to choose quizzes by subject or topic.

- 👤 **User Profiles**  
  Personalized profiles to track quiz history, scores, accuracy, and progress over time.

---
# Component 📂
---

## 🖼️ Home Component

```html
    <div id="body">
        <div class="body-inner-div">
            <div class="container">
            <div class="owl-image">
                <img
                src="quest-icon/quiz-owl.png"
                alt="Owl Image"
                class="owl-img"
                />
            </div>
            <div class="play-container">
                <div class="play-heading">
                <p class="first-word heading-word">Quiz</p>
                <p class="second-word heading-word">Quest</p>
                </div>
                <div class="play-sub-heading">THE ULTIMATE CHALLENGE</div>
                <div class="play-button">
                <button>PLAY</button>
                <img
                    src="quest-icon/play-button.png"
                    alt="Play Button"
                    width="30"
                />
                </div>
            </div>
            </div>
            <div class="features">
            <div class="rank-container feature-container">
                <div class="rank-icon feature-icon">
                <img src="quest-icon/rank.png" alt="Rank Icon" width="25" />
                </div>
                <p>RANKS</p>
            </div>
            <div class="setting-container feature-container">
                <div class="setting-icon feature-icon">
                <img
                    src="quest-icon/setting.png"
                    alt="Setting Icon"
                    width="25"
                />
                </div>
                <p>SETTING</p>
            </div>
            <div class="shop-container feature-container">
                <div class="shop-icon feature-icon">
                <img src="quest-icon/shop.png" alt="Shop Icon" width="25" />
                </div>
                <p>SHOP</p>
            </div>
            </div>
        </div>
    </div>
```

---

## 📊 Category Component

```html
    <div id="main">
      <div class="main-inner-div">
        <div class="nav">
          <div class="nav-logo">
            <div class="nav-svg">
              <img src="quest-icon/nav-logo.png" alt="Quiz Icon" />
            </div>
            <div class="nav-text">QuestQuiz</div>
          </div>
          <div class="nav-content">
            <div class="nav-content-home nav-content-all">
              <div class="home-svg">
                <img src="quest-icon/main-home.png" alt="Home Image" width="20">
              </div>
              <div class="home-text text">Home</div>
            </div>
            <div class="nav-content-quest nav-content-all">
              <div class="quest-svg">
                <img src="quest-icon/games.png" alt="Quest">
              </div>
              <div class="quest-text text">Quests</div>
            </div>
            <div class="nav-content-rank nav-content-all">
              <div class="rank-svg">
                <img src="quest-icon/leaderboard.png" alt="Leaderboard" width="24">
              </div>
              <div class="rank-text text">Ranks</div>
            </div>
            <div class="nav-content-setting nav-content-all">
              <div class="setting-svg">
                <img src="quest-icon/main-setting.png" alt="Setting" width="21">
              </div>
              <div class="setting-text text">Setting</div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="select-quiz-heading">
            <div class="select-quiz-main-heading">
              <p>Choose Your</p>
              <p>Quest!</p>
            </div>
            <div class="select-quiz-sub-heading">
              Select a category to begin your adventure
            </div>
          </div>
          <div class="select-content-container">
            <div class="select-content space">
              <div class="content-logo">
                <img src="quest-icon/rocket.png" alt="Space" />
              </div>
              <div class="content-text space-text">Space</div>
              <div class="content-quest space-quest"><span>15</span> QUESTS</div>
            </div>
            <div class="select-content animal">
              <div class="content-logo">
                <img src="quest-icon/paws.png" alt="Animal" />
              </div>
              <div class="content-text animal-text">Animals</div>
              <div class="content-quest animal-quest"><span>20</span> QUESTS</div>
            </div>
            <div class="select-content science">
              <div class="content-logo">
                <img src="quest-icon/tube.png" alt="Science" />
              </div>
              <div class="content-text science-text">Science</div>
              <div class="content-quest science-quest">
                <span>17</span> QUESTS
              </div>
            </div>
            <div class="select-content food">
              <div class="content-logo">
                <img src="quest-icon/pizza.png" alt="Food" />
              </div>
              <div class="content-text food-text">Food</div>
              <div class="content-quest food-quest"><span>12</span> QUESTS</div>
            </div>
            <div class="select-content travel">
              <div class="content-logo">
                <img src="quest-icon/map.png" alt="Travel" />
              </div>
              <div class="content-text travel-text">Travel</div>
              <div class="content-quest travel-quest"><span>15</span> QUESTS</div>
            </div>
            <div class="select-content music">
              <div class="content-logo">
                <img src="quest-icon/musical-note.png" alt="Music" />
              </div>
              <div class="content-text music-text">Music</div>
              <div class="content-quest music-quest"><span>22</span> QUESTS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
```

---

## 🧠 Quiz Component

```html
    <div id="quiz">
      <div class="quiz-inner-div">
        <div class="head">
          <div class="cancel">
            <img src="quest-icon/close.png" alt="Cancel" width="20">
          </div>
          <div class="progress-bar">
            <div class="progress-bar-head-box">
              <div class="progress-bar-heading-box">
                <img src="quest-icon/crown.png" alt="Progress Bar" />
                <div class="progress-bar-heading">Progress</div>
              </div>
              <div class="level">LEVEL <span id="single-level">5</span>/<span id="total-level">10</span></div>
            </div>
            <div class="progress-bar-loader-box">
              <div class="progress-bar-loader"></div>
            </div>
          <div class="mode"><!--Easy--></div>
          </div>
          <div class="points-box">
            <img src="quest-icon/star.png" alt="Points" />
            <div class="points-number">1250</div>
          </div>
        </div>
        <div class="body">
          <div class="question-box">
            <div class="question">
              <!-- Which planet is known as the <span id="key-word">Red Planet</span> ? -->
              <h1></h1>
            </div>
          </div>
          <div class="answer-box">
            <div class="answer-1 answers">
              <div class="option-box"><h1>A</h1></div>
              <div class="answer-text"><h1><!--Mars--></h1></div>
            </div>
            <div class="answer-2 answers">
              <div class="option-box"><h1>B</h1></div>
              <div class="answer-text"><h1><!--Venus--></h1></div>
            </div>
            <div class="answer-3 answers">
              <div class="option-box"><h1>C</h1></div>
              <div class="answer-text"><h1><!--Jupiter--></h1></div>
            </div>
            <div class="answer-4 answers">
              <div class="option-box"><h1>D</h1></div>
              <div class="answer-text"><h1><!--Saturn--></h1></div>
            </div>
          </div>
        </div>
        <div class="foot">
          <div class="timer-box">
            <div class="timer-diagram">
              <div class="timer-image"><img src="quest-icon/clock.png" alt="Timer"></div>
            </div>
            <div class="timer">
              <div class="timer-heading">TIME REMAINING</div>
              <div class="timer-text">00:00</div>
            </div>
          </div>
          <div class="next-btn">
            <h3>Next</h3>
            <img src="quest-icon/arrow-right.png" alt="Next Button">
          </div>
          <div class="submit-btn">
            <h3>Submit</h3>
            <img src="quest-icon/arrow-right.png" alt="Next Button">
          </div>
        </div>
      </div>
    </div>
```

---

## 🎯 Result Component

```html
    <div id="result">
      <div class="result-inner-div">
        <div class="result-navbar">
          <div class="left-nav-box">
            <div class="back-svg-box">
              <img src="quest-icon/nav-logo.png" alt="Quiz Icon" />
            </div>
            <div class="result-nav-heading"><h1>Quiz Results</h1></div>
          </div>
          <div class="right-nav-box"> 
            <div class="analysis-box">
              <button>Analysis</button>
            </div>
          </div>
        </div>
        <div class="result-body">
          <div class="result-image">
            
          </div>
          <div class="result-content">
            <div class="result-marks">Score: <span id="marks">8</span>/<span id="total-marks"></span></div>
            <div class="result-context">
              <h1></h1>
              <h3></h3>
            </div>
            <div class="result-stats">
              <div class="time-left-box stats-box">
                <h3>TIME SPENT</h3>
                <h2>00:00</h2>
              </div>
              <div class="accuracy-box stats-box">
                <h3>ACCURACY</h3>
                <h2 id="accuracy">80%</h2>
              </div>
            </div>
            <div class="result-btn">
              <div class="play-again result-both-btn">
                <img src="quest-icon/reload.png" alt="Try Again">
                <h1>PLAY AGAIN</h1>
              </div>
              <div class="home result-both-btn">
                <img src="quest-icon/home.png" alt="Home Icon">
                <h1>HOME</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
```