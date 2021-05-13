<template>
  <div class="box">
    <div class="header" :style="{ 'background': 'url(' + headerUrl + ')' }"></div>
    <div class="content">
      <div class="page">
        <div class="about">
          <img src="./images/樱花.svg" alt="" class="contact" style="width:2.0rem; height:2.0rem"> <h2>前端</h2>
        </div>
        <el-divider></el-divider>
        <img src="./images/心跳心动1.svg" alt="" class="anchor"><h3>图标</h3>
        <div class="links">
          <div class="item" style="--block-color:#ff4200">
            <a href="https://www.iconfont.cn/" target="_blank" >
              <img src="./images/Iconfont-阿里巴巴矢量图标库.svg" alt="" class="iconfont">
            </a>
            <div class="info" style="margin-left:25px">
              <a href="https://www.iconfont.cn/" target="_blank" class="icon-title" >Iconfont</a>
              <p >阿里巴巴矢量图标库</p>
            </div>
          </div>
          <div class="item1">
            <a href="https://icons8.com/" target="_blank" >
              <img src="./images/icons8.svg" alt="" class="icons">
            </a>
            <div class="info">
              <a href="https://www.iconfont.cn/" target="_blank" class="icons-title">icons8</a>
              <p>Free icons, music, stock photos, vectors</p>
            </div>
          </div>
          <div class="item2">
            <a href="https://icons8.com/" target="_blank" >
              <img src="./images/Twitter.png" alt="" class="icons">
            </a>
            <div class="info" style="margin-left:25px">
              <a href="https://hashflags.io/" target="_blank" class="icons-title-hashflag">Hashflag Gallery</a>
              <p>All twitter hashflags and like animations in one gallery</p>
            </div>
          </div>
          <div class="item3">
            <a href="https://icons8.com/" target="_blank" >
              <img src="./images/iconsvg.png" alt="" class="icons" style="margin-top:5px">
            </a>
            <div class="info"  style="margin-left:25px">
              <a href="https://www.iconfont.cn/" target="_blank" class="icons-title-iconsvg">ICONSVG</a>
              <p>Quick customizable SVG icons</p>
            </div>
          </div>
        </div>
        <div class="about">
          <img src="./images/心跳心动1.svg" alt="" class="anchor"><h3>字体</h3>
        </div>
        <div class="links">
          <div class="font">
            <a href="http://zhongguose.com/#mudanfenhong" target="_blank" >
              <img src="./images/牡丹花.svg" alt="" class="font-icon">
            </a>
            <div class="info" style="margin-left:25px">
              <a href="http://zhongguose.com/#mudanfenhong" target="_blank" class="font-title" >中国色</a>
              <p >中国传统颜色</p>
            </div>
          </div>
          <div class="font1">
            <a href="http://sicangziti.com/" target="_blank" >
              <img src="./images/sicangziti.png" alt="" class="font1-sicang">
            </a>
            <div class="info" style="margin-left:25px">
              <a href="http://sicangziti.com/" target="_blank" class="font-title-sicang">私藏字体</a>
              <p >优质字体免费下载站</p>
            </div>
          </div>
          <div class="font2">
            <a href="https://cute-freefont.flop.jp/" target="_blank" >
              <img src="./images/freefont.png" alt="" class="font-icon">
            </a>
            <div class="info" style="margin-left:25px">
              <a href="https://cute-freefont.flop.jp/" target="_blank" class="freefont-title">フリーフォント</a>
              <p >ゴシック体、日本語、手書き風フォント</p>
            </div>
          </div>
          <div class="font3">
            <a href="https://www.abstractfonts.com/" target="_blank" >
              <img src="./images/fonts.png" alt="" class="Abstract">
            </a>
            <div class="info" style="margin-left:25px">
              <a href="https://www.abstractfonts.com/" target="_blank" class="fonts-title">Abstract Fonts</a>
              <p >Features more than 13,500 free fonts</p>
            </div>
          </div>
        </div>
        <div class="about">
          <img src="./images/心跳心动1.svg" alt="" class="anchor"><h3>文档</h3>
        </div>
        <div class="links">
          <div class="vue">
            <a href="https://vue3js.cn/docs/zh/" target="_blank" >
              <img src="./images/vue.svg" alt="" class="change-title">
            </a>
            <div class="info" style="margin-left:25px">
              <a href="https://vue3js.cn/docs/zh/" target="_blank" class="vue-title" >Vue</a>
              <p >Beautiful colored gradients</p>
            </div>
          </div>
          <div class="egg">
            <a href="https://eggjs.org/zh-cn/" target="_blank" >
              <img src="./images/egg.png" alt="" class="change-title">
            </a>
            <div class="info" style="margin-left:25px">
              <a href="https://eggjs.org/zh-cn/" target="_blank" class="egg-title" >Egg.js</a>
              <p >Beautiful colored gradients</p>
            </div>
          </div>
          <div class="jquery">
            <a href="https://jquery.cuishifeng.cn/" target="_blank" >
              <img src="./images/jQuery.svg" alt="" class="change-title">
            </a>
            <div class="info" style="margin-left:25px">
              <a href="https://jquery.cuishifeng.cn/" target="_blank" class="jquery-title" >jQuery</a>
              <p >Beautiful colored gradients</p>
            </div>
          </div>
          <div class="react">
            <a href="https://react.docschina.org/" target="_blank" >
              <img src="./images/react.svg" alt="" class="change-title">
            </a>
            <div class="info" style="margin-left:25px">
              <a href="https://react.docschina.org/" target="_blank" class="react-title" >React</a>
              <p >Beautiful colored gradients</p>
            </div>
          </div>
        </div>
        <div class="about">
          <img src="./images/心跳心动1.svg" alt="" class="anchor"><h3>框架</h3>
        </div>
        <div class="links">
          <div class="kuangjia">
            <a href="https://element.eleme.cn/#/zh-CN" target="_blank" >
              <img src="./images/ElementUI.svg" alt="" class="kj-icon">
            </a>
            <div class="info" style="margin-left:25px">
              <a href="https://element.eleme.cn/#/zh-CN" target="_blank" class="element-title" >Element-UI</a>
              <p >Beautiful colored gradients</p>
            </div>
          </div>
          <div class="Vant">
            <a href="https://youzan.github.io/vant/#/zh-CN/quickstart" target="_blank" >
              <img src="./images/vant.svg" alt="" class="kj-icon">
            </a>
            <div class="info" style="margin-left:25px">
              <a href="https://youzan.github.io/vant/#/zh-CN/quickstart" target="_blank" class="vant-title" >Vant</a>
              <p >Beautiful colored gradients</p>
            </div>
          </div>
          <div class="Bootstrap">
            <a href="https://www.bootcss.com/" target="_blank" >
              <img src="./images/bootstrap.svg" alt="" class="kj-icon">
            </a>
            <div class="info" style="margin-left:25px">
              <a href="https://www.bootcss.com/" target="_blank" class="bootstrap-title" >Bootstrap</a>
              <p >Beautiful colored gradients</p>
            </div>
          </div>
          <div class="Layui">
            <a href="https://www.layui.com/" target="_blank" >
              <img src="./images/layui.svg" alt="" class="kj-icon">
            </a>
            <div class="info" style="margin-left:25px">
              <a href="https://www.layui.com/" target="_blank" class="Layui-title" >Layui</a>
              <p >经典开源模块化前端 UI 框架</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutIndex',
  data () {
    return {
      headerUrl: '',
      url: require('./images/背景.jpg')
    }
  },
  // 开始
  created () {
    this.headerUrl = this.url
  },
  mounted () {
    setInterval(() => {
      const num = Math.random()
      const url = `https://api.wod.xyz/Image/GetImage?type=1?giao=${num}`
      this.headerUrl = url
    }, 5000)
  }
}
</script>

<style lang="less" scoped>
.box{
  background: #eeeeee;
  padding-bottom: 100px;
}
.header{
  width: 100%;
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.contact, .anchor{
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
}
.iconfont{
  width: 4rem;
  height: 4rem;
  background-color: rgba(255, 66, 0);
  border-radius: 10px;
  margin-left: 10px;
}
.icon-title{
  font-size: 16px;
  color: rgba(255, 66, 0);
}
.icons-title{
  font-size: 16px;
  color: rgba(31, 177, 68);
}
.icons-title-hashflag{
  font-size: 16px;
  color: rgba(74, 161, 235);
}
.icons-title-iconsvg{
  font-size: 16px;
  color: #000
}
.links .item:hover .icon-title{
  color: #fff;
}
.links .item1:hover .icons-title{
  color: #fff;
}
.links .item2:hover .icons-title-hashflag{
  color: #fff;
}
.links .item3:hover .icons-title-iconsvg{
  color: #fff;
}

.links .item:hover{
  color: #fff;
  background-color:rgba(255, 66, 0);
  box-shadow: 0 .125rem 1.25rem rgba(255, 66, 0);
}
.links .item1:hover{
  color: #fff;
  background-color:rgba(31, 177, 68);
  box-shadow: 0 .125rem 1.25rem rgba(31, 177, 68);
}
.links .item2:hover{
  color: #fff;
  background-color:rgba(74, 161, 235);
  box-shadow: 0 .125rem 1.25rem rgba(74, 161, 235);
}
.links .item3:hover{
  color: #fff;
  background-color:#000;
  box-shadow: 0 .125rem 1.25rem #000;
}
.icons{
  width: 4rem;
  height: 4rem;
  background-color: rgba(31, 177, 68);
  border-radius: 10px;
  margin-left: 10px;
}
.content{
  width: 1100px;
  height: 100%;
  margin: auto;
  background-color: #fff;
  margin-top: 100px;
  box-shadow: 0px 1px 1px 1px #d4d4d4;
}
.font-icon{
  width: 4rem;
  height: 4rem;
  background-color: #f1939c;
  border-radius: 10px;
  margin-left: 10px;
}
.Abstract{
  width: 4rem;
  height: 4rem;
  background: transparent;
  border: transparent;
  border-radius: 10px;
  margin-left: 10px;
}
.font1-sicang{
  width: 4rem;
  height: 4rem;
  border-radius: 10px;
  margin-left: 10px;
}

.font, .font1, .font2, .font3{
  width: 350px;
  height: 80px;
  border-radius: 10px;
  display: flex;
  align-items: center;
}
.font2, .font3{
  margin-top: 30px;
}
.font-title{
  font-size: 16px;
  color: #f1939c;
}
.font-title-sicang{
  font-size: 16px;
  color: #363d4d;
}
.freefont-title{
  font-size: 16px;
  color: #a9A9a9;
}
.fonts-title{
  font-size: 16px;
  color: #f04545;
}
.links .font:hover .font-title{
  color: #fff;
}
.links .font1:hover .font-title-sicang{
  color: #fff;
}
.links .font2:hover .freefont-title{
  color: #fff;
}
.links .font3:hover .fonts-title{
  color: #fff;
}
.links .font:hover{
  color: #fff;
  background-color:#f1939c;
  box-shadow: 0 .125rem 1.25rem #f1939c;
}
.links .font1:hover{
  color: #fff;
  background-color:#363d4d;
  box-shadow: 0 .125rem 1.25rem #363d4d;
}
.links .font2:hover{
  color: #fff;
  background-color:#A9A9A9;
  box-shadow: 0 .125rem 1.25rem #A9A9A9;
}
.links .font3:hover{
  color: #fff;
  background-color:#f04545;
  box-shadow: 0 .125rem 1.25rem #f04545;
}

.change-title{
  width: 4rem;
  height: 4rem;
  border-radius: 10px;
  margin-left: 10px;
}
.vue, .egg, .jquery, .react{
  width: 350px;
  height: 80px;
  border-radius: 10px;
  display: flex;
  align-items: center;
}

.links .vue:hover{
  color: #fff;
  background-color:rgb(77, 221, 156);
  box-shadow: 0 .125rem 1.25rem rgb(77, 221, 156);
}
.links .vue:hover .vue-title{
  color: #fff;
}
.vue-title{
  font-size: 16px;
  color: rgba(65,184,131);
}
.links .egg:hover{
  color: #fff;
  background-color:rgb(84, 161, 169);
  box-shadow: 0 .125rem 1.25rem rgb(84, 161, 169);
}
.links .egg:hover .egg-title{
  color: #fff;
}
.egg-title{
  font-size: 16px;
  color: #269862;
}
.links .jquery:hover{
  color: #fff;
  background-color:#eeff61;
  box-shadow: 0 .125rem 1.25rem #eeff61;
}
.links .jquery:hover .jquery-title{
  color: #fff;
}
.jquery-title{
  font-size: 16px;
  color: #2f4e78;
}
.links .react:hover{
  color: #fff;
  background-color:#00baff;
  box-shadow: 0 .125rem 1.25rem #00baff;
}
.links .react:hover .react-title{
  color: #fff;
}
.react-title{
  font-size: 16px;
  color: rgba(97, 218, 251);
}

.change-title{
  width: 4rem;
  height: 4rem;
  border-radius: 10px;
  margin-left: 10px;
}
.kuangjia, .Vant, .Bootstrap, .Layui{
  width: 350px;
  height: 80px;
  border-radius: 10px;
  display: flex;
  align-items: center;
}
.Bootstrap, .Layui{
  margin-top: 30px;
}
.element-title{
  color: cornflowerblue;
  font-size: 16px;
}
.links .kuangjia:hover .element-title{
  color: #fff;
}
.links .kuangjia:hover{
  color: #fff;
  background-color:#4c94fe;
  box-shadow: 0 .125rem 1.25rem #4c94fe;
}
.bootstrap-title{
  color: #563d7c;
  font-size: 16px;
}
.links .Bootstrap:hover .bootstrap-title{
  color: #fff;
}
.links .Bootstrap:hover{
  color: #fff;
  background-color:#c286f9;
  box-shadow: 0 .125rem 1.25rem #c286f9;
}
.vant-title{
  color: #36d6b6;
  font-size: 16px;
}
.links .Vant:hover .vant-title{
  color: #fff;
}
.links .Vant:hover{
  color: #fff;
  background-color:#009b7c;
  box-shadow: 0 .125rem 1.25rem #009b7c;
}
.Layui-title{
  color: #000;
  font-size: 16px;
}
.links .Layui:hover .Layui-title{
  color: #fff;
}
.links .Layui:hover{
  color: #fff;
  background-color:#aeaeae;
  box-shadow: 0 .125rem 1.25rem #7352a4;
}
.kj-icon{
  width: 4rem;
  height: 4rem;
  margin-left: 10px;
}

.page{
  width: 900px;
  height: 100%;
  margin: auto;
}
.about, .links{
  padding-top: 30px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item, .item1, .item2, .item3{
  width: 350px;
  height: 80px;
  border-radius: 10px;
  display: flex;
  align-items: center;
}
.item2, .item3{
  margin-top: 30px;
}
.info{
  margin: auto;
  font-size: .75em;
}
h2, h3{
  margin-left: 40px;
}
li{
  list-style: none;
}
.anchor {
  animation: beat 1.5s linear infinite;
}
@keyframes beat {
    0%{
      transform: scaleZ(1);
    }
   50%{
     transform: scale(1.2);
    }
    100% { //动画结束样式
      transform: scale(1);
    }
}

.contact{
  animation: contact 3.5s linear 3s infinite;
}

@keyframes contact{
  from{transform: rotateZ(0deg);}
  to{transform: rotateZ(360deg);}
}

a{
  text-decoration-line: none;
}
</style>
