<template lang='pug'>
div
	.container
		b-card.col-4.text-center.mx-auto.mt-5(bg-variant="light")
			b-form-group( label="Login" label-for="login-input" )
				b-form-input#login-input( v-model='User.login')
			b-form-group( label="Password" label-for="password-input"  )
				b-form-input#password-input(type='password' v-model='User.password')

			b-button.mx-2(variant="outline-success" @click="userVerification(User.login,User.password)") Войти


</template>

<script>
export default {
  props: ['updateField'],

  data() {
    return {
      User: {
        login: '',
        password: ''
      }
    }
  },

  methods: {
    userVerification() {
      this.updateField(this.User.login, this.User.password)

      this.User.login = "";
      this.User.password = "";

    }
  }
}
</script>
