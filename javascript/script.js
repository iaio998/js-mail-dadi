///////// ESERCIZIO MAIL
const emailList = ["abcd@mail.it", "efgh@mail.it", "ilmn@mail.it"];
const btnVerifyMail = document.querySelector("button");
const alert = document.querySelector(".alert");

btnVerifyMail.addEventListener("click", function () {
  let userMail = document.getElementById("email").value;
  let alert = document.getElementById("error");
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
    cla = "alert-success";
    text = "Mail presente";
  } else {
    cla = "alert-danger";
    text = "Mail assente";
  }
  alert.innerText = text;
  alert.classList.add(cla);
  alert.classList.remove("d-none");
});

///////// ESERCIZIO DADI
