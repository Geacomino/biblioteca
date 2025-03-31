<?php
// Preluare date din formular
$name = $_POST['name'];
$autor = $_POST['autor'];
$phone = $_POST['phone'];
$delivery = $_POST['delivery'];
$address = $_POST['address'];

// Mesajul de e-mail
$subject = "Cerere de împrumut carte";
$message = "
Nume solicitant: $name\n
Autor și nume carte: $autor\n
Număr telefon: $phone\n
Metoda de livrare: $delivery\n
Adresa de livrare: $address\n
";

// Adresa de e-mail unde se trimit datele
$to = "bucuricageacominomarian@yahoo.com"; // Înlocuiți cu adresa dumneavoastră de e-mail
$headers = "From: no-reply@bibliotecaonline.com"; // Adresa de expediare

// Trimitere e-mail
if (mail($to, $subject, $message, $headers)) {
    echo "Cererea de împrumut a fost trimisă cu succes!";
} else {
    echo "A apărut o eroare la trimiterea cererii.";
}
?>