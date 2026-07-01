<?php

//メタ情報等の定義
$lp_title = '1店舗で年商5億超の実績。買取専門店「まねきや」法人フランチャイズ募集';
$lp_description = '【法人限定】狭小店舗から開業、最短翌日現金化で在庫リスク0。投資回収約4ヶ月の高収益モデル。500店展開に向けた今、好立地店舗が選び放題です。';
$lp_directory = 'manekiya-2034';
$lp_url = 'https://fcsalon.net/manekiya-2034/';

function emology_enqueue_script()
{
  if (is_front_page()) {
    wp_enqueue_script(
      'emology_link_customer_rings',
      get_theme_file_uri('/assets/js/linkCustomerRings.js'),
      array('jquery'),
      null,
      true
    );
  }
}
add_action('wp_enqueue_scripts', 'emology_enqueue_script');

// ContactForm7で自動挿入されるPタグ、brタグを削除
add_filter('wpcf7_autop_or_not', 'wpcf7_autop_return_false');
function wpcf7_autop_return_false()
{
  return false;
}
