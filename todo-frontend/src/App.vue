<template>
  <router-link to="/">Halaman Login</router-link>
  <router-link to="/todo">Halaman Todo</router-link>
  <router-link to="/user">Halaman User</router-link>
  <router-view to="/user"></router-view>
</template>

<script setup>
import Todo from './components/Todo.vue'
import User from './components/User.vue'
</script>
