<template lang='pug'>
.div <!--Должен быть обернут в один div / рендерим компоненты -->
	index(:userList='userList')
	newUserForm(:addUser='addUser')
	listOfUser(:userList='userList'  :deleteUser='deleteUser')
</template>


<script>
import axios from 'axios';
import index from './components/Index.vue';
import newUserForm from './components/NewUserForm.vue';
import listOfUser from './components/ListOfUser.vue'; //Импортируем компоненты

  export default {
  name: 'app',
  components: { //Добавим локальные компоненты
    newUserForm,
    listOfUser,
		index
  },

  data() { //переменные которые можно использовать в шаблоне
    return {
      userList: []
    }
  },

  mounted() {
    this.refresh()  //вызываем methods refresh для обновления списка пользователей
  },

  methods: {
    refresh() { //получаем таблицу с пользователями
      axios.get('http://localhost:3000/ajax/users')
      .then(response => (this.userList = response.data))
    },

    addUser(name, login, password) { //связываем с помощью axios удаление на сервере
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
      axios({
        method: 'post',
        url: 'http://localhost:3000/ajax/users/delete',
        data: { //у GET должен быть params а не data
          id
        }
      })
      .then(() => {
        this.refresh() //после удачного выполнения метода выполнится обновление таблицы
      })
    },

    }
  }
</script>
