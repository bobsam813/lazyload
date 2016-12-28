/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Utils = __webpack_require__(1);

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
	    start: function () {
	        LazyLoad.start.apply(LazyLoad, arguments);
	    },
	    destroy: function () {}
	};

	module.exports = exportObj;

	function fInit() {}

	function start(config) {
	    this.init();
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const DomEvents = __webpack_require__(2);

	const Utils = { createNode, addEvent, removeEvent, toArray, each, addClass, removeClass, delay, stopDelay };

	module.exports = Utils;

	function createNode(name, attrs) {
	    var node = document.createElement(name);
	    var attr;

	    for (attr in attrs) {
	        if (attrs.hasOwnProperty(attr)) {
	            node.setAttribute(attr, attrs[attr]);
	        }
	    }

	    return node;
	}

	function addEvent(dom, event, handler, useCapture) {
	    useCapture = useCapture === true;

	    if (dom.addEventListener) {
	        dom.addEventListener(event, handler, useCapture);
	    } else {
	        dom.attachEvent('on' + event, handler);
	    }
	}

	function removeEvent(dom, event, handler, useCapture) {
	    if (dom.removeEventListener) {
	        dom.removeEventListener(event, handler, useCapture);
	    } else {
	        dom.detachEvent('on' + event, handler);
	    }
	}

	function toArray(obj) {
	    try {
	        return Array.prototype.slice.call(obj);
	    } catch (e) {
	        var arr = [];
	        for (var i = 0, l = obj.length; i < l; i++) {
	            arr.push(obj[i]);
	        }
	        return arr;
	    }
	}

	function each(obj, func, context) {
	    if (obj instanceof Array) {
	        for (var i = 0, l = obj.length; i < l; i++) {
	            var rtn = func.call(context || this, obj[i], i, obj);
	            if (rtn === this.BREAK) {
	                break;
	            } else if (typeof rtn == 'number') {
	                l = obj.length;
	                i += rtn;
	            }
	        }
	    } else if (obj) {
	        for (var s in obj) {
	            if (func.call(context || this, obj[s], s, obj) === this.BREAK) {
	                break;
	            }
	        }
	    }
	}

	function addClass(dom, className) {
	    dom.className += className;
	}

	function removeClass(dom, className) {
	    var r = new RegExp('(^|\\s)' + className + '(?=\\s|$)', 'g');
	    dom.className = dom.className.replace(r);
	}

	function delay(func, ctx, time) {
	    return setTimeout(function () {
	        func && func.call(ctx);
	        func = ctx = null;
	    }, time || 0);
	}

	function stopDelay(id) {
	    clearTimeout(id);
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	var Events = {
	    LOAD: 'load',
	    CLICK: 'click',
	    MOUSE_OVER: 'mouseover',
	    MOUSE_OUT: 'mouseout',
	    MOUSE_DOWN: 'mousedown',
	    MOUSE_UP: 'mouseup',
	    KEY_PRESS: 'keypress',
	    KEY_UP: 'keyup',
	    KEY_DOWN: 'keydown',
	    TOUCH_START: 'touchstart',
	    TOUCH_END: 'touchend',
	    TOUCH_MOVE: 'touchmove',

	    CHANGE: 'change',
	    FOCUS: 'focus',
	    BLUR: 'blur',

	    CANCEL_BUBBLE: false
	};

	module.exports = Events;

/***/ }
/******/ ]);