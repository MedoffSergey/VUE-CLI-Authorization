<template lang='pug'>
  .div.text-center
    b-button(v-if='users.status=="Admin"' variant="success" size='sm' @click="$bvModal.show('bv-modal-example')") Add user

    b-modal#bv-modal-example(ref="my-modal" size="sm" header-bg-variant='primary' body-bg-variant='light' hide-footer="")
      template(slot="modal-title")
        h4.text-light.float-right User Authorization
      .d-block.text-right
        form(ref="form" )
            b-form-group.text-left.text-dark( label="Name" )
              b-form-input#Name( v-model.trim='newUserName')
            b-form-group.text-left.text-dark( label="Login" )
              b-form-input#Login(type='text' v-model.trim='newUserLogin')
            b-form-group.text-left.text-dark( label="Password" )
              b-form-input#Password(type='password' v-model.trim='newUserPassword')
            div.float-left
              b-form-checkbox(v-model="newUser.status" name="check-button" switch="")
                | Admin
            b-alert(v-model="showDismissibleAlert" variant="danger" dismissible="")
              div {{errorServerMessage}}
            b-button.mx-2(@click="addNewUser()" size="sm"  variant="outline-success") Add
</template>

<script>
export default {
  props: ['addUser','token','users','errorServerMessage'],
  data(){
    return {
      newUser: {
        name: '',
        login: '',
        password: '',
        status: ''
      },
      showDismissibleAlert: false,
    }
  },
  computed: {
  newUserName: {
    get() {
      return this.newUser.name;
    },
    set(value) {
      this.showDismissibleAlert = false;
      this.newUser.name = value;
    }
  },
  newUserLogin: {
    get() {
      return this.newUser.login;
    },
    set(value) {
      this.showDismissibleAlert = false;
      this.newUser.login = value;
    }
  },
  newUserPassword: {
    get() {
      return this.newUser.password;
    },
    set(value) {
      this.showDismissibleAlert = false;
      this.newUser.password = value;
    }
  },

},
  methods: {
    addNewUser() {
      this.addUser(this.newUser.status,this.newUser.name, this.newUser.login, this.newUser.password)
      .then(() => {
        this.showDismissibleAlert = true;
        this.newUser.status ="",
        this.newUser.name="";
        this.newUser.login="";
        this.newUser.password="";
      })

        //this.$bvModal.hide('bv-modal-example')

  },

  }
}
</script>
