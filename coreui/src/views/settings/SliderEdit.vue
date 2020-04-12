<template>
  <div>
    <CCol xs="12" lg="12">
     <CCard>
        <CCardBody>
          <form @submit.prevent="changeSlider" enctype="multipart/form-data">
            <CTabs>
                <CTab v-for="slider in sliders" :title="slider.name">
                    <SliderItem v-bind:item="slider" v-bind:key="slider.id"></SliderItem>
                </CTab>
            </CTabs>
            <button class="btn btn-primary">Create</button>
            </form>
        </CCardBody>
    </CCard>
    </CCol>
  </div>
</template>

<script>
import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
Vue.use(VueToast);

import SliderItem from './SliderItem'
import axios from 'axios'

export default {
  name: 'SliderEdit',
  components: {
      SliderItem,
  },
  data () {
    return {
        sliders: [],
    }
  },
  methods: {
      changeSlider(){
        let uri = '/api/sliders/update';
        axios.post(uri, {sliders: this.sliders}).then((response) => {
          if (response.status == 200) {
            Vue.$toast.open({
                message: response.data,
                type: 'success',
                position: 'top-right',
            });
          } else {
            Vue.$toast.open({
                message: 'Error happend',
                type: 'error',
                position: 'top-right',
            });
          }
        });
      }
    },
    created(){
      let uri = '/api/sliders/get';
      axios.get(uri).then(response => {
        this.sliders = response.data;
      });
    }
}
</script>
