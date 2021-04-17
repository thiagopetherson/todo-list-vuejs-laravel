<template>
  <div class="item">
     <input type="checkbox" @change="updateCheck()" v-model="item.completed" />
     <span :class="[item.completed ? 'completed' : '', 'itemText']">{{ item.name }}</span>
     <button @click="removeItem()" class="trashcan" >
       <font-awesome-icon icon="trash" />
     </button>
  </div>
</template>

<script>
import axios from 'axios' // Importando o axios

export default {
  name: 'ListItem',
  props: ['item'],
  methods: {
    updateCheck() { // Método de fazer o update na tarefa
    console.log(this.item.completed)
      axios.put('http://127.0.0.1:8000/api/item/' + this.item.id, {
        completed: this.item.completed
      })
      .then((response) => {
        if( response.status == 200 ) {
          this.$emit('itemchanged') // Esse emit dispara um evento que vem no componente ListView
        }
      })
      .catch((error) => {
        console.log(error)
      })
    },
    removeItem () { // Método para deletar uma tarefa (fazemos uma requisição com axios)
      axios.delete('http://127.0.0.1:8000/api/item/' + this.item.id)
      .then((response) => {
        if( response.status == 200 ) {
          this.$emit('itemchanged')
          alert('Sucesso ao Remover')
        }
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
  
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: #999999;
}

.itemText {
  width: 100%;
  margin-left: 20px;
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
}

.trashcan {
  background: #e6e6e6;
  border: none;
  color: #FF0000;
}

</style>
