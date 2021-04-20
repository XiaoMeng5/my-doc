<template>
  <div>
    <div class="one">
      <div class="text">
        <p>
          别在情绪上头那一刻
          忘了对方所有的好
          满身是刺的戳向对方
          只顾着吵架说狠话
          却忘了我们怎么走过来的.
        </p>
      </div>
      <img src="./images/one.jpg" alt="">
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
  width: 1200px;
  height: 310px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 100px auto;
}
.one img{
  width: 480px;
  height: 270px;
  margin: 0 auto;
  // padding-right: 15px;
}
.text{
  width: 350px;
  height: 220px;
  margin-left: 55px;
  margin: 0 auto;
}
.text p{
  letter-spacing: 21px;
  margin: 0 auto;
  margin-top: 40px;
  // text-align: center;
}
</style>
