<template lang='pug'>
.container  <!--Должен быть обернут в один div рендерим компоненты -->
  newUserForm(:userList='userList')
  listOfUser(:userList='userList')
</template>

<script>
import axios from 'axios';
import newUserForm from './components/NewUserForm.vue'
import listOfUser from './components/ListOfUser.vue'    //Импортируем компоненты в App

  export default {
    name: 'app',
    components:{    //Добавим локальные компоненты
      newUserForm,
      listOfUser
    },

    data(){
      return {
        userList: []
      }
    },
    mounted() {
      axios.get('http://localhost:3000/ajax/users')
      .then(response => (this.userList = response.data));
    },
    methods: {
      appendUser() {
        axios({
          method: 'get',
          url: 'http://localhost:3000/ajax/users/add',
          data: {
              name: this.newUser.name,
              login: this.newUser.login,
              password: this.newUser.password
          }
        });

      }

    }
  }

</script>
