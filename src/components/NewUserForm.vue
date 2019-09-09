<template lang='pug'>
  .container
    b-card.col-4.mx-auto.my-5.text-success( header="Add new user" bg-variant="light" align="center" )
      b-form-group.text-left.text-dark( label="Name" )
        b-form-input#Name( v-model='newUser.name')

      b-form-group.text-left.text-dark( label="Login" )
        b-form-input#Login(type='text' v-model='newUser.login')

      b-form-group.text-left.text-dark( label="Password" )
        b-form-input#Password(type='password' v-model='newUser.password')
      b-button.mt-5.btn-block(@click='addNewUser' variant="outline-success") Add
</template>

<script>
export default {
  props: ['addUser'],

  data(){
    return {
      newUser: {
        name: '',
        login: '',
        password: ''
      }
    }
  },

  methods: {
    addNewUser() {
      this.addUser(this.newUser.name, this.newUser.login, this.newUser.password)

        this.newUser.name="";
        this.newUser.login="";
        this.newUser.password="";
    }
  }
}
</script>
