<?php
    if (strpos($_SERVER['REQUEST_URI'], 'fullscreen') !== false) {
        $link           = './';
        $icon           = 'minimize';
		$fullscreenText = 'Exit full screen';
	} else {
        $link           = '?fullscreen';
        $icon           = 'maximize';
		$fullscreenText = 'Full screen';
	}

?>
<a href="<?php echo $link ?>" class="linkFullScreen hasIcon--<?php echo $icon ?>"><?php echo $fullscreenText ?></a>