
function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

        if(hou >= 12){
          pe = "PM";
        }
        if(hou == 0){
          hou = 12;
        }
        if(hou > 12){
          hou = hou - 12;
        }

        Number.prototype.pad = function(digits){
          for(var n = this.toString(); n.length < digits; n = 0 + n);
          return n;
        }

        var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
        var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }

  function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
  }
  document.getElementById("bg4").addEventListener("click", function() {
    document.getElementById("datetime").style.color="black"
    document.body.style.background="#cfdef3"
    document.getElementById("datetime").style.background="#cfdef3"
  });
  document.getElementById("bg3").addEventListener("click", function() {
    document.getElementById("datetime").style.color="white"
    document.body.style.backgroundImage = "url('bg3.png')";
    document.getElementById("datetime").style.backgroundImage = "url('bg3.png')";
  });
  document.getElementById("bg2").addEventListener("click", function() {
    document.getElementById("datetime").style.color="white"
    document.body.style.backgroundImage = "url('bg2.png')";
    document.getElementById("datetime").style.backgroundImage = "url('bg2.png')";
  });
  document.getElementById("bg1").addEventListener("click", function() {
    document.getElementById("datetime").style.color="white"
    document.body.style.backgroundImage = "url('bg1.png')";
    document.getElementById("datetime").style.backgroundImage = "url('bg1.png')";
  });
