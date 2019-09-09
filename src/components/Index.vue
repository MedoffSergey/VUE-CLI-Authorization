<template lang='pug'>
	.container
		b-card.col-4.mx-auto.mt-5.text-success( header="АВТОРИЗАЦИЯ"  bg-variant="light" align="center" )

			b-form-group.text-left.text-dark( label="Логин" label-for="login-input" )
				b-form-input#login-input( v-model='User.login')
			b-form-group.text-left.text-dark( label="Пароль" label-for="password-input"  )
				b-form-input#password-input(type='password' v-model='User.password')
			b-button.mt-5.btn-block(gooter variant="outline-success" @click="userVerification(User.login,User.password)") Войти
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
