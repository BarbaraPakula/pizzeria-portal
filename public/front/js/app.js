import { settings, select, classNames } from './settings.js';
import Product from './components/Product.js';
import Cart from './components/Cart.js';
import Booking from './components/Booking.js';
import Home from './components/Home.js';

const app = {

  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    console.log('app.pages:', thisApp.pages);
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    console.log('navlinks', thisApp.navLinks);

    const idFromHash = window.location.hash.replace('#/', '');
    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }
    thisApp.activatePage(pageMatchingHash);
    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();
        // get page id from href atribiute
        const id = clickedElement.getAttribute('href').replace('#', '');
        // run thisApp.activatePage with that id
        thisApp.activatePage(id);
        // change URL hash
        window.location.hash = '#/' + id;
      });
    }
  },
  activatePage: function (pageId) {
    const thisApp = this;
    //add class "active" to matching pages remove from non-matching
    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    for (let link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },
  initMenu: function () {
    const thisApp = this;
    for (let productData in thisApp.data.products) {
      // new Product(productData, thisApp.data.products[productData]);
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },
  initData: function () {
    const thisApp = this;
    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.product;
    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        // console.log('parsedResponse', parsedResponse);
        /* save parsedResponse as thissApp.data.products */
        thisApp.data.products = parsedResponse;
        thisApp.initMenu();
      });
    // console.log('thisApp.data', JSON.stringify(thisApp.data));
  },
  initCart: function () {
    const thisApp = this;
    const cartElem = document.querySelector(select.containerOf.cart);
    thisApp.cart = new Cart(cartElem);

    thisApp.productList = document.querySelector(select.containerOf.menu);
    thisApp.productList.addEventListener('add-to-cart', function (event) {
      app.cart.add(event.detail.product);
    });
  },
  initBooking: function () {
    const thisApp = this;
    const widgetContainer = document.querySelector(select.containerOf.booking);
    thisApp.booking = new Booking(widgetContainer);
  },
  initHome: function () {
    const thisApp = this;
    const homeContainer = document.querySelector(select.containerOf.home);
    thisApp.home = new Home(homeContainer);

  },

  init: function () {
    const thisApp = this;
    thisApp.initData();
    thisApp.initCart();
    thisApp.initBooking();
    thisApp.initHome();
    thisApp.initPages();
  },
};
app.init();
