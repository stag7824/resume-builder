<template>
    <el-collapse accordion>
        <el-collapse-item>
            <!-- Title for the el-collapse -->
            <template #title>
                <el-col class="pa-0 mx-auto">
                    <!-- <br> -->
                    <div class="card-header">
                        <h5 class="card-title text-center">
                            {{ currentData.schoolName }} (<span style="color: grey">{{ formatDate(currentData.startDate) }}
                                - {{ formatDate(currentData.endDate) }}</span>)
                        </h5>
                    </div>
                </el-col>
            </template>
            <!-- School Name and Degree -->
            <!-- <el-row :lg="24" :md="24" :sd="24" :xs="24">
                <el-col :span="12" :lg="12" :xs="24" :sm="12" :md="12">
                    Title
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
                Degree
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
            </el-row>
            <el-row :lg="24" :md="24" :sd="24" :xs="24">
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
            </el-row>
            <br>
            <el-row :lg="24" :md="24" :sd="24" :xs="24">
                <el-col :lg="24" :xs="24" :sm="24" :md="24">
                    <el-input v-model="currentData.schoolLocation" placeholder="Location" clearable
                        @input="updateEducation"></el-input>
                </el-col>
            </el-row>
            <el-row :lg="24" :md="24" :sd="24" :xs="24">
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
            </el-row> -->
            <!-- Test -->
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-6">
                        <label>School Name:</label>
                        <input v-model="currentData.schoolName" type="text" class="form-control" placeholder="School Name"
                            clearable @input="updateEducation">
                    </div>
                    <div class="col-sm-6">
                        <label>Degree:</label>
                        <input v-model="currentData.degree" type="text" class="form-control" placeholder="Degree" clearable
                            @input="updateEducation">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <label>Start Date:</label>
                        <el-date-picker v-model="currentData.startDate" type="date" placeholder="Start Date" :size="large"
                            clearable @change="updateEducation" />
                    </div>
                    <div class="col-sm-6">
                        <label>End Date:</label>
                        <el-date-picker v-model="currentData.endDate" type="date" placeholder="End Date" :size="size"
                            clearable @change="updateEducation" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <label>Location:</label>
                        <input v-model="currentData.schoolLocation" type="text" class="form-control" placeholder="Location"
                            clearable @input="updateEducation">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <label>Description:</label>
                        <el-input type="textarea" :rows="10" v-model="currentData.edDesContent" placeholder="Description"
                            @input="handleInput"></el-input>
                    </div>
                </div>
            </div>


            <!-- Remove Button -->
            <div class="card-footer" style="text-align: center;">
                <button type="button" class="btn btn-danger" @click="$emit('onRemove', id)">
                    <i class="bi bi-trash"></i> Remove
                </button>
            </div>
        </el-collapse-item>
    </el-collapse>
</template>
<script>
import moment from 'moment'
import { ref } from 'vue'

const size = ref < 'default' | 'large' | 'small' > ('default')
export default {
    props: {
        id: Number,
        schoolName: String,
        degree: String,
        startDate: String,
        endDate: String,
        schoolLocation: String,
        edDescription: Array,
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
            // debugger
            console.log("event", event);
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
            console.log("🚀 ~ file: EducationCard.vue:180 ~ handleInput ~ this.currentData:", this.currentData)

            this.updateEducation()
            this.PREV_LENGTH = newLength
        },
        getIndentation(line) {
            const match = line.match(/^\s+/)
            return match ? match[0] : ''
        },
        formatDate(val) {
            try {
                return moment(val).format('MMMM YYYY')
            } catch (error) {
                return error;
            }
        },
        updateEducation() {
            // Emit an event to update the resume data in the parent component
            this.$emit('onUpdate', this.currentData)
        },
    },
}
</script>

<style lang="scss" scoped></style>