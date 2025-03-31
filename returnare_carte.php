<?php
// Preluare date din formular
$name = $_POST['name'];
$autor = $_POST['autor'];
$telefon = $_POST['telefon'];
$metoda = $_POST['metoda'];

// Mesajul de e-mail
$subject = "Cerere de returnare carte";
$message = "
Nume solicitant: $name\n
Autor și nume carte: $autor\n
Număr telefon: $telefon\n
Metoda de returnare: $metoda\n
";

// Adresa de e-mail unde se trimit datele
$to = "biblioteca@example.com"; // Înlocuiți cu adresa dumneavoastră de e-mail
$headers = "From: no-reply@bibliotecaonline.com"; // Adresa de expediare

// Trimitere e-mail
if (mail($to, $subject, $message, $headers)) {
    echo "Cererea de returnare a fost trimisă cu succes!";
} else {
    echo "A apărut o eroare la trimiterea cererii.";
}
?>