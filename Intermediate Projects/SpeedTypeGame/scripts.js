const typingText = document.querySelector('.typing-text');
const input = document.querySelector('.wrapper .input-field');
const time = document.querySelector('.time span b');
const mistakes = document.querySelector('.mistake span');
const wpm = document.querySelector('.wpm span');
const cpm = document.querySelector('.cpm span');
const btn = document.querySelector('button');

let timer;
let maxTime = 75;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;

function loadParaghraph() {
    const paragraphs = [
        "The quick brown fox jumps over the lazy dog. She sells seashells by the seashore. Peter Piper picked a peck of pickled peppers. How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
        "The rain in Spain stays mainly in the plain. A bird in the hand is worth two in the bush. All that glitters is not gold. Don't cry over spilled milk. Actions speak louder than words.",
        "Beauty is in the eye of the beholder. You can't judge a book by its cover. The early bird catches the worm. When life gives you lemons, make lemonade. Every cloud has a silver lining.",
        "The grass is always greener on the other side. Practice makes perfect. Two heads are better than one. Where there's a will, there's a way. Honesty is the best policy.",
        "The pen is mightier than the sword. An apple a day keeps the doctor away. You reap what you sow. Better late than never. When the going gets tough, the tough get going.",
        "A watched pot never boils. Rome wasn't built in a day. Fortune favors the bold. Out of sight, out of mind. A picture is worth a thousand words.",
        "Time heals all wounds. Absence makes the heart grow fonder. Every dog has its day. Beggars can't be choosers. The bigger they are, the harder they fall.",
        "The early bird gets the worm. You can't have your cake and eat it too. Curiosity killed the cat. The road to hell is paved with good intentions. Actions speak louder than words.",
        "Don't put all your eggs in one basket. The grass is always greener on the other side. Where there's smoke, there's fire. When in Rome, do as the Romans do. A penny saved is a penny earned.",
        "Better safe than sorry. Don't count your chickens before they hatch. All good things must come to an end. A stitch in time saves nine. The proof is in the pudding.",
        "A watched pot never boils. The squeaky wheel gets the grease. In for a penny, in for a pound. A penny for your thoughts. A picture paints a thousand words.",
        "A chain is only as strong as its weakest link. A change is as good as a rest. A leopard cannot change its spots. A little knowledge is a dangerous thing. A man who is his own lawyer has a fool for a client.",
        "A miss is as good as a mile. A nod is as good as a wink to a blind horse. A penny saved is a penny earned. A picture is worth a thousand words. A place for everything and everything in its place.",
        "A problem shared is a problem halved. A prophet is not recognized in his own land. A rising tide lifts all boats. A rolling stone gathers no moss. A stitch in time saves nine.",
        "A thing of beauty is a joy forever. A watched pot never boils. A word to the wise is enough. Absence makes the heart grow fonder. Actions speak louder than words.",
        "After a storm comes a calm. After all is said and done. All good things must come to an end. All is fair in love and war. All roads lead to Rome.",
        "All that glitters is not gold. All things come to those who wait. All things must pass. All work and no play makes Jack a dull boy. All's fair in love and war.",
        "All's well that ends well. An apple a day keeps the doctor away. An ounce of prevention is worth a pound of cure. Appearances can be deceiving. April showers bring May flowers.",
        "As you sow, so shall you reap. Ask a silly question and you'll get a silly answer. Asleep at the wheel. Barking up the wrong tree. Beauty is in the eye of the beholder.",
        "Beauty is only skin deep. Beggars can't be choosers. Better late than never. Better safe than sorry. Between a rock and a hard place."
    ];



    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    for (const char of paragraphs[randomIndex]) {
        console.log(char);
        typingText.innerHTML += `<span>${char}</span>`;
    }
    typingText.querySelectorAll('span')[0].classList.add('active');

    document.addEventListener("keydown", () => {
        input.focus();
    });
    typingText.addEventListener("click", () => {
        input.focus();
    })
}

function initTyping() {
    const char = typingText.querySelectorAll('span');
    const typedChar = input.value.charAt(charIndex);
    if (charIndex < char.length && timeLeft > 0) {

        if (!isTyping) {
            timer = setInterval(initTime, 1000);
            isTyping = true;
        }
        
        if (char[charIndex].innerText === typedChar) {
            char[charIndex].classList.add('correct');
            console.log('correct');
        } else {
            mistake++;
            char[charIndex].classList.add('incorrect');
            console.log('incorrect');
        }
        char[charIndex].classList.remove('active'); // Remove active class from the current character
        charIndex++; // Increment charIndex here

        // Add active class to the next character if it exists
        if (charIndex < char.length) {
            char[charIndex].classList.add('active');
        }

        mistakes.innerText = mistake;
        cpm.innerHTML = Math.round((charIndex - mistake) / (maxTime - timeLeft) * 60);
    } else {
        clearInterval(timer);
        input.value = "";
    }
}

function initTime() {
    if (timeLeft > 0) {
        timeLeft--;
        time.innerText = timeLeft;
        let wpmVal = Math.round(((charIndex - mistake) / 5) / (maxTime - timeLeft) * 60);
        wpm.innerText = wpmVal;
    } else {
        clearInterval(timer);
        input.value ="";
    }
}


function reset() {
    loadParaghraph();
    clearInterval(timer);
    timeLeft = maxTime;
    time.innerHTML = timeLeft;
    input.value=" ";
    charIndex = 0;
    mistake = 0;
    isTyping = false;
    wpm.innerText = 0;
    cpm.innerHTML = 0;
    mistakes.innerText = 0;
}



input.addEventListener("input", initTyping);
btn.addEventListener("click", reset);
loadParaghraph();