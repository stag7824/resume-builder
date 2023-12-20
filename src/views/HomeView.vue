<template>
  <el-container class="bg-grey-lighten-3" style="height: 100%; width: 100%; display: flex; justify-content: center; align-items: center; padding-top: 10%;">
    <el-row :gutter="20">
      <el-col :span="20" :offset="2" :xs="{ span: 24, offset: 0 }" :sm="{ span: 22, offset: 1 }" :md="{ span: 16, offset: 4 }" :lg="{ span: 12, offset: 6 }">
        <el-card class="box-card" shadow="never" style="background-color: #f5f5f5;">
          <div class="centered-text">
            <h4>Craft Your Career Canvas – Build a Resume that Stands Out!</h4>
          </div>
          <div class="centered-text">
            Transform your professional story with our easy-to-use resume builder. Tailor your experiences into a standout resume with our expert templates and tools. Step into the spotlight with a resume that reflects your unique skills and ambitions. Start crafting your career masterpiece now!
          </div>
          <br/>

          <el-row class="centered-text" style="max-width: 300px; gap: 8px;">
            <!-- Buttons Section -->
            <el-button type="primary" size="large"  @click="goToEditResume">
              New Resume
            </el-button>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </el-container>
</template>


<script>
export default {
  name: 'HomeView',
  methods: {
    goToEditResume() {
      this.$router.push({ name: 'edit.resume' });
    },
  },
}
</script>
<style scoped>
.centered-text {
    text-align: center;
    display: block;
    margin: auto;
}
</style>
