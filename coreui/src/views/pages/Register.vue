<template>
  <div class="d-flex align-items-center min-vh-100">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
                <!-- <h1>Register</h1>
                <p class="text-muted">Create your account</p> -->
              <CTabs add-tab-classes="mt-1">
              <CTab>
                <template slot="title">
                  <CIcon name="cil-calculator"/> Customer
                </template>
                <CForm @submit.prevent="register_customer" method="POST">
                  <CRow
                    class="form-group"
                  >
                    <CCol :col="6">
                      <CInput
                        placeholder="First Name"
                        prependHtml="<i class='cui-user'></i>"
                        autocomplete="first_name"
                        v-model="first_name"
                        class="mb-0"
                      >
                        <template #prepend-content><CIcon name="cil-user"/></template>
                      </CInput>
                    </CCol>
                    <CCol :col="6">
                      <CInput
                        placeholder="Last Name"
                        prependHtml="<i class='cui-user'></i>"
                        autocomplete="last_name"
                        v-model="last_name"
                        class="mb-0"
                      >
                        <template #prepend-content><CIcon name="cil-user"/></template>
                      </CInput>
                    </CCol>
                  </CRow>

                  <CInput
                    placeholder="Email"
                    prepend="@"
                    autocomplete="email"
                    v-model="email"
                  />
                  <CInput
                    placeholder="Password"
                    type="password"
                    prependHtml="<i class='cui-lock-locked'></i>"
                    autocomplete="new-password"
                    v-model="password"
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CInput
                    placeholder="Repeat password"
                    type="password"
                    prependHtml="<i class='cui-lock-locked'></i>"
                    autocomplete="new-password"
                    class="mb-4"
                    v-model="password_confirmation"
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CCol sm="12" >
                    <label class="mb-4" for="agree_term"><input id="agree_term" type="checkbox" value="agree_term" v-model="agree_term"/>
                    I agree terms of service
                    </label>
                  </CCol>
                  <CCol sm="12" class="mb-4">
                    <vue-recaptcha 
                    ref="recaptcha"
                    @verify="onCaptchaVerified"
                    @expired="onCaptchaExpired"
                    :sitekey="recaptchaKey"
                    :loadRecaptchaScript="true">
                    </vue-recaptcha>
                  </CCol>
                  <CButton type="submit" color="success" block 
                  :disabled="!agree_term" v-if="recaptchaToken != ''"
                   >Create Account</CButton>
                </CForm>
              </CTab>              
              <CTab>
                <template slot="title">
                  <CIcon name="cil-calculator"/> Technique/Shop
                </template>
                <CForm @submit.prevent="register_technique" method="POST">

                  <CRow
                    class="form-group"
                  >
                    <CCol :col="6">
                      <CInput
                        placeholder="First Name"
                        prependHtml="<i class='cui-user'></i>"
                        autocomplete="first_name"
                        v-model="first_name"
                        class="mb-0"
                      >
                        <template #prepend-content><CIcon name="cil-user"/></template>
                      </CInput>
                    </CCol>
                    <CCol :col="6">
                      <CInput
                        placeholder="Last Name"
                        prependHtml="<i class='cui-user'></i>"
                        autocomplete="last_name"
                        v-model="last_name"
                        class="mb-0"
                      >
                        <template #prepend-content><CIcon name="cil-user"/></template>
                      </CInput>
                    </CCol>
                  </CRow>
                  <CInput
                    placeholder="Driver License/Tax id"
                    prependHtml="<i class='cui-lock-locked'></i>"
                    autocomplete="license"
                    v-model="license"
                  >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  
                  <div role="group" class="form-group form-row">
                    <div class="col-sm-12">
                    <textarea v-model="description" placeholder="Description..." rows="4" class="form-control">
                    </textarea>
                    </div>
                  </div>
                  <div role="group" class="form-group">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" class="c-icon"><path d="M19.294 16.109l-3.414-2.219 1.287-2.359c0.288-0.519 0.457-1.137 0.458-1.796v-3.735c0-2.9-2.351-5.25-5.25-5.25s-5.25 2.351-5.25 5.25v0 3.735c0.001 0.658 0.17 1.277 0.468 1.815l-0.010-0.019 1.287 2.359-3.414 2.219c-1.033 0.676-1.706 1.828-1.706 3.137 0 0.002 0 0.005 0 0.007v-0 3.997h17.25v-3.997c0-0.002 0-0.005 0-0.007 0-1.309-0.673-2.461-1.692-3.128l-0.014-0.009zM19.5 21.75h-14.25v-2.497c0-0.001 0-0.003 0-0.004 0-0.785 0.404-1.477 1.015-1.877l0.009-0.005 4.578-2.976-1.952-3.578c-0.173-0.311-0.274-0.682-0.275-1.077v-3.735c0-2.071 1.679-3.75 3.75-3.75s3.75 1.679 3.75 3.75v0 3.735c-0 0.395-0.102 0.766-0.281 1.089l0.006-0.012-1.952 3.579 4.578 2.976c0.62 0.406 1.024 1.097 1.024 1.882 0 0.001 0 0.003 0 0.004v-0z"></path>
                          </svg>
                        </span>
                      </div>
                      <input id="uid-32jid8to6cl" 
                      type="text" 
                      placeholder="Phone Number" 
                      autocomplete="phone" 
                      class="form-control"
                      v-model="phone"
                      v-mask="'999-999-9999'" 
                      >
                    </div>
                  </div>
                  <div role="group" class="form-group form-row">
                    <div class="col-sm-12"><!---->
                      <select v-model="service_type" id="service_type" class="form-control">
                        <option :value="null" disabled hidden > Please select Service Type</option>
                        <option v-for="item in services" :value="item.value" v-bind:key="item.value">{{item.text}}</option>
                      </select>
                    </div>
                  </div>
                  
                  <CInput
                    placeholder="Email"
                    prepend="@"
                    autocomplete="email"
                    v-model="email"
                  />
                  <CInput
                    placeholder="Password"
                    type="password"
                    prependHtml="<i class='cui-lock-locked'></i>"
                    autocomplete="new-password"
                    v-model="password"
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CInput
                    placeholder="Repeat password"
                    type="password"
                    prependHtml="<i class='cui-lock-locked'></i>"
                    autocomplete="new-password"
                    class="mb-4"
                    v-model="password_confirmation"
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <!-- <picture-input
                    ref="pictureInput"
                    :width="500"
                    :removable="true"
                    removeButtonClass="ui red button"
                    :height="500"
                    accept="image/jpeg, image/png, image/gif"
                    buttonClass="ui button primary"
                    :customStrings="{
                    upload: '<h1>Upload it!</h1>',
                    drag: 'Drag and drop your image here'}">

                  </picture-input> -->
                  <image-input v-model="avatar">        
                     <div slot="activator">          
                      <div size="150px" v-if="!avatar" class="grey lighten-3 mb-3">   
                        <CButton block color="light">Click to add avatar</CButton>         
                      </div>          
                      <div size="150px"  v-else class="mb-3">            
                        <img :src="avatar.imageURL" class="rounded mx-auto d-block img-thumbnail" alt="avatar">          
                      </div>        
                     </div>      
                  </image-input>
                  <CCol sm="12" >
                    <label class="mb-4" for="agree_term"><input id="agree_term" type="checkbox" value="agree_term" v-model="agree_term"/>
                    I agree terms of service
                    </label>
                  </CCol>
                  <CCol sm="12" class="mb-4">
                    <vue-recaptcha 
                    ref="recaptcha"
                    @verify="onCaptchaVerified"
                    @expired="onCaptchaExpired"
                    :sitekey="recaptchaKey"
                    :loadRecaptchaScript="true">
                    </vue-recaptcha>
                  </CCol>
                  <CButton type="submit" color="success" block 
                  :disabled="!agree_term" v-if="recaptchaToken != ''"
                   >Create Account</CButton>
                </CForm>
              </CTab>
              </CTabs>
            </CCardBody>
            <!-- <CCardFooter class="p-4">
              <CRow>
                <CCol col="6">
                  <CButton block color="facebook">
                    Facebook
                  </CButton>
                </CCol>
                <CCol col="6">
                  <CButton block color="twitter">
                    Twitter
                  </CButton>
                </CCol>
              </CRow>
            </CCardFooter> -->
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>
  <script>
    import axios from 'axios'
    import VueRecaptcha from 'vue-recaptcha';
    import ImageInput from '../customcomponents/ImageInput.vue'

    export default {
      components: {
        'vue-recaptcha': VueRecaptcha,
        'image-input':ImageInput,
      },
      data() {
        console.log(this.$store.state.RECAPTCHA_SITE_KEY);
        return {
          recaptchaKey:this.$store.state.RECAPTCHA_SITE_KEY,
          recaptchaToken: '',
          first_name: '',
          last_name:'',
          email: '',
          password: '',
          password_confirmation: '',
          agree_term: false,
          license:'',
          description:'',
          phone:'',
          service_type:null,
          services: [
            {'value': 1, 'text': 'Student / Novice'},
            {'value': 2, 'text': 'Independent Technician / Mechanic'},
            {'value': 3, 'text': 'Automotive Service Center / Dealership'},
          ],
          avatar: null,
        }
      },
      methods: {
        onSubmit: function () {
          this.$refs.invisibleRecaptcha.execute()
        },
        onCaptchaVerified: function (response) {
          this.recaptchaToken = response;
          console.log('Verify: ' + response)
        },
        onCaptchaExpired: function () {
          console.log('Expired');
          this.recaptchaToken = '';
        },
        resetRecaptcha () {
          this.$refs.recaptcha.reset() // Direct call reset method
        },
        register_customer() {
          console.log('customer');
          var self = this;
          axios.post(  '/api/register', {
            first_name: self.first_name,
            last_name: self.last_name,
            email: self.email,
            password: self.password,
            password_confirmation: self.password_confirmation
          }).then(function (response) {
            self.name = '';
            self.email = '';
            self.password = '';
            self.password_confirmation = '';
            console.log(response);
            self.$router.push({ path: '/login' });
          })
          .catch(function (error) {
            console.log(error);
          });
  
        },
        register_technique() {
          var self = this;
          console.log(self.avatar); 
          const config = {
              headers: { 'content-type': 'multipart/form-data' }
          }
          let formData = new FormData();
          formData.append('image', self.avatar.imageFile);
          formData.append('first_name', self.first_name);
          formData.append('last_name', self.last_name);
          formData.append('name', self.first_name + ""  + self.last_name);
          formData.append('email', self.email);
          formData.append('role', 'technique');
          formData.append('password', self.password);
          formData.append('password_confirmation', self.password_confirmation);

          axios.post('/api/register', formData, config)
          .then(function (response) {
            self.name = '';
            self.email = '';
            self.password = '';
            self.password_confirmation = '';
            console.log(response);
            self.$router.push({ path: '/login' });
          })
          .catch(function (error) {
            console.log(error);
          });
  
        }
      }
    }
  
  </script>
