<script>
import User from "@/components/User.vue";
import AdminUser from "@/components/AdminUser.vue";
import Footer from "@/components/Footer.vue";
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
      
    }
  },
  components: { User, AdminUser, Footer }
}
</script>

<template>
  <main>
    <div v-if="!this.mainStore.userType"><User /></div>
    <div v-if="this.mainStore.userType"><AdminUser /></div>
    <Footer />
  </main>
</template>