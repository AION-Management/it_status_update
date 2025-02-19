import { writeUserData, getStatusUpdates } from "./firebaseService.js";

// Object to track the last saved data
const lastSavedData = {};

function populateExistingData() {
    // Array of all applications
    const apps = ['realpage', 'ticket', 'outlook', 'missionControl'];
    
    // Fetch data for each application
    apps.forEach(app => {
        getStatusUpdates(app, (data) => {
            if (data) {
                // Update status button
                const button = document.querySelector(`#${app}-status`).closest('.dropbtn');
                if (button) {
                    button.textContent = data.status;
                    // Set appropriate color class based on status
                    button.className = `dropbtn ${getStatusClass(data.status)}`;
                }
                
                // Update text field
                const textField = document.getElementById(`${app}-text`);
                if (textField) {
                    textField.value = data.text;
                }

                // Update lastSavedData
                lastSavedData[`${app}Status`] = data.status;
                lastSavedData[`${app}Text`] = data.text;
            }
        });
    });
}

// Helper function to get the appropriate CSS class for a status
function getStatusClass(status) {
    const statusMap = {
        'Working': 'green-status',
        'Issues': 'yellow-status',
        'Down': 'red-status'
    };
    return statusMap[status] || '';
}


// Function to check if a value has changed
function hasChanged(key, newValue) {
    return lastSavedData[key] !== newValue;
}

// Toggle the dropdown visibility on click
function toggleDropdown(event) {
    event.stopPropagation(); // Prevent the dropdown from closing immediately
    const dropdown = event.target.nextElementSibling; // Get the next sibling which is the dropdown content
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block'; // Toggle visibility
}

// Function to handle option selection and update the button text and color
function selectOption(option, statusId) {
    const dropdown = option.closest('.dropdown');
    const button = dropdown.querySelector('.dropbtn');

    button.textContent = option.textContent;
    button.className = `dropbtn ${option.className}`; // Set the background color class
    dropdown.querySelector('.dropdown-content').style.display = 'none'; // Hide dropdown

    // Update the status for saving purposes
    document.getElementById(statusId).innerText = option.textContent;
}

// Close dropdown if clicked outside
window.onclick = function (event) {
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
        dropdown.style.display = 'none';
    });
};

function submitStatusUpdates(event) {
    event.preventDefault();

    // Get current status updates
    const statusUpdates = {
        realpage: {
            status: document.getElementById('realpage-status').textContent,
            text: document.getElementById('realpage-text').value
        },
        ticket: {
            status: document.getElementById('ticket-status').textContent,
            text: document.getElementById('ticket-text').value
        },
        outlook: {
            status: document.getElementById('outlook-status').textContent,
            text: document.getElementById('outlook-text').value
        },
        missionControl: {
            status: document.getElementById('missionControl-status').textContent,
            text: document.getElementById('missionControl-text').value
        }
    };

    // Iterate over each application and write only valid and changed data
    for (const [key, data] of Object.entries(statusUpdates)) {
        const statusKey = `${key}Status`;
        const textKey = `${key}Text`;

        // Validation: Prevent "Select a Status" or empty messages from being saved
        if (data.status === "Select a Status") {
            alert(`Please select a valid status for ${key}.`);
            continue;
        }
        if (data.text.trim() === "") {
            alert(`Please enter a message for ${key}.`);
            continue;
        }

        // Update Firebase if there's a change
        if (hasChanged(statusKey, data.status) || hasChanged(textKey, data.text)) {
            writeUserData(key, data.status, data.text);

            // Update the last saved data
            lastSavedData[statusKey] = data.status;
            lastSavedData[textKey] = data.text;
        }
    }

    alert('Valid status updates saved successfully!');
}


// Initialize lastSavedData on page load
document.addEventListener('DOMContentLoaded', function () {
    populateExistingData();

    const initialStatusUpdates = {
        realpage: {
            status: document.getElementById('realpage-status').textContent,
            text: document.getElementById('realpage-text').value
        },
        ticket: {
            status: document.getElementById('ticket-status').textContent,
            text: document.getElementById('ticket-text').value
        },
        outlook: {
            status: document.getElementById('outlook-status').textContent,
            text: document.getElementById('outlook-text').value
        },
        missionControl: {
            status: document.getElementById('missionControl-status').textContent,
            text: document.getElementById('missionControl-text').value
        }
    };

    // Store the initial values in lastSavedData
    for (const [key, data] of Object.entries(initialStatusUpdates)) {
        lastSavedData[`${key}Status`] = data.status;
        lastSavedData[`${key}Text`] = data.text;
    }

    // Attach event listener to all dropdown buttons
    const dropdownButtons = document.querySelectorAll('.dropbtn');
    dropdownButtons.forEach(button => {
        button.addEventListener('click', toggleDropdown);
    });

    // Attach event listener to all dropdown options
    const dropdownOptions = document.querySelectorAll('.dropdown-content .option');
    dropdownOptions.forEach(option => {
        option.addEventListener('click', function () {
            const statusId = option.closest('.grid-item').querySelector('.dropbtn').id;
            selectOption(option, statusId);
        });
    });

    // Attach event listener to the submit button
    const submitButton = document.querySelector('.update-btn');
    submitButton.addEventListener('click', submitStatusUpdates);
});
