<template>
    <!-- Education -->
    <el-collapse>
        <el-collapse-item>
            <template #title>
                <el-col class="pa-0 mx-auto">
                    <div class="text-caption">{{ currentData.certName }}</div>
                    <div class="text-subtitle-2" style="color: grey">
                        {{ formatDate(currentData.startDate) }} -
                        {{ formatDate(currentData.endDate) }}
                    </div>
                </el-col>
            </template>
            <el-row :lg="24" :md="24" :sd="24" :xs="24">
                <!-- Other components inside el-collapse-item -->
                <el-col :span="12" :lg="24" :xs="24" :sm="12" :md="12">
                    <!-- Title -->
                    <el-row :lg="24" :md="24">
                        <el-col :lg="24" :md="24">
                            <div style="text-align:center;">

                                <label>Title</label>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :lg="24" :md="24">
                        <el-input v-model="currentData.certName" placeholder="Title" clearable
                            @input="updateCertificate"></el-input>
                    </el-row>
                </el-col>
                <!-- Link -->
                <el-col :span="12" :xs="24" :sm="12" :md="12">
                    <el-row :lg="24" :md="24">
                        <el-col :lg="24" :md="24">
                            <div style="text-align:center;">

                                <label>Link</label>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :lg="24" :md="24">
                        <el-input v-model="currentData.link" placeholder="Link" clearable
                            @input="updateCertificate"></el-input>
                    </el-row>

                </el-col>
                <!-- For el-textarea, replace v-textarea -->

            </el-row>



            <el-row :lg="24" :md="24" :sd="24" :xs="24">
                <!-- Other components inside el-collapse-item -->
                <!-- Start Date -->
                <el-col :span="12" :lg="24" :xs="24" :sm="12" :md="12">
                    <el-row :lg="24" :md="24">
                        <el-col :lg="24" :md="24">
                            <div style="text-align:center;">

                                <label>Start</label>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :lg="24" :md="24">

                        <el-date-picker v-model="currentData.startDate" type="date" placeholder="Start Date" :size="size"
                            clearable @change="updateCertificate" />
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
                            clearable @change="updateCertificate" />
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
                        <el-input type="textarea" :rows="10" v-model="currentData.certDesContent" placeholder="Description"
                            @input="handleInput"></el-input>
                    </el-row>
                </el-col>
            </el-row>
            
            <el-button type="danger" @click="$emit('onRemove', id)">
                <el-icon>
                    <Delete />
                </el-icon>
                Remove
            </el-button>
        </el-collapse-item>
    </el-collapse>
</template>
  
<script>
import moment from 'moment'
import { ref } from 'vue'
const size = ref < 'default' | 'large' | 'small' > ('large')


export default {
    props: [
        'id',
        'certName',
        'link',
        'startDate',
        'endDate',
        'certDescription',
        'certDesContent',
    ],
    emits: ['onRemove', 'onUpdate'],
    data() {
        return {
            minLengthRule: [(v) => v.length >= 50 || 'Min 50 characters'],
            currentData: {
                id: this.id,
                certName: this.certName,
                startDate: this.startDate,
                endDate: this.endDate,
                link: this.link,

                certDescription: this.certDescription,
                certDesContent: this.certDesContent,
            },

            PREV_LENGTH: 0,
        }
    },

    methods: {
        handleInput(event) {
            const bullet = '\u2022'
            const newLength = this.currentData.certDesContent.length

            const characterCode = this.currentData.certDesContent
                .substr(-1)
                .charCodeAt(0)

            if (newLength > this.PREV_LENGTH) {
                if (characterCode === 10) {
                    const lines = this.currentData.certDesContent.split('\n')
                    const currentLine = lines[lines.length - 1]
                    const indentation = this.getIndentation(currentLine)
                    this.currentData.certDesContent = `${this.currentData.certDesContent}${indentation}${bullet} `
                } else if (newLength === 1) {
                    this.currentData.certDesContent = `${bullet} ${this.currentData.certDesContent}`
                }
            }
            this.currentData.certDescription = this.currentData.certDesContent
                .replace(/• /g, '')
                .replace(/\n/g, '~~~')
                .split('~~~')

            this.updateCertificate()
            this.PREV_LENGTH = newLength
        },
        getIndentation(line) {
            const match = line.match(/^\s+/)
            return match ? match[0] : ''
        },
        formatDate(val) {
            return moment(val).format('MMMM YYYY')
        },
        updateCertificate() {
            // Emit an event to update the resume data in the parent component
            this.$emit('onUpdate', this.currentData)
        },
    },
}
</script>

<style scoped>
.demo-date-picker {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
}

.demo-date-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    flex: 1;
}

.demo-date-picker .block:last-child {
    border-right: none;
}

.demo-date-picker .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}
</style>