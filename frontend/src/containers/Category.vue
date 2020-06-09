<template>  
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>{{ categoria.name }}</h1>

        <ArticlesList :articulos="categoria.articulos || []"></ArticlesList>
      </div>
    </div>
  </div>
</template>

<script>  
import ArticlesList from "../components/ArticlesList";  
import gql from "graphql-tag";

export default {  
  data() {
    return {
      categoria: [],
      routeParam: this.$route.params.id
    };
  },
  components: {
    ArticlesList
  },
  apollo: {
    categoria: {
      query: gql`
        query categorias($id: ID!) {
          categoria(id: $id) {
            name
            articulos {
            id
            title
            description
            image {
                url
            }
            categoria {
                id
                name
            }
            }
        }
        }
      `,
      variables() {
        return { id: this.routeParam };
      }
    }
  }
};
</script>