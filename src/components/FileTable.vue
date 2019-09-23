<template lang='pug'>
.container
	table.table.table-bordered.mt-3.text-center
		thead.thead-light
			tr
				th.text-center(scope='col') Domain name
					img.ml-2(@click = "sortRes='domain'; sortDir='up' " src='../assets/sort-up.svg' width = "15" height="15")
					img(@click = "sortRes='domain'; sortDir='down' " src='../assets/sort-down.svg' width = "15" height="15")
				th.text-center(width='15%' scope='col') IP
				th.text-center(scope='col'  width='10%' v-if='users.status=="Admin"') Remove
				tr.text-center(scope='row' v-for='(files,index) in sortTableUp' :key="index")
					td.bg-light {{ files.domain.toLowerCase() }}
					td.bg-light {{ files.ip}}
					td.bg-light(v-if='users.status=="Admin"')
						a(@click='deleteFile(files.domain)' )
							img(src='../assets/remove.svg' width='32' height='32')
</template>

<script>
export default {
  name: "files",
  props: ['filesList', 'deleteFile','users'], // обьект с App.vue
  data() {
    return {
      sortDir: '', // ??????????????????????????????????????????
      sortRes: ''
    }
  },

  computed: { // вычисляемое свойство
    sortTableUp: function() { //Функция сортировки
      let col = this.sortRes //переменная хранящая название колонки
      let dir = this.sortDir //переменная хранящая в себе значение up & down

      return this.filesList.slice().sort(function(a, b) {
        let modifier = -1;
        if (dir == 'up') modifier = 1
        if (a[col] > b[col]) return 1 * modifier;
        else if (a[col] < b[col]) return -1 * modifier;
        else return 0;
      })
    }
  }
}
</script>
