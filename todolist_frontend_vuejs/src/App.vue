<template>
  <div id="app">
    <div class="todoListContainer">
      <div class="heading">
          <h2 id="title">Todo List | Vue 2 and Laravel 8</h2>
          <AddItemForm v-on:reloadlist="getList()" />
      </div>
      <ListView :items="items" v-on:reloadlist="getList()" />
    </div>  
  </div>
</template>

<script>
import AddItemForm from './components/AddItemForm.vue' // Importando componente
import ListView from './components/ListView.vue' // Importando componente
import axios from 'axios' // Importando o axios

export default {
  name: 'App',
  components: { AddItemForm, ListView },
  data: function () {
    return {
      items: []
    }
  },
  methods: {
    getList () {
      axios.get('http://127.0.0.1:8000/api/item')
      .then((response) => {
        this.items = response.data
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  created () {
    this.getList()
  }

}
</script>

<style scoped>
  .todoListContainer {
    width: 400px;
    margin: auto;
  }

  .heading {
    background: #e6e6e6;
    padding: 10px;    
  }

  #title {
    text-align: center;
  }
</style>
