<template>
  <div class="home">

    <van-button type="primary">默认按钮</van-button>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item">
        <div class="list">
          <div class="left">
            <img src="item.img" alt="">
          </div>
          <div class="right">
            <div class="title">{{item.title}}</div>
            <div class="create-time">{{item.createTime}}</div>
          </div>
        </div>
      </van-cell>
    </van-list>

  </div>
</template>

<script>
import { Button, List, Cell } from 'vant'

export default {
  name: 'Home',
  components: {
    [Button.name]: Button,
    [List.name]: List,
    [Cell.name]: Cell
  },
  data () {
    return {
      loading: false,
      finished: false,
      list: []
    }
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        this.loading = true
        this.finished = true
        this.list = []
      }, 1000)
    }
  }
}
</script>
<style lang="less" scoped>
.list{
  display: flex;
  flex-direction: row;
  .left img{
    width: 150px;
    height: 100px;
    border-radius: 10px;
  }
  .right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 15px;
    .title{
      font-size: 18px;
    }
    .create-time{
      font-size: 12px;
      color: #9e9e9e;
    }
  }
}
</style>
