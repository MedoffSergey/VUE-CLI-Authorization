<template lang='pug'>
div
	b-navbar.navbar.navbar-expand-lg.navbar-dark.bg-primary.sticky-top(toggleable="lg"  variant="primary")
		b-navbar-brand(href="/")
			img(src="../../assets/logo1.svg" width = "140" height="40")
		b-navbar-toggle(target="nav-collapse")
		b-collapse#nav-collapse(is-nav="")
			b-navbar-nav.h5
				b-nav-item(href="#"  @click='showTableUser') Users
				b-nav-item(href="#" @click='showFiles') Files

			// Right aligned nav items
			b-navbar-nav.ml-auto


			h5.text-light.m-2(v-if = "user") {{user.login}}
			div
				b-button-group()
					b-dropdown(variant="success" size='sm' right="" text="")(v-if = "user")
						b-dropdown-item Login: {{user.login}}
						b-dropdown-item User ID: {{user.id}}
						b-dropdown-divider
						b-dropdown-item(@click='exitUser') Logout
</template>


<script>
export default {
  props: ['user', 'exitUser', 'showTableUser', 'showFiles'], // обьект с App.vue

}
</script>
