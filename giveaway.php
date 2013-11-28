<?php

header('refresh:5;url=/');

if(isset($_POST['email'])) {
	
	// CHANGE THE TWO LINES BELOW
	$email_to = "jen@square1nutrition.com";
	
	$email_subject = "Square 1 Giveaway";
	
	
	function died($error) {
		// your error code can go here
		echo "Sorry, but there are errors with the form you submitted.<br /><br />";
		echo $error."<br /><br />";
		echo "Please go back and fix these errors.<br /><br />";
		die();
	}
	
	// validation expected data exists
	if(!isset($_POST['name']) ||
		!isset($_POST['email'])) {
		died('Sorry, but there appears to be a problem with the form you submitted.');		
	}
	
	$name = $_POST['name']; // required
	$email_from = $_POST['email']; // required
	
	$error_message = "";
	$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
  	$error_message .= 'The Email you entered does not appear to be valid.<br />';
  }
	$string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$name)) {
  	$error_message .= 'The Name you entered does not appear to be valid.<br />';
  }
  if(strlen($error_message) > 0) {
  	died($error_message);
  }
	$email_message = "Form details below.\n\n";
	
	function clean_string($string) {
	  $bad = array("content-type","bcc:","to:","cc:","href");
	  return str_replace($bad,"",$string);
	}
	
	$email_message .= "Name: ".clean_string($name)."\n";
	$email_message .= "Email: ".clean_string($email_from)."\n";
	
	
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $headers);  
?>

<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Message Sent!</title>
        <meta name="description" content="">
		<style type="text/css">@font-face{font-family:'FontAwesome';src:url('css/font/fontawesome-webfont.eot');src:url('css/font/fontawesome-webfont.eot?#iefix') format('embedded-opentype'),url('css/font/fontawesome-webfont.woff') format('woff'),url('css/font/fontawesome-webfont.ttf') format('truetype');font-weight:normal;font-style:normal}a:first-child:after{content:"\f003";position:relative;top:37%;font-size:50px;font-family:FontAwesome;text-decoration:inherit;display:inline;width:auto;height:auto;line-height:normal;vertical-align:baseline;background-image:none!important;background-position:0 0;background-repeat:repeat}body{background-color:#191919;background-image:url(img/cover.jpg);padding:200px;font-family:"Helvetica","Arial",sans-serif;text-align:center}h1,p,a{color:#eee!important;text-decoration:none!important;margin:4px}@-webkit-keyframes error{0%{opacity:0;-webkit-transform:translateY(-100px)}100%{opacity:1;-webkit-transform:translateY(0)}}@-moz-keyframes error{0%{opacity:0;-moz-transform:translateY(-100px)}100%{opacity:1;-moz-transform:translateY(0)}}@keyframes error{0%{opacity:0;transform:translateY(-100px)}100%{opacity:1;transform:translateY(0)}}div,a{-webkit-animation-name:error;-moz-animation-name:error;animation-name:error;-webkit-animation-duration:1.5s;-moz-animation-duration:1.5s;animation-duration:1.5s}a:first-child{display:inline-block;height:200px;width:200px;background:transparent;border:5px solid #eee;border-radius:125px;margin:5px;margin-bottom:20px}a:nth-child(3){margin-top:20px;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#5bb75b;background-image:-moz-linear-gradient(top,#62c462,#51a351);background-image:-webkit-linear-gradient(top,#62c462,#51a351);background-image:linear-gradient(to bottom,#62c462,#51a351);background-repeat:repeat-x;padding:11px 19px;font-size:17.5px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;display:inline-block;margin-bottom:0;line-height:20px;text-align:center;vertical-align:middle;cursor:pointer;border:1px solid #bbb;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);-moz-box-shadow:inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);box-shadow:inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25)}a:nth-child(3):hover{background-position:0 -15px;-webkit-transition:background-position .1s linear;-moz-transition:background-position .1s linear;transition:background-position .1s linear;color:#fff;background-color:#51a351}a:nth-child(3):active{background-image:none;outline:0;-webkit-box-shadow:inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);-moz-box-shadow:inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);box-shadow:inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);background-color:#51a351}
		</style>
    </head>
    <body>
		<div>
			<a href="/"></a>
			<div>
				<h1>Good luck!</h1>
				<p>We're going to choose a winner and let you know how you did. <br>Don't worry, you'll hear from us soon.</p>
				<a href="/">Return home</a>
			</div>
        </div>
    </body>
</html>


<?php
}
die();
?>