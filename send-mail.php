<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {

    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;

    $mail->Username   = 'info@nerodevs.com';
    $mail->Password   = 'NeroDev@2026';

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom('info@nerodevs.com','NeroDevs Website');

    $mail->addAddress('info@nerodevs.com');

    $mail->isHTML(true);

    $mail->Subject = "New Website Enquiry";

    $body = "
    <h2>New Contact Form Submission</h2>

    <b>Name:</b> ".$_POST['name']."<br>
    <b>Email:</b> ".$_POST['email']."<br>
    <b>Phone:</b> ".$_POST['phone']."<br>
    <b>Service:</b> ".$_POST['service']."<br><br>

    <b>Message:</b><br>
    ".$_POST['message'];

    $mail->Body = $body;

    $mail->send();

    echo "<span style='color:lime'>✅ Thank you! Your message has been sent successfully.</span>";

} catch (Exception $e) {

    echo "<span style='color:red'>❌ Mail could not be sent.</span>";

}