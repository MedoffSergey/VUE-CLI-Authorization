<template lang='pug'>
div.text-center
	b-button( variant="success" size='sm' @click="$bvModal.show('bv-modal-example1')") Add Files

	b-modal#bv-modal-example1(size='sm' ref="my-modal" hide-footer="" header-bg-variant='primary' body-bg-variant='light')
		template(slot="modal-title")
			h4.text-light Package manager
		.d-block.text-right
			form(ref="form" )
				b-form-group.text-left( label="Domain" )
					b-form-input#Domain( v-model.trim='newFile.domain')
				b-form-group.text-left( label="IP" )
					b-form-input#IP(type='text' v-model.trim='newFile.ip')


				b-button.mx-2(@click="addNewFiles(); $bvModal.hide('bv-modal-example1')"  size="sm" variant="outline-success") Add
</template>

<script>
export default {
  name: "NewFileForm",
  props: ['addFiles'],

  data() {
    return {
      newFile: {
        domain: '',
        ip: ''
      }
    }
  },
  methods: {
    addNewFiles() {
      this.addFiles(this.newFile.domain, this.newFile.ip)

      this.newFile.domain = "";
      this.newFile.ip = "";

    }
  }

}
</script>
