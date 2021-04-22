<template>
  <div>
    <div class="one">
      <div class="text">
        <p class="date">四 月 20 , 2021</p>
        <p class="one-text">
          别在情绪上头那一刻 忘了对方所有的好 满身是刺的戳向对方 只顾着吵架说狠话 却忘了我们怎么走过来的.
        </p>
      </div>
      <div class="right">
        <img src="./images/天鹅1.png" class="img">
      </div>
    </div>
    <div class="one">
      <div class="right">
        <img src="./images/汤圆.png" width=600px; height=350px; style="margin-top: 100px; margin-right:100px">
      </div>
      <div class="right-text">
        <p class="date">四 月 20 , 2021</p>
        <p class="one-text">
          换作以前早就开始哭了 现在根本不在乎 人言可畏 说话不需要成本 我那点旧账翻烂了 也没人愿意听你那些破事
        </p>
      </div>
    </div>
    <div class="one">
      <div class="text">
        <p class="date">四 月 20 , 2021</p>
        <p class="one-text">
          我渐渐明白她才二十岁 家人没有给她太多关心 每次被我气哭还要听我讲道理 她唯一的开心就是我
        </p>
      </div>
      <div class="two-right">
        <img src="./images/插画.png" width="550px" height="320px" style="margin-left:-75px">
      </div>
    </div>
    <div class="one">
      <div class="right-circle">
        <img src="./images/circle.jpg" class="circle-img">
      </div>
      <div class="right-text">
        <p class="date">四 月 21 , 2021</p>
        <p class="one-text">
          以前我觉得只要两个人相爱就没有什么可以阻挡后来才发现还有现实失望脾气和互相不理解</p>
      </div>
    </div>
    <div class="one">
      <div class="text">
        <p class="date">四 月 21 , 2021</p>
        <p class="one-text">
          以前我觉得只要两个人相爱就没有什么可以阻挡后来才发现还有现实失望脾气和互相不理解</p>
      </div>
      <div class="two-right">
        <img src="./images/景1.png" width="500px" height="550px" style="margin-left:-25px">
      </div>
    </div>
    <div class="one">
      <div class="right">
        <img src="./images/花.png" width="400px" height="400px" style="margin-right:290px">
      </div>
      <div class="right-text">
        <p class="date">四 月 21 , 2021</p>
        <p class="one-text">
          换作以前早就开始哭了 现在根本不在乎 人言可畏 说话不需要成本 我那点旧账翻烂了 也没人愿意听你那些破事
        </p>
      </div>
    </div>
    <div class="one">
      <div class="text">
        <p class="date">四 月 21 , 2021</p>
        <p class="one-text">
          以前我觉得只要两个人相爱就没有什么可以阻挡后来才发现还有现实失望脾气和互相不理解</p>
      </div>
      <div class="two-right">
        <img src="./images/绿.png" width="570px" height="550px" style="margin-left:-85px">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang='less' scoped>
.one{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('./images/new.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

.right{
  margin-top: 100px;
  margin-right: 50px;
}

.two-right{
  margin-top: 100px;
  margin-right: 70px;
}

.one .img{
  width: 500px;
  height: 470px;
}

.two-text{
  margin-top: 100px;
  width: 350px;
  height: 220px;
  margin: 0 auto;
}

.text{
  margin-top: 100px;
  width: 350px;
  height: 220px;
  margin: 0 auto;
}
.two-text{
  margin-top: 100px;
  width: 350px;
  height: 220px;
  margin: 0 auto;
}

.right-text{
  margin-top: 100px;
  width: 350px;
  height: 220px;
}

.one-text{
  letter-spacing: 21px;
  margin: 0 auto;
  margin-top: 55px;
  color: rgba(255, 255, 255,0.8);
  font-size: 16px;
  margin-top: 100px;
}

.date{
  font-size: 12px;
  color: #000;
}

.circle-img{
  width: 450px;
  height: 450px;
  border-radius: 50%;
  margin-top: 100px;
}

.right-circle{
  margin-right: 290px;
  margin-top: 100px;
}
</style>
