<template>
    <el-collapse accordion>
        <el-collapse-item>
            <!-- Title for the el-collapse -->
            <template #title>
                <el-col class="pa-0 mx-auto">
                    <!-- <br> -->
                    <div class="text-caption">{{ currentData.schoolName }} <span style="color: grey">({{
                        formatDate(currentData.startDate) }} -
                            {{ formatDate(currentData.endDate) }})</span></div>
                </el-col>
            </template>
            <!-- School Name and Degree -->
            <el-row :lg="24" :md="24" :sd="24" :xs="24">
                <el-col :span="12" :lg="12" :xs="24" :sm="12" :md="12">
                    <!-- Title -->
                    <el-row :lg="24" :md="24">
                        <el-col :lg="24" :md="24">
                            <div style="text-align:center;">

                                <label>School Name</label>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :lg="24" :md="24">
                        <el-input v-model="currentData.schoolName" placeholder="School Name" clearable
                            @input="updateEducation"></el-input>
                    </el-row>
                </el-col>
                <!-- Degree -->
                <el-col :span="12" :xs="24" :sm="12" :md="12">
                    <el-row :lg="24" :md="24">
                        <el-col :lg="24" :md="24">
                            <div style="text-align:center;">

                                <label>Degree</label>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :lg="24" :md="24">
                        <el-input v-model="currentData.degree" placeholder="Degree" clearable
                            @input="updateEducation"></el-input>
                    </el-row>
                </el-col>
                <!-- For el-textarea, replace v-textarea -->
            </el-row>
            <!-- Start and End -->
            <el-row :lg="24" :md="24" :sd="24" :xs="24">
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
                            clearable @change="updateEducation" />
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
                            clearable @change="updateEducation" />
                    </el-row>
                </el-col>
                <!-- For el-textarea, replace v-textarea -->
                <!-- Location -->
            </el-row>
            <br>
            <el-row :lg="24" :md="24" :sd="24" :xs="24">
                <el-col :lg="24" :xs="24" :sm="24" :md="24">
                    <el-input v-model="currentData.schoolLocation" placeholder="Location" clearable
                        @input="updateEducation"></el-input>
                </el-col>
            </el-row>
            <el-row :lg="24" :md="24" :sd="24" :xs="24">
                <!-- School Description -->
                <el-col :lg="24" :xs="24" :sm="24" :md="24">
                    <el-row :lg="24" :md="24">
                        <el-col :lg="24" :md="24">
                            <div style="text-align:center;">

                                <label>Job Description</label>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :lg="24" :md="24">
                        <el-input type="textarea" :rows="10" v-model="currentData.edDesContent" placeholder="Description"
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
    props: {
        // 'id',
        // 'schoolName',
        // 'degree',
        // 'startDate',
        // 'endDate',
        // 'schoolLocation',
        // 'edDescription',
        // 'edDesContent',
        id: String,
        schoolName: String,
        degree: String,
        startDate: String,
        endDate: String,
        schoolLocation: String,
        edDescription: String,
        edDesContent: String,
    },
    emits: ['onRemove', 'onUpdate'],
    data() {
        return {
            currentData: {
                id: this.id,
                schoolName: this.schoolName,
                startDate: this.startDate,
                endDate: this.endDate,
                degree: this.degree,
                schoolLocation: this.schoolLocation,
                edDescription: this.edDescription,
                edDesContent: this.edDesContent,
            },

            PREV_LENGTH: 0,
        }
    },

    methods: {
        handleInput(event) {
            const bullet = '\u2022'
            const newLength = this.currentData.edDesContent.length

            const characterCode = this.currentData.edDesContent
                .substr(-1)
                .charCodeAt(0)

            if (newLength > this.PREV_LENGTH) {
                if (characterCode === 10) {
                    const lines = this.currentData.edDesContent.split('\n')
                    const currentLine = lines[lines.length - 1]
                    const indentation = this.getIndentation(currentLine)
                    this.currentData.edDesContent = `${this.currentData.edDesContent}${indentation}${bullet} `
                } else if (newLength === 1) {
                    this.currentData.edDesContent = `${bullet} ${this.currentData.edDesContent}`
                }
            }
            this.currentData.edDescription = this.currentData.edDesContent
                .replace(/• /g, '')
                .replace(/\n/g, '||')
                .split('||')

            this.updateEducation()
            this.PREV_LENGTH = newLength
        },
        getIndentation(line) {
            const match = line.match(/^\s+/)
            return match ? match[0] : ''
        },
        formatDate(val) {
            return moment(val).format('MMMM YYYY')
        },
        updateEducation() {
            // Emit an event to update the resume data in the parent component
            this.$emit('onUpdate', this.currentData)
        },
    },
}
</script>

<style lang="scss" scoped></style>