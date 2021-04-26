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
      <h3><img src="./images/性格.svg" alt=""> 性格</h3>
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
      <h3><img src="./images/生活.svg" alt=""> 生活</h3>
      <ul>
        <li>我在等一个浪漫的夏天 希望这个就是</li>
        <li>我真的超想和你有很久很久的未来</li>
        <li>糟糕透了</li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="hobby">
      <h3><img src="./images/樱花.svg" alt=""> 常用账号</h3>
      <ul>
        <li>你说向日葵是怎么熬过没有太阳的夜晚的</li>
        <li>倒是很爱你</li>
        <li></li>
        <li></li>
        <li></li>
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
  // background: transparent;
}
  .content img{
    width: 1.5rem;
    height: 1.5rem;
  }
.about-me{
  margin-top: 60px;
}
.anchor {
  // -webkit-animation: beat 1.33s ease-in-out infinite;
  animation: beat 1.5s ease-in-out infinite;
  // animation-duration: 1.33s;
  // animation-timing-function: ease-in-out;
  animation-delay: 0s;
  // animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  // animation-name: beat;

}
@keyframes beat {

  50% {
    transform: scaleX(1) scaleY(1.3) scaleZ(1.3);
    // background: skyblue;
  }
  100% {
    transform: scaleX(1) scaleY(1) scaleZ(1);
    // background: skyblue;
  }
}
</style>
