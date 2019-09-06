<template lang='pug'>
.container
  table.table.mt-3
    thead.thead-light
      tr
        th(scope='col') Id
          img.ml-2(@click = "sortResult='id'; sortDirection='up' " src='../assets/sort-up.svg' width = "15" height="15")
          img(@click = "sortResult='id'; sortDirection='down' " src='../assets/sort-down.svg' width = "15" height="15")
        th(scope='col') Name
          img.ml-2(@click = "sortResult='name'; sortDirection='up' " src='../assets/sort-up.svg' width = "15" height="15")
          img(@click = "sortResult='name'; sortDirection='down' " src='../assets/sort-down.svg' width = "15" height="15")
        th(scope='col') Login
          img.ml-2(@click = "sortResult='login'; sortDirection='up'"  src='../assets/sort-up.svg' width = "15" height="15")
          img(@click = "sortResult='login'; sortDirection='down'" src='../assets/sort-down.svg' width = "15" height="15")
        th(scope='col') Password
        th(scope='col') Remove

    tr(scope='row' v-for='(user, index) in sortTableUp' :key='index')
      td {{ user.id }}
      td {{ user.name }}
      td {{ user.login}}
      td {{ user.password}}
      td
        a(@click='deleteUser(user.id)' )
          img(src='../assets/remove.svg' width='32' height='32')
</template>


<script>

  export default {
    props: ['userList','deleteUser'],  // массив с App.vue

    data(){
      return {
        sortDirection: '',    // ??????????????????????????????????????????
        sortResult: '',

      }
    },

    computed:{    // вычисляемое свойство
      sortTableUp: function() {   //Функция сортировки
        let col = this.sortResult     //переменная хранящая название колонки
        let dir = this.sortDirection  //переменная хранящая в себе значение up & down     // ??????????????????????????????????????????


        return this.userList.slice().sort(function(a, b) {
          let modifier = -1;                  // ??????????????????????????????????????????
          if(dir=='up') modifier = 1
          if (a[col] > b[col]) return 1*modifier;
          else if (a[col] < b[col]) return -1*modifier;
          else return 0;
        })
    }
},

    methods: {
      deleteUser(id) {    //функция удаления пользователей
        return 1;
      }
    }
  }

</script>
