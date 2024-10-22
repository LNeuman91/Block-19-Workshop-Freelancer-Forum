// Style the headings (consider moving this to CSS for better separation)
var heading1 = document.querySelector("h1");
var heading2 = document.querySelector("h2");
heading1.style.textAlign = "center";
heading1.style.fontWeight = "bold";
heading2.style.textAlign = "center";
console.log('Hello World');

// Array of possible names
var names = ["Alice", "Bob", "Carol", "David", "Eve", "Frank", "Grace", "Henry", "Ivy", "Jack"];

// Array of possible occupations
var occupations = ["Writer", "Teacher", "Programmer", "Artist", "Designer", "Engineer", "Scientist", "Doctor", "Lawyer", "Chef"];

var freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 },
    { name: "Carol", occupation: "Programmer", startingPrice: 70 },
    { name: "David", occupation: "Designer", startingPrice: 45 },
    { name: "Eve", occupation: "Engineer", startingPrice: 60 },
    { name: "Frank", occupation: "Scientist", startingPrice: 75 },
    { name: "Grace", occupation: "Doctor", startingPrice: 80 },
    { name: "Henry", occupation: "Lawyer", startingPrice: 90 },
    { name: "Ivy", occupation: "Chef", startingPrice: 35 },
];

// Function to render freelancers
function renderFreelancers(freelancers) {
    const tbody = document.querySelector('table tbody');
    tbody.innerHTML = ""; // Clear previous rows
    freelancers.forEach((freelancer, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <th scope="row">${index + 1}</th>
            <td>${freelancer.name}</td>
            <td>${freelancer.occupation}</td>
            <td>$${freelancer.startingPrice}</td>
        `;
        tbody.appendChild(row);
    });
}

// Function to generate a new random freelancer
function generateRandomFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomPrice = Math.floor(Math.random() * 100) + 20; // Random price between $20 and $119
    return { name: randomName, occupation: randomOccupation, startingPrice: randomPrice };
}

var freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 }
];

function updateAveragePrice() {
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    const average = (freelancers.length > 0) ? (total / freelancers.length).toFixed(2) : 0;
    const heading2 = document.querySelector("h2");
    heading2.textContent = `The average starting price is $${average}`;
}


// Render a single freelancer on page load
const initialFreelancer = generateRandomFreelancer();
freelancers.push(initialFreelancer);
renderFreelancers(freelancers);
updateAveragePrice();

// Add a new freelancer every 3 seconds until the list reaches 10
const intervalId = setInterval(() => {
    if (freelancers.length >= 15) {
        clearInterval(intervalId); // Stop adding new freelancers
        console.log("Maximum number of freelancers reached.");
        return;
    }
    
    const newFreelancer = generateRandomFreelancer();
    freelancers.push(newFreelancer);
    renderFreelancers(freelancers);
    updateAveragePrice();
}, 3000);
