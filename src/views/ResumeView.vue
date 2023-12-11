<template>
    <br>
    <el-row :span="24" :lg="24" :md="24" :sd="24" :xs="24">
        <!-- Input -->
        <el-col :span="12" :lg="12" :md="12" :sd="24" :xs="24">
            <el-collapse accordion>

                <!-- Education -->
                <el-collapse-item name="1">
                    <template #title>
                        &nbsp;Education &nbsp;<el-icon><Reading /></el-icon>
                    </template>
                    <div>
                        <br>
                        <EducationCard v-for="education in resume.educations" :key="education.id" :id="education.id"
                            :school-name="education.schoolName" :degree="education.degree" :start-date="education.startDate"
                            :end-date="education.endDate" :school-location="education.schoolLocation"
                            :job-description="education.edDescription" :job-des-content="education.edDesContent"
                            @on-remove="removeEducation" @on-update="updateEducation" v-bind="education">
                        </EducationCard>
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
                        <CertificateCard v-for="certificate in resume.certificates" :id="certificate.id"
                            :key="certificate.id" :cert-name="certificate.certName" :link="certificate.link"
                            :start-date="certificate.startDate" :end-date="certificate.endDate"
                            :cert-description="certificate.edDescription" :cert-des-content="certificate.edDesContent"
                            @on-remove="removeCertificates" @on-update="updateCertificates" v-bind="certificate">
                        </CertificateCard>
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
                <el-collapse-item name="2">
                    <template #title>
                        &nbsp;Experience &nbsp;<el-icon>
                            <StarFilled />
                        </el-icon>
                    </template>
                    <div>
                        <br>
                        <ExperienceCard v-for="experience in resume.experiences" :key="experience.id" :id="experience.id"
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
            </el-collapse>

        </el-col>
        <!-- Preview -->
        <el-col :span="12" :lg="12" :md="12" :sd="24" :xs="24">
            
        </el-col>
    </el-row>
</template>

<script>
import moment from 'moment'
import EducationCard from '@/components/EducationCard.vue'
import ExperienceCard from '@/components/ExperienceCard.vue'
import CertificateCard from '@/components/CertificateCard.vue'
import { ref } from 'vue'

export default {
    components: {
        CertificateCard,
        ExperienceCard,
        EducationCard,
        CertificateCard,
    },
    data() {
        return {
            expPanels: 0,
            edPanels: 0,
            refPanels: 0,
            certPanels: 0,
            defaultPanel: 0,
            resume: {
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
                educations: [],
                experiences: [],
                skills: [],
                certificates: [],
                languages: [],
                socialLinks: [],
                references: [],
                portfolios: [],
            },
        }
    },
    methods:{
        formatDate(val) {
            return moment(val).format('MMMM YYYY')
        },
        addCertificates() {
            const id = 1 
            this.resume.certificates.push({
                id,
                certName: 'VUE',
                link: 'link.com.',
                startDate: moment().format('DD-MM-YYYY'),
                endDate: moment().format('DD-MM-YYYY'),
                certDescription: ["Desc Here."],
                certDesContent: '\u2022 Content.',
            })
            this.certPanels = this.resume.certificates.findIndex((e) => e.id === id)
        },
        removeCertificates(id) {
            const current = this.resume.certificates.findIndex((e) => e.id === id)
            this.resume.certificates.splice(current, 1)
        },
        updateCertificates(newData) {
            const index = this.resume.certificates.findIndex(
                (e) => e.id === newData.id
            )
            if (index !== -1) {
                this.resume.certificates[index] = newData
            }
        },


        addEducation() {
            const id = 1 
            this.resume.educations.push({
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
            this.edPanels = this.resume.educations.findIndex((e) => e.id === id)
        },
        removeEducation(id) {
            const current = this.resume.educations.findIndex((e) => e.id === id)
            this.resume.educations.splice(current, 1)
        },
        updateEducation(newData) {
            const index = this.resume.educations.findIndex((e) => e.id === newData.id)
            if (index !== -1) {
                this.resume.educations[index] = newData
            }
        },
        addExperience() {
            const id = 1 
            this.resume.experiences.push({
                id,
                companyName: 'Company.',
                jobTitle: 'Title of the Job.',
                jobDescription: ["Job Desc"],
                jobDesContent: '\u2022 Description.',
                startDate: moment().format('DD-MM-YYYY'),
                endDate: moment().format('DD-MM-YYYY'),
                companyLocation: 'Location',
            })
            this.expPanels = this.resume.experiences.findIndex((e) => e.id === id)
        },
        removeExperience(id) {
            const current = this.resume.experiences.findIndex((e) => e.id === id)
            this.resume.experiences.splice(current, 1)
        },
        updateExperience(newData) {
            const index = this.resume.experiences.findIndex(
                (e) => e.id === newData.id
            )
            if (index !== -1) {
                this.resume.experiences[index] = newData
            }
        },
    },
    created(){
        this.addCertificates()
        this.addEducation()
        this.addExperience()
    }
}
</script>