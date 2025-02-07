// script.js

// Car details data
const carDetails = {
    car1: {
        mileage: "10,000 miles",
        cost: "$20,000",
        color: "Red",
        make: "Toyota",
        model: "Corolla"
    },
    car2: {
        mileage: "5,000 miles",
        cost: "$25,000",
        color: "Blue",
        make: "Honda",
        model: "Civic"
    }
    // Add more car details as needed
};

// Function to show/hide car details
function showDetails(carId) {
    const details = carDetails[carId];
    const detailsDiv = document.getElementById(`${carId}-details`);

    if (details) {
        if (detailsDiv.style.display === 'block') {
            detailsDiv.style.display = 'none';
        } else {
            detailsDiv.innerHTML = `
                <strong>Mileage:</strong> ${details.mileage}<br>
                <strong>Cost:</strong> ${details.cost}<br>
                <strong>Color:</strong> ${details.color}<br>
                <strong>Make:</strong> ${details.make}<br>
                <strong>Model:</strong> ${details.model}
            `;
            detailsDiv.style.display = 'block';
        }
    } else {
        detailsDiv.innerHTML = "Details not available for this car.";
        detailsDiv.style.display = 'block';
    }
}

// Function to handle the order button click
function orderCar(carModel) {
    const phoneNumber = "+254724447314"; // Replace with your WhatsApp number
    const message = `I'm interested in ordering the ${carModel}. Could you provide more details?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
// Function to search cars 
function searchCars() { const searchQuery = document.getElementById('search-bar').value.toLowerCase();
 const carItems = document.querySelectorAll('.car-item'); carItems.forEach(item =>
     { const carModel = item.getAttribute('data-model').toLowerCase();
  if (carModel.includes(searchQuery)) { item.style.display = 'block'; } 
  else { item.style.display = 'none'; } }); }

