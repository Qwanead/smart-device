'use strict';

// дублирование html-элементов

var footerLogo = document.querySelector('.logo--footer');
var copyrightCompany = document.querySelector('.footer__copyright-company');
var copyrightCompanyTablet = copyrightCompany.cloneNode(true);

if (copyrightCompany) {
  copyrightCompanyTablet.className = 'footer__company-tablet';
  footerLogo.insertAdjacentElement('afterend', copyrightCompanyTablet);
}

var footerLine = document.querySelector('.footer__line');
var footerSocial = document.querySelector('.footer__social-wrapper');
var footerSiteMap = document.querySelector('.footer__site-map');

if (footerLine && footerSocial) {
  var footerLineTablet = footerLine.cloneNode(true);

  footerLineTablet.classList.add('footer__line--tablet');
  footerSocial.insertAdjacentElement('afterend', footerLineTablet);
}

if (footerLine && footerSiteMap) {
  var footerLineMobile = footerLine.cloneNode(true);

  footerLineMobile.classList.add('footer__line--mobile');
  footerSiteMap.insertAdjacentElement('afterend', footerLineMobile);
}

// аккордеон

var siteMapTitle = document.querySelector('.footer__site-map-wrapper .footer__button-wrapper');
var siteMapButton = document.querySelector('.footer__site-map button');
var siteMapList = document.querySelector('.footer__site-map-list-wrapper');
var officeTitle = document.querySelector('.footer__office .footer__button-wrapper');
var officeButton = document.querySelector('.footer__office button');
var officeList = document.querySelector('.footer__office-list');

if (siteMapTitle && siteMapButton && siteMapList &&
    officeTitle && officeButton && officeList) {

  var siteMapToggle = function () {
    siteMapButton.classList.toggle('footer__button--close');
    siteMapList.classList.toggle('footer__site-map-list-wrapper--hide');
  };

  var officeListToggle = function () {
    officeButton.classList.toggle('footer__button--close');
    officeList.classList.toggle('footer__office-list--hide');
  };

  siteMapToggle();

  var isAccordionOpen = function (accordion) {
    if (accordion.classList.contains('footer__site-map-list-wrapper--hide') ||
      accordion.classList.contains('footer__office-list--hide')) {
      return false;
    }
    return true;
  };

  var onSiteMapClick = function () {
    if (isAccordionOpen(officeList) && !isAccordionOpen(siteMapList)) {
      officeListToggle();
      siteMapToggle();
    } else {
      siteMapToggle();
    }
  };

  var onOfficeListClick = function () {
    if (!isAccordionOpen(officeList) && isAccordionOpen(siteMapList)) {
      officeListToggle();
      siteMapToggle();
    } else {
      officeListToggle();
    }
  };

  siteMapTitle.addEventListener('click', onSiteMapClick);
  officeTitle.addEventListener('click', onOfficeListClick);
}

// Плавный скролл

var feedbackLink = document.querySelector('a[href="#feedback-id"]');
var advantagesLink = document.querySelector('a[href="#advantages-id"]');

var onAnchorClick = function (evt) {
  evt.preventDefault();
  document.querySelector(evt.currentTarget.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
};

feedbackLink.addEventListener('click', onAnchorClick);
advantagesLink.addEventListener('click', onAnchorClick);

// Попап

var openButton = document.querySelector('.button--header');
var popup = document.querySelector('.modal');
var close = popup.querySelector('.modal__close');
var form = popup.querySelector('.modal form');
var inputName = popup.querySelector('[name=name]');
var inputTel = popup.querySelector('[name=tel]');
var textarea = popup.querySelector('textarea');
var body = document.querySelector('body');
var isStorageSupport = true;
var storageName = '';
var storageTel = '';

try {
  storageName = localStorage.getItem('yourName');
  storageTel = localStorage.getItem('yourEmail');
} catch (err) {
  isStorageSupport = false;
}

openButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  body.style.overflowY = 'hidden';
  popup.classList.add('modal--show');
  if (storageName && storageTel) {
    inputName.value = storageName;
    inputTel.value = storageTel;
    textarea.focus();
  } else {
    inputName.focus();
  }
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  body.style.overflowY = 'auto';
  popup.classList.remove('modal--show');
});

form.addEventListener('submit', function () {
  if (isStorageSupport) {
    localStorage.setItem('yourName', inputName.value);
    localStorage.setItem('yourEmail', inputTel.value);
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
      body.style.overflowY = 'auto';
    }
  }
});

popup.addEventListener('click', function (evt) {
  if (evt.target === popup) {
    if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
      body.style.overflowY = 'auto';
    }
  }
});

// IMaskJS

window.iMaskJS(document.getElementById('tel-id'), {mask: '+{7}(000)000-00-00'});

window.iMaskJS(document.getElementById('modal-tel-id'), {mask: '+{7}(000)000-00-00'});
