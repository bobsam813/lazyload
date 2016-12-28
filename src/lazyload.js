const Utils = require('./Utils.js');

const WINDOW_WIDTH = document.documentElement.clientWidth || document.body.clientWidth;
const WINDOW_HEIGHT = document.documentElement.clientHeight || document.body.clientHeight;
const SCROLL_WIDTH = document.body.scrollWidth;
const SCROLL_HEIGHT = document.body.scrollHeight; 
const SCROLL_TOP = window.pageYOffset || document.body.scrollTop;
const oImgs = document.getElementsByTagName('img');
const aImg = Array.prototype.slice.call(oImgs);
const LazyLoad = {
    VER: '0.0.1',
    ORIGINAL_SRC: 'data-src',
    SRC: 'src',
    ELEMENT: 'img',

    __dom: null,
    __options: null, // 配置

    init: fInit
};
const exportObj = {
    ver: LazyLoad.VER,
    start: function(){
        LazyLoad.start.apply(LazyLoad, arguments);
    },
    destroy: function(){

    }
};

module.exports = exportObj;

function fInit(){

}

function start(config){
    this.init();
}