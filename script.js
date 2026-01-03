console.log("Launched Successfully.");

function updateClocks() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const timezone = card.getAttribute('data-timezone');
        const timeDisplay = card.querySelector('.card-time');

        if (timezone) {
            const now = new Date();
            // Convert local time to the target timezone
            const timeString = now.toLocaleTimeString('en-GB', {
                timeZone: timezone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });

            timeDisplay.textContent = timeString;
        }
    });
}

// Update every second
setInterval(updateClocks, 1000);

// Run immediately on load
updateClocks();
