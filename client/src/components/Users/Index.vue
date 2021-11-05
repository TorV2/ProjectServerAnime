<template>
  <div>
    <h1>Member</h1>
    <strong><h1><p>62311210 นายชยางกูร บัวชื่น</p>
    <p>62314501 นายวรชนก ซิมงาม</p></h1></strong>
    <br>
    <br>
    <div v-if="users.length">
      <h4>จำนวนผู้ใช้งาน {{ users.length }}</h4>
      <p>
        <button v-on:click="navigateTo('/user/create')">
            สร้างรายละเอียดอนิเมะ
          </button>
      </p>
      <body>
      <div v-for="user in users" v-bind:key="user.id">
        <p>ชื่อ: {{ user.name }}</p>
        <p>ผลิต: {{ user.company }}</p>
        <p>ต้นฉบับ: {{ user.script }}</p>
        <p>จำนวน: {{ user.quantity }}</p>
        <p>เริ่มฉาย: {{ user.schedule }}</p>
        <p>
          <button v-on:click="navigateTo('/user/' + user.id)">
            ดูข้อมูลผู้ใช้
          </button>
          <button v-on:click="navigateTo('/user/edit/' + user.id)">
            แก้ไขข้อมูล
          </button>
          <button v-on:click="deleteUser(user)">
            ลบข้อมูล
          </button>
        </p>
         <hr width="10%">
      </div>
      </body>
      <p><button v-on:click="logout">Logout</button></p>
    </div>
  </div>
</template>
<script>
import UsersService from "@/services/UsersService";

export default {
  data() {
    return {
      users: [],
    };
  },
  async created() {
    try {
      this.users = (await UsersService.index()).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteUser(user){
      let result = confirm("Want to delete")
      if(result){
        try{
          await UsersService.delete(user)
          this.refreshData()
        }catch(error){
          console.log(error)
        }
      }
    },
    async refreshData(){
      this.users = (await UsersService.index()).data
    },
    logout(){
      this.$store.dispatch('setToken',null)
      this.$store.dispatch('setUser',null)

      this.$router.push({
        name: 'login'
      })
    }
  },
};
</script>
<style scoped>
</style>