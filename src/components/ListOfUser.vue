<template lang='pug'>
.container


    table.table.mt-3
      thead.thead-light
        tr
          th(scope='col') Id
            img.ml-2(@click = "sortTableUp='id' " src='../assets/sort-up.svg' width = "15" height="15")
            img(@click = "sortTableDown='id' " src='../assets/sort-down.svg' width = "15" height="15")
          th(scope='col') Name
            img.ml-2(@click = "sortTableUp='Name' " src='../assets/sort-up.svg' width = "15" height="15")
            img(@click = "sortTableDown='Name' " src='../assets/sort-down.svg' width = "15" height="15")
          th(scope='col') Login
            img.ml-2(@click = "sortTableUp='Login' " src='../assets/sort-up.svg' width = "15" height="15")
            img(@click = "sortTableDown='Login' " src='../assets/sort-down.svg' width = "15" height="15")
          th(scope='col') Password
          th(scope='col') Remove

      tr(scope='row' v-for='(user, index) in userList' :key='index')
        td {{ user.id }}
        td {{ user.name }}
        td {{ user.login}}
        td {{ user.password}}
        td
          a(@click='removeUser(user.id)')
            img(src='../assets/remove.svg' width='32' height='32')
</template>

<script>


  export default {
    props: ['userList'],
    sortTableUp: '',
    sortTableDown: '',
    data(){
      return {

      }
    },
    computed: {
      up() {
        const sortTableUp = this.sortTableUp
        userList.sort(function(a, b) {
          if (a[sortTableUp] < b[sortTableUp]) return 1;
          else if (a[sortTableUp] > b[sortTableUp]) return -1;
          else return 0;
        })
      },
      down() {
        const sortTableDown = this.sortTableDown
        userList.sort(function(a, b) {
        if (a[sortTableDown] > b[sortTableDown]) return 1;
        else if (a[sortTableDown] < b[sortTableDown]) return -1;
        else return 0;
      })
    }
  },
    methods: {
      removeUser(id) {
        for (let i = 0; i < this.userList.length; i++) {
          if (this.userList[i].id === id) {
            this.userList.splice(i, 1);
          }
        }
      },
    }
  }
</script>
