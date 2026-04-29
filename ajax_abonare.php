<?php
require_once 'db.php';

header('Content-Type: application/json');

$raspuns = ['succes' => false, 'mesaj' => ''];

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    $raspuns['mesaj'] = 'Metodă nepermisă.';
    echo json_encode($raspuns);
    exit;
}

$nume  = trim($_POST['nume'] ?? '');
$email = trim($_POST['email'] ?? '');

if (empty($nume)) {
    $raspuns['mesaj'] = '⚠️ Te rugăm să introduci numele tău.';
} elseif (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $raspuns['mesaj'] = '⚠️ Te rugăm să introduci un email valid.';
} else {
    $stmt = mysqli_prepare($conn, "INSERT INTO abonati (nume, email) VALUES (?, ?)");
    mysqli_stmt_bind_param($stmt, "ss", $nume, $email);

    if (mysqli_stmt_execute($stmt)) {
        $raspuns['succes'] = true;
        $raspuns['mesaj']  = "✅ Mulțumim, <strong>{$nume}</strong>! Te vom anunța pe <strong>{$email}</strong>.";
    } else {
        $raspuns['mesaj'] = '⚠️ A apărut o eroare. Încearcă din nou.';
    }
    mysqli_stmt_close($stmt);
}

echo json_encode($raspuns);