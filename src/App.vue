<template lang='pug'>
.container
    .row
      .col-md-4
      .box.border.rounded.col-md-3.mt-3
        p.text-center.mt-3
          label Name :
          input(type='text' v-model='newUser.name')
        p.text-center
          label Login :
          input(type='text' v-model='newUser.login')
        p.text-center
          label Password :
          input(type='password' v-model='newUser.password')
        p.text-center
          a(@:click='addNewUser()')
            img(src='./assets/add.svg' width='40' height='40')
    <ListOfUser :userList=userList />
</template>

<script>
import ListOfUser from './components/ListOfUser.vue'

  export default {
    name: 'HelloWorld',

    components:{
      ListOfUser
    },

    data(){
      return {
        userList: [
          { id: 1, name: 'Admin', login: 'Admin', password:"qwe"},
          { id: 2, name: 'Igor', login: 'Amstel', password:"123"},
          { id: 3, name: 'Serega', login: 'MRG_Serejka', password:"12345"},
          { id: 4, name: 'Artur', login: 'Archi', password:"qwerty"},
          { id: 5, name: 'Elsa', login: 'Els@', password:"AdG4Q1q7"},
          { id: 6, name: 'Sanek', login: 'MRG_Sanek', password:"Sanekkk"},
          { id: 7, name: 'Serega', login: 'GREY', password:"3145Wqq1"},
          { id: 8, name: 'Irina', login: 'Beller', password:"qwerty"},
          { id: 9, name: 'Admin', login: 'Admin', password:"qwe"},
          { id: 10, name: 'Igor', login: 'Amstel', password:"123"},
          { id: 11, name: 'Serega', login: 'MRG_Serejka', password:"12345"},
          { id: 12, name: 'Artur', login: 'Archi', password:"qwerty"},
          { id: 13, name: 'Elsa', login: 'Els@', password:"AdG4Q1q7"},
          { id: 14, name: 'Sanek', login: 'MRG_Sanek', password:"Sanekkk"},
          { id: 15, name: 'Serega', login: 'GREY', password:"3145Wqq1"},
          { id: 16, name: 'Irina', login: 'Beller', password:"qwerty"}
        ],
        newUser: {
          name: '',
          login: '',
          password: ''
        }

      }
    },
    methods: {
      addNewUser() {

        this.userList.push({
          id: this.userList.length + 1,
          name: this.newUser.name,
          login: this.newUser.login,
          password: this.newUser.password,
        });
        this.newUser.name="";
        this.newUser.login="";
        this.newUser.password="";
      }
    }
  }
</script>
