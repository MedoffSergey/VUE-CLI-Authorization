<template lang='pug'>
  div.text-center
  	b-button.my-3( variant="success" size='sm' @click="$bvModal.show('bv-modal-example2')") Filter++

  	b-modal#bv-modal-example2( size="sm" ref="my-modal1" hide-footer="")
  		template(slot="modal-title")
  			h4 Search
  		.d-block.text-right
  			form(ref="form" size="sm")
  				b-form-group
  					b-form-input(placeholder= "Search Blog" v-model.trim='filterInput')
  				b-button(@click="tableSearch" variant="outline-success") To find
</template>

<script>
export default {
  data() {
    return {
      filterInput:''
    }
  },
  methods: {
    tableSearch() {

    }
  }
}

</script>
