<template>
  <main role="main" class="col-md-12 ml-sm-auto pt-5 px-4 mb-5">
    <div class="card bg-light col-lg-9 mx-auto">
      <div class="card-body">
        <h3 class="card-title my-3 pb-2 d-flex justify-content-center">
          Create Subcategory
        </h3>
        <ValidationObserver v-slot="{}" ref="form">
          <form @submit.prevent="createCat()">
            <ValidationProvider
              name="SubCategory name"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group row">
                <label for="subcatName" class="col-md-4 col-sm-5 col-form-label"
                  >Enter Subcategory Name</label
                >
                <div class="col-md-8 col-sm-7">
                  <input
                    v-model="category.name"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': submitted }"
                  />
                  <div v-if="submitted" class="invalid-feedback">
                    <span class="text-danger">{{ errors[0] }}</span>
                  </div>
                </div>
              </div>
            </ValidationProvider>
            <div class="text-center">
              <button type="submit" class="btn btn-primary">Create</button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </main>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate"
import { required } from "vee-validate/dist/rules"
import axios from "axios"
import store from "@/store"
extend("required", {
  ...required,
  message: (field) => field + ` can't blank`,
})

export default {
  name: "CreateSub",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      name: "",
      submitted: false,
      category: {
        name: "",
      }
    }
  },
  methods: {
    createCat() {
      this.submitted = true;
      this.$refs.form.validate().then((success) => {
        if (success) {
          axios
            .post("http://127.0.0.1:8000/api/categories/", {
              name: this.category.name,
            })
            .then((response) => {
              let category = response.data;
              store.commit("storeCategory", category);
              this.$router.push({ path: "/subCategory" });
            })
        }
      })
    }
  }
}
</script>

<style scoped>
</style>