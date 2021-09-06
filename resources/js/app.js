require("./bootstrap");

import Vue from "vue";

Vue.component(
    "two-factor-auth",
    require("./components/TwoFactorAuth.vue").default
);

window.app = new Vue({
    el: "#app",
});
