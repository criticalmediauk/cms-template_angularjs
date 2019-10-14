<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title><?php echo $title; ?> | GDPR Saas</title>
    <meta name="description" content=""> 
    <meta name="author" content="critical media">
    <meta name="publisher" content="critical media">
    <meta name="copyright" content="critical media">
    <meta name="Content-Language" content="en">  
    <meta property="og:title" content="<?php echo $title; ?>" />
    <meta property="og:description" content="" />
    <meta property="og:locale" content="en" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="" />
    <meta property="og:image" content="" />
    <meta property="og:site_name" content="" />
    <meta name="theme-color" content="">
    <link href="https://fonts.googleapis.com/css?family=Be+Vietnam:300,300i,400,400i,500,500i,600,600i,700,700i&display=swap" rel="stylesheet">
    <link href="./assets/styles/dist/screen.css" rel="stylesheet" type="text/css">
  </head>
  <body class="<?php echo $current; ?>">

    <!--[if lte IE 9]> <p class="browserupgrade">You are using an outdated browser. Please <a href="https://browsehappy.com/"> update your browser </a> for more security and a better experience.</p> <![endif]-->
    
    <?php if ($login == true) { ?>

    <div class="portal__wrapper">
  
      <header class="portal__header p-6" role="banner">
        
        <div class="container-fluid p-0 h-100">

          <div class="row align-content-between h-100">

            <div class="col-12 line-height-1">
              <a href="/desktop" class="logo bg-white d-block" title="Back to the home page">
                <img class="logo-img" src="" role="img" alt="" width="150" height="100">
              </a>
            </div>

            <div class="col-12">
              <a href="/" class="text-white">Sign Out</a>
            </div>

          </div>

        </div>

      </header>

      <aside class="portal__aside text-right p-4 bg-grey-400"><a href="/">Sign Out</a></aside>

      <main class="portal__view p-6" id="mainContent">
        <div class="container-fluid p-0">
          <div class="row no-gutters">

            <header class="col-12 pb-6">
              <h1 class="display-4 m-0"><?php echo $title; ?></h1>
            </header>

    <?php } else { ?>
    
    <header class="header header--front header--down py-6" role="banner">

			<div class="container">
				
        <div class="row align-items-center justify-content-between">

          <div class="col-sm-4 text-center text-sm-left line-height-1">
            <a href="/" class="logo" title="Back to the home page">
              <img class="logo__img" src="" role="img" alt="" width="150" height="23">
            </a>
          </div>

          <div class="col-sm-4 text-center">
            <nav class="navigation d-inline-block" role="navigation">
              <ul class="list-inline m-0">
                <li class="list-inline-item"><a <?php if ($current == "home") { ?>class="active"<?php }?> href="/">Home</a></li>
                <li class="list-inline-item"><a <?php if ($current == "about") { ?>class="active"<?php }?> href="/about">About</a></li>
              </ul>
            </nav>
          </div>

          <div class="col-sm-4 text-right">
            <a href="/login" class="btn btn-gamma-wo">Sign In</a>
          </div>

        </div>

			</div>

    </header>

    <div class="view view--front">
    
    <?php } ?>
