$(document).ready(function () {
  $("#owl-carousel-header").owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    drag: false,
    margin: 0,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

const minus = (obj) => {
  const parentObj = obj.parentNode;
  const previous = parentObj.parentNode.previousSibling.previousElementSibling;
  let number = Number(parentObj.children[1].innerHTML);
  let price = Number(previous.children[0].innerHTML);

  
  if (number > 1) {
    number -= 1;

  }
  parentObj.children[1].innerHTML = number;
  previous.children[1].innerHTML = number;
  previous.children[0].innerHTML = price;
};

const plus = (obj) => {
  const parentObj = obj.parentNode;
  const previous = parentObj.parentNode.previousSibling.previousElementSibling;

  let number = Number(parentObj.children[1].innerHTML);

  let price = Number(previous.children[0].innerHTML);

  number += 1;

  previous.children[1].innerHTML = number;
  parentObj.children[1].innerHTML = number;
  previous.children[0].innerHTML = price;
};

const orderProduct = () => {
  const productActive = document.querySelector(".product-active");
  const blue = document.querySelector("#blue-detail");
  const lime = document.querySelector("#lime-detail");
  const melon = document.querySelector("#melon-detail");
  const orange = document.querySelector("#orange-detail");
  const kiwi = document.querySelector("#kiwi-detail");

  switch (productActive.id) {
    case "blueberry":
      blue.classList.replace("hide", "show");
      break;
    case "kiwi":
      kiwi.classList.replace("hide", "show");

      break;
    case "melon":
      melon.classList.replace("hide", "show");

      break;
    case "lime":
      lime.classList.replace("hide", "show");

      break;
    case "orange":
      orange.classList.replace("hide", "show");

      break;
    default:
      break;
  }
};

const closeOrder = () => {
  const blue = document.querySelector("#blue-detail");
  const lime = document.querySelector("#lime-detail");
  const melon = document.querySelector("#melon-detail");
  const orange = document.querySelector("#orange-detail");
  const kiwi = document.querySelector("#kiwi-detail");

  blue.classList.replace("show", "hide");
  lime.classList.replace("show", "hide");
  melon.classList.replace("show", "hide");
  orange.classList.replace("show", "hide");
  kiwi.classList.replace("show", "hide");
};

const toggeMenu = () => {
  const menu = document.querySelector("#menu");
  const iconOpen = document.querySelector("#open-menu-icon");
  const welcom = document.querySelector("#welcom");
  iconOpen.src = "./image/close-icon.svg";
  menu.classList.replace("hide", "show");
  welcom.classList.replace("show", "hide");
};

const untoggeMenu = () => {
  const menu = document.querySelector("#menu");
  const iconOpen = document.querySelector("#open-menu-icon");
  const welcom = document.querySelector("#welcom");
  iconOpen.src = "./image/menu-icon.png";
  menu.classList.replace("show", "hide");
  welcom.classList.replace("hide", "show");
};

const clearMove = () => {
  const productChoice = document.querySelector("#product-choice");
  productChoice.classList.remove("move-right");
};

const moveRight = () => {
  const productChoice = document.querySelector("#product-choice");
  productChoice.classList.add("move-right");
};

const unToggeProduct = () => {
  const allProductActive = document.querySelectorAll(".product");

  allProductActive.forEach((item) => {
    item.classList.remove("product-active");
  });
};

const changeProduct = (link) => {
  const productChoice = document.querySelector("#product-choice");
  productChoice.src = link;
};

const toggleProduct = (obj) => {
  const productActive = obj;
  const productBackground = document.querySelector("#product-bg");
  clearMove();
  unToggeProduct();

  switch (productActive.id) {
    case "blueberry":
      productBackground.className = "";
      productBackground.classList.add("bg-product-blueberry");
      productActive.classList.add("product-active");
      changeProduct("./image/big-blue-juice.png");
      moveRight();
      break;
    case "kiwi":
      productBackground.className = "";
      productBackground.classList.add("bg-product-kiwi");
      productActive.classList.add("product-active");
      changeProduct("./image/big-kiwi-juice.png");
      moveRight();
      break;
    case "melon":
      productBackground.className = "";
      productBackground.classList.add("bg-product-melon");
      productActive.classList.add("product-active");
      changeProduct("./image/big-melon-juice.png");
      moveRight();
      break;
    case "lime":
      productBackground.className = "";
      productBackground.classList.add("bg-product-lime");
      productActive.classList.add("product-active");
      changeProduct("./image/big-lime-juice.png");
      moveRight();
      break;
    case "orange":
      productBackground.className = "";
      productBackground.classList.add("bg-product-orange");
      productActive.classList.add("product-active");
      changeProduct("./image/big-orange-juice.png");
      moveRight();
      break;
    default:
      productBackground.className = "";
      productBackground.classList.add("bg-product-blueberry");
      productActive.classList.add("product-active");
      changeProduct("./image/big-blue-juice.png");
      break;
  }
};
