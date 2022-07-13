<script setup>
import Login from "@/components/Login.vue";
import SignUp from "@/components/SignUp.vue";
</script>


<template>
  <main>
    <div class="theHomeContainer">
      <h1></h1>
      <div class="login">
      <b-card class="loginCard">
        <div id="my-accordion" class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1 d-grid gap-2" role="tab">
              <b-button v-b-toggle.accordion-1 variant="info">Login</b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <Login />
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1 d-grid gap-2" role="tab">
              <b-button v-b-toggle.accordion-2 variant="info">Sign Up</b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <SignUp />
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </b-card>
      </div>
    </div>
  </main>
</template>

<style>
.theHomeContainer {
  padding: 2%;
}
.login {
  justify-content: center;
}
.loginCard {
  width: 30%;
}
</style>