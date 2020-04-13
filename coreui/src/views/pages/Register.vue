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
                    class="form-group mb-0"
                  >
                    <CCol :col="6">
                      <div role="group" class="form-group">
                        <div class="input-group">
                          <input 
                          type="text" 
                          placeholder="First Name" 
                          prependhtml="<i class='cui-lock-locked'></i>" 
                          autocomplete="first_name" 
                          v-bind:class="{'form-control':true, 'is-invalid':(errors.first_name)}"
                          v-model="first_name"
                          v-on:change="removeError('first_name')"
                          >
                        </div>
                        <div class="invalid-feedback" style="display:block" v-if="errors.first_name" :errors="errors">
                          {{ errors.first_name[0] }}
                        </div>                 
                      </div>  
                    </CCol>
                    <CCol :col="6">
                      <div role="group" class="form-group">
                        <div class="input-group">
                          <input 
                          type="text" 
                          placeholder="Last Name" 
                          prependhtml="<i class='cui-lock-locked'></i>" 
                          autocomplete="last_name" 
                          v-bind:class="{'form-control':true, 'is-invalid':(errors.last_name)}"
                          v-model="last_name"
                          v-on:change="removeError('last_name')"
                          >
                        </div>
                        <div class="invalid-feedback" style="display:block" v-if="errors.last_name" :errors="errors">
                          {{ errors.last_name[0] }}
                        </div>                 
                      </div>  
                    </CCol>
                  </CRow>
                  <div role="group" class="form-group">
                    <div class="input-group">
                      <input 
                      type="text" 
                      placeholder="Email" 
                      prependhtml="<i class='cui-lock-locked'></i>" 
                      autocomplete="email" 
                      v-bind:class="{'form-control':true, 'is-invalid':(errors.email)}"
                      v-model="email"
                      v-on:change="removeError('email')"
                      >
                    </div>
                    <div class="invalid-feedback" style="display:block" v-if="errors.email" :errors="errors">
                      {{ errors.email[0] }}
                    </div>                 
                  </div>  

                  <div role="group" class="form-group">
                    <div class="input-group">
                      <input 
                      type="password" 
                      placeholder="Password" 
                      prependhtml="<i class='cui-lock-locked'></i>" 
                      autocomplete="password" 
                      v-bind:class="{'form-control':true, 'is-invalid':(errors.password)}"
                      v-model="password"
                      v-on:change="removeError('password')"
                      >
                    </div>
                    <div class="invalid-feedback" style="display:block" v-if="errors.password" :errors="errors">
                      {{ errors.password[0] }}
                    </div>                 
                  </div>  

                  <div role="group" class="form-group">
                    <div class="input-group">
                      <input 
                      type="password" 
                      placeholder="Repeat password" 
                      prependhtml="<i class='cui-lock-locked'></i>" 
                      autocomplete="new-password" 
                      v-bind:class="{'form-control':true, 'is-invalid':(errors.password_confirmation)}"
                      v-model="password_confirmation"
                      v-on:change="removeError('password_confirmation')"
                      >
                    </div>
                    <div class="invalid-feedback" style="display:block" v-if="errors.password_confirmation" :errors="errors">
                      {{ errors.password_confirmation[0] }}
                    </div>                 
                  </div>  
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
                    class="form-group mb-0"
                  >
                    <CCol :col="6">
                      <div role="group" class="form-group">
                        <div class="input-group">
                          <input 
                          type="text" 
                          placeholder="First Name" 
                          prependhtml="<i class='cui-lock-locked'></i>" 
                          autocomplete="first_name" 
                          v-bind:class="{'form-control':true, 'is-invalid':(errors.first_name)}"
                          v-model="first_name"
                          v-on:change="removeError('first_name')"
                          >
                        </div>
                        <div class="invalid-feedback" style="display:block" v-if="errors.first_name" :errors="errors">
                          {{ errors.first_name[0] }}
                        </div>                 
                      </div>                      
                    </CCol>
                    <CCol :col="6">
                      <div role="group" class="form-group">
                        <div class="input-group">
                          <input 
                          type="text" 
                          placeholder="Last Name" 
                          prependhtml="<i class='cui-lock-locked'></i>" 
                          autocomplete="last_name" 
                          v-bind:class="{'form-control':true, 'is-invalid':(errors.last_name)}"
                          v-model="last_name"
                          v-on:change="removeError('last_name')"
                          >
                        </div>
                        <div class="invalid-feedback" style="display:block" v-if="errors.last_name" :errors="errors">
                          {{ errors.last_name[0] }}
                        </div>                 
                      </div>
                    </CCol>
                  </CRow>
                  <div role="group" class="form-group">
                    <div class="input-group">
                      <input 
                      type="text" 
                      placeholder="Email" 
                      prependhtml="<i class='cui-lock-locked'></i>" 
                      autocomplete="email" 
                      v-bind:class="{'form-control':true, 'is-invalid':(errors.email)}"
                      v-model="email"
                      v-on:change="removeError('email')"
                      >
                    </div>
                    <div class="invalid-feedback" style="display:block" v-if="errors.email" :errors="errors">
                      {{ errors.email[0] }}
                    </div>                 
                  </div>  

                  <div role="group" class="form-group">
                    <div class="input-group">
                      <input 
                      type="password" 
                      placeholder="Password" 
                      prependhtml="<i class='cui-lock-locked'></i>" 
                      autocomplete="password" 
                      v-bind:class="{'form-control':true, 'is-invalid':(errors.password)}"
                      v-model="password"
                      v-on:change="removeError('password')"
                      >
                    </div>
                    <div class="invalid-feedback" style="display:block" v-if="errors.password" :errors="errors">
                      {{ errors.password[0] }}
                    </div>                 
                  </div>  

                  <div role="group" class="form-group">
                    <div class="input-group">
                      <input 
                      type="password" 
                      placeholder="Repeat password" 
                      prependhtml="<i class='cui-lock-locked'></i>" 
                      autocomplete="new-password" 
                      v-bind:class="{'form-control':true, 'is-invalid':(errors.password_confirmation)}"
                      v-model="password_confirmation"
                      v-on:change="removeError('password_confirmation')"
                      >
                    </div>
                    <div class="invalid-feedback" style="display:block" v-if="errors.password_confirmation" :errors="errors">
                      {{ errors.password_confirmation[0] }}
                    </div>                 
                  </div>   
                  <div role="group" class="form-group">
                    <div class="input-group">
                      <input 
                      type="text" 
                      placeholder="Driver License/Tax id" 
                      autocomplete="license" 
                      v-bind:class="{'form-control':true, 'is-invalid':(errors.license)}"
                      v-model="license"
                      v-on:change="removeError('license')"
                      >
                    </div>
                    <div class="invalid-feedback" style="display:block" v-if="errors.license" :errors="errors">
                      {{ errors.license[0] }}
                    </div>                 
                  </div>
                  <div role="group" class="form-group form-row">
                    <div class="col-sm-12">
                      <textarea 
                      v-model="description" 
                      placeholder="Description..." 
                      rows="4" 
                      v-bind:class="{'form-control':true, 'is-invalid':(errors.description)}"
                      v-on:change="removeError('description')"
                      >
                      </textarea>
                    </div>
                    <div class="invalid-feedback" style="display:block" v-if="errors.description" :errors="errors">
                      {{ errors.description[0] }}
                    </div>
                  </div>
                  <div role="group" class="form-group">
                    <div class="input-group">
                      <input 
                      type="text" 
                      placeholder="Phone Number" 
                      autocomplete="phone" 
                      v-bind:class="{'form-control':true, 'is-invalid':(errors.phone)}"
                      v-model="phone"
                      v-mask="'999-999-9999'" 
                      v-on:change="removeError('phone')"
                      >
                    </div>
                    <div class="invalid-feedback" style="display:block" v-if="errors.phone" :errors="errors">
                      {{ errors.phone[0] }}
                    </div>
                  </div>

                  <div role="group" class="form-group">
                    <div class="input-group">
                      <input 
                      type="text" 
                      placeholder="Address" 
                      autocomplete="query" 
                      class="form-control"
                      v-model="query"
                      >
                    </div>
                  </div>
                  <CRow
                    class="form-group mb-0"
                  >
                    <CCol :col="6">
                      <div role="group" class="form-group">
                        <div class="input-group">
                          <input 
                          type="text" 
                          placeholder="Street" 
                          autocomplete="street" 
                          v-bind:class="{'form-control':true, 'is-invalid':(errors.street)}"
                          v-model="street"
                          v-on:change="removeError('street')"
                          >
                        </div>
                        <div class="invalid-feedback" style="display:block" v-if="errors.street" :errors="errors">
                          {{ errors.street[0] }}
                        </div>                 
                      </div>

                    </CCol>
                    <CCol :col="6">
                      <div role="group" class="form-group">
                        <div class="input-group">
                          <input  
                          type="text" 
                          placeholder="City" 
                          autocomplete="city" 
                          v-bind:class="{'form-control':true, 'is-invalid':(errors.city)}"
                          v-model="city"
                          v-on:change="removeError('city')"
                          >
                        </div>
                        <div class="invalid-feedback" style="display:block" v-if="errors.city" :errors="errors">
                          {{ errors.city[0] }}
                        </div>                 
                      </div>
                    </CCol>
                  </CRow>
                  <CRow
                    class="form-group mb-0"
                  >
                    <CCol :col="4">
                      <div role="group" class="form-group">
                        <div class="input-group">
                          <input  
                          type="text" 
                          placeholder="State" 
                          autocomplete="state" 
                          v-bind:class="{'form-control':true, 'is-invalid':(errors.state)}"
                          v-model="state"
                          v-on:change="removeError('state')"
                          >
                        </div>
                        <div class="invalid-feedback" style="display:block" v-if="errors.state" :errors="errors">
                          {{ errors.state[0] }}
                        </div>                 
                      </div>

                    </CCol>
                    <CCol :col="4">
                      <div role="group" class="form-group">
                        <div class="input-group">
                          <input  
                          type="text" 
                          placeholder="Postal Code" 
                          autocomplete="postal_code" 
                          v-bind:class="{'form-control':true, 'is-invalid':(errors.postal_code)}"
                          v-model="postal_code"
                          v-on:change="removeError('postal_code')"
                          >
                        </div>
                        <div class="invalid-feedback" style="display:block" v-if="errors.postal_code" :errors="errors">
                          {{ errors.postal_code[0] }}
                        </div>                 
                      </div>
                    </CCol>
                    <CCol :col="4">
                      <div role="group" class="form-group">
                        <div class="input-group">
                          <input  
                          type="text" 
                          placeholder="Country" 
                          autocomplete="country" 
                          v-bind:class="{'form-control':true, 'is-invalid':(errors.country)}"
                          v-model="country"
                          v-on:change="removeError('country')"
                          >
                        </div>
                        <div class="invalid-feedback" style="display:block" v-if="errors.country" :errors="errors">
                          {{ errors.country[0] }}
                        </div>                 
                      </div>                      
                    </CCol>                    
                  </CRow>                  
                  <div role="group" v-bind:class="{'form-group':true, 'form-row':true}">
                    <div class="col-sm-12"><!---->
                      <select 
                      v-model="service_type" 
                      v-bind:class="{'form-control':true, 'is-invalid':(errors.service_type)}"
                      v-on:change="removeError('service_type')"
                      >
                        <option :value="null" disabled hidden > Please select Service Type</option>
                        <option v-for="item in services" :value="item.value" v-bind:key="item.value">{{item.text}}</option>
                      </select>
                    </div>
                    <div class="invalid-feedback" style="display:block;" v-if="errors.service_type" :errors="errors">
                      {{ errors.service_type }}
                    </div>
                  </div>
                  <div role="group" v-bind:class="{'form-group':true, 'form-row':true}">
                    <div class="input-group col-12">
                    <image-input 
                    v-model="avatar"
                    v-on:change="removeError('image')"
                    >        
                      <div slot="activator">          
                        <div size="150px" v-if="!avatar" class="grey lighten-3 mb-3">   
                          <CButton block color="light">Click to add avatar</CButton>         
                        </div>          
                        <div size="150px"  v-else class="mb-3">            
                          <img :src="avatar.imageURL" class="rounded mx-auto d-block img-thumbnail" alt="avatar">          
                        </div>        
                      </div>      
                    </image-input>
                    </div>
                    <div class="invalid-feedback" style="display:block;" v-if="errors.image" :errors="errors">
                      {{ errors.image[0] }}
                    </div>
                  </div>

                  <CCol sm="12" >
                    <label class="mb-4" for="agree_term"><input type="checkbox" value="agree_term" v-model="agree_term"/>
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
          query:'',
          street:'',
          city:'',
          state:'',
          postal_code:'',
          country:'',
          errors:'',
        }
      },

      methods: {
        removeError: function(key){
          console.log(key);
          console.log(this.errors);
          if(this.errors.hasOwnProperty(key)){
            this.$delete(this.errors, key);
            console.log('aaa',this.errors);
          };
        },
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
              headers: { 'content-type': 'multipart/form-data' },
              validateStatus: function (status) {
              return status < 500; // Reject only if the status code is greater than or equal to 500
            },
          }
          var image = null;
          if(self.avatar){
            image = self.avatar.imageFile;
          }
          let formData = new FormData();
          formData.append('image', image);
          formData.append('first_name', self.first_name);
          formData.append('last_name', self.last_name);
          formData.append('license', self.license);
          formData.append('description', self.description);
          formData.append('phone', self.phone);
          formData.append('service_type', self.service_type);
          formData.append('street', self.street);
          formData.append('city', self.city);
          formData.append('state', self.state);
          formData.append('postal_code', self.postal_code);
          formData.append('country', self.country);
          formData.append('email', self.email);
          formData.append('role', 'technique');
          formData.append('password', self.password);
          formData.append('password_confirmation', self.password_confirmation);

          axios.post('/api/register', formData, config)
          .then(function (response) {
            var status = response.status;
            if(status == 200){
                self.name = '';
                self.email = '';
                self.password = '';
                self.password_confirmation = '';
                self.$router.push({ path: '/login' });
            }else if(status == 422){
              self.errors =response.data.validation;
              console.log(self.errors);
              console.log(self.errors.first_name[0]);
            }else{
              console.log(response);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      },
      watch: {
          query: function(value) {
              fetch(`https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=${this.$store.state.HERE_LOCATION_REST_API_KEY}&query=${value}`)
                  .then(result => result.json())
                  .then(result => {
                      if(result.suggestions && result.suggestions.length > 0) {
                          if(result.suggestions[0].address.street) {
                              this.street = result.suggestions[0].address.street;
                          } else {
                              this.street = "";
                          }
                          this.city = result.suggestions[0].address.city ? result.suggestions[0].address.city : "";
                          this.state = result.suggestions[0].address.state ? result.suggestions[0].address.state : "";
                          this.postal_code = result.suggestions[0].address.postalCode ? result.suggestions[0].address.postalCode : "";
                          this.country = result.suggestions[0].address.country ? result.suggestions[0].address.country : "";
                      } else {
                          this.street = "";
                          this.city = "";
                          this.state = "";
                          this.postal_code = "";
                          this.country = "";
                      }
                  }, error => {
                      console.error(error);
                  });
          }
      }
    }
  
  </script>
