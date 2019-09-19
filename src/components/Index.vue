<template lang='pug'>
	.container.text-center

		b-card.mt-5.w-25.mx-auto.text-light( header="АВТОРИЗАЦИЯ"  header-bg-variant='success' body-bg-variant='light' )
			//- img.card-img(src="../assets/lock.svg" width='30' height='30' )
			img.card-img-top(src="../assets/lock.svg" width='30' height='30')
			b-form-group.text-left.text-dark( label="Логин" label-for="login-input" )
				b-form-input#login-input( v-model.trim='User.login')
			b-form-group.text-left.text-dark( label="Пароль" label-for="password-input"  )
				b-form-input#password-input(type='password' v-model.trim='User.password')
			b-card-footer.mt-4
			b-button.btn-block(type="submit" variant="outline-success" @click="userVerification(User.login,User.password)") Войти
</template>

<script>
export default {
  props: ['authUser'],

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
