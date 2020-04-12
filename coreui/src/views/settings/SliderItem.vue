<template>
  <CCard>
    <CRow>
      <CCol xs="12" lg="6">
        <div
          class="base-image-input"
          :style="{ 'background-image': `url(${imageData})` }"
          @click="chooseImage"
        >
          <span
            v-if="!imageData"
            class="placeholder"
          >
            Choose an Image
          </span>
          <input
            class="file-input"
            ref="fileInput"
            type="file"
            @input="onSelectFile"
          >
        </div>
      </CCol>
      <CCol xs="12" lg="6">
          <label> slider name </label>
          <input type="text" v-model="item.name">
          
          <label> Layer 1 text </label>
          <input type="text" v-model="item.layer1">
          <label> Layer 2 text </label>
          <input type="text" v-model="item.layer2">
          <label> Layer 3 text </label>
          <input type="text" v-model="item.layer3">
          <label> Layer 4 text </label>
          <input type="text" v-model="item.layer4">
          <label> Layer 5 text </label>
          <input type="text" v-model="item.layer5">
      </CCol>
    </CRow>
  </CCard>
</template>

<script>
import Cropper from 'cropperjs'
import axios from 'axios'

export default {
  name: 'SliderItem',
  props: ['item'],
  components: {
  },
  data () {
    return {
      imageData: null,
    }
  },
  methods: {
    chooseImage () {
      this.$refs.fileInput.click()
    },
    onSelectFile () {
      const input = this.$refs.fileInput
      const files = input.files
      if (files && files[0]) {
        const reader = new FileReader
        reader.onload = e => {
          this.imageData = e.target.result
        }
        
        // this.item.imageData = e.target.files[0]
        reader.readAsDataURL(files[0]);
        this.$emit('input', files[0]);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

        let formData = new FormData();
        formData.append('image', files[0]);
        formData.append('item', this.item.id);

        axios.post('/api/sliders/uploadImage', formData, config)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(response);
        });


      }
    }
  },
  mounted(){

  }

}
</script>
<style scoped>
.base-image-input {
  display: block;
  width: 480px;
  height: 270px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
}
.placeholder {
  background: #F0F0F0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 18px;
  font-family: Helvetica;
}
.placeholder:hover {
  background: #E0E0E0;
}
.file-input {
  display: none;
}
</style>