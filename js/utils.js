var utilsEl = function (selector, node = document) {
    return node.querySelector(selector);
};

var utils_El = function (selector, node = document) {
    return node.querySelectorAll(selector);
};


let createElementUtils = function(tegname, classname, text) {
    let element = document.createElement(tegname);

    element.setAttribute("class", classname);

    if (text) {
        element.textContent = text;
    }
    
    return element
}
