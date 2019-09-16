<template lang='pug'>
.container
	b-button.mt-5( variant="success" size='sm' @click="$bvModal.show('bv-modal-example1')") Add Files

	b-modal#bv-modal-example1(ref="my-modal" hide-footer="")
		template(slot="modal-title")
			h4 Package manager
		.d-block.text-center
			form(ref="form" )
				b-form-group.text-left.text-dark( label="Domain" )
					b-form-input#Domain( v-model='newFile.domain')
				b-form-group.text-left.text-dark( label="IP" )
					b-form-input#IP(type='text' v-model='newFile.ip')


				b-button.mt-5.btn-block(@click='addNewFiles' variant="outline-success") Add
</template>

<script>
export default {
  name: "modal_files",
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
