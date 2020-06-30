<template>
  <div class="home">

    <van-button type="primary">默认按钮</van-button>

  </div>
</template>

<script>
import { Button, Tabbar, TabbarItem } from 'vant'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    [Button.name]: Button,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
}
</script>
