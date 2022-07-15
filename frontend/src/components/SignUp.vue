<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      passwordconfirm: "",
      rejected: false,
      success: false,
      passReject: false,
    };
  },
  methods: {
    onSubmit: async function (e) {
      if (this.password === this.passwordconfirm) {
        try {
          const url = `http://localhost:4000/api/auth/register`;
          const response = await this.axios.post(
            url,
            {
              username: this.username,
              password: this.password,
            },
            { withCredentials: true }
          );
          this.username = "";
          this.password = "";
          this.passwordconfirm = "";
          this.success = true;
        } catch (e) {
          this.rejected = true;
          console.error(e);
        }
      } else {
        this.passReject = true;
        this.password = "";
        this.passwordconfirm = "";
        console.log("Contrañeas no coinciden");
      }
    },
  },
};
</script>

<template>
  <main>
    <div><h3>Sign Up</h3></div>
    <b-form @submit="onSubmit">
      <b-badge v-if="rejected" variant="danger">Registro fallido</b-badge>
      <b-badge v-if="passReject" variant="danger">Las contraseñas no coinciden</b-badge>
      <b-badge v-if="success" variant="success">Registro exitoso</b-badge>
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
          type="password"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-passconfirm"
        label="Confirmar Constraseña"
        label-for="input-passconfirm"
      >
        <b-form-input
          id="input-passconfirm"
          v-model="passwordconfirm"
          required
          type="password"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Registrarse</b-button>
    </b-form>
  </main>
</template>

<style>
</style>