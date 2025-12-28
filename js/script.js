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

const navBtn = document.getElementById(`js_nav_btn`);
const navWindow = document.getElementById(`js_nav_window`);

navBtn.addEventListener(`click` ,() =>{
  navBtn.classList.toggle(`is-open`);
    navWindow.classList.toggle(`is-open`);
});
