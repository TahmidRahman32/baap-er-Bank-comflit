document.getElementById("Submit-btn").addEventListener("click", function () {
   const inputField = document.getElementById("email-field");
   const inputText = inputField.value;

   const inputFieldPassword = document.getElementById("input-password");
   const inputFieldValue = inputFieldPassword.value;

   if (inputText === "baap10@gmail.com" && inputFieldValue === "tahmid") {
      window.location.href = "bank.html";
   } else {
      alert("ki vai tik kore lekhen");
   }
});
