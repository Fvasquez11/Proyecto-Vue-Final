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
      loaded: false,

    }
  },
  components: { User, AdminUser, Footer },
  async mounted() {
    this.loaded = false;
    try {
      const url = `http://localhost:4000/api/resources/apiusers/${this.$route.params}/`;
      const response = await this.axios.get(url, { withCredentials: true });
      this.items = response.data;
      console.log(items);
      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
  },
}
</script>

<template>
  <main>
    <div v-if="!this.mainStore.userType">
      <User />
    </div>
    <div v-if="this.mainStore.userType">
      <AdminUser />
    </div>
    <Footer />
  </main>
</template>