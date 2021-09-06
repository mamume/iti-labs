document.addEventListener('DOMContentLoaded', () => {
    // Fetch the api url
    fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(obj => {
            // Get data from object
            const data = obj.data;

            // Select profiles container
            const profiles = document.querySelector('#profiles');

            // Create profile div for each user in data
            data.forEach(user => {
                // Create div element for email
                const email = document.createElement('div');
                email.innerText = user.email;

                // Create img element for avatar
                const avatar = document.createElement('img');
                avatar.src = user.avatar;

                // Create profile div to contain avtar and email elements
                const profile = document.createElement('div');
                profile.className = 'profile';
                profile.append(avatar, email);

                // Append profile div in profiles container
                profiles.appendChild(profile);
            });
        });
});