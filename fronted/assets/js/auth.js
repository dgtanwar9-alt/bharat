/* ===================== AUTH HANDLER ===================== */
// This file handles user session, logout and greeting on the home page

function logout() {
    localStorage.removeItem('smarttrip_token');
    localStorage.removeItem('smarttrip_user');
    window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const userGreeting = document.getElementById('userGreeting');
    const userData = localStorage.getItem('smarttrip_user');
    
    if (userGreeting && userData) {
        try {
            const user = JSON.parse(userData);
            const firstName = user.name ? user.name.split(' ')[0] : 'Traveler';
            userGreeting.textContent = `Hi, ${firstName}!`;
        } catch (e) {
            userGreeting.textContent = 'Hi, Traveler!';
        }
    }
});