var clickCount = 0;

function clicked(){
    console.log("The button got clicked! " + clickCount)
    clickCount +=1;
}

var buttons = document.getElementsByTagName("button")
console.log(buttons)

for (let i = 0; i < buttons.length; i++) {
    const b = buttons[i];
    b.addEventListener('click', clicked)
    console.log(b)
}