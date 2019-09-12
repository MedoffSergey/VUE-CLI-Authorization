<template lang='pug'>
.div <!--Должен быть обернут в один div / рендерим компоненты -->
	.div(v-if="token!=null")
		navbar(:user='user')
		newUserForm(:addUser='addUser' )
		listOfUser(:userList='userList'  :deleteUser='deleteUser' )

	index(v-if="token==null" :updateField='updateField')
</template>


<script>
import axios from 'axios';//Импортируем компоненты
import index from './components/Index.vue';
import newUserForm from './components/NewUserForm.vue';
import listOfUser from './components/ListOfUser.vue';
import navbar from './components/navbar/Navbar.vue';


export default {
  name: 'app',

  components: { // Добавим локальные компоненты
    newUserForm,
    listOfUser,
    index,
		navbar
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
			this.setTitleAuth()
			this.refresh() // Вызываем methods refresh для обновления списка пользователей
		}
  },



  methods: {
    refresh() { //получаем таблицу с пользователями
      axios.get('http://localhost:3000/ajax/users',{ params: {token : this.token }})
        .then(response => (this.userList = response.data))
    },

		setTitleAuth () {
			if(this.token){
				axios.defaults.headers.common = {Authorization : `bearer ${this.token}`}		// bearer вид аунтификации такой // прикрепляю заголовок авторизации
		}
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
          this.user = response.data.userLogin // присвоим переменной логин полученного пользователя с сервера
					this.token = response.data.token	// присвоим переменной токен полученный токен с сервера
					localStorage.setItem('jwttoken',response.data.token)	//Следующая функция создает элемент с данными в хранилище.
					this.setTitleAuth()
					this.refresh();
        }) // Получаем json с сервера

    }
  }
}
</script>
