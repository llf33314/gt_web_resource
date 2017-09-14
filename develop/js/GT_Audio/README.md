# 谷通音频播放组件
###### 使用说明:

1. 在head标签中导入组件依赖库:
```
<link rel="stylesheet" type="text/css" href="GT_Audio/GT_Audio.min.css" />
<script src="GT_Audio/GT_Audio.min.js"></script>
```

2. 在body标签中添加audio元素并命名ID、设置音频文件路径:
```
<audio id="audio" src="xxx.mp3"></audio>
```

3. 在script标签中初始化组件:
```
<script type="text/javascript">
    window.onload = function() {
        var audio1 = new GT_Audio("audio1");
        audio1.init();

        var audio2 = new GT_Audio("audio2");
        audio2.init();

        var audio3 = new GT_Audio("audio3");
        audio3.init();
    };
</script>
```

如需多个实例，可参考[demo.html](http://git.duofee.com/dj/GT_AudioJS/src/master/demo.html)。

