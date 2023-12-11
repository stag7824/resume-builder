<template>
    <el-row class="mt-2" align="middle">
        <el-col :span="24">
            <TextField v-if="firstFieldLabel && firstFieldName"
                :id="`${panelName.toLowerCase()}-${firstFieldName.toLowerCase()}-${id}`" :name="firstFieldName"
                :label="firstFieldLabel" v-model="componentData[`${firstFieldName}`]" @input="onInput" />

            <TextField v-if="secondFieldLabel && secondFieldName"
                :id="`${panelName.toLowerCase()}-${secondFieldName.toLowerCase()}-${id}`" :name="secondFieldName"
                :label="secondFieldLabel" v-model="componentData[`${secondFieldName}`]" @input="onInput" />

            <el-button type="text" icon="el-icon-delete" circle @click="$emit('onRemove', id)" />
        </el-col>
    </el-row>
</template>
  
<script>
import TextField from '@/components/TextField.vue';

export default {
    props: {
        id: [String, Number],
        label: String,
        firstFieldName: String,
        firstFieldLabel: String,
        secondFieldName: String,
        secondFieldLabel: String,
        panelName: {
            type: String,
            default: 'double-text-field'
        },
        value: String
    },
    components: {
        TextField
    },
    methods: {
        onInput(value) {
            this.componentData = {
                ...this.componentData,
                [value.name]: value.value,
                id: this.id
            };
            this.$emit('on-update', this.componentData);
        }
    },
    created() {
        this.componentData = {};
    },
    data() {
        return {
            componentData: {
                id: this.id
            }
        };
    }
};
</script>
 
  