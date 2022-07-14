<script>
import { useMainStore } from "@/stores/mainStore";
import { RouterLink, RouterView } from "vue-router";
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
      passwordconfirm: "",
      email: "",
    };
  },
  methods: {
    onSubmit: async function (e) {
      if (this.password === this.passwordconfirm) {
        try {
          const url = `http://localhost:4000/api/auth/register`;
          const response = await this.axios.post(url, {
            username: this.username,
            password: this.password,
          } ,{withCredentials: true});
          console.log(response);
          console.log("Cuenta creada con exito");
          this.username = "";
          this.password = "";
          this.passwordconfirm = "";
          this.email = "";
        } catch (e) {
          console.error(e);
        }
      } else {
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
      <b-form-group
        id="input-group-email"
        label="Correo"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"
          v-model="email"
          required
          type="email"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Registrarse</b-button>
    </b-form>
  </main>
</template>

<style>
</style>