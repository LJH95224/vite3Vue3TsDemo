<template>
  <div class="home">
    <div class="defaultColor tw-text-left tw-text-lg">首页上</div>
  </div>
</template>

<script setup lang="ts">
interface UserInfo {
  userName: string
}
const user: UserInfo = {
  userName: 'LV'
}
user.userName = '111'
console.log(user)
</script>

<style scoped lang="scss">
.home {
  .defaultColor {
    color: $red;
  }
}
</style>
