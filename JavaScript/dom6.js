<!--<!DOCTYPE html>-->

<!--<head>-->
<!--    <title>Rainbow</title>-->
    <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
<!--    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>-->
<!--    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>-->

<!--</head>-->

<!--<body>-->
    <!--DON'T TOUCH THIS FILE PLEASE!-->
<!--    <h1>-->
<!--        <span>R</span>-->
<!--        <span>A</span>-->
<!--        <span>I</span>-->
<!--        <span>N</span>-->
<!--        <span>B</span>-->
<!--        <span>O</span>-->
<!--        <span>W</span>-->
<!--    </h1>-->
<!--</body>-->

<!--</html>-->

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const spans = document.querySelectorAll('h1 span');

for (let i = 0; i < spans.length; i++) {
    spans[i].style.color = colors[i];
}
