<template>
      <el-menu mode="horizontal">
        <el-menu-item  @click="$router.back()" index="1">
          <el-icon><Back /></el-icon>
          <el-icon><Memo /></el-icon>
          Resume
        </el-menu-item>
  
  
        <!-- <div class="flex-grow" /> -->
        <el-menu-item  @click="$emit('onExport')" index="3">
          Download PDF
        </el-menu-item>
      </el-menu>
  </template>
  
  <script>
  
  export default {
    emits: ['onExport'],
    data() {
      return {
        isDialogOpened: false,
      }
    },
  };
  </script>
  
  <style scoped>
  .flex-grow {
    flex-grow: 1;
  }
  </style>
  