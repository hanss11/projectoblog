<template>  
  <div>
    <div class="uk-child-width-1-2" uk-grid>
      <div>
        <router-link
          v-for="articulos in leftArticles"
          :to="{ path: '/article/' + articulos.id }"
          class="uk-link-reset"
          :key="articulos.id"
        >
          <div class="uk-card uk-card-muted">
            <div class="uk-card-media-top" uk-scrollspy="cls: uk-animation-slide-left; repeat: true"> 
              <img :src="articulos.image.url" alt="" height="100" />
            </div>
            <div class="uk-card-body">
              <p
                id="category"
                v-if="articulos.categoria"
                class="uk-text-uppercase"
              >
                {{ articulos.categoria.name }}
              </p>
              <p id="title" class="uk-text-large">{{ articulos.title }}</p>
            </div>
          </div>
        </router-link>
      </div>
      <div>
        <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
          <router-link
            v-for="articulos in rightArticles"
            :to="{ path: '/article/' + articulos.id }"
            class="uk-link-reset"
            :key="articulos.id"
          >
            <div class="uk-card uk-card-muted" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
              <div class="uk-card-media-top">
                <img :src="articulos.image.url" alt="" height="100" />
              </div>
              <div class="uk-card-body">
                <p
                  id="category"
                  v-if="articulos.categoria"
                  class="uk-text-uppercase"
                >
                  {{ articulos.categoria.name }}
                </p>
                <p id="title" class="uk-text-large">{{ articulos.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>  
export default {  
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL
    };
  },
  props: {
    articulos: Array
  },
  computed: {
    leftArticlesCount() {
      return Math.ceil(this.articulos.length / 5);
    },
    leftArticles() {
      return this.articulos.slice(0, this.leftArticlesCount);
    },
    rightArticles() {
      return this.articulos.slice(this.leftArticlesCount, this.articulos.length);
    }
  }
};
</script>