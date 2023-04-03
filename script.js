const unorderedListMenu = document.querySelector('ul');
const hamburger = document.querySelector('.hamburger');
const logoImage = document.querySelector('nav ul li.hamb img');
const menuListsTop = document.querySelectorAll('nav ul .menu-top li');
const menuListsBottom = document.querySelectorAll('nav ul .menu-bottom li');
const accountInfo = document.querySelector('.account-info');
const settingLists = document.querySelector('.settings-list');
const mainContentContainer = document.querySelector('main');

hamburger.addEventListener('click', () => {
  unorderedListMenu.classList.toggle('active');
  logoImage.classList.toggle('active');

  if (unorderedListMenu.classList.contains('active')) {
    accountInfo.classList.add('active');
    settingLists.classList.add('active');
  }
});

menuListsTop.forEach((menu, i) => {
  if (i != 0) {
    menu.addEventListener('click', () => {
      menuListsTop.forEach((menu) => {
        menu.classList.remove('active');
      });
      menu.classList.toggle('active');
    });
  }
});

menuListsBottom.forEach((menu, i) => {
  menu.addEventListener('click', () => {
    if (i == 0) {
      unorderedListMenu.classList.remove('active');
      logoImage.classList.remove('active');
      settingLists.classList.add('active');
      accountInfo.classList.toggle('active');
    } else {
      unorderedListMenu.classList.remove('active');
      logoImage.classList.remove('active');
      accountInfo.classList.add('active');
      settingLists.classList.toggle('active');
    }
  });
});

mainContentContainer.addEventListener('click', () => {
  unorderedListMenu.classList.add('active');
  logoImage.classList.add('active');

  if (unorderedListMenu.classList.contains('active')) {
    accountInfo.classList.add('active');
    settingLists.classList.add('active');
  }
});
