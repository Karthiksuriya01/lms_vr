// Count animation
const counters = document.querySelectorAll('.count');
const speed = 200; // The higher the slower

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    // Start counting when the stats section comes into view
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            updateCount();
            observer.disconnect(); // Stop observing once the count starts
        }
    });

    observer.observe(counter);
});
