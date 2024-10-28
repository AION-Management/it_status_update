
// Toggle the dropdown visibility on click
function toggleDropdown(event) {
    event.stopPropagation();  // Prevent the dropdown from closing immediately
    var dropdown = event.target.nextElementSibling;  // Get the next sibling which is the dropdown content
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';  // Toggle visibility
}

// Function to handle option selection and update the button text and color
function selectOption(option, statusId) {
    var dropdown = option.closest('.dropdown');
    var button = dropdown.querySelector('.dropbtn');
    button.textContent = option.textContent;
    button.className = `dropbtn ${option.className}`;  // Set the background color class
    dropdown.querySelector('.dropdown-content').style.display = 'none';  // Hide dropdown

    // Update the status for saving purposes
    document.getElementById(statusId).innerText = option.textContent;
}

// Close dropdown if clicked outside
window.onclick = function(event) {
    var dropdowns = document.querySelectorAll('.dropdown-content');  // Find all dropdown content sections
    dropdowns.forEach(function(dropdown) {
        dropdown.style.display = 'none';  // Close all open dropdowns if clicked outside
    });
};

/*
// Function to collect data from the dropdowns and textareas and log/save them
function submitStatusUpdates() {
    // Get all the status updates and text areas
    var realpageStatus = document.getElementById('realpage-status').textContent;
    var realpageText = document.getElementById('realpage-text').value;

    var gracehillStatus = document.getElementById('gracehill-status').textContent;
    var gracehillText = document.getElementById('gracehill-text').value;

    var outlookStatus = document.getElementById('outlook-status').textContent;
    var outlookText = document.getElementById('outlook-text').value;

    var ticketStatus = document.getElementById('ticket-status').textContent;
    var ticketText = document.getElementById('ticket-text').value;

    // Prepare data for saving or logging
    var statusUpdates = {
        realpage: {
            status: realpageStatus,
            update: realpageText
        },
        gracehill: {
            status: gracehillStatus,
            update: gracehillText
        },
        outlook: {
            status: outlookStatus,
            update: outlookText
        },
        ticket: {
            status: ticketStatus,
            update: ticketText
        }
    };

    // For now, log the data to the console
    console.log(statusUpdates);
    alert('Status updates saved successfully!');

    
    var updatesRef = firebase.database().ref('statusUpdates');
    updatesRef.push(statusUpdates).then(() => {
        // Show an alert when the data is successfully saved
        alert('Status updates saved successfully!');
    }).catch(error => {
        console.error('Error saving status updates:', error);
        alert('There was an error saving your status updates. Please try again.');
    });
    

    // If using Firebase, you can save the data like this:
    // var updatesRef = firebase.database().ref('statusUpdates');
    // updatesRef.push(statusUpdates).then(() => {
    //     alert('Status updates saved successfully!');
    // }).catch(error => {
    //     console.error('Error saving status updates:', error);
    // });
} 
*/
/*
function submitStatusUpdates(event) {
    event.preventDefault();
    // Get all the status updates and text areas
    var realpageStatus = document.getElementById('realpage-status').textContent;
    var realpageText = document.getElementById('realpage-text').value;

    var gracehillStatus = document.getElementById('gracehill-status').textContent;
    var gracehillText = document.getElementById('gracehill-text').value;

    var outlookStatus = document.getElementById('outlook-status').textContent;
    var outlookText = document.getElementById('outlook-text').value;

    var ticketStatus = document.getElementById('ticket-status').textContent;
    var ticketText = document.getElementById('ticket-text').value;

    // Create a query string
    var queryString = `?realpageStatus=${encodeURIComponent(realpageStatus)}&realpageText=${encodeURIComponent(realpageText)}`
        + `&gracehillStatus=${encodeURIComponent(gracehillStatus)}&gracehillText=${encodeURIComponent(gracehillText)}`
        + `&outlookStatus=${encodeURIComponent(outlookStatus)}&outlookText=${encodeURIComponent(outlookText)}`
        + `&ticketStatus=${encodeURIComponent(ticketStatus)}&ticketText=${encodeURIComponent(ticketText)}`;

    // Redirect to display.html with the query string
    window.location.href = 'display.html' + queryString;
    //console.log(queryString);

    // Optional: Show a confirmation message
    //alert('Status updates saved and display page updated.');
} */

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
    
        // Store the status updates in localStorage
        localStorage.setItem('statusUpdates', JSON.stringify(statusUpdates));
        alert('Status updates saved successfully!');
    }
    
