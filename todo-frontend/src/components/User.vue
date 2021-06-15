<template>
  <div>
    <h1>Database</h1>
    <div>List To-Do : </div>
    <ul>
      <li v-for="item in users" :key="item">{{item.deskripsi}}<button @click ="deleteUser(item.deskripsi)">-</button></li> 
    </ul>
    <input v-model="username"/>
    <input v-model="password"/>
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
      getTodos(){
        const username = localStorage.getItem('usr')
        const password = localStorage.getItem('pwd')
        axios.get('http://localhost:3000/user', {header: {username , password}})
        .then(result => {
          this.users = result.data
        })
      },
      addTodos(){
        let addItem = {deskripsi: this.myText}
        axios.post('http://localhost:3000/user', addItem, {header: {username , password}})
        this.users.push(addItem)
      },
      deleteTodo(deskripsi){
        axios.delete(`http://localhost:3000/user/${deskripsi}`)
          .then(() => {
            this.getUsers()
        })
      }
    }
  }
</script>
