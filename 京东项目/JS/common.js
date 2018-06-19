function my$(select) {
    return document.querySelector(select);
};

function animate(element, target, interval) {
    if (element.timerId) {
        clearInterval(element.timerId);
        element.timerId = null;
    };
    element.timerId = setInterval(function () {
        var current = element.offsetLeft;
        var step = 10;
        if (current > target) {
            step = -Math.abs(step);
        };
        if (Math.abs(current - target) < Math.abs(step)) {
            element.style.left = target + 'px';
            clearInterval(element.timerId);
            return;
        }
        current += step;
        element.style.left = current + 'px';
    }, interval)
}