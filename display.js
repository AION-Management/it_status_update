import { getStatusUpdates } from "./firebaseService.js";

// Function to determine color based on status
function getStatusColor(status) {
    switch (status.toLowerCase()) {
        case "green":
            return "#99ff99";
        case "yellow":
            return "#fdff99";
        case "red":
            return "#ff9999";
        default:
            return "white"; // Default color if status doesn't match
    }
}

/*
// Function to display status updates for each app
function displayStatusUpdates() {
    const statusContainer = document.getElementById('status-container');

    // Clear any existing content
    statusContainer.innerHTML = "";

    // List of applications to display
    const applications = ['realpage', 'gracehill', 'outlook', 'ticket'];

    applications.forEach(appId => {
        getStatusUpdates(appId, (data) => {
            if (data) {
                statusContainer.innerHTML += `
                    <h2 style="color: white;">${data.app}</h2>
                    <p style="color: #b4b4b4;"><strong>Status:</strong> <span style="color: ${getStatusColor(data.status)};">${data.status}</span></p>
                    <p style="color: #b4b4b4;"><strong>Message:</strong> <span style="color: white;">${data.errormsg}</span></p>
                `;
            } else {
                console.log(`No data available for ${appId}.`); // Debugging output
                statusContainer.innerHTML += `<p style="color: #b4b4b4;">No data available for ${appId}.</p>`;
            }
        });
    });
} */
function displayStatusUpdates() {
    const applications = ['realpage', 'gracehill', 'outlook', 'ticket'];

    applications.forEach(appId => {
        getStatusUpdates(appId, (data) => {
            if (data) {
                // Update the display elements with the fetched data
                document.getElementById(`${appId}-status-display`).textContent = data.status;
                document.getElementById(`${appId}-text-display`).textContent = data.errormsg;
            } else {
                console.log(`No data available for ${appId}`);
            }
        });
    });
}
// Call the function on page load
window.onload = displayStatusUpdates;

/*
// Function to retrieve query string parameters
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        realpageStatus: params.get('realpageStatus'),
        realpageText: params.get('realpageText'),
        gracehillStatus: params.get('gracehillStatus'),
        gracehillText: params.get('gracehillText'),
        outlookStatus: params.get('outlookStatus'),
        outlookText: params.get('outlookText'),
        ticketStatus: params.get('ticketStatus'),
        ticketText: params.get('ticketText')
    };
}
*/
