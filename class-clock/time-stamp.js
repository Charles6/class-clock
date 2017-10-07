function timeStamp() {
  var now = new Date();
  var date = [now.getDate(), now.getMonth() + 1, now.getFullYear() ];
  var time = [ now.getHours(), now.getMinutes() ];

  for ( var i = 1; i < 3; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    }
  }
  
  return time.join(":") + "-" + date.join("/");
}