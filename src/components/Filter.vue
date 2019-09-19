<template lang='pug'>
  div.text-center
    b-button.my-3( variant="success" size='sm' @click="$bvModal.show('bv-modal-example2')") Filter++

    b-modal#bv-modal-example2( size="sm" ref="my-modal1" hide-footer="" header-bg-variant='secondary' body-bg-variant='light')
      template(slot="modal-title")
        h4.text-light Filter string
      .d-block.text-right
        form(ref="form" size="sm")
          b-form-group
            b-form-input(placeholder= "Search Blog" v-model.trim='filterInput')
          b-button.mx-2(@click="tableSearch(filterInput)" size="sm" variant="outline-success") To find
          b-button(variant="outline-danger" size="sm" @click="$bvModal.hide('bv-modal-example2')") Close Me
</template>

<script>
export default {
  props: ['page','tableUserSearch','tableFilesSearch'],
  data() {
    return {
      filterInput:''
    }
  },
  methods: {
    tableSearch() {
      if(this.page=="showUser"){
        this.tableUserSearch(this.filterInput)
      }
      if(this.page=="showFiles"){
        this.tableFilesSearch(this.filterInput)
      }
      this.filterInput = ''
    }
  }
}


</script>
