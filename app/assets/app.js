var element = document.getElementById("question"); 

// populate HTML with Q & A
function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question text
        element.innerHTML = quiz.getQuestionIndex().text;
        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var btnElement = document.getElementById("choice" + i);
            btnElement.innerHTML = choices[i];
            // validate answer
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
}

// answer
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}

// end of quiz
function showScores() {
    var gameOverHtml = `
    <div class="results">
        <h2>Result: <span id="score">You scored ${ quiz.score }</span></h2>
        <button class="btn" id="restart">Star over</button>
    </div>
    `;
    var docElement = document.getElementById("dashboard");
    docElement.innerHTML = gameOverHtml;
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var elementProgress = document.getElementById("progress");
    elementProgress.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

// create questions
var questions = [
    new Question("Como se Chama a batalha entre D. Afonso Henriques e D. Teresa?", ["Independência", "S. Mamede","Vilafrancada", "Ouriquito"], "S. Mamede"),
    new Question("Quem foi o filho de D. Afonso Henriques?", ["D. Sancho", "D. Manuel", "D. Filipe I", "D. Pedro"], "D. Sancho"),
    new Question("Quantos reis existiram na dinastia Filipina?", ["1", "2","3", "4"], "3"),
    new Question("Em que ano se deu a Batalha de Aljubarrota?", ["1143", "1385", "1580", "1601"], "1385"),
    new Question("Por que o Rei Dom João VI fugiu para o Brasil?", ["Estava farto de Portugal", "Quaria ir festejar o Carnaval no Rio de Janeiro", "Não suportava mais as loucuras da sua mãe, a Rainha D. Maria I (a Piedosa)", "Soube que havia planos de Napoleão para invadir Portugal"], "Soube que havia planos de Napoleão para invadir Portugal")
];

// START
var quiz = new Quiz(questions);

populate();

// extra: restart quiz
//var restartBtn = document.getElementById("restart");
// use event delegation bc element is dynamic
document.addEventListener('click', function(e) {
    if(e.target && e.target.id == 'restart') {
        location.reload();
    }
 });