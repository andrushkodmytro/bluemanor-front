<?php 
	$CSS_ver  = filemtime($_SERVER["DOCUMENT_ROOT"].'/v2/css/style.css');
	$JS_ver   = filemtime($_SERVER["DOCUMENT_ROOT"].'/v2/js/common.min.js');
	$URI      = $_SERVER['REQUEST_URI'];
	if ($URI == "/landing/") {
		$sitename = "Blue Manor Academy";
	} else {
		$sitename = " • Blue Manor Academy";
		$footerfeedback = '<li><a href="/landing/#DoYouHaveSomeQuestions" class="simpleButton ghostButton">Contact us</a></li>';
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php echo $title ?><?php echo $sitename ?></title>
	<!-- <link rel="stylesheet" href="/v2/css/style.<?php echo $CSS_ver ?>.css"> -->
	<link rel="stylesheet" href="/v2/css/style.css">
	<link rel="stylesheet" href="/v2/addon-css/addon.css">
</head>
<body <?php if ($modal != '') { echo 'class="'.$modal.'"'; }
	if ($URI == "/landing/") {
		// An ID to select main page from others
		echo 'id="landing-page"';
	}
?>>