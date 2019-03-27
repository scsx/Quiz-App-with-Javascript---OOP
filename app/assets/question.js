// CONSTRUCTOR
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// function to validate correct answer (returns true)
Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}