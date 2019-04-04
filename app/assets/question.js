// CONSTRUCTOR
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// Esta função parece estar aqui como boa práctica para não consumir memória:
// https://www.udemy.com/javascript-object-oriented-programming/learn/lecture/10019964#overview
// function to validate correct answer (returns true)
Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}

