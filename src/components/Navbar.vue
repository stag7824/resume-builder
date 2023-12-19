<template>
      <el-menu mode="horizontal">
        <el-menu-item  v-if="$route.name == 'edit.resume'"  @click="$router.back()" index="1">
          <el-icon><Back /></el-icon>
          <el-icon><Memo /></el-icon>
          Resume
        </el-menu-item>
        
        <!-- <div class="flex-grow" /> -->
        <el-menu-item   v-if="$route.name == 'edit.resume'"  @click="$emit('onExport')" index="3">
          Download PDF
        </el-menu-item>
        <el-menu-item   v-if="$route.name == 'edit.resume'"  @click="$emit('onWordExport')" index="4">
          Download Word
        </el-menu-item>
      </el-menu>
  </template>
  
  <script>
  
  export default {
    emits: ['onExport', 'onWordExport'],
    data() {
      return {
      }
    },
  };
  </script>
  
  <style scoped>
  .flex-grow {
    flex-grow: 1;
  }
  .resume-menu {
  margin: 0 20px; /* Adds 20px margin on both sides */
  padding: 0 10px; /* Adds 10px padding on both sides (optional) */
}

  </style>
  