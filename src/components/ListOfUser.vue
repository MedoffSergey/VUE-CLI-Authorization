<template lang='pug'>
.container-fluid
  table.table.table-bordered.mt-3.text-center
    thead.thead-light
      tr
        th(scope='col' width='5%') Id
          img.ml-2(@click = "sortResult='id'; sortDirection='up' " src='../assets/sort-up.svg' width = "15" height="15")
          img(@click = "sortResult='id'; sortDirection='down' " src='../assets/sort-down.svg' width = "15" height="15")
        th(scope='col' width='5%') Status
        th(scope='col') Name
          img.ml-2(@click = "sortResult='name'; sortDirection='up' " src='../assets/sort-up.svg' width = "15" height="15")
          img(@click = "sortResult='name'; sortDirection='down' " src='../assets/sort-down.svg' width = "15" height="15")
        th(scope='col') Login
          img.ml-2(@click = "sortResult='login'; sortDirection='up'"  src='../assets/sort-up.svg' width = "15" height="15")
          img(@click = "sortResult='login'; sortDirection='down'" src='../assets/sort-down.svg' width = "15" height="15")

          th(scope='col' v-if='users.status=="Admin"') Password
          th(scope='col' v-if='users.status=="Admin"') Salt
          th(scope='col' width='10%' v-if='users.status=="Admin"') Сhange Password
          th(scope='col' width='5%' v-if='users.status=="Admin"') Remove

    tr(scope='row' v-for='(user, index) in sortTableUp' :key='index')
      td.bg-light {{ user.id }}
      td.bg-light {{ user.status }}
      td.bg-light {{ user.name }}
      td.bg-light {{ user.login}}

      td.bg-light(v-if='users.status=="Admin"') {{ user.password}}
      td.bg-light(v-if='users.status=="Admin"') {{ user.salt}}
      td.bg-light(v-if='users.status=="Admin"')
        b-button( pill variant="outline-info" size='sm' @click="showModalWindow(user.id)") Change
      td.bg-light(v-if='users.status=="Admin"')
        a(@click='deleteUser(user.id)' )
          img(src='../assets/remove.svg' width='32' height='32')


  b-modal#bv-modal-example3(v-model="changeModalShow" size='sm' ref="my-modal" hide-footer="" header-bg-variant='primary' body-bg-variant='light')
    template(slot="modal-title")
      h4.text-light Change Password
    .d-block.text-right
      form(ref="form" )
        b-form-group.text-left( label="New Password" )
          b-form-input( v-model.trim='newPass.firstInput')
        b-form-group.text-left( label="Confirm the password" )
          b-form-input(type='text' v-model.trim='newPass.secondInput')
        b-button.mx-2(@click="changePasswordBtn(userId);$bvModal.hide('bv-modal-example3')"  size="sm" variant="outline-success") Apply
</template>


<script>

  export default {
    props: ['userList','deleteUser','changePassword', 'users'],  // массив с App.vue

    data(){
      return {
        sortDirection: '',    // ??????????????????????????????????????????
        sortResult: '',
        newPass: {
          firstInput: '',
          secondInput: '',
        },
        userId: '',
        changeModalShow:false,
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
  },
  methods: {
    changePasswordBtn() {
      this.changePassword(this.newPass.firstInput, this.newPass.secondInput,this.userId)
      console.log(this.userId)
      this.userId = "";
      this.newPass.firstInput = "";
      this.newPass.secondInput = "";
    },
    showModalWindow(id) {
      this.changeModalShow = true
      this.userId = id
    }
  }
}

</script>
