/* bgcolor.js */
/* button to change the background color of the page */

var bgt = false;

function bgbutton(but) {
   if (bgt) { /* true = light mode */
        document.body.style.background = 'azure';
        but.style.backgroundColor      = 'teal';
        but.style.color                = 'yellow';
        bgt = false; /* toggle dark next time */
   }  
   else { /* false = dark mode */
        document.body.style.background = 'teal';
        but.style.backgroundColor      = 'azure';
        but.style.color                = 'black';
        bgt = true; /* toggle light next time */
   }  
} /* bgbutton */

/* alternative to passing in 'this' is to use hard button id name
 * <button id='btSwitch' ...>
 * document.getElementById("btSwitch").style.background = 'teal';
 */

