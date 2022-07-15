<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      rejected: false,
      error: "",
    };
  },
  methods: {
    onSubmit: async function (e) {
      try {
        this.rejected = false;
        this.error = "";
        const url = `http://localhost:4000/api/auth/login`;
        const response = await this.axios
          .post(url, {
            username: this.username,
            password: this.password,
          },{withCredentials: true})
        this.$router.push( '/user/' + this.username )
      } catch (e) {
        this.error = e.response.data.error;
        console.error(this.error);
        this.rejected = true;
        this.username = "";
        this.password = "";
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
        <b-badge v-if="rejected" variant="danger">{{ this.error }}</b-badge>
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