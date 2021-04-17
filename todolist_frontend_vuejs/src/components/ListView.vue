<template>
  <div>
    <div v-for="(item, index) in items" :key="index" >
      <!-- O $emit dispara um evento no componente App.vue. Que é para recarregar uma nova lista com os novos valores -->
      <ListItem :item="item" class="item" v-on:itemchanged="$emit('reloadlist')" />
    </div>
  </div>
</template>

<script>
import ListItem from "./ListItem" 

export default {
  name: 'ListView',
  props: ['items'],
  components: {
    ListItem
  }  
}
</script>

<style scoped>
  .item {
    background: #e6e6e6;
    padding: 5px;
    margin-top: 5px;
  }
</style>
