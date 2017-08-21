# codecss
原子类css，提高css开发效率

还在为margin多少像素 padding多少像素，宽度高度多少像素，而不得不为一个元素设置一个类而苦恼吗？

这个类怎么命名，能让大家一目了然？怎么命名不会冲突？

引入codecss告别这些烦恼，将精力放在布局和业务上。

codecss经过大量项目验证，提炼出使用频率最高的一些样式。

### 语法：

```css
.wc-------------width: 100%
.hc-------------height: 100%
.p-rel----------position:relative
.p-abs----------position:absolute
.p-stc----------position:static
.p-fix----------position:fixed
.ovh------------overflow: hidden
.dib------------display:inline-block
.vm-------------vertical-align:middle
.vt-------------vertical-align:top
.vtt------------vertical-align:text-top
.vb-------------vertical-align:bottom
.vtb------------vertical-align:text-bottom
.mauto----------margin-left:auto;margin-right:auto
.dn-------------display:none
.cp-------------cursor: pointer
.fwb------------font-weight: bolder
.fwn------------font-weight: normal
.wn-------------white-space: nowrap
.tl-------------text-align: left
.tr-------------text-align: right
.tc-------------text-align: center
.fl-------------float: left
.fr-------------float: right
.ellipsis-------超出省略
.clearfix----------清除浮动
```

```css
.left0~left50-------left:*
.top0~top50---------top:*
.right0~right50-----right:*
.bottom0~bottom50---bottom:*

.mt0~mt50-----------margin-top:*
.ml0~ml50-----------margin-left:*
.mr0~mr50-----------margin-right:*
.mb0~mb50-----------margin-bottom:*

.pl0~pl50-----------padding-left:*
.pr0~pr50-----------padding-right:*
.pt0~pt50-----------padding-top:*
.pb0~pb50-----------padding-bottom:*


.w0,w5,w10~w250-----width:*//以5为间隔
.h0,h5,h10~h250-----height:*
.lh0,lh5~lh250------line-height:*
```

### 用法：

为了不与已有的css样式冲突，请在src/_code.less编译的时候加上前缀哈哈11

```less
@module-name:.mycodecss;//模块命名,不能有中杠线，默认是mycodecss，你也可以根据自己的喜好修改
```
你也可以根据自己的喜好修改和删除less中的样式
```html
<!-- 创建一个宽100px 高100px，左右边距10px的div-->
<body class="mycodecss">
  <div class="w100 h100 pl10 pr10">
  	   
  </div>
</body>
```

