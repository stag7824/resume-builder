
<template>
    <el-collapse accordion>
        <el-collapse-item>
            <template #title>
                <el-col class="pa-0 mx-auto">
                    <!-- <br> -->
                    <div class="text-caption">{{ currentData.companyName }} <span style="color: grey">({{
                        formatDate(currentData.startDate) }} -
                            {{ formatDate(currentData.endDate) }})</span></div>
                </el-col>
            </template>
            <el-row :lg="24" :md="24" :sd="24" :xs="24">
                <!-- Other components inside el-collapse-item -->
                <el-col :span="12" :lg="12" :xs="24" :sm="12" :md="12">
                    <!-- Company name -->
                    <el-row :lg="24" :md="24">
                        <el-col :lg="24" :md="24">
                            <div style="text-align:center;">
                                <label>Company Name</label>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :lg="24" :md="24">
                        <el-input v-model="currentData.companyName" placeholder="Company Name" clearable
                            @input="updateExperience"></el-input>
                    </el-row>
                </el-col>
                <!-- Link -->
                <el-col :span="12" :xs="24" :sm="12" :md="12">
                    <el-row :lg="24" :md="24">
                        <el-col :lg="24" :md="24">
                            <div style="text-align:center;">
                                <label>Job Title</label>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :lg="24" :md="24">
                        <el-input v-model="currentData.jobTitle" placeholder="Job Title" clearable
                            @input="updateExperience"></el-input>
                    </el-row>
                </el-col>
                <!-- For el-textarea, replace v-textarea -->
            </el-row>

            <el-row :lg="24" :md="24" :sd="24" :xs="24">
                <!-- Other components inside el-collapse-item -->
                <!-- Start Date -->
                <el-col :span="12" :lg="12" :xs="24" :sm="12" :md="12">
                    <el-row :lg="24" :md="24">
                        <el-col :lg="24" :md="24">
                            <div style="text-align:center;">
                                <label>Start</label>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :lg="24" :md="24">
                        <el-date-picker v-model="currentData.startDate" type="date" placeholder="Start Date" :size="size"
                            clearable @change="updateExperience" />
                    </el-row>
                </el-col>
                <!-- End Date -->
                <el-col :span="12" :xs="24" :sm="12" :md="12">
                    <el-row :lg="24" :md="24">
                        <el-col :lg="24" :md="24">
                            <div style="text-align:center;">
                                <label>End</label>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :lg="24" :md="24">
                        <el-date-picker v-model="currentData.endDate" type="date" placeholder="End Date" :size="size"
                            clearable @change="updateExperience" />
                    </el-row>
                </el-col>
                <!-- For el-textarea, replace v-textarea -->
            </el-row>
            <br>
            <el-row :lg="24" :md="24" :sd="24" :xs="24">
                <!-- Job Description -->
                <el-col :lg="24" :xs="24" :sm="24" :md="24">
                    <el-row :lg="24" :md="24">
                        <el-col :lg="24" :md="24">
                            <div style="text-align:center;">
                                <label>Job Description</label>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :lg="24" :md="24">
                        <el-input type="textarea" :rows="10" v-model="currentData.jobDesContent" placeholder="Description"
                            @input="handleInput"></el-input>
                    </el-row>
                </el-col>
            </el-row>
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
import {ref} from 'vue'

const size = ref<'default' | 'large' | 'small'>('default')

export default {
    props: [
        'id',
        'companyName',
        'startDate',
        'endDate',
        'jobTitle',
        'companyLocation',
        'jobDescription',
        'jobDesContent',
    ],
    emits: ['onRemove', 'onUpdate'],
    data() {
        return {
            currentData: {
                id: this.id,
                companyName: this.companyName,
                startDate: this.startDate,
                endDate: this.endDate,
                jobTitle: this.jobTitle,
                companyLocation: this.companyLocation,
                jobDescription: this.jobDescription,
                jobDesContent: this.jobDesContent,
            },

            PREV_LENGTH: 0,
        }
    },

    methods: {
        handleInput(event) {
            const bullet = '\u2022'
            const newLength = this.currentData.jobDesContent.length

            const characterCode = this.currentData.jobDesContent
                .substr(-1)
                .charCodeAt(0)

            if (newLength > this.PREV_LENGTH) {
                if (characterCode === 10) {
                    const lines = this.currentData.jobDesContent.split('\n')
                    const currentLine = lines[lines.length - 1]
                    const indentation = this.getIndentation(currentLine)
                    this.currentData.jobDesContent = `${this.currentData.jobDesContent}${indentation}${bullet} `
                } else if (newLength === 1) {
                    this.currentData.jobDesContent = `${bullet} ${this.currentData.jobDesContent}`
                }
            }
            this.currentData.jobDescription = this.currentData.jobDesContent.replace(/• /g, '').replace(/\n/g, '||').split("||");
            this.updateExperience()
            this.PREV_LENGTH = newLength
        },
        getIndentation(line) {
            const match = line.match(/^\s+/)
            return match ? match[0] : ''
        },
        formatDate(val) {
            return moment(val).format('MMMM YYYY')
        },
        updateExperience() {
            // Emit an event to update the resume data in the parent component
            this.$emit('onUpdate', this.currentData)
        },
    },
}
</script>
