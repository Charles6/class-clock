var dayPrint;
var datePrint;
var timePrint;

const getTime = () => {
  var d = new Date(),
      minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
      hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
      seconds = d.getSeconds().toString().length == 1 ? '0'+d.getSeconds() : d.getSeconds(),
      days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  dayPrint = days[d.getDay()];
  datePrint = d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear();
  timePrint = hours+':'+minutes;
};

const updateTime = () => {
  getTime();
  document.getElementById("day").innerHTML = dayPrint;
  document.getElementById("date").innerHTML = datePrint;
  document.getElementById("time").innerHTML = timePrint;
};

function timeStamp() {
  var now = new Date();
  var date = [ now.getDate(), now.getMonth() + 1, now.getFullYear() ];
  var time = [ now.getHours(), now.getMinutes() ];

  for ( var i = 1; i < 3; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    }
  }
  
  return time.join(":") + "-" + date.join("/");
}

updateTime();
setInterval(updateTime, 15000);