'use strict';

let Html = function (A) {
  let E = document.createElement(A);

  return {
    get node() {
      return E;
    },

    appendChild: function (n) {
      E.appendChild(n);

      return this;
    },

    setAttribute: function (attribute, value) {
      E[attribute] = value;

      return this;
    },

    setClass: function (c) {
      E.className = c;

      return this;
    },
  };
};

window.addEventListener('load', () => {
  console.log("drafting.js loaded");

  let siteTitle = Html('h1')
    .setAttribute('innerHTML', 'Drafting');

  let siteSubtitle = Html('h3')
    .setAttribute('innerHTML', '一個 html/css/node.js 的練習專案');

  let siteBanner = Html('header')
    .setClass('site-banner')
    .appendChild(siteTitle.node)
    .appendChild(siteSubtitle.node);

  let siteStatus = Html('header')
    .setClass('site-status')
    .setAttribute(
      'innerHTML',
      '<span>x:<span id="cursor-x">0</span>y:<span id="cursor-y">0</span>'
    );

  let siteBody = Html('article')
    .setClass('site-body')
    .appendChild(siteStatus.node);

  let copyright = Html('small')
    .setClass('float-right')
    .setAttribute(
      'innerHTML',
      '&copy; Copyright 2020，佛光大學資訊應用學系'
    );

  let siteFooter = Html('footer')
    .setClass('site-footer')
    .appendChild(copyright.node);

  let siteContainer = Html('div')
    .setClass('site-container')
    .appendChild(siteBanner.node)
    .appendChild(siteBody.node)
    .appendChild(siteFooter.node);

  document.body.appendChild(siteContainer.node);

  let cardTitle = Html('span')
    .setAttribute('textContent', 'Drafting!');

  // 準備承載 *網頁版頭* (header) 的 HTML 元素
    let cardHeader = Html('header')
    .setClass('card-header')
    .appendChild(cardTitle.node); // 將 *網頁標題* 放上 *網頁版頭*




    //設定名字內預設

    let firstName = Html('input')
    .setClass('input')
    .setAttribute('placeholder','王大錘')
    .setAttribute('id','name')
    .setAttribute('type','text');

    let firstp = Html('p')
    .setClass('control')
    .appendChild(firstName.node);


    //設定名字
  
    let firstLabel = Html('label')
    .setClass('control-label')
    .setAttribute('HTML_For','name')
    .setAttribute('innerHTML','姓名');
  
    let firstdiv = Html('div')
    .setClass('h-field')
    .appendChild(firstLabel.node)
    .appendChild(firstp.node);
    


    //hp
    let secondName = Html('input')
    .setClass('input')
    .setAttribute('placeholder','10')
    .setAttribute('id','hp')
    .setAttribute('type','number');

    let secondp = Html('p')
    .setClass('control')
    .appendChild(secondName.node);

    let secondLabel = Html('label')
    .setClass('control-label')
    .setAttribute('HTML_For','hp')
    .setAttribute('innerHTML','血量(hp)');

    let seconddiv = Html('div')
    .setClass('h-field')
    .appendChild(secondLabel.node)
    .appendChild(secondp.node);


    //ap

    let thirdName = Html('input')
    .setClass(thirdName_input)
    .setAttribute('placeholder','1')
    .setAttribute('id','ap')
    .setAttribute('type','NB');

    let thirdp = Html('p')
    .setClass(control)
    .appendChild(thirdName.node);

    let thirdLabel = Html('label')
    .setClass('third_label')
    .setAttribute('HTML_For','ap')
    .setAttribute('innerHTML','攻擊力(ap)')

    let thirddiv = Html('div')
    .setClass('h-field')
    .appendChild(thirdp.node)
    .appendChild(thirdLabel.node);



    //dp

    let fourName = Html('input')
    .setClass('input')
    .setAttribute('placeholder','0')
    .setAttribute('id','dp')
    .setAttribute('type','NB');

    let fourp = Html('p')
    .setClass('control')
    .appendChild(fourName.node);

    let fourLabel = Html('label')
    .setClass('four_label')
    .setAttribute('HTML_For','dp')
    .setAttribute('innerHTML','防禦力(dp)');

    let fourdiv = Html('div')
    .setClass('h-field')
    .appendChild(fourp.node)
    .appendChild(fourLabel);

    //主程式

    let main = Html('div')
    .setClass('main')
    .appendChild(firstdiv.node)
    .appendChild(seconddiv.node)
    .appendChild(thirddiv.node)
    .appendChild(fourdiv.node);


   

  // 準備承載 *網頁內容* 的 HTML 元素
  let cardContent = Html('article')
    .setClass('card-content')
    .appendChild(main.node); //從這呼叫main

  // 準備 *網頁桌面* 的 HTML 元素
  let cardDesktop = Html('section')
    .setClass('card')
    .appendChild(cardHeader.node)   // 將 *網頁版頭* 放上 *網頁桌面*
    .appendChild(cardContent.node); // 把呼叫main的內容out到網頁

  // 將 *網頁桌面* 放上 *網頁*
  let desktop = document
    .querySelector('.site-body')
    .appendChild(cardDesktop.node);

  /*
   滑鼠游標移動追踪
   */
  desktop.addEventListener('mousemove', (e) => {
    document.getElementById('cursor-x').textContent = e.clientX;
    document.getElementById('cursor-y').textContent = e.clientY;
  });
});
