<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <h2>
        <router-link :to="{ name: 'AdminDashboard' }" class="logo"
          >LearnWithUs</router-link
        >
      </h2>
      <button
        class="btn btn-dark d-inline-block d-lg-none ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa fa-bars"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item dropdown mx-3">
            <a
              class="nav-link dropdown-toggle text-dark mr-2"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ name }} &nbsp;&nbsp;
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <router-link :to="{ name: 'Home' }" class="dropdown-item"
                >Home</router-link
              >
              <a @click="logOut" class="dropdown-item" href="#">Log Out</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cat: {
        name: "",
      },
      name: localStorage.getItem("name"),
    }
  },
  created() {
    axios.get("categories").then((res) => {
      this.cat = res.data;
    })
  },
  methods: {
    logOut() {
      localStorage.clear();
      this.$router.push("/");
      let hide = false;
      localStorage.setItem("hide", hide);
    }
  }
}
</script>

<style scoped>
.dropdown-menu {
  min-width: 6rem !important;
}
</style>
