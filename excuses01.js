let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car", "the window"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
];

window.onload = function test() {
  let who1 = "";
  let action1 = "";
  let what1 = "";
  let when1 = "";
  let randomChoice = Math.floor(Math.random() * 3) + 0;

  for (items in who) {
    who1 = who[randomChoice];
  }

  for (items in action) {
    action1 = action[randomChoice];
  }

  for (items in what) {
    what1 = what[randomChoice];
  }

  for (items in when) {
    when1 = when[randomChoice];
  }

  const para = document.createElement("h1");
  const node = document.createTextNode(
    who1 + " " + action1 + " " + what1 + " " + when1
  );
  para.appendChild(node);
  const element = document.getElementById("div1");
  const child = document.getElementById("p2");
  element.insertBefore(para, child);
};
