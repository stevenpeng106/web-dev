// WRITE YOUR CODE IN HERE:
        // <li>Hello</li>
        // <li class="highlight">Hello</li>
        // <li>Hello</li>
        // <li>Hello</li>
        // <li class="highlight">Hello</li>
        // <li>Hello</li>
        
const lis = document.querySelectorAll('li');
for (let li of lis) {
    li.classList.toggle('highlight');
}
