///////// ESERCIZIO MAIL
const emailList = ["abcd@mail.it", "efgh@mail.it", "ilmn@mail.it"];
const btnVerifyMail = document.querySelector("button");
const alert = document.querySelector(".alert");

btnVerifyMail.addEventListener("click", function () {
  let userMail = document.getElementById("email").value;

  let verified = document.getElementById("verified");
  console.log(userMail);

  let correct = false;
  for (let i = 0; i < emailList.length; i++) {
    let currentMail = emailList[i];
    if (userMail.toLocaleLowerCase() === currentMail.toLocaleLowerCase()) {
      correct = true;
    }
  }
  let text, cla;
  if (correct) {
    alert.innerText = `Benvenuto all'interno del programma ${userMail}`;
    alert.classList.add("alert-success", "text-success");
    alert.classList.remove(
      "d-none",
      "alert-warning",
      "text-warning",
      "alert-danger",
      "text-danger"
    );
  } else if (userMail === "") {
    alert.innerText = "Nessun dato inserito, per favore compila il form";
    alert.classList.add("alert-warning", "text-warning");
    alert.classList.remove(
      "d-none",
      "alert-success",
      "text-success",
      "alert-danger",
      "text-danger"
    );
  } else {
    alert.innerText = "Mail errata, verifica i dati inseriti";
    alert.classList.add("alert-danger", "text-danger");
    alert.classList.remove(
      "d-none",
      "alert-success",
      "text-success",
      "alert-warning",
      "text-warning"
    );
  }
});

///////// ESERCIZIO DADI
const diceNumbers = [1, 2, 3, 4, 5, 6];
const throwDice = document.getElementById("throw");
const userResult = document.getElementById("user-result");
const botResult = document.getElementById("bot-result");
const disclaimer = document.getElementById("winner");

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

throwDice.addEventListener("click", function () {
  let randomNumbersUser = diceNumbers[getRndInteger(0, diceNumbers.length - 1)];
  let randomNumbersBot = diceNumbers[getRndInteger(0, diceNumbers.length - 1)];
  console.log(randomNumbersUser, randomNumbersBot);

  userResult.innerHTML = randomNumbersUser;
  botResult.innerHTML = randomNumbersBot;
  if (randomNumbersBot > randomNumbersUser) {
    disclaimer.classList.remove(
      "d-none",
      "alert-success",
      "text-success",
      "alert-warning",
      "text-warning"
    );
    disclaimer.classList.add("alert-danger", "text-danger");
    disclaimer.innerHTML = `I'M SORRY FOR YOU, <em><strong>BOT</strong></em> IS THE WINNER`;
  } else if (randomNumbersBot < randomNumbersUser) {
    disclaimer.classList.remove(
      "d-none",
      "alert-danger",
      "text-danger",
      "alert-warning",
      "text-warning"
    );
    disclaimer.classList.add("alert-success", "text-success");
    disclaimer.innerHTML = `WELL DONE, <em><strong>YOU</strong></em> ARE THE WINNER`;
  } else {
    disclaimer.classList.remove(
      "d-none",
      "alert-success",
      "text-success",
      "alert-danger",
      "text-danger"
    );
    disclaimer.classList.add("alert-warning", "text-warning");
    disclaimer.innerHTML = `WOW! <em><strong>THAT'S A TIE</strong></em> `;
  }
});
