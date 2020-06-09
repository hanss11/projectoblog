<template>
  <vue-instagram token="6872479652.b5733d6.27f2df51625e400e9e7108bb99d0f521" :count="10" class="conteiner">
    <template v-slot:loading="props">
      <h1 v-if="props.loading" class="fancy-loading">Loading, please wait...</h1>
    </template>
    <template v-slot:feeds="props">
        <div class="item">
          <a :href="props.feed.link" target="_blank" class="link-post">
            <div class="item-img">
              <div class="image-wrapper">
                <img :src="props.feed.images.low_resolution.url" alt="Image" class="img-feed">
              </div>
            </div>
            <div class="item-overlay">
              <div class="item-content">
                <div class="item-text">{{props.feed.caption.text}}</div>
              </div>
            </div>
            
          </a>          
        
      </div>     
    </template>
    <template v-slot:error="props">
      <div class="fancy-alert"> {{ props.error.error_message }} </div>
    </template>
  </vue-instagram>
</template>

<script>
import VueInstagram from 'vue-instagram'

export default {
  name: 'App',
  components: {
    VueInstagram
  }
}
</script>

<style lang="css">
.conteiner{
  display: flex;
  flex-wrap: wrap;
 flex-direction: row;
    justify-content: flex-start;
    box-sizing: border-box;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, Roboto, Open Sans, Helvetica Neue, sans-serif;
    line-height: 18px;
    font-weight: 400;
    overflow: hidden !important;
    width: 100%;
    max-height: 100%;
    position: relative;
    box-sizing: border-box;
    min-width: 150px;
    min-height: 100px;
}
.content{
  display: flex;
  width: 100%;
  overflow: hidden;
}
.item{
    width: calc(25% - 0px);
    margin: 0px;
    color: rgb(0, 0, 0);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    background: #fff;
    transition: opacity 0.3s ease, visibility 0.2s ease;
    opacity: 1;
    visibility: visible;
}
.img-feed{
    position: absolute;
    width: auto;
    top: 50%;
    height: 100% !important;
    min-width: 100%;
    max-width: inherit !important;
    transition: transform 0.3s ease, filter 0.3s;
    left: 50%;
    transform: scale(1) translate(-50%, -50%);
    transform-origin: 0 0;
    backface-visibility: hidden;
    border-radius: 0px;
}
.link-post{

 width: 100%;
    box-sizing: border-box;
    display: flex;
  cursor: pointer;
  transition: all 150ms ease-in-out;
}
.item-img{
  width: 100%;
  box-sizing: border-box;

}
.image-wrapper{
    padding-top: 100%;
    position: relative;
    overflow: hidden;
    margin: -1px;
}
.item-overlay{
  position: absolute;
    z-index: 2;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.3s, visibility 0.3s;
    text-align: center;
    box-sizing: border-box;
    color: #fff;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
}
.item-content{
  transform: translateY(10%);
  width: 80%;
  max-height: 80%;
  margin: 0 auto;
  position: relative;
  transition: 0.3s all ease;
  text-align: center;
  width: 100%;
}
.item-text{
  font-size: 13px;
  line-height: 18px;
  max-height: 56px;
  margin-top: 6%;
  display: inline-block;
  overflow: hidden;
}
.item:hover .item-overlay{
     opacity: 1;
    visibility: visible;
    pointer-events: all;
    padding-top: 0;
}

.item:hover .img-feed{
 transform: scale(1.1) translate(-50%, -50%);
    transform-origin: 0 0;
    filter: grayscale(1);
}
</style>