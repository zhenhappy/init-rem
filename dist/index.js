!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.remBaseFont=t():e.remBaseFont=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=t.init=function(e){function t(){document.body?document.body.style.fontSize=e.bodyFontSize+"px":document.addEventListener("DOMContentLoaded",t,!1)}function n(){var t=document.documentElement.clientWidth,n=e.baseFontSize*(t>e.maxWidth?e.maxWidth:t)/e.designWidth;document.documentElement.style.fontSize=n+"px"}e=o({designWidth:375,maxWidth:500,bodyFontSize:14,baseFontSize:100},e),n(),t(),function(){document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("orientationchange"in window?"orientationchange":"resize",n,!1)}()};t.default=r}])});