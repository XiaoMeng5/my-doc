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
        <div class="text-left">
          <span> Live a good life </span>
        </div>
        <div class="text-right">
          <span> and meet slowly</span>
        </div>
      </div>
    </div>
    <div class="one">
      <div class="right">
        <img src="./images/汤圆.png" class="right-img">
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
        <img src="./images/插画.png"  width="550px" height="320px" style="margin-left:-75px">
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
  margin: 100px auto;
}
.two{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}

.right{
  margin-right: 150px;
}
.two-right{
  margin-right: 70px;
}
.one .img{
  width: 400px;
  height: 470px;
}

.right-img{
  width: 600px;
  height: 350px;
}

.text-left{
  position: absolute;
  left: 1040px;
  top: 280px;
  font-size: 25px;
  font-weight: 900;
  color: #fff;
}

.two-text{
  width: 350px;
  height: 220px;
  margin: 0 auto;
}

.text-right{
  position: absolute;
  left: 1260px;
  top: 280px;
  font-size: 25px;
  font-weight: 900;
}

.text{
  width: 350px;
  height: 220px;
  margin: 0 auto;
}
.two-text{
  width: 350px;
  height: 220px;
  margin: 0 auto;
}

.right-text{
  width: 350px;
  height: 220px;
}
.one-text{
  letter-spacing: 21px;
  margin: 0 auto;
  margin-top: 55px;
  color: #555;
  font-size: 16px;
}
.date{
  font-size: 12px;
  color: #999;
}
</style>
