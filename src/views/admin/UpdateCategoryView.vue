<template>
  <div>
    <div class="wrapper d-flex align-items-stretch">
      <admin-sidebar />
      <div id="content" class="p-4 p-md-5">
        <admin-navi />
        <update-subcategory />
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/Common/AdminSidebar"
import AdminNavi from "@/components/Common/AdminNavi"
import UpdateSubcategory from "@/components/Admin/Categories/UpdateSubcategory"

export default {
  components: {
    AdminSidebar,
    AdminNavi,
    UpdateSubcategory
  }
}
</script>

<style scoped>
</style>