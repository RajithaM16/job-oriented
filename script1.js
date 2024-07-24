// Get references to the elements
const icons = document.querySelectorAll('.icon');
const dataContainer = document.getElementById('data-container');
const displayData = document.getElementById('display-data');

// Add a click event listener to each icon
icons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        // Simulate getting data based on the clicked icon (replace with your data logic)
        const data = `Data associated with Icon ${index + 1}`;

        // Display the data in the data container
        displayData.textContent = data;

        // Show the data container
        dataContainer.style.display = 'block';
    });
});
    document.querySelector('a[href="#about"]').addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector('#about');
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });const iconContainer = document.querySelector('.container-1');
    const toggleButton = document.getElementById('toggle-button');
    
    toggleButton.addEventListener('click', () => {
        if (iconContainer.style.display === 'none' || iconContainer.style.display === '') {
            iconContainer.style.display = 'block'; // Show icons
        } else {
            iconContainer.style.display = 'none'; // Hide icons
        }
    });

// Sample company name-to-icon mapping (you can replace this with your data)
const companyIcons = {
    "amazon": "ama.jpeg",
    "zoho": "Zoho.jpg",
    "TCS": "TCS.jpg",
    "delotite":"deloitte.png",
    "adobe":"adobe.jpg",
    // Add more company-name to icon-file mappings as needed
};

// Sample company name-to-HTML-page mapping (you can replace this with your data)
const companyPages = {
    "amazon": "amazon.html",
    "zoho": "zoho.html",
    "TCS": "tcs.html",
    "delotite":"deloitte.html",
    "adobe":"adobe.html",
    // Add more company-name to HTML-page mappings as needed
};

// Function to display the icon for the entered company name
function displayIcon() {
    const companyName = document.getElementById("search-input").value.toLowerCase();
    const iconContainer = document.getElementById("container");
    if (companyIcons[companyName]) {
        const iconPath = companyIcons[companyName];
        iconContainer.innerHTML = `<img src="${iconPath}" alt="${companyName} Icon">`;
        // Add a click event listener to the displayed icon
        iconContainer.addEventListener("click", function () {
            if (companyPages[companyName]) {
                // Navigate to the specified HTML page
                window.location.href = companyPages[companyName];
            }
        });
    } else {
        iconContainer.innerHTML = "<p>Company not found</p>";
    }
}
// Event listener for input changes (user typing)
document.getElementById("search-input").addEventListener("input", displayIcon);
function displayIcon1() {
    const companyName = document.getElementById("search-input").value.toLowerCase();
    const iconContainer1 = document.getElementById(".icon2");
    if (companyIcons1[companyName]) {
        const iconPath = companyIcons[companyName];
        iconContainer1.innerHTML = `<img src="${iconPath}" alt="${companyName} Icon">`;
        // Add a click event listener to the displayed icon
        iconContainer1.addEventListener("click", function () {
            if (companyPages[companyName]) {
                // Navigate to the specified HTML page
                window.location.href = companyPages[companyName];
            }
        });
    } else {
        iconContainer1.innerHTML = "<p>Company not found</p>";
    }
}
// Event listener for input changes (user typing)
document.getElementById("search-input").addEventListener("input", displayIcon1);
