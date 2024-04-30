let input;
let submitButton;
let greeting;
let question;
let listQuestions = [];

function setup() {
  createCanvas(400, 400);
  // input box
  input = createInput();
  input.position(100, 100);
  submitButton = createButton('submit');
  // put the submit button next to the input box
  submitButton.position(input.x + input.width, input.y);
  submitButton.mousePressed(askSomething);
  submitButton.style('color','blue')
  // create a level 2 heading
  greeting = createElement('h3', 'Need Help?');
  greeting.style('color', 'red');
  // put the heading above the input box
  greeting.position(input.x, input.y - 50);
  
}

function askSomething() {
  question = input.value();
  input.value(''); // reset input value to an empty string
  listQuestions.push(question);

}

function draw(){
  background(20,80,30);
  for (x = 0; x < listQuestions.length; x++){
    text(listQuestions[x], 20, 180 + x * 20);
  }
}