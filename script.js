 const hours = document.getElementById('hour');
 const minutes = document.getElementById('minutes');
 const seconds = document.getElementById('seconds');
 const ampm = document.getElementById('ampm');

 function clockTimer() {
     let h = new Date().getHours();
     let m = new Date().getMinutes();
     let s = new Date().getSeconds();
     let amPm = 'AM'

     if (h > 12) {
         h = h - 12;
         amPm = 'PM'
     };

     h = h < 10 ? '0' + h : h;
     s = s < 10 ? '0' + s : s;
     m = m < 10 ? '0' + m : m;

     hours.innerText = h;
     minutes.innerText = m;
     seconds.innerText = s;
     ampm.innerText = amPm;

     setTimeout(() => {
         clockTimer()
     }, 1000)

 }
 clockTimer();