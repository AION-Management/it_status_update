/*
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAt_UgVnzRq-E-9MrUj02Cyupy_mL1Gfa0",
    authDomain: "status-update-c5a72.firebaseapp.com",
    databaseURL: "https://status-update-c5a72-default-rtdb.firebaseio.com",
    projectId: "status-update-c5a72",
    storageBucket: "status-update-c5a72.appspot.com",
    messagingSenderId: "706934655596",
    appId: "1:706934655596:web:25c622f2d93e6648e72649",
    measurementId: "G-FF3BKTGF69"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
*/


// Toggle the dropdown visibility on click
function toggleDropdown(event) {
    console.log("Dropdown toggled");  // For debugging
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
function writeUserData(app, status, errormsg) {
    const db = getDatabase();
    const dbRef = ref(db, 'users/' + app); // Specify path for data
    set(dbRef, {
        app: app,
        status: status,
        errormsg: errormsg
    });
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

    // Write each entry to the database
    //writeUserData('realpage', statusUpdates.realpageStatus, statusUpdates.realpageText);
    //writeUserData('gracehill', statusUpdates.gracehillStatus, statusUpdates.gracehillText);
    //writeUserData('outlook', statusUpdates.outlookStatus, statusUpdates.outlookText);
    //writeUserData('ticket', statusUpdates.ticketStatus, statusUpdates.ticketText);

    alert('Status updates saved successfully!');
}
