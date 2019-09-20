<template lang='pug'>
.container
  table.table.table-bordered.mt-3.text-center
    thead.thead-light
      tr
        th(scope='col' width='10%') Id
          img.ml-2(@click = "sortResult='id'; sortDirection='up' " src='../assets/sort-up.svg' width = "15" height="15")
          img(@click = "sortResult='id'; sortDirection='down' " src='../assets/sort-down.svg' width = "15" height="15")
        th(scope='col') Name
          img.ml-2(@click = "sortResult='name'; sortDirection='up' " src='../assets/sort-up.svg' width = "15" height="15")
          img(@click = "sortResult='name'; sortDirection='down' " src='../assets/sort-down.svg' width = "15" height="15")
        th(scope='col') Login
          img.ml-2(@click = "sortResult='login'; sortDirection='up'"  src='../assets/sort-up.svg' width = "15" height="15")
          img(@click = "sortResult='login'; sortDirection='down'" src='../assets/sort-down.svg' width = "15" height="15")
        th(scope='col') Password
        th(scope='col' width='10%') Remove

    tr(scope='row' v-for='(user, index) in sortTableUp' :key='index')
      td.bg-light {{ user.id }}
      td.bg-light {{ user.name }}
      td.bg-light {{ user.login}}
      td.bg-light {{ user.password}}
      td.bg-light
        a(@click='deleteUser(user.id)' )
          img(src='../assets/remove.svg' width='32' height='32')
</template>


<script>

  export default {
    props: ['userList','deleteUser'],  // массив с App.vue

    data(){
      return {
        sortDirection: '',    // ??????????????????????????????????????????
        sortResult: ''
      }
    },

    computed:{    // вычисляемое свойство
      sortTableUp: function() {   //Функция сортировки
        let col = this.sortResult     //переменная хранящая название колонки
        let dir = this.sortDirection  //переменная хранящая в себе значение up & down


        return this.userList.slice().sort(function(a, b) {
          let modifier = -1;
          if(dir=='up') modifier = 1
          if (a[col] > b[col]) return 1*modifier;
          else if (a[col] < b[col]) return -1*modifier;
          else return 0;
        })
    }
  }
}

</script>
