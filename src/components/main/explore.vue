<template>

<head>
    <meta charset="utf-8" />
    <link rel="apple-touch-icon" sizes="76x76" href="assets/images/apple-icon.png">
	   <link rel="icon" type="image/png" sizes="96x96" href="assets/images/favicon.png">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>Traveller | Wanderlust</title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <link href="assets/css/bootstrap.css" rel="stylesheet" />
    <link href="assets/css/gaia.css" rel="stylesheet"/>
    <link href='https://fonts.googleapis.com/css?family=Cambo|Poppins:400,600' rel='stylesheet' type='text/css'>
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
    <link href="assets/css/fonts/pe-icon-7-stroke.css" rel="stylesheet">
</head>

<body>
    <nav class="navbar navbar-default navbar-transparent navbar-fixed-top" color-on-scroll="200">
        <div class="container">
            <div class="navbar-header">
                <button id="menu-toggle" type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar bar1"></span>
                    <span class="icon-bar bar2"></span>
                    <span class="icon-bar bar3"></span>
                </button>
                <a href="#" class="navbar-brand">
                    Traveller | Wanderlust
                </a>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right navbar-uppercase">
                    <li class="dropdown">
                        <ul class="dropdown-menu dropdown-danger">
                            <li>
                                <a href="#"><i class="fa fa-facebook-square"></i> Facebook</a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-twitter"></i> Twitter</a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-instagram"></i> Instagram</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a v-link="{ name: 'login' }" class="btn btn-primary btn-fill">Login as Member</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
    </nav>
<div class="section section-small section-get-started">
    <div class="parallax filter">
        <div class="image"
            style="background-image: url('assets/images/office-1.jpg')">
        </div>
<div class="container">
  <div class="card-box col-md-4 col-sm-6">
      <div class="card text-center" style="background-image: url(../../../assets/images/bangkok.jpg)">
          <h4 class="title title-modern" style="color: white;">Bangkok 5 Days 4 Night</h4>

          <div class="content">
              <div class="price">
                  <h6>From</h6>
                  <h4>1,200<b class="currency">$</b></h4>
              </div>
              <div class="footer btn-center">
                  <button class="btn btn-neutral btn-round btn-fill">Book Now!</button>
              </div>
          </div>

      </div> <!-- end card -->
  </div>
  <div class="card-box col-md-4 col-sm-6">
      <div class="card text-center" style="background-image: url(../../../assets/images/amsterdam.jpg)">
          <h4 class="title title-modern"  style="color: white;">Amsterdam 5 Days 4 Night</h4>

          <div class="content">
              <div class="price">
                  <h6>From</h6>
                  <h4>8,000<b class="currency">$</b></h4>
              </div>
              <div class="footer btn-center">
                  <button class="btn btn-neutral btn-round btn-fill">Book Now!</button>
              </div>
          </div>

      </div> <!-- end card -->
  </div>
  <div class="card-box col-md-4 col-sm-6">
      <div class="card text-center"  style="background-image: url(../../../assets/images/hongkong.jpg)">
          <h4 class="title title-modern"  style="color: white;">Hong Kong 7 Days 6 Night</h4>

          <div class="content">
              <div class="price">
                  <h6>From</h6>
                  <h4>5,000<b class="currency">$</b></h4>
              </div>
              <div class="footer btn-center">
                  <button class="btn btn-neutral btn-round btn-fill">Book Now!</button>
              </div>
          </div>

      </div> <!-- end card -->
  </div>
</div>
</div>
</div>

    <footer class="footer footer-big footer-color-black" data-color="black">
        <div class="container">
            <div class="row">
                <div class="col-md-2 col-sm-3">
                    <div class="info">
                        <h5 class="title">Company</h5>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">Home</a></li>
                                <li>
                                    <a href="#">Find Package</a>
                                </li>
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="col-md-3 col-md-offset-1 col-sm-3">
                    <div class="info">
                        <h5 class="title"> Help and Support</h5>
                         <nav>
                            <ul>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#">Terms &amp; Conditions</a>
                                </li>
                                <li>
                                    <a href="#">Money Back</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="col-md-3 col-sm-3">
                    <div class="info">
                        <h5 class="title">Latest News</h5>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-twitter"></i> <b>Melbourne Trip</b> Coming soon! Stay tuned
                                        <hr class="hr-small">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-twitter"></i> We've just been featured on <b> The Holiday Magazine</b>! Thank you everybody for...
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="col-md-2 col-md-offset-1 col-sm-3">
                    <div class="info">
                        <h5 class="title">Follow us on</h5>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#" class="btn btn-social btn-facebook btn-simple">
                                        <i class="fa fa-facebook-square"></i> Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="btn btn-social btn-dribbble btn-simple">
                                        <i class="fa fa-dribbble"></i> Dribbble
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="btn btn-social btn-twitter btn-simple">
                                        <i class="fa fa-twitter"></i> Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="btn btn-social btn-reddit btn-simple">
                                        <i class="fa fa-google-plus-square"></i> Google+
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <hr>
            <div class="copyright">
                 © <script> document.write(new Date().getFullYear()) </script> Traveller Company
            </div>
        </div>
    </footer>

</body>
<!--   core js files    -->
<script src="assets/js/jquery.min.js" type="text/javascript"></script>
<script src="assets/js/bootstrap.js" type="text/javascript"></script>
<!--  js library for devices recognition -->
<script type="text/javascript" src="assets/js/modernizr.js"></script>
<!--  script for google maps   -->
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js"></script>
<!--   file where we handle all the script from the Gaia - Bootstrap Template   -->
<script type="text/javascript" src="assets/js/gaia.js"></script>
</html>
</template>
