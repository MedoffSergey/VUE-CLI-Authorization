<template lang='pug'>
	.div.text-center.d-flex.justify-content-center
		div.mt-5
			div {{message}}
			b-card.text-light(header="АВТОРИЗАЦИЯ"  header-bg-variant='success' body-bg-variant='light' )
				template(v-slot:header)
					div
						img.float-left(src="../assets/lock.svg" width='25' height='25' style="display:inline-block" )
						| АВТОРИЗАЦИЯ

				b-form-group.text-left.text-dark( label="Логин" label-for="login-input" )
					b-form-input#login-input( v-model.trim='User.login')
				b-form-group.text-left.text-dark( label="Пароль" label-for="password-input"  )
					b-form-input#password-input(type='password' v-model.trim='User.password')
				b-card-footer.mt-4
				b-button.btn-block(type="submit" variant="outline-success" @click="userVerification(User.login,User.password)") Войти
</template>

<script>
export default {
  props: ['authUser','message'],

  data() {
    return {
      User: {
        login: '',
        password: '',
				token: ''
      }
    }
  },

  methods: {
    userVerification() {
      this.authUser(this.User.login, this.User.password)

      this.User.login = "";
      this.User.password = "";
    }
  }
}
</script>
