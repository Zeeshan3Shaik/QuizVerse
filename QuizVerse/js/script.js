const questions = {
"Sports": [
  {question: "How many players are there in a soccer team on the field?", options: ["9", "10", "11", "12"], answer: 2},
  {question: "What sport uses a puck?", options: ["Football", "Basketball", "Ice Hockey", "Tennis"], answer: 2},
  {question: "Which country won the FIFA World Cup in 2018?", options: ["Brazil", "Germany", "France", "Argentina"], answer: 2},
  {question: "How long is an Olympic sprint race (shortest)?", options: ["100m", "200m", "400m", "800m"], answer: 0},
  {question: "Which sport is known as the 'king of sports'?", options: ["Cricket", "Soccer", "Golf", "Baseball"], answer: 1},
  {question: "In tennis, what is the term for zero score?", options: ["Love", "Nil", "Zero", "Duck"], answer: 0},
  {question: "How many rings are there on the Olympic flag?", options: ["4", "5", "6", "7"], answer: 1},
  {question: "What is the maximum score in a single frame of snooker?", options: ["147", "155", "180", "200"], answer: 0},
  {question: "Michael Jordan is famous for which sport?", options: ["Football", "Tennis", "Basketball", "Baseball"], answer: 2},
  {question: "Which country hosts the Tour de France?", options: ["Italy", "Germany", "France", "Spain"], answer: 2}
  ],
"Geography": [
  {question: "Which is the largest continent by area?", options: ["Africa", "Asia", "Europe", "North America"], answer: 1},
  {question: "Which country has the largest population?", options: ["India", "China", "United States", "Russia"], answer: 1},
  {question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: 1},
  {question: "Mount Everest is located in which mountain range?", options: ["Andes", "Alps", "Himalayas", "Rockies"], answer: 2},
  {question: "Which ocean is the deepest?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], answer: 1},
  {question: "Which city has the colosseum?", options: ["Athens", "Venice", "Rome", "Berlin"], answer: 2},
  {question: "The Sahara desert is mainly in which continent?", options: ["Asia", "Africa", "Europe", "Australia"], answer: 1},
  {question: "Which country is referred to as the Land of the Rising Sun?", options: ["China", "Thailand", "Japan", "South Korea"], answer: 2},
  {question: "Which US state is famous for having the Grand Canyon?", options: ["Nevada", "California", "Arizona", "Utah"], answer: 2},
  {question: "The river Thames flows through which city?", options: ["Paris", "London", "Berlin", "Madrid"], answer: 1}
  ],
"Countries and Capitals": [
  {question: "What is the capital of Canada?", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"], answer: 1},
  {question: "What is the capital of Japan?", options: ["Tokyo", "Osaka", "Kyoto", "Sapporo"], answer: 0},
  {question: "What is the capital of Brazil?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], answer: 2},
  {question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: 2},
  {question: "What is the capital of France?", options: ["Lyon", "Paris", "Marseille", "Nice"], answer: 1},
  {question: "What is the capital of India?", options: ["Mumbai", "Chennai", "New Delhi", "Kolkata"], answer: 2},
  {question: "What is the capital of United States Of America?", options: ["New York", "Washington D.C", "Chicago", "Los Angeles"], answer: 1},
  {question: "What is the capital of Egypt?", options: ["Alexandria", "Giza", "Cairo", "Luxor"], answer: 2},
  {question: "What is the capital of Russia?", options: ["St. Petersburg", "Moscow", "Novosibirsk", "Kazan"], answer: 1},
  {question: "What is the capital of Spain?", options: ["Barcelona", "Madrid", "Seville", "Valencia"], answer: 1}
  ],
"Video Games": [
  {question: "Which game features the character Mario?", options: ["Sonic", "Halo", "Super Mario Bros.", "Crash Bandicoot"], answer: 2},
  {question: "Which company created the PlayStation console?", options: ["Sony", "Microsoft", "Nintendo", "Sega"], answer: 0},
  {question: "What is the main goal in Tetris?", options: ["Shoot enemies", "Solve puzzles", "Stack blocks", "Race cars"], answer: 2},
  {question: "Which game is known for the phrase 'Creeper, oh man'?", options: ["Roblox", "Minecraft", "Fortnite", "PUBG"], answer: 1},
  {question: "Which animal is Sonic?", options: ["Rabbit", "Hedgehog", "Fox", "Cat"], answer: 1},
  {question: "Which online game became famous for the 'Battle Royale' mode?", options: ["Minecraft", "Overwatch", "Fortnite", "League of Legends"], answer: 2},
  {question: "Which game revolutionized car racing?", options: ["Forza Horizon", "Need For Speed", "Asphalt", "Grand Turismo"], answer: 1},
  {question: "In which game would you find the character Steve?", options: ["Call of Duty", "Minecraft", "Final Fantasy", "Overwatch"], answer: 1},  
  {question: "What does MMORPG stand for?", options: ["Massive Multiplayer Online Role Playing Game", "Monsters May Occupy Rainy Playground Gym", "Mega Multiplayer Online Racing Game", "Matrix Map Object Rendering Protocol"], answer: 0},
  {question: "Which game series does 'Link' belong to?", options: ["Final Fantasy", "Halo", "The Legend of Zelda", "Resident Evil"], answer: 2}
  ],
"Anime": [
  {question: "Who is the main character in 'Naruto'?", options: ["Sasuke Uchiha", "Naruto Uzumaki", "Sakura Haruno", "Kakashi Hatake"], answer: 1},
  {question: "Which anime features dragon balls?", options: ["One Piece", "Attack on Titan", "Dragon Ball", "Bleach"], answer: 2},
  {question: "In 'Pokémon', who is Pikachu's trainer?", options: ["Brock", "Ash", "Misty", "James"], answer: 1},
  {question: "What is the profession of Light Yagami in 'Death Note'?", options: ["Detective", "Student", "Teacher", "Doctor"], answer: 1},
  {question: "Which anime is set in a world of pirates searching for treasure?", options: ["Naruto", "One Piece", "Hunter x Hunter", "Fairy Tail"], answer: 1},
  {question: "What is the main goal of Edward Elric in 'Fullmetal Alchemist'?", options: ["Become Hokage", "Recover his body", "Find Dragon Balls", "Catch all Pokémon"], answer: 1},
  {question: "Which anime has characters named Goku, Vegeta, and Frieza?", options: ["Dragon Ball", "One Piece", "Naruto", "Bleach"], answer: 0},
  {question: "What is the name of the monstrous creatures in 'Attack on Titan'?", options: ["Demons", "Titans", "Shinigami", "Pokémon"], answer: 1},
  {question: "Who is the main protagonist in 'Jujutsu Kaisen'?", options: ["Eren Yeager", "Satoro Gojo", "Yuji Itadori", "Serizawa"], answer: 2},
  {question: "In 'Demon Slayer', what is the power system called?", options: ["Ki", "Breathing Style", "Chakra", "Cursed Ernergy"], answer: 1}
  ],
"Movies": [
  {question: "Who played the lead role in 'Pathaan'?", options: ["Salman Khan", "Shah Rukh Khan", "Hrithik Roshan", "Aamir Khan"], answer: 1},
  {question: "Which actress starred opposite Ranbir Kapoor in 'Brahmāstra: Part One – Shiva'?", options: ["Katrina Kaif", "Deepika Padukone", "Alia Bhatt", "Kiara Advani"], answer: 2},
  {question: "In 'Gadar 2', who plays the iconic character Tara Singh?", options: ["Sunny Deol", "Sunny Kaushal", "Akshay Kumar", "Ajay Devgn"], answer: 0},
  {question: "'Jawan' belongs to which movie genre?", options: ["Romance", "Action Thriller", "Comedy", "Horror"], answer: 1},
  {question: "Which film features the song 'Kesariya'?", options: ["Brahmāstra", "Jawan", "Pathaan", "Rocky Aur Rani Kii Prem Kahaani"], answer: 0},
  {question: "Who directed 'Rocky Aur Rani Kii Prem Kahaani'?", options: ["Karan Johar", "Sanjay Leela Bhansali", "Rajkumar Hirani", "Farhan Akhtar"], answer: 0},
  {question: "Which movie stars Kartik Aaryan as Rooh Baba?", options: ["Bhool Bhulaiyaa 2", "Freddy", "Shehzada", "Satyaprem Ki Katha"], answer: 0},
  {question: "Who played the female lead in 'Animal' (2023)?", options: ["Kareena Kapoor", "Kiara Advani", "Rashmika Mandanna", "Alia Bhatt"], answer: 2},
  {question: "Which 2023 movie stars Salman Khan as a RAW agent named Tiger?", options: ["Pathaan", "Ek Tha Tiger", "Tiger 3", "Race 3"], answer: 2},
  {question: "In '3 Idiots', what is Rancho’s real name?", options: ["Raju Rastogi", "Chatur Ramalingam", "Phunsukh Wangdu", "Farhan Qureshi"], answer: 2}
  ],
"Science": [
  {question: "What is the chemical symbol for water?", options: ["WO", "H2O", "O2H", "HO2"], answer: 1},
  {question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: 1},
  {question: "What is the process by which plants make food using sunlight?", options: ["Photosynthesis", "Respiration", "Digestion", "Fermentation"], answer: 0},
  {question: "What gas do humans need to breathe to survive?", options: ["Nitrogen", "Carbon Dioxide", "Oxygen", "Helium"], answer: 2},
  {question: "What organ pumps blood through the human body?", options: ["Liver", "Lungs", "Heart", "Kidneys"], answer: 2},
  {question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Marie Curie"], answer: 2},
  {question: "Which is the hardest natural substance on Earth?", options: ["Gold", "Diamond", "Iron", "Quartz"], answer: 1},
  {question: "What part of the cell contains genetic material?", options: ["Cytoplasm", "Nucleus", "Cell wall", "Mitochondria"], answer: 1},
  {question: "What device is used to measure temperature?", options: ["Barometer", "Hygrometer", "Thermometer", "Microscope"], answer: 2},
  {question: "Lightning is caused by which of the following?", options: ["Wind", "Static electricity", "Rain", "Gravity"], answer: 1}
  ],
"Music": [
  {question: "Who is known as the 'King of Pop'?", options: ["Elvis Presley", "Michael Jackson", "Freddie Mercury", "Prince"], answer: 1},
  {question: "Which instrument has 88 keys?", options: ["Guitar", "Drum", "Piano", "Violin"], answer: 2},
  {question: "Which famous band was John Lennon a member of?", options: ["Queen", "The Beatles", "Pink Floyd", "The Rolling Stones"], answer: 1},
  {question: "Who is the famous music band that made the OST for Your Name?", options: ["BTS", "Boyzone", "Radwimps", "The Fat Rat"], answer: 2},
  {question: "What music genre is Taylor Swift most famous for?", options: ["Country & Pop", "Jazz", "Metal", "Hip Hop"], answer: 0},
  {question: "Who is the composer of 'Für Elise'?", options: ["Mozart", "Beethoven", "Bach", "Handel"], answer: 1},
  {question: "Which instrument does a drummer play?", options: ["Piano", "Violin", "Drums", "Flute"], answer: 2},
  {question: "Which singer released the album 'Thriller'?", options: ["Whitney Houston", "Madonna", "Michael Jackson", "Prince"], answer: 2},
  {question: "What do you call a group of three musicians?", options: ["Quartet", "Trio", "Duo", "Solo"], answer: 1},
  {question: "Who is famous for the song 'Shape of You'?", options: ["Ed Sheeran", "Justin Bieber", "Shawn Mendes", "Drake"], answer: 0}
  ],
"Technology": [
  {question: "Who is known as the founder of Microsoft?", options: ["Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg"], answer: 1},
  {question: "What does 'CPU' stand for?", options: ["Central Processing Unit", "Computer Power Utility", "Core Processing Usage", "Control Program Utility"], answer: 0},
  {question: "Which device is used to input text and commands into a computer?", options: ["Monitor", "Keyboard", "Printer", "Speaker"], answer: 1},
  {question: "Which social media platform is known for tweets?", options: ["Instagram", "Facebook", "Twitter", "Snapchat"], answer: 2},
  {question: "What does 'URL' stand for?", options: ["Universal Resource Locator", "Uniform Resource Locator", "United Routing Link", "User Reference Line"], answer: 1},
  {question: "Who is known as the co-founder of Apple?", options: ["Larry Page", "Steve Wozniak", "Tim Cook", "Bill Gates"], answer: 1},
  {question: "Which is the most commonly used operating system for smartphones?", options: ["Linux", "Windows", "Android", "DOS"], answer: 2},
  {question: "What technology is used for wireless internet?", options: ["Bluetooth", "Wi-Fi", "Ethernet", "USB"], answer: 1},
  {question: "What is the name of Google’s mobile operating system?", options: ["iOS", "Windows", "Android", "Blackberry OS"], answer: 2},
  {question: "What does HTML stand for?", options: ["Hyperlinks Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Hybrid Text Modular Language"], answer: 2}
  ],
"Literature": [
  {question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], answer: 1},
  {question: "What is the title of J.K. Rowling's first Harry Potter book?", options: ["Chamber of Secrets", "Order of the Phoenix", "Sorcerer's Stone", "Goblet of Fire"], answer: 2},
  {question: "Who is the author of 'Pride and Prejudice'?", options: ["Emily Brontë", "Jane Austen", "Mary Shelley", "Louisa May Alcott"], answer: 1},
  {question: "Which novel includes the character Atticus Finch?", options: ["1984", "To Kill a Mockingbird", "Moby-Dick", "The Great Gatsby"], answer: 1},
  {question: "Who wrote 'Don Quixote'?", options: ["Miguel de Cervantes", "Gabriel García Márquez", "Pablo Neruda", "Isabel Allende"], answer: 0},
  {question: "Which book features a young girl named Alice who falls into a fantastical world?", options: ["Alice's Adventures in Wonderland", "Heidi", "Anne of Green Gables", "Matilda"], answer: 0},
  {question: "Who is the author of the poem 'The Raven'?", options: ["Walt Whitman", "Edgar Allan Poe", "Emily Dickinson", "Robert Frost"], answer: 1},
  {question: "Who wrote ‘The Hobbit’ and ‘The Lord of the Rings’?", options: ["J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin", "Philip Pullman"], answer: 0},
  {question: "Which famous detective was created by Arthur Conan Doyle?", options: ["Hercule Poirot", "Nancy Drew", "Sherlock Holmes", "Miss Marple"], answer: 2},
  {question: "Which children's book is about a bear from Peru who loves marmalade?", options: ["Paddington Bear", "Winnie-the-Pooh", "The Jungle Book", "Peter Rabbit"], answer: 0}
  ],
};

let currentTopic = "";
let currentQuestions = [];
let currentIndex = 0;
let score = 0;

function startQuiz(topic) {
  currentTopic = topic;
  currentQuestions = questions[topic];
  currentIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const main = document.getElementById('main-content');
  if (currentIndex < 10) {
    const q = currentQuestions[currentIndex];
    main.innerHTML = `
      <div class="quiz-card">
        <div class="progress-bar" style="width:${(currentIndex+1)*10}%"></div>
        <div class="question">${q.question}</div>
        ${q.options.map((opt, i) =>
          `<button class="option" onclick="selectOption(${i})">${opt}</button>`
        ).join('')}
      </div>
    `;
  } else {
    showResult();
  }
}

function selectOption(idx) {
  if (idx === currentQuestions[currentIndex].answer) {
    score++;
  }
  currentIndex++;
  showQuestion();
}

function showResult() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="result-panel">
      <div class="score">You scored ${score}/10!</div>
      <button class="retry-btn" onclick="startQuiz(currentTopic)">Retry</button>
      <button class="home-btn" onclick="goHome()">Home</button>
    </div>
  `;
}

function goHome() {
  // Re-render the homepage grid
  const gridHTML = `
    <div class="topics-grid">
      <button class="topic-btn sports" onclick="startQuiz('Sports')">SPORTS</button>
      <button class="topic-btn geography" onclick="startQuiz('Geography')">GEOGRAPHY</button>
      <button class="topic-btn countries" onclick="startQuiz('Countries and Capitals')">COUNTRIES AND CAPITALS</button>
      <button class="topic-btn videogames" onclick="startQuiz('Video Games')">VIDEO GAMES</button>
      <button class="topic-btn anime" onclick="startQuiz('Anime')">ANIME</button>
      <button class="topic-btn movies" onclick="startQuiz('Movies')">MOVIES</button>
      <button class="topic-btn science" onclick="startQuiz('Science')">SCIENCE</button>
      <button class="topic-btn music" onclick="startQuiz('Music')">MUSIC</button>
      <button class="topic-btn technology" onclick="startQuiz('Technology')">TECHNOLOGY</button>
      <button class="topic-btn literature" onclick="startQuiz('Literature')">LITERATURE</button>
    </div>
  `;
  document.getElementById('main-content').innerHTML = gridHTML;
}