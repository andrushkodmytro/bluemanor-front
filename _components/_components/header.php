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
	// if (strpos($URI, 'mode-fullscreen') !== false):? {
	// 	// echo 'class="mode-fullscreen"';
	// }
?>

<!DOCTYPE html>
<html lang="en" <?php
	if (strpos($_SERVER['REQUEST_URI'], 'fullscreen') !== false) {
		echo 'class="mode-fullscreen"';
	}
?>>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php echo $title ?><?php echo $sitename ?></title>
	<link rel="stylesheet" href="/v2/css/style.<?php echo $CSS_ver ?>.css">
	<link rel="stylesheet" href="/v2/addon-css/scss/addon.css">
</head>
<body <?php 

	if ($modal != '') { 
		echo 'class="'.$modal.'"'; 
	}

	if ($URI == "/landing/") {
		// An ID to select main page from others
		echo 'id="landing-page"';
	}

	?>
>
	<header <?php if ($header != '') { echo 'class="'.$header.'"'; }
		if ($URI == "/landing/") {
			// class="hasMenu" to distinguish from a logo-only header
			echo 'class="hasMenu"';
		}
	?>>

<?php if(strpos($_SERVER['REQUEST_URI'], 'fullscreen') !== false):?>
	lalala
<?php endif; ?>

		<a href="/" id="logo"><span>Blue Manor Academy</span></a>
		<?php 
			// echo $header;
			// if ($header == 'hasDashboardMenu') { echo '<nav>
			// if (strpos($header, 'hasDashboardMenu') !== false) { echo '<nav>
			// if (stristr($header, 'hasDashboardMenu') !== false) { echo '<nav>
			// if ($header == 'hasDashboardMenu' || $header == 'hasDashboardMenu hideOnSmall') { echo '<nav>
			if (strpos($header, 'hasDashboardMenu') !== false) { echo '<nav>
				<ul>
					<li><a href="?a" class="simpleButton ghostButton sizeM hasIcon--grid withoutText" title="Dashboard"><span>Dashboard</span></a></li>
					<li><a href="?b" class="simpleButton ghostButton sizeM hasIcon--book-open withoutText" title="Library"><span>Library</span></a></li>
					<li><a href="?c" class="simpleButton ghostButton sizeM hasIcon--shopping-cart withoutText" title="Shop"><span>Shop</span></a></li>
					<li><a href="?d" class="simpleButton ghostButton sizeM hasIcon--mail withoutText" title="Notifications"><span>Notifications</span></a></li>
					<li class="dropdownMenuWrapper">
						<a href="?e" class="simpleButton ghostButton sizeM hasIcon--user withoutText active" title="User"><span>User</span></a>
						<ul class="dropdownMenu">
							<li class="hasBorderBottom"><strong>honorificabilitudinitatibus@gmail.com</strong></li>
							<li class=""><a href="?EditProfile" class="hasIcon--edit">Edit profile</a></li>
							<li class=""><a href="?Billing" class="hasIcon--credit-card">Billing</a></li>
							<li class="hasBorderTop"><a href="?Logout" class="hasIcon--log-out">Logout</a></li>
						</ul>
					</li>
				</ul>
			</nav>'; }
			// if ($header == 'hasStudentDashboardMenu') { echo '<nav>
			if (strpos($header, 'hasStudentDashboardMenu') !== false) { echo '<nav>
				<ul>
					<li><a href="?a" class="simpleButton ghostButton sizeM hasIcon--clock wAuto hasHalveIndents" title="Dashboard"><strong>30:00</strong></a></li>
					<li><a href="?a" class="simpleButton ghostButton sizeM hasIcon--grid withoutText" title="Dashboard"><span>Dashboard</span></a></li>
					<li class="dropdownMenuWrapper">
						<a href="?c" class="simpleButton ghostButton sizeM hasIcon--file-text withoutText activeNO" title="Notes"><span>Notes</span></a>
						<ul class="dropdownMenu">
							<li class=""><a href="?add" class="hasIcon--plus-circle">Add new note</a></li>
							<li class=""><a href="?notes" class="hasIcon--file">All notes</a></li>
						</ul>
					</li>
					<li><a href="?d" class="simpleButton ghostButton sizeM hasIcon--mail withoutText" title="Notifications"><span>Notifications</span></a></li>
					<li class="dropdownMenuWrapper">
						<a href="?e" class="simpleButton ghostButton sizeM userAvatar activeNO" title="Melinda">
							<picture>
								<source srcset="/v2/img/avatar/Illustrated/1x/001.avif,	/v2/img/avatar/Illustrated/2x/001.avif 2x,	/v2/img/avatar/Illustrated/3x/001.avif 3x" type="image/avif">
								<source srcset="/v2/img/avatar/Illustrated/1x/001.webp,	/v2/img/avatar/Illustrated/2x/001.webp 2x,	/v2/img/avatar/Illustrated/3x/001.webp 3x" type="image/webp">
								<source srcset="/v2/img/avatar/Illustrated/1x/001.jpg,	/v2/img/avatar/Illustrated/2x/001.jpg 2x,	/v2/img/avatar/Illustrated/3x/001.jpg 3x">
								<img class="img" src="/v2/img/avatar/1x/001.jpg" alt="Melinda" title="Melinda">
							</picture>
						</a>
						<ul class="dropdownMenu">
							<li class="hasBorderBottom"><strong>Melinda</strong></li>
							<li><a href="?EditProfile" class="hasIcon--edit">Edit profile</a></li>
							<li><form><button class="asLink hasIcon--log-out">Go to parent</button></form></li>
						</ul>
					</li>
				</ul>
			</nav>'; }
			if ($URI == "/landing/") { echo '<nav>
				<ul>
					<li><a href="#DoYouHaveSomeQuestions">Contact us</a></li>
					<li><a href="/accounts/login/" class="simpleButton ghostButton hasIcon--log-in">Log in</a></li>
				</ul>
			</nav>'; }
		?>
	</header>