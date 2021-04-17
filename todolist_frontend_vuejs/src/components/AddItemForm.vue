<template>
  <div class="addItem">
    <input type="text" v-model="name" />
    <!-- Abaixo, active ou inactive, sempre usaremos o plus -->
    <font-awesome-icon icon="plus-square" @click="addItem()" :class="[ name ? 'active' : 'inactive', 'plus' ]" />
  </div>
</template>

<script>
import axios from 'axios' // Importando o axios

export default {
  name: 'AddItemForm',
  data: function () {
    return {     
        name:""      
    }
  },
  methods: {
    addItem () {
      if ( this.name == '' ) {
        return
      }
      // Cadastrando um item no banco de dados
      axios.post('http://127.0.0.1:8000/api/item/store', {
        name: this.name
      })
      .then((response) => {
        if( response.status == 201 ) {
          this.name = ""
          this.$emit('reloadlist') // Renderizando na lista o novo valor que foi adicionado
          alert('Sucesso ao Adicionar')
        }
      })
      .catch((error) => {
        console.log( error )
      })

    }
  }
}
</script>

<style scoped>
  .addItem {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input {
    background: #f7f7f7;
    border: 0px;
    outline: none;
    margin-right: 10px;
    width: 100%;
  }

  .plus {
    font-size: 20px;
  }

  .active {
    color: #00CE25;
  }

  .inactive {
    color: #999999;
  }
</style>