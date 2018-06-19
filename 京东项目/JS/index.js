var promition = my$('#pr_head').children[0];
var notice = my$('#pr_head').children[2];
var intr1 = my$('.promition').children[1];
var intr2 = my$('.promition').children[2];
var underline = my$('#underline')
promition.onmouseover = function () {
    intr1.classList.add('show');
    var target = this.offsetLeft;
    animate(underline, target, 10)
};
notice.onmouseover = function () {
    intr1.classList.remove('show');
    intr2.classList.add('show');
    var target = this.offsetLeft;
    animate(underline, target, 10)
}
notice.onmouseout = function () {
    intr2.classList.remove('show');
    intr1.classList.add('show');
}



// 中间轮播图
var ol = my$('.circle').children[0];
var circles = ol.children;
var ul = my$('#bannerPic').children[0];
var imgWidth = my$('#bannerPic').offsetWidth;
var box = my$('#bannerPic').parentNode;
var arrow = my$('.arrow');
var index = 0;
for (var i = 0; i < circles.length; i++) {
    circles[i].index = i;
    circles[i].onmouseover = changeStyle;
}

function changeStyle() {
    for (var i = 0; i < circles.length; i++) {
        circles[i].classList.remove('current');
    }
    this.classList.add('current');
    // console.log(this.index)
    animate(ul, -this.index * imgWidth, 10);
    index = this.index;
}
// 定时自动切换
var timerId = setInterval(picMove, 3000);

function picMove() {
    arrowRight.click();
}
// 鼠标进入显示箭头
box.onmouseover = function () {
    arrow.style.display = 'block';
    clearInterval(timerId);

}
box.onmouseout = function () {
    arrow.style.display = 'none';
    timerId = setInterval(function () {
        arrowRight.click();
    }, 3000);

}
// 点击箭头切换图片
var arrowLeft = arrow.children[0];
var arrowRight = arrow.children[1];
// console.log(arrowRight)
arrowRight.onclick = function () {
    // console.log(ul.children.length)
    if (index == ul.children.length - 1) {
        ul.style.left = 0;
        index = 0;
    }
    index++
    if (index < ul.children.length - 1) {
        circles[index].onmouseover();
    } else {
        animate(ul, -index * imgWidth, 10);
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].classList.remove('current');
        }
        ol.children[0].classList.toggle('current');
    }
}
picMove();

arrowLeft.onclick = function () {
    if (index == 0) {
        index = ul.children.length - 1;
        ul.style.left = -index * imgWidth + 'px';
    }
    index--
    circles[index].onmouseover();
}

// 搜索栏部分的弹出对话框
var keyWords = ['车载网络电视', '车载手机支架', '车载音乐', '苹果手机', '苹果笔记本',
    '小米手机', '小米电视', '华为系列产品', '华为笔记本', '国产手机', '国产笔记本'
];
var txt = my$('.search input[type= text]');
var submit = my$('.search input[type= submit]');
var box = my$('.search');


txt.onkeyup = function () {
    this.placeholder = '';
    if (my$('#searchBox')) {
        box.removeChild(my$('#searchBox'));
    };
    var key = this.value;
    var array = [];
    for (var i = 0; i < keyWords.length; i++) {
        if (keyWords[i].indexOf(key) == 0) {
            array.push(keyWords[i]);
        }
    }
    if (this.value.length == 0 || array.length == 0) {
        if (my$('#searchBox')) {
            box.removeChild(my$('#searchBox'));
        };
        return;
    }
    var newBox = document.createElement('div');
    box.appendChild(newBox);
    newBox.id = 'searchBox';

    var ul = document.createElement('ul');
    newBox.appendChild(ul);
    for (var i = 0; i < array.length; i++) {
        var lists = document.createElement('li');
        lists.innerText = array[i];
        ul.appendChild(lists);

    }
    ul.addEventListener('mouseover', fn);

    function fn(e) {
        var e = e || window.event;
        for (var i = 0; i < ul.children.length; i++) {
            ul.children[i].style.backgroundColor = '';
        }
        e.target.style.backgroundColor = 'yellow';
    }

}