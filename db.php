<?php
$host     = 'localhost';
$utilizator = 'root';
$parola   = '';
$baza_date = 'parfumuri';

$conn = mysqli_connect($host, $utilizator, $parola, $baza_date);

if (!$conn) {
    die('Eroare conectare: ' . mysqli_connect_error());
}
?>