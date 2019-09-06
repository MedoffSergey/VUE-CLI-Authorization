<template lang='pug'>
  div
    b-navbar.navbar.navbar-expand-lg.navbar-dark.bg-primary.sticky-top(toggleable="lg"  variant="primary")
      b-navbar-brand(href="/")
        img(src="../assets/logo1.svg" width = "140" height="40")
      b-navbar-toggle(target="nav-collapse")
      b-collapse#nav-collapse(is-nav="")
        b-navbar-nav
          b-nav-item(href="#") Главная
          b-nav-item(href="#" ) Контакты
          b-nav-item(href="#" ) О нас
        // Right aligned nav items
        b-navbar-nav.ml-auto
          b-nav-form
            b-form-input.mr-sm-2(size="sm" placeholder="Search" )
            b-button.my-2.my-sm-0(size="sm" type="submit" variant="info") Поиск
            //-
            //- b-button.m-2(variant="success" size='sm' v-b-modal.modal-1="") Вход

            //- b-modal#modal-1(ref="my-modal" title="Authorization"   )
            //-   form(ref="form" @submit.stop.prevent="handleSubmit")
            //-     b-form-group( label="Name" label-for="name-input" )
            //-       b-form-input#name-input( v-model='User.name' )
            //-     b-form-group( label="Password" label-for="name-input" )
            //-       b-form-input#name-input( v-model='User.password'  )




            b-button#show-btn.m-2(variant="success" size='sm' @click="$bvModal.show('bv-modal-example')") Вход

            b-modal#bv-modal-example(ref="my-modal" hide-footer="")
              template(slot="modal-title")
                h4 User Authorization
              .d-block.text-center
                form(ref="form" )
                    b-form-group( label="Name" label-for="name-input" )
                      b-form-input#name-input( v-model='User.name' )
                    b-form-group( label="Password" label-for="password-input" )
                      b-form-input#name-input( v-model='User.password'  )

                    b-button.mt-2(variant="outline-success" block="" @click="updateField") Войти
                    b-button.mt-2(variant="outline-danger" block="" @click="hideModal") Отмена




    h1 Logins&&password
    h1 {{User.name}}
    h1 {{User.password}}
</template>



<script>
export default {
  props: ['addUser'],

  data(){
    return {
      User: {
        name: '',
        password: ''
      }
    }
  },

  methods: {
    updateField() {
      

        this.User.name="";
        this.User.password="";
        console.log(1)
    },

    hideModal() { //кнопка закрытия модельного окна
    this.$refs['my-modal'].hide()
    }
  }
}
</script>
