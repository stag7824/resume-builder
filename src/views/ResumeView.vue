<template>
    <br>
    <el-row :span="24" :lg="24" :md="24" :sd="24" :xs="24">
        <!-- Input -->
        <el-col :span="12" :lg="12" :md="12" :sd="24" :xs="24">
            <el-collapse accordion>
                <draggable>
                <!-- Education -->
                <el-collapse-item name="1">
                    <template #title>
                        &nbsp;Education &nbsp;<el-icon>
                            <Reading />
                        </el-icon>
                    </template>
                    <div>
                        <br>
                        <draggable :list="resume.sections[0].educations">
                        <EducationCard v-for="education in resume.sections[0].educations" :key="education.id" :id="education.id"
                            :school-name="education.schoolName" :degree="education.degree" :start-date="education.startDate"
                            :end-date="education.endDate" :school-location="education.schoolLocation"
                            :job-description="education.edDescription" :job-des-content="education.edDesContent"
                            @on-remove="removeEducation" @on-update="updateEducation" v-bind="education">
                        </EducationCard>
                    </draggable>

                    </div>
                    <div style="
                        text-align: center;
                        /* padding-top: 3%; */">
                        <el-button type="Default" @click="addEducation">
                            <el-icon>
                                <CirclePlus />
                            </el-icon>&nbsp; Add More</el-button>
                    </div>
                </el-collapse-item>

                <!-- Certificate  -->
                <el-collapse-item name="2">
                    <template #title>
                        &nbsp;Certificate &nbsp;<el-icon>
                            <Promotion />
                        </el-icon>
                    </template>
                    <div>
                        <br>
                        <draggable :list="resume.sections[2].certificates">
                        <CertificateCard v-for="certificate in resume.sections[2].certificates" :id="certificate.id"
                            :key="certificate.id" :cert-name="certificate.certName" :link="certificate.link"
                            :start-date="certificate.startDate" :end-date="certificate.endDate"
                            :cert-description="certificate.edDescription" :cert-des-content="certificate.edDesContent"
                            @on-remove="removeCertificates" @on-update="updateCertificates" v-bind="certificate">
                        </CertificateCard>
                    </draggable>
                    </div>
                    <div style="
                        text-align: center;
                        /* padding-top: 3%; */">
                        <el-button type="Default" @click="addCertificates">
                            <el-icon>
                                <CirclePlus />
                            </el-icon>&nbsp; Add Certificate</el-button>
                    </div>
                </el-collapse-item>

                <!-- Experience  -->
                <el-collapse-item name="3">
                    <template #title>
                        &nbsp;Experience &nbsp;<el-icon>
                            <StarFilled />
                        </el-icon>
                    </template>
                    <div>
                        <br>
                        <ExperienceCard v-for="experience in resume.sections[1].experiences" :key="experience.id" :id="experience.id"
                            :company-name="experience.companyName" :start-date="experience.startDate"
                            :end-date="experience.endDate" :job-title="experience.jobTitle"
                            :company-location="experience.companyLocation" :job-description="experience.jobDescription"
                            :job-des-content="experience.jobDesContent" @on-remove="removeExperience"
                            @on-update="updateExperience" v-bind="experience">
                        </ExperienceCard>
                    </div>
                    <div style="
                        text-align: center;
                        /* padding-top: 3%; */">
                        <el-button type="Default" @click="addExperience">
                            <el-icon>
                                <CirclePlus />
                            </el-icon>&nbsp; Add Experience</el-button>
                    </div>
                </el-collapse-item>
            
            </draggable>
            </el-collapse>

        </el-col>
        <!-- Preview -->
        <el-col :span="12" :lg="12" :md="12" :sd="24" :xs="24">
            <el-row class="bg-grey-darken-2 pa-4 position-relative" :span="24" :lg="24" :md="24" :sd="24" :xs="24"
                style="text-align: center;">
                <div class="pa-10 bg-white">
                    <div class="page-document" id="document_page">
                        <!-- Preview Starts from here -->
                        <draggable>
                        <!-- Experiences -->
                        <div class="page-section" v-if="resume.sections[1].experiences.length">
                            <div class="page-section-title">
                                EXPERIENCES
                                <div class="page-divider"></div>
                                <div class="page-sub-section" v-for="experience in resume.sections[1].experiences" :key="experience.id">
                                    <div class="page-section-content">
                                        <div class="page-section-content-title-1">
                                            {{ experience.companyName }}
                                        </div>
                                        <div class="page-section-content-title-1">
                                            {{ experience.companyLocation }}
                                        </div>
                                    </div>
                                    <div class="page-section-content">
                                        <div class="page-section-content-title-2">
                                            {{ experience.jobTitle }}
                                        </div>
                                        <div class="page-section-content-title-3">
                                            {{ formatDate(experience.startDate) }} -
                                            {{ formatDate(experience.endDate) }}
                                        </div>
                                    </div>

                                    <div class="page-section-list-group">
                                        <ul>
                                            <li v-for="e in experience.jobDescription" :key="e.id">
                                                {{ e }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Education -->
                        <div class="page-section" v-if="resume.sections[0].educations.length">
                            <div class="page-section-title">
                                EDUCATION
                                <div class="page-divider"></div>
                                <div class="page-sub-section" v-for="education in resume.sections[0].educations" :key="education.id">
                                    <div class="page-section-content">
                                        <div class="page-section-content-title-1">
                                            {{ education.schoolName }}
                                        </div>
                                        <div class="page-section-content-title-1">
                                            {{ education.schoolLocation }}
                                        </div>
                                    </div>
                                    <div class="page-section-content">
                                        <div class="page-section-content-title-2">
                                            {{ education.degree }}
                                        </div>
                                        <div class="page-section-content-title-3">
                                            {{ formatDate(education.startDate) }} -
                                            {{ formatDate(education.endDate) }}
                                        </div>
                                    </div>

                                    <div class="page-section-list-group">
                                        <!-- {{ education.jobDescription }} -->
                                        <ul>
                                            <li v-for="e in education.edDescription" :key="e.id">
                                                {{ e }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Certification -->
                        <div>
                        <div class="page-section" v-if="resume.sections[2].certificates.length">
                            <div class="page-section-title">
                                CERTIFICATIONS
                                <div class="page-divider"></div>
                                <draggable :list="resume.sections[2].certificates" >
                                    <div class="page-sub-section" v-for="cert in resume.sections[2].certificates" :key="cert.id">
                                        <div class="page-section-content">
                                            <div class="page-section-content-title-1">
                                                {{ cert.certName }}
                                            </div>
                                            <div class="page-section-content-title-1">
                                                {{ formatDate(cert.startDate) }} -
                                                {{ formatDate(cert.endDate) }}
                                            </div>
                                        </div>
                                        <div class="page-section-content">
                                            <div class="page-section-content-title-2">
                                                <a style="text-decoration: none; color: black" :href="cert.link"
                                                    target="_blank">
                                                    {{ cert.link }}</a>
                                            </div>
                                        </div>

                                        <div class="page-section-list-group" v-if="cert.certDescription.length">
                                            <!-- {{ education.jobDescription }} -->
                                            <ul>
                                                <li v-for="e in cert.certDescription" :key="e.id">
                                                    {{ e }}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </draggable>
                            </div>
                        </div>
                        </div>
                    </draggable>
                    </div>
                </div>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
import moment from 'moment'
import EducationCard from '@/components/EducationCard.vue'
import ExperienceCard from '@/components/ExperienceCard.vue'
import CertificateCard from '@/components/CertificateCard.vue'
import { VueDraggableNext } from 'vue-draggable-next'


export default {
    components: {
        CertificateCard,
        ExperienceCard,
        EducationCard,
        CertificateCard,
        draggable: VueDraggableNext,
    },
    data() {
        return {
            expPanels: 0,
            edPanels: 0,
            refPanels: 0,
            certPanels: 0,
            defaultPanel: 0,
            
            resume: {
                sections:[
                {id:1, educations:  [] },   //0:  Education   [0]
                {id:2, experiences: [] },   //1:  Experience  [1]
                {id:3, certificates:[] },   //2:  Certificate [2]
            ],
                summary: '',
                personalInfo: {
                    firstname: 'First Name',
                    middlename: '',
                    lastname: 'Last Name',
                    email: 'user@example.com',
                    phone: '+66123456789',
                    jobTitle: 'Manager',
                    nationality: '',
                    address: '123,Home',
                    country: 'Country',
                    city: 'City',
                    postalCode: '10110',
                    dateOfBirth: '20-22-100',
                    linkedin: 'https://linkedin.com/in/name',
                },
                // educations: [],
                // experiences: [],
                // certificates: [],
                skills: [],
                languages: [],
                socialLinks: [],
                references: [],
                portfolios: [],
            },
        }
    },
    methods: {
        formatDate(val) {
            return moment(val).format('MMMM YYYY')
        },
        addCertificates() {
            const id = this.resume.sections[2].certificates.length + 1;
            this.resume.sections[2].certificates.push({
                id,
                certName: 'VUE',
                link: 'link.com.',
                startDate: moment().format('DD-MM-YYYY'),
                endDate: moment().format('DD-MM-YYYY'),
                certDescription: ["Desc Here."],
                certDesContent: '\u2022 Content.',
            })
            this.certPanels = this.resume.sections[2].certificates.findIndex((e) => e.id === id)
        },
        removeCertificates(id) {
            const current = this.resume.sections[2].certificates.findIndex((e) => e.id === id)
            this.resume.sections[2].certificates.splice(current, 1)
        },
        updateCertificates(newData) {
            const index = this.resume.sections[2].certificates.findIndex(
                (e) => e.id === newData.id
            )
            if (index !== -1) {
                this.resume.sections[2].certificates[index] = newData
            }
        },


        addEducation() {
            const id = this.resume.sections[0].educations.length + 1;
            this.resume.sections[0].educations.push({
                id,
                schoolName: 'School',
                degree: 'Degree or Subject',
                edDescription: [
                    "Velit ex ex aliquip eiusmod labore et est occaecat laboris cillum non laborum ullamco Lorem. Duis mollit et ea do elit et deserunt laborum fugiat occaecat consequat minim. In elit ullamco magna officia fugiat sunt cillum amet excepteur esse qui incididunt irure irure. Sunt non irure nulla anim ex minim dolore deserunt."
                ],
                edDesContent: '\u2022 Velit ex ex aliquip eiusmod labore et est occaecat laboris cillum non laborum ullamco Lorem. Duis mollit et ea do elit et deserunt laborum fugiat occaecat consequat minim. In elit ullamco magna officia fugiat sunt cillum amet excepteur esse qui incididunt irure irure. Sunt non irure nulla anim ex minim dolore deserunt.',
                startDate: moment().format('DD-MM-YYYY'),
                endDate: moment().format('DD-MM-YYYY'),
                schoolLocation: 'Location',
            })
            this.edPanels = this.resume.sections[0].educations.findIndex((e) => e.id === id)
        },
        removeEducation(id) {
            const current = this.resume.sections[0].educations.findIndex((e) => e.id === id)
            this.resume.sections[0].educations.splice(current, 1)
        },
        updateEducation(newData) {
            const index = this.resume.sections[0].educations.findIndex((e) => e.id === newData.id)
            if (index !== -1) {
                this.resume.sections[0].educations[index] = newData
            }
        },
        addExperience() {
            const id = this.resume.sections[1].experiences.length + 1;
            this.resume.sections[1].experiences.push({
                id,
                companyName: 'Company.',
                jobTitle: 'Title of the Job.',
                jobDescription: ["Job Desc"],
                jobDesContent: '\u2022 Description.',
                startDate: moment().format('DD-MM-YYYY'),
                endDate: moment().format('DD-MM-YYYY'),
                companyLocation: 'Location',
            })
            this.expPanels = this.resume.sections[1].experiences.findIndex((e) => e.id === id)
        },
        removeExperience(id) {
            const current = this.resume.sections[1].experiences.findIndex((e) => e.id === id)
            this.resume.sections[1].experiences.splice(current, 1)
        },
        updateExperience(newData) {
            const index = this.resume.sections[1].experiences.findIndex(
                (e) => e.id === newData.id
            )
            if (index !== -1) {
                this.resume.sections[1].experiences[index] = newData
            }
        },
    },
    created() {
        this.addCertificates()
        this.addEducation()
        this.addExperience()
    }
}
</script>
<style lang="css" scoped>
.page-document {
    font-family: Arial, sans-serif !important;
    color: black;
    background-color: white;

    padding: 0;
    box-sizing: border-box
}

.page-title {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin-bottom: 8px;
}

.page-role-title {
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    margin-bottom: 8px;
}

.page-subtitle-1 {
    font-size: 12px;
    text-align: center;
    margin-bottom: 8px;
}

.page-section {
    width: 100%;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
}

.page-sub-section {
    margin-bottom: 0.5em;
}

.page-section-content {
    display: flex;
    justify-content: space-between;
}

.page-section-content-title-1 {
    font-weight: bold;
    font-size: 12px;

    margin-bottom: 8px;
}

.page-section-content-title-2 {
    font-weight: 400;
    font-size: 12px;
    font-style: italic;
    margin-bottom: 8px;
}

.page-section-content-title-3 {
    font-weight: 400;
    font-size: 12px;

    margin-bottom: 8px;
}

.page-divider {
    width: 100%;
    background-color: black;
    height: 1.33px;
    margin-bottom: 8px;
}

.page-section-title {
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    margin: 16px 0;
}

.page-summary-text {
    padding: 0;
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 8px;
}

.page-section-list-group ul {}

.page-section-list-group ul,
.page-section-list-group ul li {
    font-weight: 500;
    text-align: left;
    font-size: 12px;
    margin: 0;
    padding: 0;
}

.page-section-child {
    line-break: normal;
    word-break: break-all;
    padding: 0 0;
}

.page-section-list-group {
    line-break: normal;
    word-break: break-all;
    padding: 0 2.5em;
}

.page-list-section {}

.page-regular-section {}

.page-line-between-section {}

.page-ref-section {}

.page-social-section {}

.page-portfolio-section {}</style>