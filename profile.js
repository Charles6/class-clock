var currentUser;


const login = () => {
  currentUser = inputProfile();
  updateLogin(currentUser);
  createInput();
};

const inputProfile = () => {
  var newName = document.getElementById("nameInput").value;
  var newColor = document.getElementById("colorInput").value;
  firebase.database().ref("profiles/"+newName).set({
    name:newName,
    color:newColor
  });
  return newName;
};

const updateLogin = (uName) =>{
  var dbProf = firebase.database().ref().child("profiles/"+uName);
  dbProf.on('value', snap => {
    var profObj = snap.val();
    document.getElementById("loginContainer").innerHTML = "<h1><span style='color:" + profObj.color + "'>"+ profObj.name + "</span></h1>";
  });
  messageProfile(currentUser);
};

const createInput = () => {
  document.getElementById("makeMessage").innerHTML = '<input id="input" type="text"><button onclick="post()">send</button>';
};