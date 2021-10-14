function insertCounterInDOM(value) {
    counter = document.querySelector('#counter')
    counter.innerText = value
}

function updateCounter() {
    counter = localStorage.getItem('counter')

    if (counter)
        counter = parseInt(counter) + 1
    else
        counter = 1

    console.log(typeof counter)
    localStorage.setItem('counter', counter)
    return counter
}

document.addEventListener('DOMContentLoaded', () => {
    updateCounter()
    insertCounterInDOM(counter)
})