/* Deliverables


// Pause the counter, which should:
// pause the counter
// disable all buttons except the pause button
// switch the label on the button from "pause" to "resume"
// Click the "restart" button to restart the counter and re-enable the buttons.
// Leave comments on my gameplay, such as: "Wow, what a fun game this is."
*/

// See the timer increment every second once the page has loaded.
let counter = document.querySelector('#counter')
let intervalID = setInterval(incrementCounter, 1000)
// console.log(intervalID)
let counterInt = parseInt(counter.textContent, 10)
function incrementCounter() {
    counterInt = ++counterInt
    counter.textContent = counterInt
} // todo: refactor into if logic with buttons
function decrementCounter() {
    counterInt = --counterInt
    counter.textContent = counterInt
}

// Manually increment and decrement the counter using the plus and minus buttons.
function manuallyIncDec() {
    const plusBtn = document.querySelector('#plus')
    plusBtn.addEventListener('click', () => incrementCounter())

    const minusBtn = document.querySelector('#minus')
    minusBtn.addEventListener('click', () => decrementCounter())
}
manuallyIncDec()

// "Like" an individual number of the counter.
// when heart button is clicked, the create a li child and append to comments div
function addLisToUl() {
    const heartBtn = document.querySelector('#heart')
    const likes = document.querySelector('.likes')
    let clickCount = 0
    heartBtn.addEventListener('click', (e) => {
        clickCount = ++clickCount
        let li = document.createElement('li')
        console.log(li.nextSibling)
        // while (li !== li.previousSibling && li !== li.nextSibling) {
        //     li.textContent = `${counter.textContent} has been liked ${clickCount} time` // todo fill in num and numlikes
        // }
        likes.appendChild(li)
    })
}
addLisToUl()

/*
- for every one click only add one 
*/