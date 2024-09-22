<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database connection details
$host = 'localhost';
$db = 'starlight_portal';
$user = 'root';
$pass = ''; // Your MySQL root password

// Establish database connection
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form input
    $username = $_POST['username'];
    $password = $_POST['password'];
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Check if username is unique
    $query = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        // Username is unique, insert the new user
        $insertQuery = "INSERT INTO users (username, password) VALUES (?, ?)";
        $stmt = $conn->prepare($insertQuery);
        $stmt->bind_param("ss", $username, $hashedPassword);
        if ($stmt->execute()) {
            echo "Registration successful!";
        } else {
            echo "Error: " . $conn->error;
        }
    } else {
        echo "Username already exists.";
    }

    // Close the statement
    $stmt->close();
}

// Close the database connection
$conn->close();
?>
