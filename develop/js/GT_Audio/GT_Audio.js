/**
 * 谷通音频播放组件
 * 作者:DJ
 * 组织:谷通科技研发二部
 * 时间:2017年9月7日 09:02:53
 */

//组件初始化
function GT_Audio(did) {
    var timerCurrent, _self = document.getElementById(did);
    var playImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABW0lEQVRYR+2WwU3DMBiF328GYI6KZbiCixRPQLpBskG6AZWAc9ggbNAe0vQYNmgPzSFV/aNSaKBSieM6CQd8jv2+PL3324SeF/Wsj78PMHjma6Fxz4SkKDHOFS1dulbrwNUT7wQvP0QZSy2gsluKXUGYAPCxGANxUUK5cMMK4OAGIcgkjc9xwx7gS5WRbC+gFjeU24CcD/CpykAwlxQ2hXAGsM8oplpjtLijxBTEKcBBlBGtNwhNQtoOwN6NnAmjusq2BlBl9PfKtg5QV9luAKqmPMwlqe8B7RRgJ5xK+qHZLQBjkg7J68OBlWYE2ZCi4/nQugMMvGgB/9SobhNgpQleP3OAMVlv4Hc+CRl40xpeL3cBA2FRIjL5a7ctYMxA8FJJU9Mb0BXAyWo1AbFtwetWwLN9BTV1oHoVA0bVcurA4JF9QQjAiE2r5RSgyWE239ZmwObQJnv+Ad4Byr7EIY/gRmUAAAAASUVORK5CYII=';
    var roundImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAACyElEQVRIib2Wz2sTQRTHP7v50aapuoI/KGpBRCoIBUNBqZBLz+lBFA85eezFozm09CL0oP4BXtNjD0LB9uDJ2JOHNiDYoqXQxdaGkkMMTbPJTnY9ZEYnMYnbRnww7OTHvM9833vzdgyCmdH2VOZ3mXd18DfnBmBqc925D3javCewE8QEwsDA9PT0Gdu2U5VK5XW9Xn/vum7ecZx35XL5xebmZhKIAVH5f7WhQJCQXBizbfuREGLH72H1ev3j+vr6PQmMBIEpyAAQL5VKL33f93pBlHmeV9nd3U0DQ3KToW4wXcnw/v7+syCANhNbW1sPNFhHZaaUHV9eXp7wPM89BcgXQhQymcyoFsYWkFIzCFilUunNaSDK9vb2ngPnZApaQqjUDKdSqVHP8477ATmO8wW4AMTbVZlKTS6Xe9wPRNnMzMwYcFblytRCZwJhy7Ku9SrLoDY5OTkqw2YChn7aTcAUQpg91gc213VNDYSuCMAoFAqH/wK0srJySIeKiwDDwOVEIjHeaDSq/eSnUqnsADeAizTPVEgpUo3Q39jYOC4UCrl+1Gxvb7/ld6MFmjFUqkI0m2IkEol8m5qaemgYxonzVavViul0eta27R+AA7gSCmjlDVwFbq+trb06acg8z2ssLi4+BW4BI2jlrYOiNPN0iWZ87+Tz+awfsKkKIapLS0uzwDhwnS4HtqUFAVeAMWAim81mjo6OvveCFIvFz3Nzc0+ABHBTqmlpQXr5qbqPSuCQ3FHcsqz4wsLC3WQyed+yrJFYLHbecZzywcHB19XV1Q/z8/OfgCpQkeNY5kfI4esgowNskGYXjsnd6S81H2gAdaAmHVflaIEAflgDqXc/slKQjoR0Fu0CcjVYTc6F/O3XHaLTG1BXFpLOw9pTP3uetnNXm7dAuoHU9zpQB+trPDkacqjPf9yG/tt1K9C1qA2qW+AL5E9dShbfB+cqswAAAABJRU5ErkJggg==';
    var shopImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAjUlEQVRYR2NkGGDAOMD2M4w6gKgQ0Fj834GBmeE/KLqY/zN8vBrNeAFb1Gkv/W/wl5GBHyZ3I4rxIKEoJsoB2kv/gy2HgoNXoxkdcDjgAAMDgz1M7mo0I0HzCSoAGTbqgNEQGA2B0RAYDYHREBgNgdEQGA2B0RAY8BAg1LSmRJ6oVjElFhDSO+qAAQ8BAPnb0iFyumREAAAAAElFTkSuQmCC';

    this.init = function() {
        _self.insertAdjacentHTML('afterEnd', '<div class="audioPlayer"><div class="audioButton" onclick="audioPlay(this)">' +
            '<img src="'+playImage+'"></div><section class="audioProgressBar" onclick="audioSkip(this)"><div class="audioProgress">' +
            '<div class="audioSpeed"></div></div><img class="audioIcon" src="'+roundImage+'"></section><div class="audioTime">00:00</div></div>');
    }

    // 开始播放
    _self.addEventListener("play",
        function() {
            var _main = _self.nextSibling;
            var _prgWidth = _main.getElementsByClassName("audioProgressBar")[0].offsetWidth;
            _self.setAttribute("data-play", "true");
            _main.getElementsByClassName("audioButton")[0].getElementsByTagName("img")[0].setAttribute("src", shopImage);
            timerCurrent = setInterval(function() {
                _main.getElementsByClassName("audioTime")[0].innerHTML = timeFormat(_self.currentTime);
                _main.getElementsByClassName("audioIcon")[0].style.left = _self.currentTime / _self.duration * (_prgWidth - 20) + "px";
                _main.getElementsByClassName("audioSpeed")[0].style.width = _self.currentTime / _self.duration * (_prgWidth - 10) + "px";
            }, 500);
        }, false);

    //播放暂停
    _self.addEventListener("pause",
        function() {
            //监听暂停
            _self.setAttribute("data-play", "false");
            _self.nextSibling.getElementsByClassName("audioButton")[0].getElementsByTagName("img")[0].setAttribute("src", playImage);
            window.clearInterval(timerCurrent);
        }, false);

    //播放结束
    _self.addEventListener("ended", function() {
        _self.setAttribute("data-play", "false");
        _self.nextSibling.getElementsByClassName("audioButton")[0].getElementsByTagName("img")[0].setAttribute("src", playImage);
        _self.nextSibling.getElementsByClassName("audioTime")[0].innerHTML = '00:00';
        _self.nextSibling.getElementsByClassName("audioIcon")[0].style.left = "0px";
        _self.nextSibling.getElementsByClassName("audioSpeed")[0].style.width = "0px";
        _self.pause();
        _self.currentTime = 0;
    }, false)
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

    var pbWidth = obj.getElementsByClassName("audioProgress")[0].offsetWidth;
    var speed = e.offsetX - obj.getElementsByClassName("audioIcon")[0].offsetWidth / 2;
    var scale = (speed / pbWidth + 0.05).toFixed(2);

    ado.nextSibling.getElementsByClassName("audioIcon")[0].style.left = speed + "px";
    ado.nextSibling.getElementsByClassName("audioSpeed")[0].offsetWidth = e.offsetX - 3 + "px";
    ado.nextSibling.getElementsByClassName("audioTime")[0].innerHTML = timeFormat(ado.duration * scale);
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