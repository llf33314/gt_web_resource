/**
 * 谷通音频播放组件
 * 作者:DJ
 * 组织:谷通科技研发二部
 * 时间:2017年9月7日 09:02:53
 */

//组件初始化
function GT_Audio(did) {
    var timerCurrent, _self = document.getElementById(did);

    this.init = function() {
        _self.insertAdjacentHTML('afterEnd', '<div class="audioPlayer"><div class="audioButton" onclick="audioPlay(this)">' +
            '<img src="GT_Audio/play.png"></div><section class="audioProgressBar" onclick="audioSkip(this)"><div class="audioProgress">' +
            '<div class="audioSpeed"></div></div><img class="audioIcon" src="GT_Audio/round.png"></section><div class="audioTime">00:00</div></div>');
    }

    // 开始播放
    _self.addEventListener("play",
        function() {
            var _main = $(_self).next();
            var _prgWidth = $(_main).find(".audioProgressBar").width();
            $(_self).attr("data-play", "true");
            $(_main).find(".audioButton img").attr("src", "GT_Audio/stop.png");
            timerCurrent = setInterval(function() {
                $(_main).find(".audioTime").html(timeFormat(_self.currentTime));
                $(_main).find(".audioIcon").css("left", _self.currentTime / _self.duration * (_prgWidth - 20) + "px");
                $(_main).find(".audioSpeed").width(_self.currentTime / _self.duration * (_prgWidth - 10) + "px");
            }, 500);
        }, false);

    //播放暂停
    _self.addEventListener("pause",
        function() {
            //监听暂停
            $(_self).attr("data-play", "false");
            $(_self).next().find(".audioButton img").attr("src", "GT_Audio/play.png");
            window.clearInterval(timerCurrent);
            if (_self.currentTime == _self.duration) {
                _self.stop();
                _self.currentTime = 0;
            }
        }, false);

    //播放结束
    _self.addEventListener("ended", function() {
        $(_self).attr("data-play", "false");
        $(_self).next().find(".audioButton img").attr("src", "GT_Audio/play.png");
        $(_self).next().find(".audioIcon").css("left", "0px");
        $(_self).next().find(".audioSpeed").width("0px");
        _self.stop();
        _self.currentTime = 0;
    }, false)

    return this;
}

//开始播放
function audioPlay(obj) {
    var ado = obj.parentNode.previousSibling;
    var adoList = document.getElementsByTagName("audio");
    for (var i = 0; i < adoList.length; i++) {
        adoList[i].pause();
    }
    if (ado.getAttribute("data-play") != "true") {
        ado.play();
    }
}

//跳转进度条
function audioSkip(obj) {
    var e = event || window.event;
    var ado = obj.parentNode.previousSibling;

    var pbWidth = $(obj).find(".audioProgress").width();
    var speed = e.offsetX - $(obj).find(".audioIcon").width() / 2;
    var scale = (speed / pbWidth + 0.05).toFixed(2);

    $(ado).next().find(".audioIcon").css("left", speed + "px");
    $(ado).next().find(".audioSpeed").width(e.offsetX - 3 + "px");
    $(ado).next().find(".audioTime").html(timeFormat(ado.duration * scale));
    ado.currentTime = ado.duration * scale;
}

//格式化播放时间
function timeFormat(time) {
    var minute = time / 60;
    var minutes = parseInt(minute);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    var second = time % 60;
    seconds = parseInt(second);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
}