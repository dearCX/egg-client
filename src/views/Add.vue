<template>
  <div>
    <van-uploader
      :max-count="1"
      v-model="fileList"
      :after-read="afterRead"
    />
    <van-cell-group>
      <van-field label="文章标题" placeholder="文章标题" v-model="title"/>
      <van-field label="文章简介" placeholder="文章简介" v-model="summary"/>
      <van-field label="文章内容" placeholder="文章内容" v-model="content" type="textarea" autosize/>
    </van-cell-group>
    <van-button type="primary" @click="handleAdd" class="add-button">提交</van-button>
  </div>
</template>
<script>
import { Uploader, CellGroup, Field, Button } from 'vant'
export default {
  name: 'Add',
  components: {
    [Uploader.name]: Uploader,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button
  },
  data () {
    return {
      fileList: [],
      title: '',
      summary: '',
      content: '',
      img: ''
    }
  },
  methods: {
    afterRead (info) {
      console.log(info)
      this.img = info.content
    },
    handleAdd () {
      const data = {
        title: this.title,
        summary: this.summary,
        content: this.content,
        img: this.img
      }
      this.fileList.push(data)
      console.log(data)
    }
  }
}
</script>
<style lang="less" scoped>
.add-button{
  position: absolute;
  left: 0;
  bottom: 80px;
  width: 100%;
}
</style>
