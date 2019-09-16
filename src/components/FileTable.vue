<template lang='pug'>
  .container
    table.table.mt-3
      thead.thead-light
        tr
          th(scope='col') File name
          th(scope='col') Remove
          tr(scope='row' v-for='(files, index) in filesList' :key="index")
            td {{ files }}
            td
              a(@click='deleteFile(files)'  :data-index="files" )
                img(src='../assets/remove.svg' width='32' height='32')
      div
</template>

<script>
    export default {
        name: "files",
        props: ['filesList','deleteFile'],  // обьект с App.vue
  }
</script>
