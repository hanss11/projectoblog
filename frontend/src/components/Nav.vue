<template>
  <div>
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li>
            <router-link to="/">HanssBecerra</router-link>
          </li>
        </ul>
      </div>

      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
            <li> <router-link to="/about">Sobre mi</router-link> </li>
          <li v-for="category in categorias" v-bind:key="category.id">
            <router-link
              :to="{ path: '/category/' + category.id }"
              :key="category.id"
            >
              {{ category.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "Nav",
  data() {
    return {
      categorias: []
    };
  },
  apollo: {
    categorias: gql`
      query Categorias {
        categorias {
          id
          name
        }
      }
    `
  }
};
</script>