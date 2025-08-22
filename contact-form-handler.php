<?php
// filepath: d:\kuldeep\New folder\ario\contact-form-handler.php

header('Content-Type: application/json');

// Allow CORS for local development (optional, adjust for production)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit;
}

// Get and sanitize input
$data = json_decode(file_get_contents('php://input'), true);

$name = isset($data['name']) ? strip_tags(trim($data['name'])) : '';
$email = isset($data['email']) ? filter_var($data['email'], FILTER_SANITIZE_EMAIL) : '';
$phone = isset($data['phone']) ? strip_tags(trim($data['phone'])) : '';
$message = isset($data['message']) ? strip_tags(trim($data['message'])) : '';

if (!$name || !$email || !$message) {
    echo json_encode(['success' => false, 'message' => 'Please fill all required fields.']);
    exit;
}

// Prepare email
$to = 'info@arioshipping.com'; // Change to your receiving email
$subject = 'New Contact Form Submission';
$body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";
$headers = "From: $email\r\nReply-To: $email\r\n";

// Send email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send message. Please try again.']);
}
?>