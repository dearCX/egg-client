<template>
  <div class="detail">
    <div class="title">{{detail.title}}</div>
    <div class="summary">{{detail.summary}}</div>
    <div class="content">{{detail.content}}</div>
    <div class="create-time">{{detail.createTime}}</div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  name: 'Detail',
  data () {
    return {
      detail: {
        id: null,
        title: null,
        summary: null,
        content: null,
        createTime: null
      }
    }
  },
  created () {
    this.getDetail()
  },
  methods: {
    getDetail () {
      const id = this.$route.query.id
      fetch(`/article/detail/${id}`)
        .then(res => res.json())
        .then(res => {
          if (res.status === 200) {
            this.detail = res.data
            this.detail.createTime = this.detail.createTime ? moment(this.detail.createTime).format('YYYY-MM-DD HH:mm:ss') : ''
          } else {
            this.$toast.fail(res.errorMsg)
          }
        })
    }
  }
}
</script>
<style lang="less" scoped>
.detail{
  padding: 20px;
  text-align: left;
  .title{
    font-size: 25px;
    margin-bottom: 20px;
  }
  .summary{
    padding: 20px;
    background-color: #dcdcdc;
    margin-bottom: 20px;
  }
  .content{
    text-indent: 2em;
    line-height: 200%;
  }
  .create-time{
    color: #9c9c9c;
    text-align: right;
  }
}
</style>
