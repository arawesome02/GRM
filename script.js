console.log("Launched Successfully.");

document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('open-btn');

    openBtn.addEventListener('click', () => {
        const selectedCards = document.querySelectorAll('.card');
        let count = 0;

        selectedCards.forEach(card => {
            const checkbox = card.querySelector('.card-checkbox');
            const link = card.getAttribute('data-link');

            if (checkbox.checked && link) {
                window.open(link, '_blank');
                count++;
            }
        });

        if (count === 0) {
            alert("Please select at least one country first.");
        }
    });
});

