<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

if (isset($_POST['name']) && isset($_POST['email'])){
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'exampleaccount1@gmail.com';     // diisi oleh akun gmail
        $mail->Password = 'app_password_gmail';      // app password gmail
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom($email, $name);
        $mail->addAddress('exampleaccount2@gmail.com');      // diisi oleh email penerima

        $mail->isHTML(true);
        $mail->Subject = 'Pesan Formulir Kontak';
        $mail->Body    = $message;

        $mail->send();
        echo "Pesan Anda berhasil dikirim, $name!";
    } catch (Exception $e) {
        echo "Gagal mengirim pesan: {$mail->ErrorInfo}";
    }
}
?>
