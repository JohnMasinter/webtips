/* myaltb.js */

function mySetImg(myObj,myImg) {
   myObj.src=myImg;                           /* change to specified icon */
}

/* copy text from image alt tag to clipboard, and toggle icon for 0.2 sec */
/* example: click, icon changes to opposite color for 0.2 sec, then back  */
function myalt(myId) {
   var myImg1="js/myclip1.png";               /* easy name for image 1 */
   var myImg2="js/myclip2.png";               /* easy name for image 2 */
   // console.log(myId);                      /* debug message */
   var myObj = document.getElementById(myId); /* get the object */
   var myAlt = myObj.getAttribute('alt');     /* get alt text of object */
   navigator.clipboard.writeText(myAlt);      /* copy text to clipboard */
   myObj.src=myImg2;                          /* change to image 2 */
   // alert(mySrc);                           /* deubg message */
   setTimeout(mySetImg, 200, myObj, myImg1);  /* after 0.2 sec, change to color 1 */
} /* myalt */

