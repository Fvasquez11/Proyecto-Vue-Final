<script>
export default {
  setup() {
    return {
      username: "",
      password: "",
      passwordconfirm: "",
      email: "",
    };
  },
};
</script>

<template>
  <main>
    <div><h3>Sign Up</h3></div>
    <b-form @submit="onSubmit">
        <b-form-group id="input-group-user" label="Usuario" label-for="input-user">
        <b-form-input id="input-user" v-model="username" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-pass" label="Constraseña" label-for="input-pass">
        <b-form-input id="input-pass" v-model="password" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-passconfirm" label="Confirmar Constraseña" label-for="input-passconfirm">
        <b-form-input id="input-passconfirm" v-model="passwordconfirm" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-email" label="Correo" label-for="input-email">
        <b-form-input id="input-email" v-model="email" required></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Registrarse</b-button>
    </b-form>
  </main>
</template>

<style>
</style>