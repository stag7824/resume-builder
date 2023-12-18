<template>
    <!-- <el-collapse accordion> -->
        <!-- <el-collapse-item> -->
            <!-- Title for the el-collapse -->
            <!-- <template #title> -->
                <!-- <el-col class="pa-0 mx-auto" :lg="24" :md="24" :sd="24" :span="24"> -->
                    <!-- <br> -->
                    <!-- <div class="text-caption">{{ currentData.name }} <span v-if="currentData.employer" style="color: grey">({{ -->
                        <!-- currentData.employer}})</span></div> -->
                <!-- </el-col> -->
            <!-- </template> -->
            <!-- First Name and Last Name-->
            <el-row :lg="24" :md="24" :sd="24" :xs="24">
                <el-col :span="12" :lg="12" :xs="24" :sm="12" :md="12">
                    <!-- Full Name -->
                    <el-row :lg="24" :md="24">
                        <el-col :lg="24" :md="24">
                            <div style="text-align:center;">
                                <label>First Name</label>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :lg="24" :md="24">
                        <el-input v-model="currentData.firstname" placeholder="First Name" clearable
                            @input="updatePersonalInfo"></el-input>
                    </el-row>
                </el-col>
                <!-- Company -->
                <el-col :span="12" :xs="24" :sm="12" :md="12">
                    <el-row :lg="24" :md="24">
                        <el-col :lg="24" :md="24">
                            <div style="text-align:center;">

                                <label>Last Name</label>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :lg="24" :md="24">
                        <el-input v-model="currentData.lastname" placeholder="Last Name" clearable
                            @input="updatePersonalInfo"></el-input>
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
                            clearable @change="updatePersonalInfo"></el-input>
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
                            clearable @change="updatePersonalInfo"></el-input>
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
                                <label>Job Title</label>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :lg="24" :md="24">
                            <el-input v-model="currentData.jobTitle" type="text" placeholder="Job Title" :size="size"
                            clearable @change="updatePersonalInfo"></el-input>
                    </el-row>
                </el-col>
                <!-- Nationality -->
                <el-col :span="12" :xs="24" :sm="12" :md="12">
                    <el-row :lg="24" :md="24">
                        <el-col :lg="24" :md="24">
                            <div style="text-align:center;">
                                <label>Nationality</label>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :lg="24" :md="24">
                        <el-input v-model="currentData.nationality" type ="text" placeholder="Nationality" :size="size"
                            clearable @change="updatePersonalInfo"></el-input>
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
        <!-- </el-collapse-item> -->
    <!-- </el-collapse> -->
</template>
  
<script>
import moment from 'moment'
import { ref } from 'vue'
import TextField from './TextField.vue'
const size = ref < 'default' | 'large' | 'small' > ('large')
const activeName = ref('1')

export default {
    components:{
        TextField,
    },
    props: {
        firstname : String,
        lastname : String,
        email : String,
        phone : Number,
        jobTitle : String,
        nationality : String,
        address : String,
        country : String,
        city : String,
        postalCode : String,
        linkedin : String,
    },
    emits: ['onRemove', 'onUpdate'],
    data() {
        return {
            currentData: {
                firstname:this.firstname,
                lastname:this.lastname,
                email:this.email,
                phone:this.phone,
                jobTitle:this.jobTitle,
                nationality:this.nationality,
                address:this.address,
                country:this.country,
                city:this.city,
                postalCode:this.postalCode,
                linkedin :this.linkedin ,
            },
            PREV_LENGTH: 0,
        }
    },

    methods: {
        updatePersonalInfo() {
            this.$emit('onUpdate', this.currentData)
        },
    },
}
</script>

<style lang="scss" scoped>
    
</style>