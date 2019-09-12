<template lang='pug'>
  div
    b-navbar.navbar.navbar-expand-lg.navbar-dark.bg-primary.sticky-top(toggleable="lg"  variant="primary")
      b-navbar-brand(href="/")
        img(src="../../assets/logo1.svg" width = "140" height="40")
      b-navbar-toggle(target="nav-collapse")
      b-collapse#nav-collapse(is-nav="")
        b-navbar-nav.h5
          b-nav-item(href="#") Таблица
          b-nav-item(href="#" ) Файлы

        // Right aligned nav items
        b-navbar-nav.ml-auto
          //- h5 {{this.user.login}}
</template>


<script>
  export default {
    props: ['user'],  // массив с App.vue

    }
</script>
