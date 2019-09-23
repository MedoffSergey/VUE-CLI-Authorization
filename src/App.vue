<template lang='pug'>
div <!--Должен быть обернут в один div / рендерим компоненты -->
	div(v-if="token!=null")
		navbar(:user='user'  :exitUser='exitUser'  :showTableUser='showTableUser'  :showFiles='showFiles'  )

		div(v-if="page=='home'")
			home

		div(v-if="page=='showFiles'")
			div.mt-3.d-flex.justify-content-center
				newFileForm.mx-5(:addFiles='addFiles'  )
				componentsFilter.ml-5(:page='page'  :tableFilesSearch='tableFilesSearch'  )
			fileTable(:filesList='filesList'  :deleteFile='deleteFile' )

		div(v-if="page=='showUser'")
			div.mt-3.d-flex.justify-content-center
				newUserForm.mx-5(:addUser='addUser' )
				componentsFilter.ml-5(:page='page'  :tableUserSearch='tableUserSearch')

			listOfUser(:userList='userList'  :deleteUser='deleteUser'  :changePassword='changePassword')

	index(v-else  :authUser='authUser'  )
</template>


<script>
import axios from 'axios';//Импортируем компоненты

import index from './components/Index.vue';
import navbar from './components/navbar/Navbar.vue';
import newUserForm from './components/NewUserForm.vue';
import listOfUser from './components/ListOfUser.vue';
import fileTable from './components/FileTable.vue';
import home from './components/Home.vue';
import newFileForm from './components/NewFileForm.vue';
import componentsFilter from './components/Filter.vue';

export default {
  name: 'app',

  components: { // Добавим локальные компоненты
		navbar,
		home,
    newUserForm,
    listOfUser,
    index,
		fileTable,
		newFileForm,
		componentsFilter
  },

  data() { // Переменные которые можно использовать в шаблоне
    return {
      userList: [],
      user: null,
			token: null,
			filesList: [],
			page: "home",	//переключатель отображаеммых данных
    }
  },

  mounted() { // Функция загрузки данных
		this.token=localStorage.getItem('jwttoken')
    if(this.token){
			this.setTitleAuth()
			this.giveUser()
			this.refreshUserList() 	// Вызываем methods refreshUserList для обновления списка пользователей
			this.refreshFileList()	// Вызываем methods refreshFileList для обновления списка файлов

		}

  },

  methods: {
		refreshUserList() { //получаем таблицу с пользователями
			axios.get('http://localhost:3000/ajax/users')
				.then(response => (this.userList = response.data))
    },

		refreshFileList(){
			axios.get('http://localhost:3000/ajax/users/fileTable')
			.then(response => {this.filesList = response.data.domenIpObj}

			)
		},

		giveUser() {
			axios.get('http://localhost:3000/ajax/users/giveUser')
				.then(response => (this.user = response.data.currentUser))

    },

		setTitleAuth() {
			if(this.token){
				axios.defaults.headers.common = {Authorization : `bearer ${this.token}`}		// bearer вид аунтификации такой // прикрепляю заголовок авторизации
		}
	},

		exitUser() {
				this.token = null
				axios.defaults.headers.common = null		// bearer вид аунтификации такой // очищаю поле авторизации
				localStorage.removeItem('jwttoken')
			},

authUser(login, password) {
	axios({
			method: 'post',
			url: 'http://localhost:3000/ajax/users/dataChecking',
			data: { // у GET должен быть params а не data
				login,
				password
			}
		})
		.then(response => {
			this.user =  response.data  // присвоим переменной полученного пользователя с сервера
			this.token = response.data.token	// присвоим переменной токен полученный токен с сервера
			localStorage.setItem('jwttoken',response.data.token)	//Следующая функция создает элемент с данными в хранилище.
			this.setTitleAuth()
			this.refreshUserList();
			this.refreshFileList()

		}) // Получаем json с сервера

},
//_________USER___________________
    addUser(name, login, password) { // связываем с помощью axios удаление на сервере
      axios({
        method: 'post', //метод запроса POST
        url: 'http://localhost:3000/ajax/users/addUser',
        data: { // у Post должен быть data а не params
          name,
          login,
          password,

        }

      }).then(() => { // после удачного выполнения метода выполнится обновление таблицы
        this.refreshUserList()
      })
    },

    deleteUser(id) {
      axios ({
          method: 'post',
          url: 'http://localhost:3000/ajax/users/deleteUser',
          data: { // у GET должен быть params а не data
            id
					}
        })
        .then(() => {
          this.refreshUserList(); // после удачного выполнения метода выполнится обновление таблицы
        })
    },

		changePassword(firstInput,secondInput) {
      axios ({
          method: 'post',
          url: 'http://localhost:3000/ajax/users/changePassword',
					data: { // у GET должен быть params а не data
						newPass: {
		          firstInput,
		          secondInput
					}

	        }
        })
        .then(() => {
          this.refreshUserList(); // после удачного выполнения метода выполнится обновление таблицы
        })
    },

		//______________FILES________________

		addFiles(domain,ip){
			axios ({
					method: 'post',
					url: 'http://localhost:3000/ajax/users/addFiles',
					data: { // у GET должен быть params а не data
						domain,
						ip
					}
				})
				.then(() => {
					this.refreshFileList(); // после удачного выполнения метода выполнится обновление таблицы
				})
		},


		deleteFile(files){
			axios({
				method: 'post',
				url: 'http://localhost:3000/ajax/users/deleteFiles',
				data: { // у GET должен быть params а не data
					files
				}
			})
			.then(() => {
				this.refreshFileList()
			})
		},

		//________________FILTER_____________________

		tableUserSearch(filterInput){
			axios({
				method: 'post',
				url: 'http://localhost:3000/ajax/users/tableUserSearch',
				data: { // у GET должен быть params а не data
					filterInput
				}
			})
			.then(response => (this.userList = response.data.newSearchList))
	},

	tableFilesSearch(filterInput){
		axios({
			method: 'post',
			url: 'http://localhost:3000/ajax/users/tableFilesSearch',
			data: { // у GET должен быть params а не data
				filterInput
			}
		})
		.then(response => (this.filesList = response.data.newSearchList))
},



//_______ОТОБРАЖАЕМ КОМПОНЕНТЫ_________
			showFiles() {
				this.page = 'showFiles'
				console.log('page',this.page)
			},

			showTableUser() {
				this.page = 'showUser'
				console.log('page',this.page)
			}
//_______ОТОБРАЖАЕМ КОМПОНЕНТЫ_________
  }
}
</script>
