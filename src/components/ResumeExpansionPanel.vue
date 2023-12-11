<template>
    <el-collapse v-model="activeNames">
      <el-collapse-item :name="1">
        <template #title>
          <div class="flex-row align-center">
            <el-icon v-if="icon" :name="icon" />
            <span :class="['ml-2', {'text-uppercase': upperCase}]">{{ title }}</span>
          </div>
        </template>
        <slot/>
      </el-collapse-item>
    </el-collapse>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      icon: String,
      upperCase: Boolean,
    },
    data() {
      return {
        activeNames: [1] // This can be dynamic based on your requirements
      };
    }
  }
  </script>
  
  <style scoped>
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .align-center {
    align-items: center;
  }
  .ml-2 {
    margin-left: 2em;
  }
  .text-uppercase {
    text-transform: uppercase;
  }
  </style>
  