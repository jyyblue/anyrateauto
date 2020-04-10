<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title>CoreUI - Vue Open Source Bootstrap Admin Template</title>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-118965717-3"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      // Shared ID
      gtag('config', 'UA-118965717-3');
      // Vue.js ID
      gtag('config', 'UA-118965717-7');
    </script>

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/wow.min.js"></script>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key="></script>

    <script type="text/javascript" src="js/jquery.themepunch.tools.min.js"></script>
    <script type="text/javascript" src="js/jquery.themepunch.revolution.min.js"></script>

    
    <script type="text/javascript" src="js/extensions/revolution.extension.actions.min.js"></script>
    <script type="text/javascript" src="js/extensions/revolution.extension.carousel.min.js"></script>
    <script type="text/javascript" src="js/extensions/revolution.extension.kenburn.min.js"></script>
    <script type="text/javascript" src="js/extensions/revolution.extension.layeranimation.min.js"></script>
    <script type="text/javascript" src="js/extensions/revolution.extension.migration.min.js"></script>
    <script type="text/javascript" src="js/extensions/revolution.extension.navigation.min.js"></script>
    <script type="text/javascript" src="js/extensions/revolution.extension.parallax.min.js"></script>
    <script type="text/javascript" src="js/extensions/revolution.extension.slideanims.min.js"></script>
    <script type="text/javascript" src="js/extensions/revolution.extension.video.min.js"></script>
   
  </head>

  <body>
    <noscript>
      <strong>We're sorry but this app doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
    

    <script src="{{ asset('js/app.js') }}"></script>


     
    <script src="js/retina.js"></script>
    <script type="text/javascript" src="js/jquery.parallax.js"></script>
    <script type="text/javascript" src="js/jquery.inview.min.js"></script>
    <!-- <script src="js/main.js"></script> -->
    <script type="text/javascript" src="js/jquery.fancybox.js"></script>
    <script src="js/modernizr.custom.js"></script>
    <script defer src="js/jquery.flexslider.js"></script>
    <script src="js/jquery.bxslider.js" type="text/javascript"></script>
    <script src="js/jquery.selectbox-0.2.js" type="text/javascript"></script>
    <script type="text/javascript" src="js/jquery.mousewheel.js"></script>
    <script type="text/javascript" src="js/jquery.easing.js"></script>
    



  </body>
</html>
