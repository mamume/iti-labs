document.addEventListener('DOMContentLoaded', () => {
    fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(obj => {
            console.log(obj.data);
            const data = obj.data;

            const profiles = document.querySelector('#profiles')

            data.forEach(user => {
                const email = document.createElement('div');
                email.innerText = user.email;

                const avatar = document.createElement('img');
                // avatar.className = 'img';
                avatar.src = user.avatar;

                const profile = document.createElement('div');
                profile.className = 'profile';
                profile.append(avatar, email);

                profiles.appendChild(profile);
            });
        });
});