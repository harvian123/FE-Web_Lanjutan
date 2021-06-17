<template>
  <div>
    <h1>Database</h1>
    <div>User List : </div>
    <ul>
      <li v-for="item in users" :key="item">{{item.username}}<button @click ="deleteUser(item.id)">-</button></li> 
    </ul>
    <input v-model="username"/>
    <input v-model="password"/>
    <br/>
    <button @click="Add">Add Data</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data:()=>{
      return {
        users: [],
        username: '',
        password: ''
      }
    },
    mounted: function(){  
      this.getUsers()
    },
    methods: {
      getUsers(){
        const username = localStorage.getItem('usr')
        const password = localStorage.getItem('pwd')
        axios.get('http://localhost:3000/users', {header: {username , password}})
        .then(result => {
          this.users = result.data
        })
      },
      addUsers(){
        const username = localStorage.getItem('usr')
        const password = localStorage.getItem('pwd')
        let addUser = {username : this.username, password : this.password}
        axios.post('http://localhost:3000/user', addItem, {header: {username , password}})
        this.users.push(addUser)
      },
      deleteUsers(id){
        axios.delete(`http://localhost:3000/user/${id}`)
          .then(() => {
            this.getUsers()
        })
      }
    }
  }
</script>
