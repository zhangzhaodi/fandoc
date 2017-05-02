window.onload= function(){
	;
    (function () {
        var winW = document.documentElement.clientWidth;
        var desW = 640;
        if (winW < desW) {
            document.documentElement.style.fontSize = winW / desW * 100 + 'px';
        }
    })();
	var wh =  window.screen.height;
	$(".cont").height(wh);

	var mySwiper = new Swiper('.swiper-container', {
		direction : 'vertical',
		autoplay: false,//可选选项，自动滑动
		autoHeight: false, //高度不可随内容变化
		width : window.innerWidth, //你的slide宽度 //全屏  width : window.innerWidth,
		height: window.innerHeight,//你的slide高度 //全屏  height : window.innerHeight,
		initialSlide :0,  //初始页面
		updateOnImagesReady : true, //img加载完 swiper再初始化
		// speed: 1000,
		// effect: 'coverflow',

		// coverflow: {
		// 	rotate: 10,
		// 	stretch: 10,
		// 	depth: 10,
		// 	modifier: 2,
		// 	slideShadows: true
		// },
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		}, 
		onSlideChangeEnd: function(swiper){ 
		    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		}
	})
}


