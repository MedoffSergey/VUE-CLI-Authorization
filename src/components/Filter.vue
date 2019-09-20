<template lang='pug'>
div.text-center
	b-button.mx-2( variant="success" size='sm' @click="$bvModal.show('bv-modal-example2')") Filter++
	b-button( variant="success" size='sm' @click="tableSearch(filterInput)") Source table
	b-modal#bv-modal-example2( size="sm" ref="my-modal1" hide-footer="" header-bg-variant='primary' body-bg-variant='light')
		template(slot="modal-title")
			h4.text-light Filter string
		.d-block.text-right
			form(ref="form" size="sm")
				b-form-group
					b-form-input(input-bg-variant='primary' v-model.trim='filterInput')
				b-button.mx-2(@click="tableSearch(filterInput); $bvModal.hide('bv-modal-example2')" size="sm" variant="outline-success") To find
</template>

<script>
export default {
  props: ['page', 'tableUserSearch', 'tableFilesSearch'],
  data() {
    return {
      filterInput: ''
    }
  },
  methods: {
    tableSearch() {
      if (this.page == "showUser") {
        this.tableUserSearch(this.filterInput)

      }
      if (this.page == "showFiles") {
        this.tableFilesSearch(this.filterInput)
      }
      this.filterInput = ''
    }
  }
}
</script>
