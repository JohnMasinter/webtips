/* myalt.js */

/* copy text from image alt tag to clipboard, and toggle icon to opposite color */
/* example: first  click, icon changes to opposite color                        */
/*          second click, icon changes back to frist color                      */
function myalt(myId) {
   // console.log(myId);                      /* debug message */
   var myObj = document.getElementById(myId); /* get the object */
   var myAlt = myObj.getAttribute('alt');     /* get alt text of object */
   navigator.clipboard.writeText(myAlt);      /* copy text to clipboard */
   var mySrc = myObj.getAttribute('src');     /* get name of current icon */
   // alert(mySrc);                           /* deubg message */
   if (mySrc == "js/myclip2.png") {           /* toggle to opposite icon */
      myObj.src="js/myclip1.png";                 /* color 1 */
   } else {
      myObj.src="js/myclip2.png";                 /* color 2 */
   }
} /* myalt */

