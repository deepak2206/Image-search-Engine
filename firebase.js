const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyAyFIbO8dX_J0A_vXJLgMJc2AnLltbEAqw",
authDomain: "contactus-form-63ba0.firebaseapp.com",
databaseURL: "https://contactus-form-63ba0-default-rtdb.firebaseio.com",
projectId: "contactus-form-63ba0",
storageBucket: "contactus-form-63ba0.appspot.com",
messagingSenderId: "522993897899",
appId: "1:522993897899:web:5dcaf1c523c08d9efc42ee"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

    // enable alert
  document.querySelector(".alert").style.display = "block";

    // remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};