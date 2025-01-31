document.addEventListener('DOMContentLoaded', function() {
    const jobListings = [
        {
            title: "Software Engineer",
            company: "Tech Corp Australia",
            location: "Sydney, NSW",
            description: "We are looking for a skilled Software Engineer to join our team in Sydney."
        },
        {
            title: "Nurse",
            company: "HealthCare Australia",
            location: "Melbourne, VIC",
            description: "Registered Nurses needed for various hospitals in Melbourne."
        },
        {
            title: "Construction Worker",
            company: "BuildIt Australia",
            location: "Brisbane, QLD",
            description: "Experienced construction workers needed for upcoming projects in Brisbane."
        },
        {
            title: "Accountant",
            company: "FinancePro Australia",
            location: "Perth, WA",
            description: "Qualified accountants needed for a leading finance firm in Perth."
        }
    ];

    const jobListingsContainer = document.getElementById('job-listings');

    jobListings.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.classList.add('job');

        jobElement.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p>${job.description}</p>
        `;

        jobListingsContainer.appendChild(jobElement);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
        contactForm.reset();
    });
});
