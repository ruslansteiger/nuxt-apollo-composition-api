<template>
  <h1>Apollo with Composition API</h1>
</template>

<script>
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable/dist";

// prettier-ignore
export default {
  setup() {
    useQuery(gql`{ hello }`)
  }
}
</script>
