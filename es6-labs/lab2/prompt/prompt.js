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

        // console.log(input, okBtn, cancelBtn);

        okBtn.addEventListener('click', () => res(input.value));
        cancelBtn.addEventListener('click', () => res(null));
    });
}

// function confirmPrompt(e) {
//     // console.log(e.target);
// }

// function cancelPrompt() {

// }

document.addEventListener('DOMContentLoaded', async () => {
    // document.querySelector('#cancel-btn').addEventListener('click', cancelPrompt);
    // document.querySelector('#ok-btn').addEventListener('click', confirmPrompt);

    let username = await customPrompt('Your Name please?');
    // console.log(username)

    document.querySelector('#username').innerText = username ? `, ${username}` : ', Friend';
    document.querySelector('#prompt').style.display = 'none';
});