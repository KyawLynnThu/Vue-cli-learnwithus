<template>
  <div class="row mt-5 pl-md-5">
    <div class="col-md-7">
      <h2 class="mb-3">Reviews</h2>
      <div class="row">
        <div
          class="col-12"
          v-for="showReview in showReviewData"
          :key="showReview.id"
        >
          <div class="card mb-3 bg-light">
            <div class="row no-gutters p-0">
              <div class="col-2 text-left pt-3 pl-3">
                <img
                  src="@/assets/man.png"
                  class="rounded-circle review-cmt-img"
                  alt=""
                />
              </div>
              <div class="col-10">
                <div class="card-body px-md-0 px-sm-0 px-xs-5">
                  <h5 class="card-title font-weight-bolder mb-4">
                    {{ showReview.user_name }}
                  </h5>
                  <p class="card-text pr-3">{{ showReview.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      showReviewData: {
        user_name: "",
        content: "",
      }
    }
  },
  created() {
    axios.get(`comment/course/${this.$route.params.id}`).then((res) => {
      this.showReviewData = res.data.data;
    })
  }
}
</script>

<style scoped>
.review-cmt-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
