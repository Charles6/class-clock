var dbRef = firebase.database().ref().child("messageVault");
var messageStack = [];

dbRef.on('child_added', snap => {
  var messObj = snap.val();

  messageStack.push(messObj.message);
  console.log(messageStack);
  var node = document.createElement("DIV");
  node.className = "messageBox";
  node.innerHTML = '<p class="nameTime"><span style="color:' + messObj.color + '">' +messObj.uid + '</span> ' + messObj.timestamp + "</p><p>" + messObj.message + "</p>";
  document.getElementById("messageContainer").appendChild(node);
  
  if(messageStack.length > 10){
    var elements = document.getElementsByClassName("messageBox");
      elements[0].parentNode.removeChild(elements[0]);
    messageStack.shift();
  }
});

var userPref = {
  name: "nemo",
  color: "green"
}

const messageProfile = (uName) =>{
  var dbProf = firebase.database().ref().child("profiles/"+uName);
  dbProf.on('value', snap => {
    var profObj = snap.val();
    
    userPref.name = profObj.name;
    
    if (profObj.color != "null"){
      userPref.color = profObj.color;
    }
  });
};

const post = () => {
  messageProfile(currentUser);
  var inputText = document.getElementById("input");
  firebase.database().ref("messageVault").push({
    uid: userPref.name,
    message: inputText.value,
    color: userPref.color,
    timestamp: timeStamp()
  });
  document.getElementById('input').value = "";
};

const clearChatHistory = () => {
  firebase.database().ref("messageVault").remove();
  location.reload(); 
};