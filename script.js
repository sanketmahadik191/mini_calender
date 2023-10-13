// Function to update the current date
function updateDate() {
    const currentDateElement = document.getElementById("currentDate");
    const currentMonthYear = document.getElementById("currentMonthYear");
    const currentDayOfWeek = document.querySelector(".day-of-week");
    const today = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    currentDateElement.textContent = today.toLocaleDateString('en-US', {
        day: 'numeric'
    });
    currentMonthYear.textContent = today.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    });
    currentDayOfWeek.textContent = today.toLocaleDateString('en-US', {
        weekday: 'long'
    });
    const currentYear = document.getElementById("currentYear");
    currentYear.textContent = today.getFullYear();
}

// Update the current date
updateDate();