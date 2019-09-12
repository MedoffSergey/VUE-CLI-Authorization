<template lang='pug'>
  .container

    b-button.mt-5( variant="success" size='sm' @click="$bvModal.show('bv-modal-example')") Add user

    b-modal#bv-modal-example(ref="my-modal" hide-footer="")
      template(slot="modal-title")
        h4 User Authorization
      .d-block.text-center
        form(ref="form" )
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
  props: ['addUser','token'],

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
