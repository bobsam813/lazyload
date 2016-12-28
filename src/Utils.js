const DomEvents = require('./DomEvents.js');

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

function addClass(dom, className){
    dom.className += className;
}

function removeClass(dom, className){
    var r = new RegExp(('(^|\\s)') + className + '(?=\\s|$)', 'g');
    dom.className = dom.className.replace(r);
}

function delay(func, ctx, time){
    return setTimeout(function(){
        func && func.call(ctx);
        func = ctx = null;
    }, time || 0);
}

function stopDelay(id){
    clearTimeout(id);
}