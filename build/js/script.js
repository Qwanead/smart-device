'use strict';
var siteMapTitle = document.querySelector('.footer__site-map-wrapper .footer__button-wrapper');
var siteMapButton = document.querySelector('.footer__site-map button');
var siteMapList = document.querySelector('.footer__site-map-list');

if (siteMapTitle && siteMapButton && siteMapList) {
  siteMapButton.classList.toggle('footer__button--close');
  siteMapList.classList.toggle('footer__site-map-list--hide');

  siteMapTitle.addEventListener('click', function () {
    siteMapButton.classList.toggle('footer__button--close');
    siteMapList.classList.toggle('footer__site-map-list--hide');
  });
}

var officeTitle = document.querySelector('.footer__office .footer__button-wrapper');
var officeButton = document.querySelector('.footer__office button');
var officeList = document.querySelector('.footer__office-list');

if (officeTitle && officeButton && officeList) {
  officeButton.classList.toggle('footer__button--close');
  officeList.classList.toggle('footer__office-list--hide');

  officeTitle.addEventListener('click', function () {
    officeButton.classList.toggle('footer__button--close');
    officeList.classList.toggle('footer__office-list--hide');
  });
}
