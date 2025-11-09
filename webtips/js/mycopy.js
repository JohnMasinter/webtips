/* mycopy.js */

var toggle = false;

/* copy text from image alt tag to clipboard, and toggle background color of link
   example, when click link, copy "elephant@zoo.com" to clipboard:
   elephant@zoo.com <a href="#copy" onClick="myalt('nam')"><img src="js/myclip1.png" id="nam" width=15 alt="elephant@zoo.com"></a>
*/
function mycopy(myId) {
   /* console.log(myId); */
   var myObj = document.getElementById(myId); /* get the object */
   var myAlt = myObj.getAttribute('alt');     /* get alt text   */
   navigator.clipboard.writeText(myAlt);      /* copy text to clipboard */

   var mySty = window.getComputedStyle(myObj);  /*       */
   var myBgd = mySty.backgroundColor;           /* get bgcolor e.g. string "rgb(0, 128, 0)" */
   var myGrn = "rgb(0, 128, 0)"                 /* green */
   // alert(myBgd); // testing

   if (myBgd === myGrn) {                     /* toggle icon */
      myObj.style.backgroundColor = 'blue';
   } else {
      myObj.style.backgroundColor = 'green';
   }
   toggle = !toggle;                          /* use opposite img next time */
} /* mycopy */

