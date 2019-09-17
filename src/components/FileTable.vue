<template lang='pug'>
  .container
    table.table.mt-3
      thead.thead-light
        tr
          th.text-center(scope='col') Domain name
          th.text-center(scope='col') IP
          th.text-center(scope='col') Remove
          tr.text-center(scope='row' v-for='(files,index) in filesList' :key="index")
            td {{ files }}
            td {{ ip[index]}}
            td
              a(@click='deleteFile(files)' )
                img(src='../assets/remove.svg' width='32' height='32')
      div
</template>

<script>
    export default {

        name: "files",
        props: ['filesList','deleteFile','ip'],  // обьект с App.vue
  }
</script>
