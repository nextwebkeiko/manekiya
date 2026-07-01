<div class="thanks-page">
  <?php get_header(); ?>
  <div class="thanks-page__inner">
    <div class="card">
      <h3>問い合わせ完了</h3>
      <p>ご入力いただいた電話番号、メールアドレス宛に担当者からご連絡させていただきます。<br>資料は担当者より送られるメールにてダウンロードいただけますので、少々お待ちください。</p>
    </div>
    <div class="line__wrapper">
      <div class="left-part">
        <picture>
          <source media="(max-width: 768px)" srcset="<?php bloginfo('template_directory'); ?>/assets/img/thanks/line-text-sp.png" width="296" height="109">
          <img src="<?php bloginfo('template_directory'); ?>/assets/img/thanks/line-text.png" width="318" height="115" alt="" class="text-img" />
        </picture>
        <p class="text">フランチャイズやビジネスに関する<br class="sp-only
                ">最新情報を配信中！</p>
        <div class="line__flow">
          <div class="line__flow__head">友だち追加方法は2つ！</div>
          <div class="line__flow__content">
            <div class="line__flow__content__num">方法<span>1</span></div>
            <div class="line__flow__content__text">QRコードで登録！</div>
          </div>
          <div class="line__flow__caption">カメラで<span>右のQRコードを読み込む</span>→追加</div>
          <div class="line__flow__content">
            <div class="line__flow__content__num">方法<span>2</span></div>
            <div class="line__flow__content__text" data-indent>「ID検索」で登録！</div>
          </div>
          <div class="line__flow__caption">ホーム→友だち追加→検索を選択し、<br><span>ID「@741unuwu」</span>で検索</div>
        </div>
      </div>
      <div class="right-part --pc">
        <div class="text__wrapper">
        </div>
        <img class="qr" src="<?php bloginfo('template_directory'); ?>/assets/img/thanks/qr.png" width="122" height="122" alt="" />
        <div class="line-id">
          <div class="line-id__upper">
            <p>LINE ID</p>
          </div>
          <p class="line-id__text">@741unuwu</p>
        </div>
        <img class="sp-bg" src="<?php bloginfo('template_directory'); ?>/assets/img/thanks/smartphone.png" width="230" height="405" alt="" />
      </div>
      <div class="right-part --sp">
        <!-- <div class="text__wrapper">
                    <svg class="vector --first" width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.2857 0L18 24L0 0H10.2857Z" fill="#cd281d" />
                    </svg>
                    <p>お友達登録はこちらから！</p>
                    <svg class="vector --last" width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.2857 0L18 24L0 0H10.2857Z" fill="#cd281d" />
                    </svg>
                </div> -->
        <a class="line-link" href="https://lin.ee/MJCy1fa">
          <div class="line-link__inner">
            <img class="line-icon" src="<?php bloginfo('template_directory'); ?>/assets/img/thanks/line-icon.png" width="45px" height="45px" alt="" />
            <p>友だち追加</p>
          </div>
        </a>
      </div>
    </div>
  </div>


  <?php get_footer(); ?>
</div>
