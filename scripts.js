document.addEventListener('DOMContentLoaded', () => {
    const highlightItems = document.querySelectorAll('.highlight-item');
    const contentSections = document.querySelectorAll('.content-section');

    highlightItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');

            // Hide all sections
            contentSections.forEach(section => {
                section.classList.remove('active');
            });

            // Show the target section
            document.getElementById(targetId).classList.add('active');
        });
    });
});
