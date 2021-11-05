<template>
<div>
    <h1>Create User</h1>
    <form v-on:submit.prevent = "createUser">
        <p>ชื่อ: <input type="text" v-model="user.name"></p>
        <p>ผลิต: <input type="text" v-model="user.company"></p>
        <p>ต้นฉบับ: <input type="text" v-model="user.script"></p>
        <p>จำนวน: <input type="text" v-model="user.quantity"></p>
        <p>เริ่มฉาย: <input type="text" v-model="user.schedule"></p>
        <p><button type="submit">create user</button></p>
    </form>
    <hr>
    <div>
        <p>ชื่อ: {{ user.name }}</p>
        <p>ผลิต: {{ user.company }}</p>
        <p>ต้นฉบับ: {{ user.script }}</p>
        <p>จำนวน: {{ user.quantity }}</p>
        <p>เริ่มฉาย: {{ user.schedule }}</p>
    </div>
</div>
</template>
<script>
import UsersService from '@/services/UsersService'

export default {
    data(){
        return{
            user:{
                name: '',
                lastname: '',
                email: '',
                password: '',
                status: 'active'
            }
        }
    },
    methods:{
        async createUser(){
            try{
                await UsersService.post(this.user)
                this.$router.push({
                    name: 'users'
                })
            }catch(error){
                console.log(error)
            }
        }
    }    
}
</script>
<style scoped>


</style>