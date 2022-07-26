// 导航实例
const headerEl = document.querySelector("header");
// 返回顶部实例
const scrollToTop = document.querySelector(".scrollToTop");

// 窗口滚动处理
window.addEventListener("scroll", () => {
  // 固定导航
  
  let height = headerEl.getBoundingClientRect().height;
  const logoImg = document.querySelector('.logo img');

  if (window.pageYOffset - height > 800) {
    if (!headerEl.classList.contains("sticky")) {
      headerEl.classList.add("sticky");
      logoImg.src = 'https://zhongjiu-img-1305730468.cos.ap-shanghai.myqcloud.com/logo/logo-black.png'
    }
  } else {
    headerEl.classList.remove("sticky");
    logoImg.src = 'https://zhongjiu-img-1305730468.cos.ap-shanghai.myqcloud.com/logo/logo-white.png'
  }

  // 显示返回顶部
  if (window.pageYOffset > 2000) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
});


// 滚动展示插件
// 通用动画配置，从底部50象素滑出来
const staggeringOption = {
  delay: 300,
  distance: "50px",
  duration: 500,
  easing: "ease-in-out",
  origin: "bottom"
};

/* ***** 响应式**** */

// 折叠按钮
const burgerEl = document.querySelector(".burger");
const nav = document.querySelector("header nav");
burgerEl.addEventListener("click", () => {
  headerEl.classList.toggle("open");
});


// 折叠菜单打开时，如果点击了链接，则自动关闭全屏导航
document.addEventListener("scrollStart", () => {
  
  if (headerEl.classList.contains("open")) {
    headerEl.classList.remove("open");
  }
});


renderTasteSteps()
function renderTasteSteps() {
  const oTasteSteps = document.querySelector('.taste-steps')
  const tasteStepsTpl = TASTE_STEP.reduce((prev, item) => {
    return prev += stepTpl(item);
  }, '')
  oTasteSteps.insertAdjacentHTML('beforeend', tasteStepsTpl)
}

function stepTpl({ step, title, content }) {
  return `
  <li class="step">
  <div class="step-title">
    <span class="step-number">${step}</span>
    <span class="title-content">${title}</span>
  </div>
  <div class="step-content">
    <span>${content}</span>
  </div>
</li>
  `
}
