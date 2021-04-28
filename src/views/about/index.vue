<template>
  <div class="content">
    <div class="about-me">
      <h3 ><img src="./images/心跳心动1.svg" alt="" class="anchor"> 关于我</h3>
      <ul>
        <li>小萌不在</li>
        <li>永远的十八岁</li>
        <li>很懒</li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="character">
      <h3><img src="./images/性格.svg" alt="" class="char"> 性格</h3>
      <ul>
        <li>我站在你的角度 越为你考虑就越为我自己难过</li>
        <li>敏感多虑</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <p> </p>
    </div>
    <div class="life">
      <h3><img src="./images/生活.svg" alt="" class="swing"> 生活</h3>
      <ul>
        <li>我在等一个浪漫的夏天 希望这个就是</li>
        <li>我真的超想和你有很久很久的未来</li>
        <li>糟糕透了</li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="hobby">
      <h3><img src="./images/樱花.svg" alt="" class="contact"> 常用账号</h3>
      <ul>
        <a href="https://music.163.com/#/user/home?id=612000409" target="_blank">小萌在这-</a><li>网易云音乐</li>
        <li>weibo</li>
        <li></li>
        <li></li>
        <li>你说向日葵是怎么熬过没有太阳的夜晚的</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.content{
  width: 100%;
  height: 100%;
  background: url('./images/背景.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  position: fixed;
}
.content img{
  width: 1.5rem;
  height: 1.5rem;
}
.about-me{
  margin-top: 60px;
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

.char{
  animation: char 2.5s 1.5s linear infinite;
}
@keyframes char {
    0% {
        opacity:1;
     }
    25% {
        opacity:0;
    }
    50% {
        opacity: 0;
    }
    75% {
        opacity:1;
    }
}

.swing{
  animation: move 2.5s 1.5s linear infinite;
}

@keyframes move {
    10%{
    transform: rotate(15deg);
    }
    20%{
    transform: rotate(-10deg);
    }
    30%{
    transform: rotate(5deg);
    }
    40%{
    transform: rotate(-5deg);
    }
    50%,100%{
      transform:rotate(0deg)
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
