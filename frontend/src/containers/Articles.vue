<template>  
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>Hanss Becerra Blog</h1>

        <ArticlesList :articulos="articulos"></ArticlesList>
      </div>
    </div>
  </div>
</template>

<script>  
import ArticlesList from "../components/ArticlesList.vue";  
import gql from "graphql-tag";

export default {  
  components: {
    ArticlesList
  },
  data() {
    return {
      articulos: []
    };
  },
  apollo: {
    articulos: gql`
      query Articulos {
        articulos {
          id
          title
          description
          image {
            url
          }
          categoria {
            name
          }
        }
      }
    `
  }
};
</script>