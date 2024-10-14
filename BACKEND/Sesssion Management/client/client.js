document.getElementById('signup-btn').addEventListener('click', async () => {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        const message = await response.text();
        alert(message);
    } catch (error) {
        console.error('Error during signup:', error);
    }
});

document.getElementById('login-btn').addEventListener('click', async () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const message = await response.text();
        alert(message);

        if (response.ok) {
            // On successful login, show the profile
            document.getElementById('login').style.display = 'none';
            document.getElementById('signup').style.display = 'none';
            document.getElementById('profile').style.display = 'block';
            fetchUserProfile();
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
});

document.getElementById('logout-btn').addEventListener('click', async () => {
    try {
        const response = await fetch('/logout', {
            method: 'GET',
        });

        const message = await response.text();
        alert(message);
        document.getElementById('profile').style.display = 'none';
        document.getElementById('login').style.display = 'block';
        document.getElementById('signup').style.display = 'block';
    } catch (error) {
        console.error('Error during logout:', error);
    }
});

async function fetchUserProfile() {
    try {
        const response = await fetch('/dashboard', {
            method: 'GET',
        });

        const userInfo = await response.text();
        document.getElementById('user-info').innerHTML = userInfo;
    } catch (error) {
        console.error('Error fetching user profile:', error);
    }
}
