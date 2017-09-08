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

const startTime = () => {
  updateTime();
  setInterval(updateTime, 15000)
}

startTime();