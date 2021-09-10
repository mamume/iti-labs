// Create customPrompt(msg) function
// Retuns promise
// resolve promise with the enterd value when user clicks ok button
// if user clicked cancel, resovle with null

function customPrompt(msg) {
    document.querySelector('#prompt-q').innerText = msg;

    return new Promise((res) => {
        const input = document.querySelector('input');
        const okBtn = document.querySelector('#ok-btn');
        const cancelBtn = document.querySelector('#cancel-btn');

        okBtn.addEventListener('click', () => res(input.value));
        cancelBtn.addEventListener('click', () => res(null));
    });
}

async function openPrompt() {
    document.querySelector('#prompt').style.display = 'block';
    let username = await customPrompt('Your Name please?');

    document.querySelector('#username').innerText = username ? `Hello, ${username}` : 'Hello, Friend';
    document.querySelector('#prompt').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#prompt-btn').addEventListener('click', openPrompt);
});