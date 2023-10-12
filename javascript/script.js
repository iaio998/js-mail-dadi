///////// ESERCIZIO MAIL
const emailList = ["abcd@mail.it", "efgh@mail.it", "ilmn@mail.it"];
const btnVerifyMail = document.querySelector("button");

btnVerifyMail.addEventListener("click", function () {
  let userMail = document.getElementById("email").value;
  let present = false;

  let alert = document.getElementById("error");
  let verified = document.getElementById("verified");
  console.log(userMail);
  if (userMail === "") {
    alert.classList.remove("d-none");
    verified.classList.add("d-none");
  } else {
    verified.classList.remove("d-none");
    alert.classList.add("d-none");
  }
});

// for (let i = 0; i < emailList; i++) {
//   let currentMail = emailList[i];
// }
