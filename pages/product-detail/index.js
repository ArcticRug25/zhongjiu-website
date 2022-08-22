// 导航实例
const headerEl = document.querySelector("header");
// 返回顶部实例
const scrollToTop = document.querySelector(".scrollToTop");

// 窗口滚动处理
window.addEventListener("scroll", () => {
  // 固定导航
  let height = headerEl.getBoundingClientRect().height;

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
getProduct();
function getParams(key) {
  let params = new URLSearchParams(document.location.search.substring(1));
  return Number(params.get(key));
}

function getProduct() {
  const id = getParams('id')
  const curProduct = PRODUCT_LIST.find(product => product.id === id);

  renderProductTpl(curProduct);
}

function renderProductTpl(curProduct) {
  const oProductDetail = document.querySelector('.product-detail')
  oProductDetail.insertAdjacentHTML('beforeend', createProductTpl(curProduct))
}

function createProductTpl({name, imgArr}) {
  return `
  <div class="product-img">
            <img src="${imgArr[0]}">
          </div>
          <div class="product-intro">
            <h1>${name}</h1>
            <div class="intro-item">品名: ${name}</div>
            <div class="intro-item">香型: 酱香型白酒</div>
            <div class="intro-item">原料: 水、高粱、小麦</div>
            <div class="intro-item">执行标准号: GB/T26760-2011 (优级)</div>
            <div class="intro-item">容量: 500ml</div>
            <div class="intro-item">酒精度: 53%vol</div>
            <div class="intro-item">适用场景: 收藏、小聚、送礼、自饮</div>
            <div class="intro-item">储存方法: 在常温下保存</div>
            <div class="intro-item">生产厂家：仁怀市中酒黔晨酒业有限公司</div>
            <div class="intro-item">出品公司：贵州省仁怀市中酒酒业销售有限公司</div>
            <div class="intro-item">厂址（原产地）：贵州省仁怀市茅台镇</div>
          </div>
  `
}
