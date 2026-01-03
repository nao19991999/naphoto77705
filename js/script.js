// ハンバーガーメニュー
const navBtn = document.getElementById(`js_nav_btn`);
const navWindow = document.getElementById(`js_nav_window`);

navBtn.addEventListener(`click` ,() =>{
  navBtn.classList.toggle(`is-open`);
    navWindow.classList.toggle(`is-open`);
});

  // navクリックされたらnav閉じる
const navLinks = document.querySelectorAll(`.header__window_item a`);

navLinks.forEach(link =>{
  link.addEventListener(`click`, ()=>{
    navBtn.classList.remove(`is-open`);
    navWindow.classList.remove(`is-open`);
  });
});


// 歴史セクションの＋と-
document.querySelectorAll('.history__list__content_ttl_button').forEach(ttl => {
  ttl.addEventListener('click', () => {
    const icon = ttl.querySelector('.toggle_icon');
    const content = ttl.nextElementSibling;

    // 開閉アニメーション
    content.classList.toggle('open');

    // アイコン切り替え（open クラスの有無で判定するのが確実） 
    if (content.classList.contains('open')) { icon.textContent = 'ー'; } else { icon.textContent = '＋'; }
  });
});



// モーダル実装
const modal = document.getElementById(`imgModal`);
const modalImg = document.getElementById(`imgModalImg`);
const modalClose = document.getElementById(`imgModalClose`);
const modalBox = document.querySelector(`.img_modal__box`);

    // クリック対象の画像を全部所得
const images = document.querySelectorAll(`.content_text02_img img`);

    // 画像クリックでモーダル表示
images.forEach(img => {
  img.addEventListener(`click`,() =>{
    modal.style.display = `flex`;
    modalImg.src = img.src;
  } );
});

    // 背景クリックでも閉じる
modal.addEventListener(`click` , (e) =>{
  if(e.target === modal){
    modal.style.display = `none`;
  }
});

    // 閉じるボタン
modalClose.addEventListener(`click`, () =>{
  modal.style.display = `none`;
});



// movieモーダル
const items = document.querySelectorAll(`.movie__item`);
const Modal = document.getElementById(`videoModal`);
const modalVideo = document.getElementById(`modalVideo`);
const closeBtn = document.querySelector(`.modal__close`);

items.forEach(item => {
  item.addEventListener(`click`, () =>{
    const videoSrc = item.dataset.video;
    modalVideo.src = videoSrc;
    Modal.style.display = `flex`;
    modalVideo.play();
  });
});

    // モーダル閉じる動作のbox
function closeModal(){
    Modal.style.display = `none`;
    modalVideo.pause();
    modalVideo.src = "";
}
    //  背景クリックで閉じる
Modal.addEventListener(`click` , (e) =>{
  if(e.target === Modal){
    closeModal();
  }
});

    //  closebtnで閉じる
closeBtn.addEventListener(`click`, closeModal);