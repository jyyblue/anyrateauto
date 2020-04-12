<template>

  <section class="banner-wrap">  
    <div class="banner">

        <div class="rev_slider_wrapper">
            <!-- START REVOLUTION SLIDER 5.0 auto mode -->
            <div id="rev_slider" class="rev_slider"  data-version="5.0">
                <ul>
                    <!-- SLIDE  -->
                    <li data-transition="fade">

                        <!-- MAIN IMAGE -->
                        <img :src="slider1.path" alt="">                        

                        <!-- LAYERS -->
                        <div class="tp-caption mediumlarge_light_white_center domainate start"
                        data-x="0"
                        data-hoffset="0"
                        data-y="214"

                        data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:100;e:Power2.easeOut;"
                        data-transform_out="s:100;e:Power3.easeInOut;s:100;e:Power3.easeInOut;"
                        data-start="100"
                        data-splitin="none"
                        data-splitout="none"

                        data-speed="100"
                        data-endspeed="300">{{slider1.layer1}}</div>

                        <!-- LAYER NR. 1 -->
                        <div class="tp-caption internet"
                        data-x="0"
                        data-y="282"
                        data-speed="500"
                        data-start="800"


                        data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:100;e:Power2.easeOut;"
                        data-transform_out="s:100;e:Power3.easeInOut;s:100;e:Power3.easeInOut;"
                        data-splitin="none"
                        data-splitout="none"

                        style="z-index: 6; letter-spacing: -3px;">{{slider1.layer2}}</div>

                        <!-- LAYER NR. 2 -->
                        <div class="tp-caption attract "
                        data-x="0"
                        data-y="369"
                        data-speed="500"
                        data-start="1700"
                        data-transform_in="y:-50px;opacity:0;s:150;e:Power3.easeOut;"
                        data-transform_out="s:100;e:Power3.easeInOut;s:100;e:Power3.easeInOut;"
                        data-splitin="none"
                        data-splitout="none"
                        style="z-index: 6; ">{{slider1.layer3}}</div>

                        <!-- LAYER NR. 3 -->
                        <div class="tp-caption more "
                        data-x="100"
                        data-y="425"
                        data-speed="800"
                        data-start="1900"
                        data-transform_in="x:-50px;opacity:0;s:200;e:Power3.easeOut;"
                        data-transform_out="s:100;e:Power3.easeInOut;s:100;e:Power3.easeInOut;"
                        data-splitin="none"
                        data-splitout="none"
                        style="z-index: 6; ">{{slider1.layer4}}</div>

                        <!-- LAYER NR. 4 -->
                        <div class="tp-caption qualified"
                        data-x="0"
                        data-y="476"
                        data-speed="800"
                        data-start="2600"
                        data-transform_in="y:50px;opacity:0;s:150;e:Power3.easeOut;"
                        data-transform_out="s:100;e:Power3.easeInOut;s:100;e:Power3.easeInOut;"
                        data-splitin="none"
                        data-splitout="none"
                        style="z-index: 6">{{slider1.layer5}}</div>


                    </li>

                    <!-- SLIDE  -->
                    <li data-transition="fade">

                        <!-- MAIN IMAGE -->
                        <img :src="slider2.path"  alt="">

                        <!-- LAYERS -->
                        <div class="tp-caption mediumlarge_light_white_center invest"
                        data-x="543"
                        data-y="160"
                        data-speed="500"
                        data-start="300"

                        data-transform_in="x:right;s:200;e:Power4.easeInOut;"
                        data-transform_out="s:100;e:Power2.easeInOut;s:100;e:Power2.easeInOut;"
                        data-splitin="none"
                        data-splitout="none" >{{slider2.layer1}}</div>

                        <!-- LAYER NR. 1 -->
                        <div class="tp-caption move mediumlarge_light_white_center"
                        data-x="480"
                        data-y="230"
                        data-speed="500"
                        data-start="800"
                        data-transform_in="x:right;s:200;e:Power4.easeInOut;"
                        data-transform_out="s:100;e:Power2.easeInOut;s:100;e:Power2.easeInOut;"
                        data-splitin="none"
                        data-splitout="none"
                        style="z-index: 6; letter-spacing: -3px;">{{slider2.layer2}}</div>

                        <!-- LAYER NR. 2 -->
                        <div class="tp-caption light_brown mediumlarge_light_white_center sfl"
                        data-x="615"
                        data-y="230"
                        data-speed="500"
                        data-start="1200"
                        data-transform_in="x:right;s:200;e:Power4.easeInOut;"
                        data-transform_out="s:100;e:Power2.easeInOut;s:100;e:Power2.easeInOut;"
                        data-splitin="none"
                        data-splitout="none"
                        style="z-index: 6;">{{slider2.layer3}}</div>

                        <!-- LAYER NR. 3 -->
                        <div class="tp-caption dark_brown mediumlarge_light_white_center "
                        data-x="735"
                        data-y="230"
                        data-speed="800"
                        data-start="1900"
                        data-transform_in="x:right;s:200;e:Power4.easeInOut;"
                        data-transform_out="s:100;e:Power2.easeInOut;s:100;e:Power2.easeInOut;"
                        data-splitin="none"
                        data-splitout="none"
                        style="z-index: 6;">{{slider2.layer4}}</div>

                        <!-- LAYER NR. 4 -->
                        <div class="tp-caption faster mediumlarge_light_white_center"
                        data-x="960"
                        data-y="230"
                        data-speed="800"
                        data-start="2600"
                        data-transform_in="x:right;s:200;e:Power4.easeInOut;"
                        data-transform_out="s:100;e:Power2.easeInOut;s:100;e:Power2.easeInOut;"
                        data-splitin="none"
                        data-splitout="none"
                        style="z-index: 6">{{slider2.layer5}}</div>

                        <!-- LAYER NR. 5 -->
                        <div class="tp-caption brown_line"
                        data-x="458"
                        data-y="273"
                        data-speed="800"
                        data-start="2600"
                        data-transform_in="x:right;s:200;e:Power4.easeInOut;"
                        data-transform_out="s:100;e:Power2.easeInOut;s:100;e:Power2.easeInOut;"
                        data-splitin="none"
                        data-splitout="none"
                        style="z-index: 6"><img src="images/brown_line.jpg" alt="underline"> </div>
                    </li>

                    <!-- SLIDE  -->
                    <li data-transition="fade">

                        <!-- MAIN IMAGE -->
                        <img :src="slider3.path" alt="">

                        <!-- LAYERS -->
                        <div class="tp-caption customin customout start green"
                        data-x="40"
                        data-hoffset="0"
                        data-y="510"

                        data-transform_in="y:top;s:200;e:Power4.easeInOut;"
                        data-transform_out="s:100;e:Power2.easeInOut;s:100;e:Power2.easeInOut;"
                        data-speed="100"
                        data-start="500"
                        data-endspeed="300">{{slider3.layer1}}</div>

                        <!-- LAYER NR. 1 -->
                        <div class="tp-caption big_white fade"
                        data-x="40"
                        data-y="560"
                        data-speed="500"
                        data-start="800"
                        data-transform_in="y:bottom;s:200;e:Power4.easeInOut;"
                        data-transform_out="s:100;e:Power2.easeInOut;s:100;e:Power2.easeInOut;"
                        style="z-index: 6;">{{slider3.layer2}}</div>
                    </li>

                    <!-- SLIDE  -->
                    <li data-transition="fade">
                        <!-- MAIN IMAGE -->
                        <img :src="slider4.path" alt="">

                        <!-- LAYERS -->
                        <div class="tp-caption customin customout start big_white"
                        data-x="0"
                        data-hoffset="0"
                        data-y="235"

                        data-transform_in="x:-50px;opacity:0;s:200;e:Power3.easeOut;"
                        data-transform_out="s:100;e:Power3.easeInOut;s:100;e:Power3.easeInOut;"
                        data-speed="100"
                        data-start="500"
                        data-easing="Back.easeInOut"
                        data-endspeed="300">{{slider4.layer1}}</div>

                        <!-- LAYER NR. 1 -->
                        <div class="tp-caption thin_red fade"
                        data-x="300"
                        data-y="235"
                        data-speed="500"
                        data-start="800"
                        data-transform_in="x:-50px;opacity:0;s:200;e:Power3.easeOut;"
                        data-transform_out="s:100;e:Power3.easeInOut;s:100;e:Power3.easeInOut;"
                        style="z-index: 6;">{{slider4.layer2}}</div>

                        <!-- LAYER NR. 2 -->
                        <div class="tp-caption thin_white skewfromright"
                        data-x="0"
                        data-y="510"
                        data-speed="500"
                        data-start="800"
                        data-transform_in="y:50px;opacity:0;s:1500;e:Power3.easeOut;"
                        data-transform_out="s:100;e:Power3.easeInOut;s:100;e:Power3.easeInOut;"
                        style="z-index: 6;">{{slider4.layer3}}</div>

                        <!-- LAYER NR. 3 -->
                        <div class="tp-caption cursive skewfromright"
                        data-x="400"
                        data-y="570"
                        data-speed="500"
                        data-start="800"
                        data-transform_in="y:50px;opacity:0;s:1500;e:Power3.easeOut;"
                        data-transform_out="s:100;e:Power3.easeInOut;s:100;e:Power3.easeInOut;"
                        style="z-index: 6;">{{slider4.layer4}}</div>
                    </li>

                    <!-- SLIDE  -->
                    <li data-transition="fade">
                        <!-- MAIN IMAGE -->
                        <img :src="slider5.path" alt="">

                        <!-- LAYERS -->
                        <div class="tp-caption mediumlarge_light_white_center domainate customin customout start"
                        data-x="0"
                        data-hoffset="0"
                        data-y="199"

                        data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:100;e:Power2.easeOut;"
                        data-transform_out="s:100;e:Power3.easeInOut;s:100;e:Power3.easeInOut;"
                        data-speed="100"
                        data-start="500"
                        data-easing="Back.easeInOut"
                        data-endspeed="300">{{slider5.layer1}}</div>

                        <!-- LAYER NR. 1 -->
                        <div class="tp-caption thin_dark_blue fade"
                        data-x="270"
                        data-y="210"
                        data-speed="500"
                        data-start="800"
                        data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:100;e:Power2.easeOut;"
                        data-transform_out="s:100;e:Power3.easeInOut;s:100;e:Power3.easeInOut;"
                        style="z-index: 6; letter-spacing: 0;">{{slider5.layer2}}</div>

                        <!-- LAYER NR. 2 -->
                        <div class="tp-caption thinner_white sfl"
                        data-x="05"
                        data-y="270"
                        data-speed="500"
                        data-start="1200"
                        data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:100;e:Power2.easeOut;"
                        data-transform_out="s:100;e:Power3.easeInOut;s:100;e:Power3.easeInOut;"
                        style="z-index: 6; ">{{slider5.layer3}}</div>
                    </li>
                </ul>
            </div><!-- END REVOLUTION SLIDER -->
        </div>
        <!-- END REVOLUTION SLIDER WRAPPER -->
    </div>
</section>
</template>
<script>

import axios from 'axios'
export default {
  name: 'Slider',
  data () {
    return {
        slider1: [],
        slider2: [],
        slider3: [],
        slider4: [],
        slider5: [],
    }
  },
  mounted() {
        
  },
  created(){
      let uri = '/api/sliders/get';
      axios.get(uri).then(response => {
        this.slider1 = response.data[0];
        this.slider2 = response.data[1];
        this.slider3 = response.data[2];
        this.slider4 = response.data[3];
        this.slider5 = response.data[4];

        var revapi;
        jQuery(document).ready(function() {
            revapi = jQuery("#rev_slider").revolution({
                sliderType:"standard",
                sliderLayout:"fullwidth",
                delay:3000,
                navigation: {
                    arrows:{enable:true}
                },
                gridwidth:1170,
                gridheight:645
            });
        });

      });
    }
}
</script>