document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sidebar a");
    const mainContent = document.getElementById("main-content");

    // Define the content for each page section
    const pageContent = {
        dashboard_home: `
            <h2>Welcome to the Dashboard</h2>
            <p>This is the dashboard home page. Select a different section from the sidebar.</p>
        `,
        fleet_operations: `
            <h2>Fleet Operations</h2>
            <p>Here you can manage and view fleet operations, join upcoming fleets, and check fleet history.</p>
        `,
        industry: `
            <h2>Industry Tools</h2>
            <p>Manage your industry projects, check ISK production, and optimize your production chains.</p>
        `,
        market: `
            <h2>Market</h2>
            <p>View market trends, trade opportunities, and recent sales data from across New Eden.</p>
        `,
        eve_authenticator: `
            <h2>EVE Authenticator</h2>
            <p>Manage your EVE Online authenticator settings to secure your account.</p>
        `,
        profile: `
            <h2>Profile</h2>
            <p>Edit your profile settings, manage security, and update your personal information.</p>
        `,
        settings: `
            <h2>Settings</h2>
            <p>Adjust your dashboard preferences, notification settings, and more.</p>
        `
    };

    // Loop through each sidebar link
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent the default link behavior

            // Get the data-page attribute to determine which content to load
            const page = event.target.getAttribute("data-page");

            // Load the content based on the page
            if (pageContent[page]) {
                mainContent.innerHTML = pageContent[page];
            } else {
                mainContent.innerHTML = "<p>Error: Page not found.</p>";
            }
        });
    });
});
