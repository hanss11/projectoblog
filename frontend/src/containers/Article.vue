<template>  
  <div>
    <div
      v-if="articulo.image"
      id="banner"
      class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding "
      :data-src="articulo.image.url"
      uk-img
    >
      <h1>{{ articulo.title }}</h1>
    </div>

    <div class="uk-section">
      <div class="uk-container uk-container-small">
        <vue-markdown-it
          v-if="articulo.description"
          :source="articulo.description"
          id="editor"
        />
        <p v-if="articulo.published_at">
          {{ moment(articulo.published_at).format("MMM Do YY") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>  
var moment = require("moment");  
import VueMarkdownIt from "vue-markdown-it";  
import gql from "graphql-tag";

export default {  
  data() {
    return {
      articulo: {},
      moment: moment,
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      routeParam: this.$route.params.id
    };
  },
  components: {
    VueMarkdownIt
  },
  apollo: {
    articulo: {
      query: gql`
        query articulos($id: ID!) {
          articulo(id: $id) {
            id
            title
            description
            image {
                    url
                }
            published_at
        }
        }
      `,
      variables() {
        return {
          id: this.routeParam
        };
      }
    }
  }
};
</script>