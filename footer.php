<?php
	global $lp_description, $lp_title, $lp_directory;
?>

<footer class="footer">
  <div class="footer_about">
    <div class="footer_about_inner">
      <div class="footer_about_logo">
        <img src="<?php bloginfo('template_directory'); ?>/assets/img/top/pict-logo-fc.png" alt="フランチャイズサロン">
        <span>とは？</span>
      </div>
      <div class="footer_about_text">フランチャイズサロンは、フランチャイズや代理店の募集をはじめ、さまざまなビジネスに関する情報を提供して、独立開業や新規事業を検討している方を応援しています。</div>
    </div>
  </div>
  <div class="footer_company">
    <div class="footer_company_inner">
      <div class="footer_left footer_company_body">
        <p class="footer_company_ttl"><strong>まねきや　FC本部 <br>株式会社水野</strong></p>
        <p>〒160-0023<br>東京都新宿区西新宿6-6-3 新宿国際ビルディング 新館8F</p>

      </div>
      <div class="footer_right footer_company_body">
        <p class="footer_company_ttl"><strong>フランチャイズサロン運営事務局<br>株式会社emology</strong></p>
        <p>〒150-0002 <br>東京都渋谷区渋谷1-7-4 青山小林ビル3階</p>
        <div class="footer_ad_links">
          <a href="https://franchisesalon.net/sales-7763/?lp=<?php echo $lp_directory ?>" target="_blank">SNS広告をご検討中のフランチャイズ本部様はこちら</a>
        </div>
      </div>
    </div>
  </div>
  <div class="footer_bottom">
    <p class="copyright">© <?php echo date('Y'); ?> emology Inc.</p>
  </div>
</footer>
<?php get_template_part('include/privacy'); ?>
<?php if (is_front_page() === true) : ?>
<!-- 離脱防止ダイアログJS -->
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script src="<?php echo get_template_directory_uri() ?>/assets/js/withdrawalPrevention.js"></script>
<!-- END 離脱防止ダイアログJS -->
<!-- scroll hint JS-->
<script src="https://unpkg.com/scroll-hint@latest/js/scroll-hint.min.js"></script>
<!-- かな変換 JS -->
<script src="<?php echo get_template_directory_uri() ?>/assets/js/sendingDialog.js" defer></script>
<!-- 送信中ダイアログ -->
<script src="<?php echo get_template_directory_uri() ?>/assets/js/libs/jquery.autoKana.js" defer></script>
<!-- 電話番号バリデーション -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/libphonenumber-js/1.1.10/libphonenumber-js.min.js"></script>
<script src="<?php echo get_template_directory_uri() ?>/assets/js/telValidation.js"></script>
<script src="<?php echo get_template_directory_uri() ?>/assets/js/setParameter.js"></script>
<!-- END 電話番号バリデーション -->
<script src="<?php echo get_template_directory_uri() ?>/assets/js/bundle.js" defer></script>
<?php endif; ?>

<!-- main JS -->

<!--CustomerRings-->
<script src="https://asset.c-rings.net/script/cr_effectLog-v21a.min.js" type="text/javascript" defer></script>
<!--End of CustomerRings -->

<?php wp_footer(); ?>
</body>

</html>
