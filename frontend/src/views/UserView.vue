<script>
import User from "@/components/User.vue";
import AdminUser from "@/components/AdminUser.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      admin: null,
    }
  },
  components: { User, AdminUser, Footer },
  async mounted() {
    try {
      const urlUserResources = `http://localhost:4000/api/resources/apiusers/${this.$route.params.username}`;
      const urlUserRoles = `http://localhost:4000/api/auth/${this.$route.params.username}/roles`;
      const resResources = await this.axios.get(urlUserResources, { withCredentials: true });
      const resRoles = await this.axios.get(urlUserRoles, { withCredentials: true });
      if(resRoles.includes('admin')) this.admin = true
      else this.admin = false
    } catch (e) {
      console.error(e);
    }
  },
}
</script>

<template>
  <main>
    <div v-if="!admin">
      <User :username="this.$route.params.username" />
    </div>
    <div v-else>
      <AdminUser :username="this.$route.params.username" />
    </div>
    <Footer />
  </main>
</template>