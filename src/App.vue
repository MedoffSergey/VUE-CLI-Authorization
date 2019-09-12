<template lang='pug'>
.div <!--Должен быть обернут в один div / рендерим компоненты -->
	template(v-if="token!=null")
		newUserForm(:addUser='addUser' )
		listOfUser(:userList='userList'  :deleteUser='deleteUser' )

	template(v-else)
		index(:updateField='updateField')
</template>


<script>
import axios from 'axios';
import index from './components/Index.vue';
import newUserForm from './components/NewUserForm.vue';
import listOfUser from './components/ListOfUser.vue'; //Импортируем компоненты

export default {
  name: 'app',

  components: { // Добавим локальные компоненты
    newUserForm,
    listOfUser,
    index
  },

  data() { // Переменные которые можно использовать в шаблоне
    return {
      userList: [],
      user: null,
			token: null
    }
  },
  mounted() { // Функция загрузки данных
		this.token=localStorage.getItem('jwttoken')
    if(this.token){
			axios.defaults.headers.common = {Authorization : `bearer ${this.token}`}		// bearer вид аунтификации такой // прикрепляю заголовок авторизации
			this.refresh() // Вызываем methods refresh для обновления списка пользователей
		}

  },

  methods: {
    refresh() { //получаем таблицу с пользователями
      axios.get('http://localhost:3000/ajax/users',{ params: {token : this.token }})
        .then(response => (this.userList = response.data))
    },

    addUser(name, login, password) { // связываем с помощью axios удаление на сервере
      axios({
        method: 'post', //метод запроса POST
        url: 'http://localhost:3000/ajax/users/add',
        data: { // у Post должен быть data а не params
          name,
          login,
          password,
					token : this.token
        }

      }).then(() => { // после удачного выполнения метода выполнится обновление таблицы
        this.refresh()
      })
    },

    deleteUser(id) {
      axios ({
          method: 'post',
          url: 'http://localhost:3000/ajax/users/delete',
          data: { // у GET должен быть params а не data
            id,
						token : this.token

          },

        })
        .then(() => {
          this.refresh(); // после удачного выполнения метода выполнится обновление таблицы

        })
    },

    updateField(login, password) {
      axios({
          method: 'post',
          url: 'http://localhost:3000/ajax/users/dataChecking',
          data: { // у GET должен быть params а не data
            login,
            password
          }
        })
        .then(response => {
          this.user = response.data.userLogin // присвоим переменной токен полученного пользователя с сервера
					this.token = response.data.token	// присвоим переменной токен полученный токен с сервера
					localStorage.setItem('jwttoken',response.data.token)	//Следующая функция создает элемент с данными в хранилище.
					if(this.token) axios.defaults.headers.common = {Authorization : `bearer ${this.token}`}		// bearer вид аунтификации такой // прикрепляю заголовок авторизации
					this.refresh();
        }) // Получаем json с сервера

    }
  }
}
</script>
