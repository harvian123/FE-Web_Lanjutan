<template>
  <div>
    <h1>Selamat Datang</h1>
    <div>Berikut daftar kerja kita : </div>
    <ul>
      <li v-for="item in todos" :key="item">{{item.nama}}<button @click ="deleteTodos(item.nama)">-</button></li> 
    </ul>
    <input v-model="myText" type="text"/>
    <button @click="addTodos">Add</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data: () => {
      return {
        todos: [],
        myText:''
      }
    },
    mounted: function(){
      this.getTodos()
    },
    methods: {
      getTodos(){
        axios.get('http://localhost:3000/todo')
        .then(result => {
          this.todos = result.data
        })
      },
      addTodos(){
        let addItem = {nama: this.myText}
        axios.post('http://localhost:3000/todo', addItem)
        this.todos.push(addItem)
      },
      deleteTodos(nama){
        axios.delete(`http://localhost:3000/todo/${nama}`)
          .then(() => {
            this.getTodos()
          })
      }
    }
  }
</script>

