import { writeUserData } from "./firebaseService.js";

// Toggle the dropdown visibility on click
function toggleDropdown(event) {
    console.log("Dropdown toggled");  // For debugging
    event.stopPropagation();  // Prevent the dropdown from closing immediately
    var dropdown = event.target.nextElementSibling;  // Get the next sibling which is the dropdown content
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';  // Toggle visibility
}

// Function to handle option selection and update the button text and color
function selectOption(option, statusId) {
    console.log("Option selected:", option.textContent);
    const dropdown = option.closest('.dropdown');
    const button = dropdown.querySelector('.dropbtn');

    console.log("Updating button text to:", option.textContent);
    button.textContent = option.textContent;
    button.className = `dropbtn ${option.className}`;  // Set the background color class
    dropdown.querySelector('.dropdown-content').style.display = 'none';  // Hide dropdown

    // Update the status for saving purposes
    document.getElementById(statusId).innerText = option.textContent;
}
// Close dropdown if clicked outside
window.onclick = function(event) {
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
        dropdown.style.display = 'none';
    });
};

function submitStatusUpdates(event) {
    event.preventDefault();
        
    const statusUpdates = {
        realpageStatus: document.getElementById('realpage-status').textContent,
        realpageText: document.getElementById('realpage-text').value,
        gracehillStatus: document.getElementById('gracehill-status').textContent,
        gracehillText: document.getElementById('gracehill-text').value,
        outlookStatus: document.getElementById('outlook-status').textContent,
        outlookText: document.getElementById('outlook-text').value,
        ticketStatus: document.getElementById('ticket-status').textContent,
        ticketText: document.getElementById('ticket-text').value
    };

    // Write each entry to Firebase
    writeUserData('realpage', statusUpdates.realpageStatus, statusUpdates.realpageText);
    writeUserData('gracehill', statusUpdates.gracehillStatus, statusUpdates.gracehillText);
    writeUserData('outlook', statusUpdates.outlookStatus, statusUpdates.outlookText);
    writeUserData('ticket', statusUpdates.ticketStatus, statusUpdates.ticketText);

    alert('Status updates saved successfully!');
}

window.toggleDropdown = toggleDropdown;
window.selectOption = selectOption;
window.submitStatusUpdates = submitStatusUpdates;

// Add event listeners once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Attach event listener to all dropdown buttons
    const dropdownButtons = document.querySelectorAll('.dropbtn');
    dropdownButtons.forEach(button => {
        button.addEventListener('click', toggleDropdown);
    });

    // Attach event listener to all dropdown options
    const dropdownOptions = document.querySelectorAll('.dropdown-content .option');
    dropdownOptions.forEach(option => {
        option.addEventListener('click', function() {
            const statusId = option.closest('.grid-item').querySelector('.dropbtn').id;
            selectOption(option, statusId);
        });
    });

    // Attach event listener to the submit button
    const submitButton = document.querySelector('.update-btn');
    submitButton.addEventListener('click', submitStatusUpdates);
});
