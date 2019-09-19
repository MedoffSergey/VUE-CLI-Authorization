<template lang='pug'>
.container
  table.table.mt-3
    thead.thead-light
      tr
        th.text-center(scope='col') Domain name
          img.ml-2(@click = "sortRes='domain'; sortDir='up' " src='../assets/sort-up.svg' width = "15" height="15")
          img(@click = "sortRes='domain'; sortDir='down' " src='../assets/sort-down.svg' width = "15" height="15")
        th.text-center(scope='col') IP
        th.text-center(scope='col') Remove
        tr.text-center(scope='row' v-for='(files,index) in sortTableUp' :key="index")
          td {{ files.domain.toLowerCase() }}
          td {{ files.ip}}
          td
            a(@click='deleteFile(files.domain)' )
              img(src='../assets/remove.svg' width='32' height='32')
</template>

<script>

export default {
  name: "files",
  props: ['filesList', 'deleteFile'], // обьект с App.vue
  data(){
    return {
      sortDir: '',    // ??????????????????????????????????????????
      sortRes: ''
    }
  },

  computed:{    // вычисляемое свойство
    sortTableUp: function() {   //Функция сортировки
      let col = this.sortRes     //переменная хранящая название колонки
      let dir = this.sortDir  //переменная хранящая в себе значение up & down

      return this.filesList.slice().sort(function(a, b) {
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
