<script>
import { useMainStore } from "@/stores/mainStore";
export default {
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore,
    };
  },
  data() {
    return {
      username: "",
      password: "",
      tempJWT: "",
    };
  },
  methods: {
    onSubmit: async function (e) {
      try {
        const url = `http://localhost:4000/api/auth/login`;
        const response = await this.axios
          .post(url, {
            username: this.username,
            password: this.password,
          },{withCredentials: true})
        this.mainStore.jwt = response.data.token
        this.$router.push( '/user/' + this.username )
        if (response.data.userRoles[0] === "admin") {
          this.mainStore.userType = true
        }
        else {
          this.mainStore.userType = false
        }
        this.mainStore.username = this.username
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<template>
  <main>
    <div class="loginContainer">
      <div><h3>Login</h3></div>
      <b-form @submit="onSubmit">
        <b-form-group
          id="input-group-user"
          label="Usuario"
          label-for="input-user"
        >
          <b-form-input
            id="input-user"
            v-model="username"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-pass"
          label="Constraseña"
          label-for="input-pass"
        >
          <b-form-input
            id="input-pass"
            v-model="password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Iniciar Sesión</b-button>
      </b-form>
    </div>
  </main>
</template>

<style>
.loginContainer {
  justify-content: center;
}
</style>