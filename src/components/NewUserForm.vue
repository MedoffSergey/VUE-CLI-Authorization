<template lang='pug'>
.container
  .row.justify-content-center.text-center
    .card.col-4.my-2
      .card-body
        form
          .form-group
            h4.text-left.text-success Add new user
            label.col-form-label Name
            input.form-control(type='text' v-model='newUser.name')

            label.col-form-label Login
            input.form-control(type='text' v-model='newUser.login')

            label.col-form-label Password
            input.form-control(type='password' v-model='newUser.password')

          img(@click='addNewUser' src='../assets/add.svg' width='40' height='40')
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
