<template>
  <router-link to="/">Halaman Login</router-link>
  &nbsp;
  <router-link to="/todo">Halaman Todo</router-link>
  &nbsp;
  <router-link to="/user">Halaman User</router-link>
  &nbsp;
  <router-view to="/user"></router-view>
</template>

<script setup>
import Todo from './components/Todo.vue'
import User from './components/User.vue'
</script>
