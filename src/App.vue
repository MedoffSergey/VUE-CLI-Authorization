<template lang='pug'>
.container  <!--Должен быть обернут в один div / рендерим компоненты -->
	newUserForm(:addUser='addUser')
	listOfUser(:userList='userList'  :deleteUser='deleteUser')
</template>


<script>
import axios from 'axios';
import newUserForm from './components/NewUserForm.vue';
import listOfUser from './components/ListOfUser.vue'; //Импортируем компоненты

  export default {
  name: 'app',
  components: { //Добавим локальные компоненты
    newUserForm,
    listOfUser
  },

  data() {
    return {
      userList: []
    }
  }, //переменные которые можно использовать в шаблоне

  mounted() {
    this.refresh()  //вызываем methods refresh для обновления списка пользователей
  },

  methods: {
    refresh() { //получаем таблицу с пользователями
      axios.get('http://localhost:3000/ajax/users')
      .then(response => (this.userList = response.data))
    },

    addUser(name, login, password) { //связываем с помощью axios удаление на сервере
      let self = this;			// ??????????????????????????????????????????
      axios({
        method: 'post', //метод запроса POST
        url: 'http://localhost:3000/ajax/users/add',
        data: {	// у Post должен быть data а не params
          name,
          login,
          password
        }

      }).then(() => { //после удачного выполнения метода выполнится обновление таблицы
        this.refresh()
      })
    },

    deleteUser(id) {
      let self = this;				// ??????????????????????????????????????????
      axios({
        method: 'get',	//метод запроса GET
        url: 'http://localhost:3000/ajax/users/delete',
        params: { //у GET должен быть params а не data
          id
        }
      })
      .then(() => {
        this.refresh() //после удачного выполнения метода выполнится обновление таблицы
      })
    }
    }
  }
</script>
