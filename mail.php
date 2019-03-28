<?php
session_start();



$fname = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$desc = $_POST['message'];



$to = "mshaynerush@gmail.com";
$from = "inquire@doneritecc.com";
$subj = "Done Rite Carpet Cleaning Inquiry";
$msg = "Name ";
$msg .= $fname . "\r\n";
$msg .= "Phone: ";
$msg .= $phone . "\r\n";
$msg .= "Email: ";
$msg .= $email . "\r\n";
$msg .= "Message:" ."\r\n";
$msg .= $desc;

If(mail($to, $from, $subj, $msg))	{

	mail($email, $from, $subj, 'Thank you for your inquiry. We will contact you as soon as possible to discuss your project.');
	header("Location: http://www.cabinetsrestored.com/success.html");

} else {

	header("Location: http://www.doneritecc.com/");

}





?>