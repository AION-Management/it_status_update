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



function displayStatusUpdates() {
    // Retrieve data from localStorage
    const statusUpdates = JSON.parse(localStorage.getItem('statusUpdates'));
    
    if (!statusUpdates) {
        alert("No status updates available!");
        return;
    }

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

    const statusContainer = document.getElementById('status-container');
    statusContainer.innerHTML = `
        <h2 style="color: white;">RealPage</h2>
        <p style="color: #b4b4b4;"><strong>Status:</strong> <span style="color: ${getStatusColor(statusUpdates.realpageStatus)};">${statusUpdates.realpageStatus}</span></p>
        <p style="color: #b4b4b4;"><strong>Message:</strong> <span style="color: white;">${statusUpdates.realpageText}</span></p>
        
        <h2 style="color: white;">Grace Hill</h2>
        <p style="color: #b4b4b4;"><strong>Status:</strong> <span style="color: ${getStatusColor(statusUpdates.gracehillStatus)};">${statusUpdates.gracehillStatus}</span></p>
        <p style="color: #b4b4b4;"><strong>Message:</strong> <span style="color: white;">${statusUpdates.gracehillText}</span></p>
        
        <h2 style="color: white;">Outlook</h2>
        <p style="color: #b4b4b4;"><strong>Status:</strong> <span style="color: ${getStatusColor(statusUpdates.outlookStatus)};">${statusUpdates.outlookStatus}</span></p>
        <p style="color: #b4b4b4;"><strong>Message:</strong> <span style="color: white;">${statusUpdates.outlookText}</span></p>
        
        <h2 style="color: white;">Ticket System</h2>
        <p style="color: #b4b4b4;"><strong>Status:</strong> <span style="color: ${getStatusColor(statusUpdates.ticketStatus)};">${statusUpdates.ticketStatus}</span></p>
        <p style="color: #b4b4b4;"><strong>Message:</strong> <span style="color: white;">${statusUpdates.ticketText}</span></p>
    `;
}

// Call the function on page load
window.onload = displayStatusUpdates;
