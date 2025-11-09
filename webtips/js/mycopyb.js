/* mycopyb.js */

/* change background to specified color */
function mySetBg(myObj,myColor) {
   myObj.style.backgroundColor = myColor;
}

/* copy text from link alt tag to clipboard, and toggle background color of link */
/* example: first  click, link changes to opposite color                         */
/*          second click, icon changes back to frist color                       */
function mycopy(myId) {
   /* console.log(myId); */
   var myObj = document.getElementById(myId); /* get the object */
   var myAlt = myObj.getAttribute('alt');     /* get alt text   */
   navigator.clipboard.writeText(myAlt);      /* copy text to clipboard */

   var mySty = window.getComputedStyle(myObj);  /* get window handle */
   var myBgd = mySty.backgroundColor;           /* get bgcolor e.g. string "rgb(0, 128, 0)" */
   var myGrn = "rgb(0, 128, 0)"                 /* var shortcut for green */
   // alert(myBgd); // testing

   myObj.style.backgroundColor = 'blue';        /* set background color to blue */
   setTimeout(mySetBg, 200, myObj, 'green');    /* after 0.2 sec, change back to green */
   /* setTimeout returns immediately, but mySetBg is schedulded to run 0.2 sec later */
} /* mycopy */

