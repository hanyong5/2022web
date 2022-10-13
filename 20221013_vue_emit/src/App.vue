<template>
  <web-banner :banData="bData" @modalOpen="modalView"></web-banner>


  <div class="start" :class="{end:mView}">
      <!-- com  -->
    <div class="modal" :class="{'d-block':mView}" >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{bData[mData].name}}</h5>
              <button type="button" class="btn-close" @click="mView=false"></button>
            </div>
            <div class="modal-body">
              <img :src="`./images/directs/${bData[mData].src}`" alt="">
              <p>Modal body text goes here.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- com -->
  </div>

</template>

<script>
import bData from "@/data/directs.js";
import WebBanner from "@/components/WebBanner.vue";

export default {
  components: {
    WebBanner,
  },
  data() {
    return {
      bData: bData,
      mView:false,
      mData:1,
    };
  },
  methods:{
    modalView(num,name){
      console.log(num,name);
      this.mView = true;
      this.mData = num;
    }
  }

};
</script>

<style lang="scss">
@import url(./assets/style.css);
.start{
  opacity: 0;
  transition:0.3s;
  &.end{
    opacity: 1;
  }
}

</style>