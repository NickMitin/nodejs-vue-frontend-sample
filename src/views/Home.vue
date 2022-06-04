<template>
  <div>
    <h1>This is a home page</h1>
    <LoginForm class="login-form" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import LoginForm from "../components/LoginForm.vue";

export default defineComponent({
  name: "Home",
  components: {
    LoginForm
},
});
</script>

<style scoped>
.login-form {
    max-width: 400px;
}
</style>