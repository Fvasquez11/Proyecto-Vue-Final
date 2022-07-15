<script>
import User from "@/components/User.vue";
import AdminUser from "@/components/AdminUser.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      admin: null,
      loaded: false,
      error: false,
    };
  },
  components: { User, AdminUser, Footer },
  async mounted() {
    this.loaded = false;
    try {
      const urlUserRoles = `http://localhost:4000/api/auth/${this.$route.params.username}/roles`;
      const resRoles = await this.axios.get(urlUserRoles, {
        withCredentials: true,
      });

      if (!resRoles.data.roles.includes("admin")) {
        const urlUserResources = `http://localhost:4000/api/resources/apiusers/${this.$route.params.username}`;
        const resResources = await this.axios.get(urlUserResources, {
          withCredentials: true,
        });
      }

      if (resRoles.data.roles.includes("admin")) this.admin = true;
      else this.admin = false;
      console.log(this.$cookies.keys())
      console.log(document.cookie)
      this.loaded = true;
    } catch (e) {
      (this.error = true), console.error(e);
    }
  },
};
</script>

<template>
  <main>
    <div v-if="loaded">
      <div v-if="!admin">
        <User :username="this.$route.params.username" />
      </div>
      <div v-else>
        <AdminUser :username="this.$route.params.username" />
      </div>
    </div>
    <div v-if="error" class="error">
      <h1>Este usuario no tiene datos cargados</h1>
    </div>
    <Footer />
  </main>
</template>

<style>
.error {
  display: flex;
  justify-content: center;
  padding: 10%;
}
</style>