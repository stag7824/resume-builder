<template>
    <el-collapse accordion>
        <el-collapse-item>
            <!-- Title for the el-collapse -->
            <template #title>
                <el-col class="pa-0 mx-auto" :lg="24" :md="24" :sd="24" :span="24">
                    <!-- <br> -->
                    <div class="text-caption">{{ currentData.name }} <span v-if="currentData.employer" style="color: grey">({{
                        currentData.employer}})</span></div>
                </el-col>
            </template>
            <!-- Full Name  and Company -->
            <el-row :lg="24" :md="24" :sd="24" :xs="24">
                <el-col :span="12" :lg="12" :xs="24" :sm="12" :md="12">
                    <!-- Full Name -->
                    <el-row :lg="24" :md="24">
                        <el-col :lg="24" :md="24">
                            <div style="text-align:center;">
                                <label>Full Name</label>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :lg="24" :md="24">
                        <el-input v-model="currentData.name" placeholder="Full Name" clearable
                            @input="updateReference"></el-input>
                    </el-row>
                </el-col>
                <!-- Company -->
                <el-col :span="12" :xs="24" :sm="12" :md="12">
                    <el-row :lg="24" :md="24">
                        <el-col :lg="24" :md="24">
                            <div style="text-align:center;">

                                <label>Company</label>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :lg="24" :md="24">
                        <el-input v-model="currentData.employer" placeholder="Company" clearable
                            @input="updateReference"></el-input>
                    </el-row>
                </el-col>
                <!-- For el-textarea, replace v-textarea -->
            </el-row>
            <!-- Email and Phone -->
            <el-row :lg="24" :md="24" :sd="24" :xs="24">
                <!-- Other components inside el-collapse-item -->
                <!-- Email-->
                <el-col :span="12" :lg="12" :xs="24" :sm="12" :md="12">
                    <el-row :lg="24" :md="24">
                        <el-col :lg="24" :md="24">
                            <div style="text-align:center;">
                                <label>Email</label>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :lg="24" :md="24">
                            <el-input v-model="currentData.email" type="text" placeholder="Email" :size="size"
                            clearable @change="updateReference"></el-input>
                    </el-row>
                </el-col>
                <!-- Phone -->
                <el-col :span="12" :xs="24" :sm="12" :md="12">
                    <el-row :lg="24" :md="24">
                        <el-col :lg="24" :md="24">
                            <div style="text-align:center;">
                                <label>Phone</label>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :lg="24" :md="24">
                        <el-input v-model="currentData.phone" type="number" placeholder="Contact Number" :size="size"
                            clearable @change="updateReference"></el-input>
                    </el-row>

                </el-col>
            </el-row>
                <!-- Position Title and Relationship -->
            <el-row :lg="24" :md="24" :sd="24" :xs="24">
                <!-- Other components inside el-collapse-item -->
                <!-- Position Title-->
                <el-col :span="12" :lg="12" :xs="24" :sm="12" :md="12">
                    <el-row :lg="24" :md="24">
                        <el-col :lg="24" :md="24">
                            <div style="text-align:center;">
                                <label>Postition Title</label>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :lg="24" :md="24">
                            <el-input v-model="currentData.title" type="text" placeholder="Postition Title" :size="size"
                            clearable @change="updateReference"></el-input>
                    </el-row>
                </el-col>
                <!-- Relation -->
                <el-col :span="12" :xs="24" :sm="12" :md="12">
                    <el-row :lg="24" :md="24">
                        <el-col :lg="24" :md="24">
                            <div style="text-align:center;">
                                <label>Relationship to this Person</label>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :lg="24" :md="24">
                        <el-input v-model="currentData.relation" type ="text" placeholder="Relationship to this Person" :size="size"
                            clearable @change="updateReference"></el-input>
                    </el-row>

                </el-col>
                <!-- For el-textarea, replace v-textarea -->

            </el-row>
            <br>

            <div style="text-align: center;">
                <el-button type="danger" @click="$emit('onRemove', id)">
                    <el-icon>
                        <Delete />
                    </el-icon>
                    Remove
                </el-button>
            </div>
        </el-collapse-item>
    </el-collapse>
</template>
  
<script>
import moment from 'moment'
import { ref } from 'vue'
const size = ref < 'default' | 'large' | 'small' > ('large')
const activeName = ref('1')

export default {
    props: {
        id: String,
        name: String,
        employer: String,
        email: String,
        phone: String,
        relation:String,
        title:String,
    },
    emits: ['onRemove', 'onUpdate'],
    data() {
        return {
            currentData: {
                id: this.id,
                name: this.name,
                employer: this.employer,
                email: this.email,
                phone: this.phone,
                relation:this.relation,
                title:this.relation
            },
            PREV_LENGTH: 0,
        }
    },

    methods: {
        updateReference() {
            this.$emit('onUpdate', this.currentData)
        },
    },
}
</script>

<style lang="scss" scoped></style>