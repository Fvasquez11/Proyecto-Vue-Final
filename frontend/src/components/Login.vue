<script>
export default {
  setup() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit: function (e) {
      try {
        const url = `http://localhost:4000/api/login`;
        
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