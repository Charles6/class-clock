var agendadbRef = firebase.database().ref().child("agendaItems");
var agendaStack = [];

agendadbRef.on('child_added', snap => {
  var agendaObj = snap.val();

  agendaStack.push(agendaObj.agenda);
  var agendaNode = document.createElement("LI");
  agendaNode.className = "agendaLI";
  agendaNode.innerHTML = "<input type='checkbox'><label>" + agendaObj.agenda + "</label>";
  document.getElementById("agendaContainer").appendChild(agendaNode);
});


const newAgenda = () => {
  var inputText = document.getElementById("agendaInput");
  firebase.database().ref("agendaItems").push({
    agenda: inputText.value
  });
  document.getElementById('agendaInput').value = "";
};

const clearAgenda = () => {
  firebase.database().ref("agendaItems").remove();
  location.reload(); 
};

var AgendaEdit = false
document.getElementById("agendaCreate").style.display = 'none';
const toggleAgendaEdit = () => {
  if (AgendaEdit === false) {
    document.getElementById("agendaCreate").style.display = 'inline';
    AgendaEdit = true;
  } else {
    document.getElementById("agendaCreate").style.display = 'none';
    AgendaEdit = false;
  }
}