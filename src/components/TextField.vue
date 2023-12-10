<template>
    <el-input
      :id="id"
      :placeholder="label"
      :name="name"
      :prefix-icon="icon"
      @input="onInput"
      clearable
    />
  </template>
  
  <script>
  export default {
    props: {
      id: String,
      name: String,
      label: String,
      value: String,
      icon: String,
    },
    methods: {
      onInput(value) {
        this.$emit('onInput', value);
      },
    },
  }
  </script>
  