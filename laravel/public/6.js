(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "../coreui/node_modules/vue-recaptcha/dist/vue-recaptcha.es.js":
/*!*********************************************************************!*\
  !*** ../coreui/node_modules/vue-recaptcha/dist/vue-recaptcha.es.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var defer = function defer() {
  var state = false; // Resolved or not

  var callbacks = [];

  var resolve = function resolve(val) {
    if (state) {
      return;
    }

    state = true;

    for (var i = 0, len = callbacks.length; i < len; i++) {
      callbacks[i](val);
    }
  };

  var then = function then(cb) {
    if (!state) {
      callbacks.push(cb);
      return;
    }

    cb();
  };

  var deferred = {
    resolved: function resolved() {
      return state;
    },
    resolve: resolve,
    promise: {
      then: then
    }
  };
  return deferred;
};

var ownProp = Object.prototype.hasOwnProperty;
function createRecaptcha() {
  var deferred = defer();
  return {
    notify: function notify() {
      deferred.resolve();
    },
    wait: function wait() {
      return deferred.promise;
    },
    render: function render(ele, options, cb) {
      this.wait().then(function () {
        cb(window.grecaptcha.render(ele, options));
      });
    },
    reset: function reset(widgetId) {
      if (typeof widgetId === 'undefined') {
        return;
      }

      this.assertLoaded();
      this.wait().then(function () {
        return window.grecaptcha.reset(widgetId);
      });
    },
    execute: function execute(widgetId) {
      if (typeof widgetId === 'undefined') {
        return;
      }

      this.assertLoaded();
      this.wait().then(function () {
        return window.grecaptcha.execute(widgetId);
      });
    },
    checkRecaptchaLoad: function checkRecaptchaLoad() {
      if (ownProp.call(window, 'grecaptcha') && ownProp.call(window.grecaptcha, 'render')) {
        this.notify();
      }
    },
    assertLoaded: function assertLoaded() {
      if (!deferred.resolved()) {
        throw new Error('ReCAPTCHA has not been loaded');
      }
    }
  };
}
var recaptcha = createRecaptcha();

if (typeof window !== 'undefined') {
  window.vueRecaptchaApiLoaded = recaptcha.notify;
}

var VueRecaptcha = {
  name: 'VueRecaptcha',
  props: {
    sitekey: {
      type: String,
      required: true
    },
    theme: {
      type: String
    },
    badge: {
      type: String
    },
    type: {
      type: String
    },
    size: {
      type: String
    },
    tabindex: {
      type: String
    },
    loadRecaptchaScript: {
      type: Boolean,
      "default": false
    },
    recaptchaScriptId: {
      type: String,
      "default": '__RECAPTCHA_SCRIPT'
    },
    recaptchaHost: {
      type: String,
      "default": 'www.google.com'
    },
    language: {
      type: String,
      "default": ''
    }
  },
  beforeMount: function beforeMount() {
    if (this.loadRecaptchaScript) {
      if (!document.getElementById(this.recaptchaScriptId)) {
        // Note: vueRecaptchaApiLoaded load callback name is per the latest documentation
        var script = document.createElement('script');
        script.id = this.recaptchaScriptId;
        script.src = "https://" + this.recaptchaHost + "/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl=" + this.language;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    recaptcha.checkRecaptchaLoad();

    var opts = _extends({}, this.$props, {
      callback: this.emitVerify,
      'expired-callback': this.emitExpired,
      'error-callback': this.emitError
    });

    var container = this.$slots["default"] ? this.$el.children[0] : this.$el;
    recaptcha.render(container, opts, function (id) {
      _this.$widgetId = id;

      _this.$emit('render', id);
    });
  },
  methods: {
    reset: function reset() {
      recaptcha.reset(this.$widgetId);
    },
    execute: function execute() {
      recaptcha.execute(this.$widgetId);
    },
    emitVerify: function emitVerify(response) {
      this.$emit('verify', response);
    },
    emitExpired: function emitExpired() {
      this.$emit('expired');
    },
    emitError: function emitError() {
      this.$emit('error');
    }
  },
  render: function render(h) {
    return h('div', {}, this.$slots["default"]);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (VueRecaptcha);


/***/ }),

/***/ "../coreui/src/views/customcomponents/ImageInput.vue":
/*!***********************************************************!*\
  !*** ../coreui/src/views/customcomponents/ImageInput.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageInput_vue_vue_type_template_id_d15d6006___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageInput.vue?vue&type=template&id=d15d6006& */ "../coreui/src/views/customcomponents/ImageInput.vue?vue&type=template&id=d15d6006&");
/* harmony import */ var _ImageInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageInput.vue?vue&type=script&lang=js& */ "../coreui/src/views/customcomponents/ImageInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImageInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageInput_vue_vue_type_template_id_d15d6006___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageInput_vue_vue_type_template_id_d15d6006___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/customcomponents/ImageInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/customcomponents/ImageInput.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ../coreui/src/views/customcomponents/ImageInput.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./ImageInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/customcomponents/ImageInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/customcomponents/ImageInput.vue?vue&type=template&id=d15d6006&":
/*!******************************************************************************************!*\
  !*** ../coreui/src/views/customcomponents/ImageInput.vue?vue&type=template&id=d15d6006& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_template_id_d15d6006___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./ImageInput.vue?vue&type=template&id=d15d6006& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/customcomponents/ImageInput.vue?vue&type=template&id=d15d6006&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_template_id_d15d6006___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_template_id_d15d6006___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../coreui/src/views/pages/Register.vue":
/*!**********************************************!*\
  !*** ../coreui/src/views/pages/Register.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_206ba9b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=206ba9b8& */ "../coreui/src/views/pages/Register.vue?vue&type=template&id=206ba9b8&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "../coreui/src/views/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_206ba9b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_206ba9b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/pages/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/pages/Register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ../coreui/src/views/pages/Register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/pages/Register.vue?vue&type=template&id=206ba9b8&":
/*!*****************************************************************************!*\
  !*** ../coreui/src/views/pages/Register.vue?vue&type=template&id=206ba9b8& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_206ba9b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=206ba9b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/pages/Register.vue?vue&type=template&id=206ba9b8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_206ba9b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_206ba9b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/customcomponents/ImageInput.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/customcomponents/ImageInput.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'image-input',
  data: function data() {
    return {
      errorDialog: null,
      errorText: '',
      uploadFieldName: 'file',
      maxSize: 1024
    };
  },
  props: {
    // Use "value" here to enable compatibility with v-model      
    value: Object
  },
  methods: {
    launchFilePicker: function launchFilePicker() {
      this.$refs.file.click();
    },
    onFileChange: function onFileChange(fieldName, file) {
      var maxSize = this.maxSize;
      var imageFile = file[0]; //check if user actually selected a file        

      if (file.length > 0) {
        var size = imageFile.size / maxSize / maxSize;

        if (!imageFile.type.match('image.*')) {
          // check whether the upload is an image            
          this.errorDialog = true;
          this.errorText = 'Please choose an image file';
        } else if (size > 1) {
          // check whether the size is greater than the size limit           
          this.errorDialog = true;
          this.errorText = 'Your file is too big! Please select an image under 1MB';
        } else {
          // Append file into FormData & turn file into image URL            
          var formData = new FormData();
          var imageURL = URL.createObjectURL(imageFile);
          formData.append('image', imageFile); // Emit FormData & image URL to the parent component            

          this.$emit('input', {
            formData: formData,
            imageURL: imageURL,
            imageFile: imageFile
          });
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/pages/Register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/pages/Register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../coreui/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-recaptcha */ "../coreui/node_modules/vue-recaptcha/dist/vue-recaptcha.es.js");
/* harmony import */ var _customcomponents_ImageInput_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customcomponents/ImageInput.vue */ "../coreui/src/views/customcomponents/ImageInput.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'vue-recaptcha': vue_recaptcha__WEBPACK_IMPORTED_MODULE_1__["default"],
    'image-input': _customcomponents_ImageInput_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      recaptchaKey: this.$store.state.RECAPTCHA_SITE_KEY,
      recaptchaToken: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirmation: '',
      agree_term: false,
      license: '',
      description: '',
      phone: '',
      service_type: null,
      services: [{
        'value': 1,
        'text': 'Student / Novice'
      }, {
        'value': 2,
        'text': 'Independent Technician / Mechanic'
      }, {
        'value': 3,
        'text': 'Automotive Service Center / Dealership'
      }],
      avatar: null,
      query: '',
      street: '',
      city: '',
      state: '',
      postal_code: '',
      country: '',
      errors: ''
    };
  },
  methods: {
    removeError: function removeError(key) {
      console.log(key);
      console.log(this.errors);

      if (this.errors.hasOwnProperty(key)) {
        this.$delete(this.errors, key);
        console.log('aaa', this.errors);
      }

      ;
    },
    onSubmit: function onSubmit() {
      this.$refs.invisibleRecaptcha.execute();
    },
    onCaptchaVerified: function onCaptchaVerified(response) {
      this.recaptchaToken = response;
      console.log('Verify: ' + response);
    },
    onCaptchaExpired: function onCaptchaExpired() {
      console.log('Expired');
      this.recaptchaToken = '';
    },
    resetRecaptcha: function resetRecaptcha() {
      this.$refs.recaptcha.reset(); // Direct call reset method
    },
    register_customer: function register_customer() {
      console.log('customer');
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/register', {
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
        self.$router.push({
          path: '/login'
        });
      })["catch"](function (error) {
        console.log(error);
      });
    },
    register_technique: function register_technique() {
      var self = this;
      console.log(self.avatar);
      var config = {
        headers: {
          'content-type': 'multipart/form-data'
        },
        validateStatus: function validateStatus(status) {
          return status < 500; // Reject only if the status code is greater than or equal to 500
        }
      };
      var image = null;

      if (self.avatar) {
        image = self.avatar.imageFile;
      }

      var formData = new FormData();
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
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/register', formData, config).then(function (response) {
        var status = response.status;

        if (status == 200) {
          self.name = '';
          self.email = '';
          self.password = '';
          self.password_confirmation = '';
          self.$router.push({
            path: '/login'
          });
        } else if (status == 422) {
          self.errors = response.data.validation;
          console.log(self.errors);
          console.log(self.errors.first_name[0]);
        } else {
          console.log(response);
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  watch: {
    query: function query(value) {
      var _this = this;

      fetch("https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=".concat(this.$store.state.HERE_LOCATION_REST_API_KEY, "&query=").concat(value)).then(function (result) {
        return result.json();
      }).then(function (result) {
        if (result.suggestions && result.suggestions.length > 0) {
          if (result.suggestions[0].address.street) {
            _this.street = result.suggestions[0].address.street;
          } else {
            _this.street = "";
          }

          _this.city = result.suggestions[0].address.city ? result.suggestions[0].address.city : "";
          _this.state = result.suggestions[0].address.state ? result.suggestions[0].address.state : "";
          _this.postal_code = result.suggestions[0].address.postalCode ? result.suggestions[0].address.postalCode : "";
          _this.country = result.suggestions[0].address.country ? result.suggestions[0].address.country : "";
        } else {
          _this.street = "";
          _this.city = "";
          _this.state = "";
          _this.postal_code = "";
          _this.country = "";
        }
      }, function (error) {
        console.error(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/customcomponents/ImageInput.vue?vue&type=template&id=d15d6006&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/customcomponents/ImageInput.vue?vue&type=template&id=d15d6006& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        {
          on: {
            click: function($event) {
              return _vm.launchFilePicker()
            }
          }
        },
        [_vm._t("activator")],
        2
      ),
      _vm._v(" "),
      _c("input", {
        ref: "file",
        staticStyle: { display: "none" },
        attrs: { type: "file", name: _vm.uploadFieldName },
        on: {
          change: function($event) {
            return _vm.onFileChange($event.target.name, $event.target.files)
          }
        }
      }),
      _vm._v(" "),
      _c(
        "CModal",
        {
          attrs: {
            title: "Modal title",
            show: _vm.errorDialog,
            color: "primary"
          },
          on: {
            "update:show": function($event) {
              _vm.errorDialog = $event
            }
          }
        },
        [_vm._v("\r\n      " + _vm._s(_vm.errorText) + "\r\n    ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/pages/Register.vue?vue&type=template&id=206ba9b8&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/pages/Register.vue?vue&type=template&id=206ba9b8& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "d-flex align-items-center min-vh-100" },
    [
      _c(
        "CContainer",
        { attrs: { fluid: "" } },
        [
          _c(
            "CRow",
            { staticClass: "justify-content-center" },
            [
              _c(
                "CCol",
                { attrs: { md: "6" } },
                [
                  _c(
                    "CCard",
                    { staticClass: "mx-4 mb-0" },
                    [
                      _c(
                        "CCardBody",
                        { staticClass: "p-4" },
                        [
                          _c(
                            "CTabs",
                            { attrs: { "add-tab-classes": "mt-1" } },
                            [
                              _c(
                                "CTab",
                                [
                                  _c(
                                    "template",
                                    { slot: "title" },
                                    [
                                      _c("CIcon", {
                                        attrs: { name: "cil-calculator" }
                                      }),
                                      _vm._v(" Customer\n              ")
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "CForm",
                                    {
                                      attrs: { method: "POST" },
                                      on: {
                                        submit: function($event) {
                                          $event.preventDefault()
                                          return _vm.register_customer($event)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "CRow",
                                        { staticClass: "form-group mb-0" },
                                        [
                                          _c("CCol", { attrs: { col: 6 } }, [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "form-group",
                                                attrs: { role: "group" }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "input-group"
                                                  },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value: _vm.first_name,
                                                          expression:
                                                            "first_name"
                                                        }
                                                      ],
                                                      class: {
                                                        "form-control": true,
                                                        "is-invalid":
                                                          _vm.errors.first_name
                                                      },
                                                      attrs: {
                                                        type: "text",
                                                        placeholder:
                                                          "First Name",
                                                        prependhtml:
                                                          "<i class='cui-lock-locked'></i>",
                                                        autocomplete:
                                                          "first_name"
                                                      },
                                                      domProps: {
                                                        value: _vm.first_name
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          return _vm.removeError(
                                                            "first_name"
                                                          )
                                                        },
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.first_name =
                                                            $event.target.value
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm.errors.first_name
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "invalid-feedback",
                                                        staticStyle: {
                                                          display: "block"
                                                        },
                                                        attrs: {
                                                          errors: _vm.errors
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              _vm.errors
                                                                .first_name[0]
                                                            ) +
                                                            "\n                      "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("CCol", { attrs: { col: 6 } }, [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "form-group",
                                                attrs: { role: "group" }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "input-group"
                                                  },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value: _vm.last_name,
                                                          expression:
                                                            "last_name"
                                                        }
                                                      ],
                                                      class: {
                                                        "form-control": true,
                                                        "is-invalid":
                                                          _vm.errors.last_name
                                                      },
                                                      attrs: {
                                                        type: "text",
                                                        placeholder:
                                                          "Last Name",
                                                        prependhtml:
                                                          "<i class='cui-lock-locked'></i>",
                                                        autocomplete:
                                                          "last_name"
                                                      },
                                                      domProps: {
                                                        value: _vm.last_name
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          return _vm.removeError(
                                                            "last_name"
                                                          )
                                                        },
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.last_name =
                                                            $event.target.value
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm.errors.last_name
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "invalid-feedback",
                                                        staticStyle: {
                                                          display: "block"
                                                        },
                                                        attrs: {
                                                          errors: _vm.errors
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              _vm.errors
                                                                .last_name[0]
                                                            ) +
                                                            "\n                      "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ]
                                            )
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group",
                                          attrs: { role: "group" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "input-group" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.email,
                                                    expression: "email"
                                                  }
                                                ],
                                                class: {
                                                  "form-control": true,
                                                  "is-invalid": _vm.errors.email
                                                },
                                                attrs: {
                                                  type: "text",
                                                  placeholder: "Email",
                                                  prependhtml:
                                                    "<i class='cui-lock-locked'></i>",
                                                  autocomplete: "email"
                                                },
                                                domProps: { value: _vm.email },
                                                on: {
                                                  change: function($event) {
                                                    return _vm.removeError(
                                                      "email"
                                                    )
                                                  },
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.email =
                                                      $event.target.value
                                                  }
                                                }
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.errors.email
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                  staticStyle: {
                                                    display: "block"
                                                  },
                                                  attrs: { errors: _vm.errors }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                    " +
                                                      _vm._s(
                                                        _vm.errors.email[0]
                                                      ) +
                                                      "\n                  "
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group",
                                          attrs: { role: "group" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "input-group" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.password,
                                                    expression: "password"
                                                  }
                                                ],
                                                class: {
                                                  "form-control": true,
                                                  "is-invalid":
                                                    _vm.errors.password
                                                },
                                                attrs: {
                                                  type: "password",
                                                  placeholder: "Password",
                                                  prependhtml:
                                                    "<i class='cui-lock-locked'></i>",
                                                  autocomplete: "password"
                                                },
                                                domProps: {
                                                  value: _vm.password
                                                },
                                                on: {
                                                  change: function($event) {
                                                    return _vm.removeError(
                                                      "password"
                                                    )
                                                  },
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.password =
                                                      $event.target.value
                                                  }
                                                }
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.errors.password
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                  staticStyle: {
                                                    display: "block"
                                                  },
                                                  attrs: { errors: _vm.errors }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                    " +
                                                      _vm._s(
                                                        _vm.errors.password[0]
                                                      ) +
                                                      "\n                  "
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group",
                                          attrs: { role: "group" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "input-group" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.password_confirmation,
                                                    expression:
                                                      "password_confirmation"
                                                  }
                                                ],
                                                class: {
                                                  "form-control": true,
                                                  "is-invalid":
                                                    _vm.errors
                                                      .password_confirmation
                                                },
                                                attrs: {
                                                  type: "password",
                                                  placeholder:
                                                    "Repeat password",
                                                  prependhtml:
                                                    "<i class='cui-lock-locked'></i>",
                                                  autocomplete: "new-password"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.password_confirmation
                                                },
                                                on: {
                                                  change: function($event) {
                                                    return _vm.removeError(
                                                      "password_confirmation"
                                                    )
                                                  },
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.password_confirmation =
                                                      $event.target.value
                                                  }
                                                }
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.errors.password_confirmation
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                  staticStyle: {
                                                    display: "block"
                                                  },
                                                  attrs: { errors: _vm.errors }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                    " +
                                                      _vm._s(
                                                        _vm.errors
                                                          .password_confirmation[0]
                                                      ) +
                                                      "\n                  "
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("CCol", { attrs: { sm: "12" } }, [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "mb-4",
                                            attrs: { for: "agree_term" }
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.agree_term,
                                                  expression: "agree_term"
                                                }
                                              ],
                                              attrs: {
                                                id: "agree_term",
                                                type: "checkbox",
                                                value: "agree_term"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.agree_term
                                                )
                                                  ? _vm._i(
                                                      _vm.agree_term,
                                                      "agree_term"
                                                    ) > -1
                                                  : _vm.agree_term
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a = _vm.agree_term,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = "agree_term",
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        (_vm.agree_term = $$a.concat(
                                                          [$$v]
                                                        ))
                                                    } else {
                                                      $$i > -1 &&
                                                        (_vm.agree_term = $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          ))
                                                    }
                                                  } else {
                                                    _vm.agree_term = $$c
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(
                                              "\n                  I agree terms of service\n                  "
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "CCol",
                                        {
                                          staticClass: "mb-4",
                                          attrs: { sm: "12" }
                                        },
                                        [
                                          _c("vue-recaptcha", {
                                            ref: "recaptcha",
                                            attrs: {
                                              sitekey: _vm.recaptchaKey,
                                              loadRecaptchaScript: true
                                            },
                                            on: {
                                              verify: _vm.onCaptchaVerified,
                                              expired: _vm.onCaptchaExpired
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _vm.recaptchaToken != ""
                                        ? _c(
                                            "CButton",
                                            {
                                              attrs: {
                                                type: "submit",
                                                color: "success",
                                                block: "",
                                                disabled: !_vm.agree_term
                                              }
                                            },
                                            [_vm._v("Create Account")]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "CTab",
                                [
                                  _c(
                                    "template",
                                    { slot: "title" },
                                    [
                                      _c("CIcon", {
                                        attrs: { name: "cil-calculator" }
                                      }),
                                      _vm._v(" Technique/Shop\n              ")
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "CForm",
                                    {
                                      attrs: { method: "POST" },
                                      on: {
                                        submit: function($event) {
                                          $event.preventDefault()
                                          return _vm.register_technique($event)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "CRow",
                                        { staticClass: "form-group mb-0" },
                                        [
                                          _c("CCol", { attrs: { col: 6 } }, [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "form-group",
                                                attrs: { role: "group" }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "input-group"
                                                  },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value: _vm.first_name,
                                                          expression:
                                                            "first_name"
                                                        }
                                                      ],
                                                      class: {
                                                        "form-control": true,
                                                        "is-invalid":
                                                          _vm.errors.first_name
                                                      },
                                                      attrs: {
                                                        type: "text",
                                                        placeholder:
                                                          "First Name",
                                                        prependhtml:
                                                          "<i class='cui-lock-locked'></i>",
                                                        autocomplete:
                                                          "first_name"
                                                      },
                                                      domProps: {
                                                        value: _vm.first_name
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          return _vm.removeError(
                                                            "first_name"
                                                          )
                                                        },
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.first_name =
                                                            $event.target.value
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm.errors.first_name
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "invalid-feedback",
                                                        staticStyle: {
                                                          display: "block"
                                                        },
                                                        attrs: {
                                                          errors: _vm.errors
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              _vm.errors
                                                                .first_name[0]
                                                            ) +
                                                            "\n                      "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("CCol", { attrs: { col: 6 } }, [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "form-group",
                                                attrs: { role: "group" }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "input-group"
                                                  },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value: _vm.last_name,
                                                          expression:
                                                            "last_name"
                                                        }
                                                      ],
                                                      class: {
                                                        "form-control": true,
                                                        "is-invalid":
                                                          _vm.errors.last_name
                                                      },
                                                      attrs: {
                                                        type: "text",
                                                        placeholder:
                                                          "Last Name",
                                                        prependhtml:
                                                          "<i class='cui-lock-locked'></i>",
                                                        autocomplete:
                                                          "last_name"
                                                      },
                                                      domProps: {
                                                        value: _vm.last_name
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          return _vm.removeError(
                                                            "last_name"
                                                          )
                                                        },
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.last_name =
                                                            $event.target.value
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm.errors.last_name
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "invalid-feedback",
                                                        staticStyle: {
                                                          display: "block"
                                                        },
                                                        attrs: {
                                                          errors: _vm.errors
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              _vm.errors
                                                                .last_name[0]
                                                            ) +
                                                            "\n                      "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ]
                                            )
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group",
                                          attrs: { role: "group" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "input-group" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.email,
                                                    expression: "email"
                                                  }
                                                ],
                                                class: {
                                                  "form-control": true,
                                                  "is-invalid": _vm.errors.email
                                                },
                                                attrs: {
                                                  type: "text",
                                                  placeholder: "Email",
                                                  prependhtml:
                                                    "<i class='cui-lock-locked'></i>",
                                                  autocomplete: "email"
                                                },
                                                domProps: { value: _vm.email },
                                                on: {
                                                  change: function($event) {
                                                    return _vm.removeError(
                                                      "email"
                                                    )
                                                  },
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.email =
                                                      $event.target.value
                                                  }
                                                }
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.errors.email
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                  staticStyle: {
                                                    display: "block"
                                                  },
                                                  attrs: { errors: _vm.errors }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                    " +
                                                      _vm._s(
                                                        _vm.errors.email[0]
                                                      ) +
                                                      "\n                  "
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group",
                                          attrs: { role: "group" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "input-group" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.password,
                                                    expression: "password"
                                                  }
                                                ],
                                                class: {
                                                  "form-control": true,
                                                  "is-invalid":
                                                    _vm.errors.password
                                                },
                                                attrs: {
                                                  type: "password",
                                                  placeholder: "Password",
                                                  prependhtml:
                                                    "<i class='cui-lock-locked'></i>",
                                                  autocomplete: "password"
                                                },
                                                domProps: {
                                                  value: _vm.password
                                                },
                                                on: {
                                                  change: function($event) {
                                                    return _vm.removeError(
                                                      "password"
                                                    )
                                                  },
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.password =
                                                      $event.target.value
                                                  }
                                                }
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.errors.password
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                  staticStyle: {
                                                    display: "block"
                                                  },
                                                  attrs: { errors: _vm.errors }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                    " +
                                                      _vm._s(
                                                        _vm.errors.password[0]
                                                      ) +
                                                      "\n                  "
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group",
                                          attrs: { role: "group" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "input-group" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.password_confirmation,
                                                    expression:
                                                      "password_confirmation"
                                                  }
                                                ],
                                                class: {
                                                  "form-control": true,
                                                  "is-invalid":
                                                    _vm.errors
                                                      .password_confirmation
                                                },
                                                attrs: {
                                                  type: "password",
                                                  placeholder:
                                                    "Repeat password",
                                                  prependhtml:
                                                    "<i class='cui-lock-locked'></i>",
                                                  autocomplete: "new-password"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.password_confirmation
                                                },
                                                on: {
                                                  change: function($event) {
                                                    return _vm.removeError(
                                                      "password_confirmation"
                                                    )
                                                  },
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.password_confirmation =
                                                      $event.target.value
                                                  }
                                                }
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.errors.password_confirmation
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                  staticStyle: {
                                                    display: "block"
                                                  },
                                                  attrs: { errors: _vm.errors }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                    " +
                                                      _vm._s(
                                                        _vm.errors
                                                          .password_confirmation[0]
                                                      ) +
                                                      "\n                  "
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group",
                                          attrs: { role: "group" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "input-group" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.license,
                                                    expression: "license"
                                                  }
                                                ],
                                                class: {
                                                  "form-control": true,
                                                  "is-invalid":
                                                    _vm.errors.license
                                                },
                                                attrs: {
                                                  type: "text",
                                                  placeholder:
                                                    "Driver License/Tax id",
                                                  autocomplete: "license"
                                                },
                                                domProps: {
                                                  value: _vm.license
                                                },
                                                on: {
                                                  change: function($event) {
                                                    return _vm.removeError(
                                                      "license"
                                                    )
                                                  },
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.license =
                                                      $event.target.value
                                                  }
                                                }
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.errors.license
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                  staticStyle: {
                                                    display: "block"
                                                  },
                                                  attrs: { errors: _vm.errors }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                    " +
                                                      _vm._s(
                                                        _vm.errors.license[0]
                                                      ) +
                                                      "\n                  "
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group form-row",
                                          attrs: { role: "group" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "col-sm-12" },
                                            [
                                              _c("textarea", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.description,
                                                    expression: "description"
                                                  }
                                                ],
                                                class: {
                                                  "form-control": true,
                                                  "is-invalid":
                                                    _vm.errors.description
                                                },
                                                attrs: {
                                                  placeholder: "Description...",
                                                  rows: "4"
                                                },
                                                domProps: {
                                                  value: _vm.description
                                                },
                                                on: {
                                                  change: function($event) {
                                                    return _vm.removeError(
                                                      "description"
                                                    )
                                                  },
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.description =
                                                      $event.target.value
                                                  }
                                                }
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.errors.description
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                  staticStyle: {
                                                    display: "block"
                                                  },
                                                  attrs: { errors: _vm.errors }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                    " +
                                                      _vm._s(
                                                        _vm.errors
                                                          .description[0]
                                                      ) +
                                                      "\n                  "
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group",
                                          attrs: { role: "group" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "input-group" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.phone,
                                                    expression: "phone"
                                                  },
                                                  {
                                                    name: "mask",
                                                    rawName: "v-mask",
                                                    value: "999-999-9999",
                                                    expression: "'999-999-9999'"
                                                  }
                                                ],
                                                class: {
                                                  "form-control": true,
                                                  "is-invalid": _vm.errors.phone
                                                },
                                                attrs: {
                                                  type: "text",
                                                  placeholder: "Phone Number",
                                                  autocomplete: "phone"
                                                },
                                                domProps: { value: _vm.phone },
                                                on: {
                                                  change: function($event) {
                                                    return _vm.removeError(
                                                      "phone"
                                                    )
                                                  },
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.phone =
                                                      $event.target.value
                                                  }
                                                }
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.errors.phone
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                  staticStyle: {
                                                    display: "block"
                                                  },
                                                  attrs: { errors: _vm.errors }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                    " +
                                                      _vm._s(
                                                        _vm.errors.phone[0]
                                                      ) +
                                                      "\n                  "
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group",
                                          attrs: { role: "group" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "input-group" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.query,
                                                    expression: "query"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "text",
                                                  placeholder: "Address",
                                                  autocomplete: "query"
                                                },
                                                domProps: { value: _vm.query },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.query =
                                                      $event.target.value
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "CRow",
                                        { staticClass: "form-group mb-0" },
                                        [
                                          _c("CCol", { attrs: { col: 6 } }, [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "form-group",
                                                attrs: { role: "group" }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "input-group"
                                                  },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value: _vm.street,
                                                          expression: "street"
                                                        }
                                                      ],
                                                      class: {
                                                        "form-control": true,
                                                        "is-invalid":
                                                          _vm.errors.street
                                                      },
                                                      attrs: {
                                                        type: "text",
                                                        placeholder: "Street",
                                                        autocomplete: "street"
                                                      },
                                                      domProps: {
                                                        value: _vm.street
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          return _vm.removeError(
                                                            "street"
                                                          )
                                                        },
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.street =
                                                            $event.target.value
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm.errors.street
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "invalid-feedback",
                                                        staticStyle: {
                                                          display: "block"
                                                        },
                                                        attrs: {
                                                          errors: _vm.errors
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              _vm.errors
                                                                .street[0]
                                                            ) +
                                                            "\n                      "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("CCol", { attrs: { col: 6 } }, [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "form-group",
                                                attrs: { role: "group" }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "input-group"
                                                  },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value: _vm.city,
                                                          expression: "city"
                                                        }
                                                      ],
                                                      class: {
                                                        "form-control": true,
                                                        "is-invalid":
                                                          _vm.errors.city
                                                      },
                                                      attrs: {
                                                        type: "text",
                                                        placeholder: "City",
                                                        autocomplete: "city"
                                                      },
                                                      domProps: {
                                                        value: _vm.city
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          return _vm.removeError(
                                                            "city"
                                                          )
                                                        },
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.city =
                                                            $event.target.value
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm.errors.city
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "invalid-feedback",
                                                        staticStyle: {
                                                          display: "block"
                                                        },
                                                        attrs: {
                                                          errors: _vm.errors
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              _vm.errors.city[0]
                                                            ) +
                                                            "\n                      "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ]
                                            )
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "CRow",
                                        { staticClass: "form-group mb-0" },
                                        [
                                          _c("CCol", { attrs: { col: 4 } }, [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "form-group",
                                                attrs: { role: "group" }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "input-group"
                                                  },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value: _vm.state,
                                                          expression: "state"
                                                        }
                                                      ],
                                                      class: {
                                                        "form-control": true,
                                                        "is-invalid":
                                                          _vm.errors.state
                                                      },
                                                      attrs: {
                                                        type: "text",
                                                        placeholder: "State",
                                                        autocomplete: "state"
                                                      },
                                                      domProps: {
                                                        value: _vm.state
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          return _vm.removeError(
                                                            "state"
                                                          )
                                                        },
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.state =
                                                            $event.target.value
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm.errors.state
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "invalid-feedback",
                                                        staticStyle: {
                                                          display: "block"
                                                        },
                                                        attrs: {
                                                          errors: _vm.errors
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              _vm.errors
                                                                .state[0]
                                                            ) +
                                                            "\n                      "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("CCol", { attrs: { col: 4 } }, [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "form-group",
                                                attrs: { role: "group" }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "input-group"
                                                  },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.postal_code,
                                                          expression:
                                                            "postal_code"
                                                        }
                                                      ],
                                                      class: {
                                                        "form-control": true,
                                                        "is-invalid":
                                                          _vm.errors.postal_code
                                                      },
                                                      attrs: {
                                                        type: "text",
                                                        placeholder:
                                                          "Postal Code",
                                                        autocomplete:
                                                          "postal_code"
                                                      },
                                                      domProps: {
                                                        value: _vm.postal_code
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          return _vm.removeError(
                                                            "postal_code"
                                                          )
                                                        },
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.postal_code =
                                                            $event.target.value
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm.errors.postal_code
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "invalid-feedback",
                                                        staticStyle: {
                                                          display: "block"
                                                        },
                                                        attrs: {
                                                          errors: _vm.errors
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              _vm.errors
                                                                .postal_code[0]
                                                            ) +
                                                            "\n                      "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("CCol", { attrs: { col: 4 } }, [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "form-group",
                                                attrs: { role: "group" }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "input-group"
                                                  },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value: _vm.country,
                                                          expression: "country"
                                                        }
                                                      ],
                                                      class: {
                                                        "form-control": true,
                                                        "is-invalid":
                                                          _vm.errors.country
                                                      },
                                                      attrs: {
                                                        type: "text",
                                                        placeholder: "Country",
                                                        autocomplete: "country"
                                                      },
                                                      domProps: {
                                                        value: _vm.country
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          return _vm.removeError(
                                                            "country"
                                                          )
                                                        },
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.country =
                                                            $event.target.value
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm.errors.country
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "invalid-feedback",
                                                        staticStyle: {
                                                          display: "block"
                                                        },
                                                        attrs: {
                                                          errors: _vm.errors
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              _vm.errors
                                                                .country[0]
                                                            ) +
                                                            "\n                      "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ]
                                            )
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          class: {
                                            "form-group": true,
                                            "form-row": true
                                          },
                                          attrs: { role: "group" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "col-sm-12" },
                                            [
                                              _c(
                                                "select",
                                                {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: _vm.service_type,
                                                      expression: "service_type"
                                                    }
                                                  ],
                                                  class: {
                                                    "form-control": true,
                                                    "is-invalid":
                                                      _vm.errors.service_type
                                                  },
                                                  on: {
                                                    change: [
                                                      function($event) {
                                                        var $$selectedVal = Array.prototype.filter
                                                          .call(
                                                            $event.target
                                                              .options,
                                                            function(o) {
                                                              return o.selected
                                                            }
                                                          )
                                                          .map(function(o) {
                                                            var val =
                                                              "_value" in o
                                                                ? o._value
                                                                : o.value
                                                            return val
                                                          })
                                                        _vm.service_type = $event
                                                          .target.multiple
                                                          ? $$selectedVal
                                                          : $$selectedVal[0]
                                                      },
                                                      function($event) {
                                                        return _vm.removeError(
                                                          "service_type"
                                                        )
                                                      }
                                                    ]
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "option",
                                                    {
                                                      attrs: {
                                                        disabled: "",
                                                        hidden: ""
                                                      },
                                                      domProps: { value: null }
                                                    },
                                                    [
                                                      _vm._v(
                                                        " Please select Service Type"
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _vm._l(_vm.services, function(
                                                    item
                                                  ) {
                                                    return _c(
                                                      "option",
                                                      {
                                                        key: item.value,
                                                        domProps: {
                                                          value: item.value
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(item.text)
                                                        )
                                                      ]
                                                    )
                                                  })
                                                ],
                                                2
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.errors.service_type
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                  staticStyle: {
                                                    display: "block"
                                                  },
                                                  attrs: { errors: _vm.errors }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                    " +
                                                      _vm._s(
                                                        _vm.errors.service_type
                                                      ) +
                                                      "\n                  "
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          class: {
                                            "form-group": true,
                                            "form-row": true
                                          },
                                          attrs: { role: "group" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "input-group col-12"
                                            },
                                            [
                                              _c(
                                                "image-input",
                                                {
                                                  on: {
                                                    change: function($event) {
                                                      return _vm.removeError(
                                                        "image"
                                                      )
                                                    }
                                                  },
                                                  model: {
                                                    value: _vm.avatar,
                                                    callback: function($$v) {
                                                      _vm.avatar = $$v
                                                    },
                                                    expression: "avatar"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      attrs: {
                                                        slot: "activator"
                                                      },
                                                      slot: "activator"
                                                    },
                                                    [
                                                      !_vm.avatar
                                                        ? _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "grey lighten-3 mb-3",
                                                              attrs: {
                                                                size: "150px"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "CButton",
                                                                {
                                                                  attrs: {
                                                                    block: "",
                                                                    color:
                                                                      "light"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Click to add avatar"
                                                                  )
                                                                ]
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        : _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "mb-3",
                                                              attrs: {
                                                                size: "150px"
                                                              }
                                                            },
                                                            [
                                                              _c("img", {
                                                                staticClass:
                                                                  "rounded mx-auto d-block img-thumbnail",
                                                                attrs: {
                                                                  src:
                                                                    _vm.avatar
                                                                      .imageURL,
                                                                  alt: "avatar"
                                                                }
                                                              })
                                                            ]
                                                          )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _vm.errors.image
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                  staticStyle: {
                                                    display: "block"
                                                  },
                                                  attrs: { errors: _vm.errors }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                    " +
                                                      _vm._s(
                                                        _vm.errors.image[0]
                                                      ) +
                                                      "\n                  "
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("CCol", { attrs: { sm: "12" } }, [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "mb-4",
                                            attrs: { for: "agree_term" }
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.agree_term,
                                                  expression: "agree_term"
                                                }
                                              ],
                                              attrs: {
                                                type: "checkbox",
                                                value: "agree_term"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.agree_term
                                                )
                                                  ? _vm._i(
                                                      _vm.agree_term,
                                                      "agree_term"
                                                    ) > -1
                                                  : _vm.agree_term
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a = _vm.agree_term,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = "agree_term",
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        (_vm.agree_term = $$a.concat(
                                                          [$$v]
                                                        ))
                                                    } else {
                                                      $$i > -1 &&
                                                        (_vm.agree_term = $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          ))
                                                    }
                                                  } else {
                                                    _vm.agree_term = $$c
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(
                                              "\n                  I agree terms of service\n                  "
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "CCol",
                                        {
                                          staticClass: "mb-4",
                                          attrs: { sm: "12" }
                                        },
                                        [
                                          _c("vue-recaptcha", {
                                            ref: "recaptcha",
                                            attrs: {
                                              sitekey: _vm.recaptchaKey,
                                              loadRecaptchaScript: true
                                            },
                                            on: {
                                              verify: _vm.onCaptchaVerified,
                                              expired: _vm.onCaptchaExpired
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _vm.recaptchaToken != ""
                                        ? _c(
                                            "CButton",
                                            {
                                              attrs: {
                                                type: "submit",
                                                color: "success",
                                                block: "",
                                                disabled: !_vm.agree_term
                                              }
                                            },
                                            [_vm._v("Create Account")]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ],
                                2
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);