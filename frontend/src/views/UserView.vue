<script>
import User from "@/components/User.vue";
import AdminUser from "@/components/AdminUser.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      userType: true,
    }
  },
  components: { User, AdminUser, Footer }
}
</script>

<template>
  <main>
    <div v-if="!userType"><User /></div>
    <div v-if="userType"><AdminUser /></div>
    <Footer />
  </main>
</template>