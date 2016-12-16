// ==UserScript==
// @name         My 1st Script
// @namespace    http://www.jimmy.com/
// @version      0.1
// @description  For all pages under https baidu, print hello world.
// @author       Jimmy
// @match        https://www.baidu.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant        none
// ==/UserScript==
//window.close();
//alert(123);
this.$ = this.jQuery = jQuery.noConflict(true);

addCss (
'* { background-color: #ffffff ! important; }'
);

document.getElementById("su").value = '顶顶顶';

//alert(document.getElementById("su").value);



function addCss(cssString) {
    var head = document.getElementsByTagName('head')[0];
    var newCss = document.createElement('style');
    newCss.type = "text/css";
    newCss.innerHTML = cssString;
    head.appendChild(newCss);
}
