<template>
  <div>
    <h1>Anime Data</h1>
        <p>ชื่อ: {{ user.name }}</p>
        <p>ผลิต: {{ user.company }}</p>
        <p>ต้นฉบับ: {{ user.script }}</p>
        <p>จำนวน: {{ user.quantity }}</p>
        <p>เริ่มฉาย: {{ user.schedule }}</p>
        <br>
      <p> 
      <button v-on:click="navigateTo('/users')">กลับ</button>
      </p>
      <br>
      <br>
  </div>
</template>
<script>
import UserService from "@/services/UsersService";
export default {
  data() {
    return {
      user: null,
    };
  },
  async created() {
    try {
      let userId = this.$route.params.userId;
      this.user = (await UserService.show(userId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
</style>