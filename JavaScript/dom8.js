
// <body>
//     <!--DO NOT TOUCH THIS FILE PLEASE!-->
//     <h1>Look At All My Buttons!</h1>
//     <div id="container">
    
//     </div>
// </body>
// WRITE YOUR CODE IN HERE:
for (let i = 1; i <= 100; i++) {
    const button = document.createElement('button');
    button.innerText = 'Hey!';
    document.querySelector('#container').appendChild(button);
}
