<?php
	global $lp_description, $lp_title, $lp_directory,$lp_url;
?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-TXSVHK3T');</script>
  <!-- End Google Tag Manager -->

  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.jsdelivr.net/npm/viewport-extra@1.0.4/dist/viewport-extra.min.js"></script>
  <script>
  // new ViewportExtra({ minWidth: 375, maxWidth: 1240 });
  (function() {
    var ua = navigator.userAgent
    var sp = ua.indexOf('iPhone') > -1 ||
      (ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1)
    var tab = !sp && (
      ua.indexOf('iPad') > -1 ||
      (ua.indexOf('Macintosh') > -1 && 'ontouchend' in document) ||
      ua.indexOf('Android') > -1
    )
    new ViewportExtra(tab ? 1240 : 375)
  })()
  </script>
  <link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/assets/css/sendingDialogStyles.css">
  <!-- 離脱防止ポップアップCSS -->
  <link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/assets/css/withdrawalPrevention.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Zen+Kaku+Gothic+New:wght@300;400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/scroll-hint@1.1.10/css/scroll-hint.css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/assets/css/privacyPolicyStyles.css">
  <link rel="stylesheet" href="<?php bloginfo ('template_directory'); ?>/assets/css/style.css?<?php echo date("YmdHis") ?>" type="text/css" />
  <link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/assets/favicon/favicon.ico">
  <link rel=canonical href=<?php echo $lp_url; ?>>
  <title><?php echo $lp_title; ?></title>
  <meta name="description" content="<?php echo $lp_description; ?>">
  <meta property="og:url" content="<?php echo $lp_url; ?>" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="<?php echo $lp_title; ?>" />
  <meta property="og:description" content="<?php echo $lp_description; ?>" />
  <meta property="og:site_name" content="<?php echo $lp_title; ?>" />
  <meta property="og:image" content="<?php bloginfo('template_directory'); ?>/assets/img/top/ogp.jpg" />
  <meta name="theme-color" content="#ffffff">
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="" />
  <?php wp_head(); ?>
  <!--CustomerRings-->
  <script src="https://asset.c-rings.net/script/cr_effectLog-v21a.min.js" type="text/javascript"></script>
  <!--End of CustomerRings -->

</head>

<body <?php body_class(); ?>>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TXSVHK3T"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  <!--CustomerRings-->
  <script type="text/javascript">
    if (location.pathname.match(/thanks/)) {
      console.log("★customerRings thanks page")
      PAC_CR_CV.postLog();
    }
  </script>
  <!--End of CustomerRings -->


  <div class="header-wrapper">
    <header class="header">
      <div class="header_inner">
        <div class="header_left">
          <div class="header_logo">
            <a href="<?php echo esc_url( home_url( '' ) ); ?>" class="logo">
              <img class="logo_products" src="<?php bloginfo('template_directory'); ?>/assets/img/top/logo.png" alt="<?php echo $lp_title; ?>">
            </a>
            <a href="https://franchisesalon.net/sales-7763/?lp=<?php echo $lp_directory ?>" target="_blank" class="fc">
              <picture>
                <source media="(max-width: 767px)" srcset="<?php bloginfo('template_directory'); ?>/assets/img/top/logo-fc-sm.png">
                <img src="<?php bloginfo('template_directory'); ?>/assets/img/top/logo-fc.png" alt="フランチャイズサロン FC本部様はこちらをクリック">
              </picture>
            </a>
          </div>
        </div>
      </div>
    </header>
  </div>