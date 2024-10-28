
/*document.getElementById('showEmployerForm').addEventListener('click', () => {
    document.getElementById('jobForm').style.display = 'block';
    document.getElementById('applicationForm').style.display = 'none';
});

document.getElementById('showJobSeekerForm').addEventListener('click', () => {
    document.getElementById('applicationForm').style.display = 'block';
    document.getElementById('jobForm').style.display = 'none';
});*/

// Sample job listings with location images
const sampleJobs = [
    { title: "Software Engineer", category: "Technology", location: "New York", type: "Full-time", description: "Develop and maintain software applications.", image: "https://via.placeholder.com/150" },
    { title: "Project Manager", category: "Management", location: "San Francisco", type: "Contract", description: "Oversee project execution and manage teams.", image: "https://via.placeholder.com/150" },
    { title: "Graphic Designer", category: "Design", location: "Los Angeles", type: "Contract", description: "Create visual concepts and designs.", image: "https://via.placeholder.com/150" },
    { title: "Data Analyst", category: "Analytics", location: "Chicago", type: "Part-time", description: "Analyze data and provide insights.", image: "https://via.placeholder.com/150" },
    { title: "UX Researcher", category: "Design", location: "Remote", type: "Internship", description: "Conduct user research to improve products.", image: "https://via.placeholder.com/150" },
    { title: "Sales Executive", category: "Sales", location: "Miami", type: "Full-time", description: "Drive sales and generate leads.", image: "https://via.placeholder.com/150" },
    { title: "Content Writer", category: "Content", location: "Remote", type: "Freelance", description: "Write articles and blogs.", image: "https://via.placeholder.com/150" },
    { title: "Network Administrator", category: "IT", location: "Houston", type: "Full-time", description: "Manage and support network infrastructure.", image: "https://via.placeholder.com/150" },
    { title: "Web Developer", category: "Technology", location: "San Francisco", type: "Full-time", description: "Build and maintain websites.", image: "https://via.placeholder.com/150" },
    { title: "Research Scientist", category: "Science", location: "Los Angeles", type: "Full-time", description: "Conduct scientific research and experiments.", image: "https://via.placeholder.com/150" },
    { title: "Mechanical Engineer", category: "Engineering", location: "Chicago", type: "Full-time", description: "Design and test mechanical devices.", image: "https://via.placeholder.com/150" },
    { title: "Quality Assurance Engineer", category: "Technology", location: "Remote", type: "Full-time", description: "Ensure product quality through testing.", image: "https://via.placeholder.com/150" },
    { title: "Operations Manager", category: "Management", location: "San Francisco", type: "Contract", description: "Oversee daily operations of the company.", image: "https://via.placeholder.com/150" },
    { title: "Database Administrator", category: "IT", location: "Remote", type: "Full-time", description: "Manage database systems and ensure data integrity.", image: "https://via.placeholder.com/150" },
    { title: "Cybersecurity Analyst", category: "IT", location: "Washington, D.C.", type: "Full-time", description: "Protect systems against security breaches.", image: "https://via.placeholder.com/150" },
    { title: "Digital Marketing Specialist", category: "Marketing", location: "Miami", type: "Full-time", description: "Plan and execute digital marketing campaigns.", image: "https://via.placeholder.com/150" },
    { title: "Frontend Developer", category: "Technology", location: "Seattle", type: "Full-time", description: "Develop user interfaces for web applications.", image: "https://via.placeholder.com/150" },
    { title: "Backend Developer", category: "Technology", location: "Remote", type: "Full-time", description: "Develop server-side logic and database management.", image: "https://via.placeholder.com/150" },
    { title: "Data Entry Clerk", category: "Admin", location: "Dallas", type: "Part-time", description: "Enter and manage data in systems.", image: "https://via.placeholder.com/150" },
    { title: "Telecommunications Technician", category: "IT", location: "New Orleans", type: "Full-time", description: "Install and maintain communication equipment.", image: "https://via.placeholder.com/150" },
    { title: "Health Coach", category: "Health", location: "Austin", type: "Part-time", description: "Provide health guidance and support.", image: "https://via.placeholder.com/150" },
    { title: "Accountant", category: "Finance", location: "Atlanta", type: "Full-time", description: "Prepare and examine financial records.", image: "https://via.placeholder.com/150" },
    { title: "Event Planner", category: "Event", location: "Las Vegas", type: "Contract", description: "Organize and coordinate events.", image: "https://via.placeholder.com/150" },
    { title: "Content Strategist", category: "Content", location: "San Diego", type: "Part-time", description: "Develop content strategies for brands.", image: "https://via.placeholder.com/150" },
    { title: "Public Relations Specialist", category: "Marketing", location: "Chicago", type: "Full-time", description: "Manage the public image of organizations.", image: "https://via.placeholder.com/150" }
];

const jobList = document.getElementById('jobList');

// Display sample jobs
function displayJobs(jobs) {
    jobList.innerHTML = ''; // Clear previous listings
    jobs.forEach(job => {
        const listItem = document.createElement('div');
        listItem.classList.add('job-item');
        listItem.innerHTML = `
            <img src="${job.image}" alt="${job.location} image">
            <h3>${job.title} <span>${job.type}</span></h3>
            <p><strong>Category:</strong> ${job.category}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Description:</strong> ${job.description}</p>
        `;
        // Add click event to show job details
        listItem.addEventListener('click', () => showJobDetails(job));
        jobList.appendChild(listItem);
    });
}

displayJobs(sampleJobs);

// Function to show job details in a modal
function showJobDetails(job) {
    document.getElementById('jobDetailTitle').textContent = job.title;
    document.getElementById('jobDetailCategory').textContent = job.category;
    document.getElementById('jobDetailLocation').textContent = job.location;
    document.getElementById('jobDetailType').textContent = job.type;
    document.getElementById('jobDetailDescription').textContent = job.description;

    const modal = document.getElementById('jobDetailModal');
    modal.style.display = "block";
}

// Close modal when the user clicks on <span> (x)
document.querySelector('.close').onclick = function() {
    document.getElementById('jobDetailModal').style.display = "none";
}

// Close modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    const modal = document.getElementById('jobDetailModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

document.getElementById('employerForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const jobTitle = document.getElementById('jobTitle').value;
    const jobCategory = document.getElementById('jobCategory').value;
    const jobLocation = document.getElementById('jobLocation').value;
    const jobType = document.getElementById('jobType').value;
    const jobDescription = document.getElementById('jobDescription').value;

    const newJob = {
        title: jobTitle,
        category: jobCategory,
        location: jobLocation,
        type: jobType,
        description: jobDescription,
        image: "https://via.placeholder.com/150"
    };

    displayJobs([...sampleJobs, newJob]); // Add the new job to the existing list

    // Reset form
    event.target.reset();
    document.getElementById('jobForm').style.display = 'none'; // Hide job form after submission
});

// Search functionality
document.getElementById('searchBar').addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    const filteredJobs = sampleJobs.filter(job =>
        job.title.toLowerCase().includes(query) ||
        job.category.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query)
    );
    displayJobs(filteredJobs);
});

// Dark mode toggle
document.getElementById('themeToggle').addEventListener('change', (event) => {
    document.body.classList.toggle('dark-mode', event.target.checked);
});

// Show and hide forms
document.getElementById('showEmployerForm').addEventListener('click', () => {
    document.getElementById('jobForm').style.display = 'block';
    document.getElementById('applicationForm').style.display = 'none';
});

document.getElementById('showJobSeekerForm').addEventListener('click', () => {
    document.getElementById('applicationForm').style.display = 'block';
    document.getElementById('jobForm').style.display = 'none';
});

// Initial load
document.getElementById('jobForm').style.display = 'none';
document.getElementById('applicationForm').style.display = 'none';

function showHomeSection() {
    document.getElementById('homeSection').style.display = 'block';
    document.getElementById('aboutUsSection').style.display = 'none';
    document.getElementById('helpSection').style.display = 'none';
}

function showAboutUsSection() {
    document.getElementById('aboutUsSection').style.display = 'block';
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('helpSection').style.display = 'none';
}

function showHelpSection() {
    document.getElementById('helpSection').style.display = 'block';
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('aboutUsSection').style.display = 'none';
}

// Event listeners for navigation
document.getElementById('homeTab').addEventListener('click', showHomeSection);
document.getElementById('aboutUsTab').addEventListener('click', showAboutUsSection);
document.getElementById('helpTab').addEventListener('click', showHelpSection);

// Other functions for handling form submissions, search, etc.

showHomeSection(); // Initial load