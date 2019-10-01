<template lang='pug'>
.div.text-center.d-flex.justify-content-center
	div.mt-5.w-25
		b-card.text-light( header="АВТОРИЗАЦИЯ"  header-bg-variant='success' body-bg-variant='light' )
			template(v-slot:header)
				div
					img.float-left(src="../assets/lock.svg" width='25' height='25' style="display:inline-block" )
					| АВТОРИЗАЦИЯ

			b-form-group.text-left.text-dark( label="Логин" label-for="login-input" )
				b-form-input#login-input( v-model.trim='userLogin')
			b-form-group.text-left.text-dark( label="Пароль" label-for="password-input"  )
				b-form-input#password-input( type = 'password' v-model='userPassword')
			b-card-footer.mt-4.m-auto
			b-alert(v-model="showDismissibleAlert" variant="danger" dismissible="")
				div {{message}}

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
      },
      showDismissibleAlert: false,
    }
  },
  computed: {
    userPassword: {
      get() {
        return this.User.password;
      },
      set(value) {
        this.showDismissibleAlert = false;
        this.User.password = value;

      }
    },
		userLogin: {
			get() {
				return this.User.login;
			},
			set(value) {
				this.showDismissibleAlert = false;
				this.User.login = value;
			}
		}
  },
  methods: {
    userVerification() {
			let funcRes = this.authUser(this.User.login, this.User.password)
      if (funcRes == undefined) {
        this.showDismissibleAlert = true;
      }
      this.User.login = "";
      this.User.password = "";

    }
  }
}
</script>
