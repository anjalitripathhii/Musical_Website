document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple authentication check (you can replace this with real authentication)
    if (username === 'user123' && password === 'password123') {
        localStorage.setItem('isAuthenticated', 'true');
        window.location.href = 'index.html';  // Redirect to the main page
    } else {
        alert('Invalid username or password');
    }
});
