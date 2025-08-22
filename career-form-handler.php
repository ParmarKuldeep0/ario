<?php
// filepath: d:\kuldeep\New folder\ario\career-form-handler.php

header('Content-Type: application/json');

// Allow CORS for local development (adjust for production)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit;
}

// Validate and sanitize input
$name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
$email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : '';
$phone = isset($_POST['phone']) ? strip_tags(trim($_POST['phone'])) : '';
$position = isset($_POST['position']) ? strip_tags(trim($_POST['position'])) : '';
$experience = isset($_POST['experience']) ? strip_tags(trim($_POST['experience'])) : '';
$message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

if (!$name || !$email || !$phone || !$position || !$experience) {
    echo json_encode(['success' => false, 'message' => 'Please fill all required fields.']);
    exit;
}

// Handle file upload
if (!isset($_FILES['resume']) || $_FILES['resume']['error'] !== UPLOAD_ERR_OK) {
    echo json_encode(['success' => false, 'message' => 'Resume file is required.']);
    exit;
}

$file = $_FILES['resume'];
$allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];
if (!in_array($file['type'], $allowedTypes)) {
    echo json_encode(['success' => false, 'message' => 'Only PDF or Word documents are allowed.']);
    exit;
}
if ($file['size'] > 5 * 1024 * 1024) {
    echo json_encode(['success' => false, 'message' => 'File size must be less than 5MB.']);
    exit;
}

// Prepare email
$to = 'info@arioshipping.com'; // Change to your receiving email
$subject = 'New Career Application';
$body = "Name: $name\nEmail: $email\nPhone: $phone\nPosition: $position\nExperience: $experience\nMessage:\n$message";

// Prepare file for attachment
$fileContent = file_get_contents($file['tmp_name']);
$fileName = basename($file['name']);
$fileType = $file['type'];
$boundary = md5(time());

// Email headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";

// Email message with attachment
$messageBody = "--{$boundary}\r\n";
$messageBody .= "Content-Type: text/plain; charset=\"utf-8\"\r\n";
$messageBody .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$messageBody .= $body . "\r\n\r\n";
$messageBody .= "--{$boundary}\r\n";
$messageBody .= "Content-Type: {$fileType}; name=\"{$fileName}\"\r\n";
$messageBody .= "Content-Disposition: attachment; filename=\"{$fileName}\"\r\n";
$messageBody .= "Content-Transfer-Encoding: base64\r\n\r\n";
$messageBody .= chunk_split(base64_encode($fileContent)) . "\r\n";
$messageBody .= "--{$boundary}--";

// Send email
if (mail($to, $subject, $messageBody, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Application submitted successfully!']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to submit application. Please try again.']);
}
?>