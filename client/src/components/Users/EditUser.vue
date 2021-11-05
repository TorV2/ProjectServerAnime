<template>
<div>
    <h1>Edit Anime</h1>
    <form v-on:submit.prevent = "editUser">
        <p>ชื่อ: <input type="text" v-model="user.name"></p>
        <p>ผลิต: <input type="text" v-model="user.company"></p>
        <p>ต้นฉบับ: <input type="text" v-model="user.script"></p>
        <p>จำนวน: <input type="text" v-model="user.quantity"></p>
        <p>เริ่มฉาย: <input type="text" v-model="user.schedule"></p>
        <p><button type="submit">edit anime</button></p>
        <button v-on:click="navigateTo('/blogs')">กลับ</button>
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
<script>import UsersService from '@/services/UsersService'

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
        async editUser(){
            try{
                await UsersService.put(this.user)
                this.$router.push({
                    name: 'users'
                })

            }catch(error){
                console.log(error)
            }
        }
    }, 
    async created(){
        try{
            let userId = this.$route.params.userId
            this.user = (await UsersService.show(userId)).data
        }catch(error){
            console.log(error)
        }
    }
}
</script>
<style scoped>


</style>