
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

    const statusContainer = document.getElementById('status-container');
    statusContainer.innerHTML = `
        <h2>RealPage</h2>
        <p><strong>Status:</strong> ${statusUpdates.realpageStatus}</p>
        <p><strong>Message:</strong> ${statusUpdates.realpageText}</p>
        <h2>Grace Hill</h2>
        <p><strong>Status:</strong> ${statusUpdates.gracehillStatus}</p>
        <p><strong>Message:</strong> ${statusUpdates.gracehillText}</p>
        <h2>Outlook</h2>
        <p><strong>Status:</strong> ${statusUpdates.outlookStatus}</p>
        <p><strong>Message:</strong> ${statusUpdates.outlookText}</p>
        <h2>Ticket System</h2>
        <p><strong>Status:</strong> ${statusUpdates.ticketStatus}</p>
        <p><strong>Message:</strong> ${statusUpdates.ticketText}</p>
    `;
}

// Call the function on page load
window.onload = displayStatusUpdates;
