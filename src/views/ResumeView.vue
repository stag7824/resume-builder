<template>
    <br>
    <el-row :span="24" :lg="24" :md="24" :sd="24" :xs="24">
        <!-- Input -->
        <el-col :span="12" :lg="12" :md="12" :sd="24" :xs="24">
            <el-collapse accordion>
                <draggable>
                     <!-- Personal Info -->
                     <el-collapse-item name="0">
                        <template #title>
                            &nbsp;Personal Info &nbsp;<el-icon>
                                <user />
                            </el-icon>
                        </template>
                        <div>
                            <br>
                            <draggable>
                                <PersonalInfoCard 
                                    :first-name="resume.personalInfo.firstname" :last-name="resume.personalInfo.lastname"
                                    :email="resume.personalInfo.email" :phone="resume.personalInfo.phone"
                                    :job-title="resume.personalInfo.jobTitle" :nationality="resume.personalInfo.nationality"
                                    v-bind="resume.personalInfo"  @on-update="updatePersonalInfo">
                                </PersonalInfoCard>
                            </draggable>
                        </div>
                        <!-- <div style="
                        text-align: center;
                        /* padding-top: 3%; */">
                            <el-button type="default" @click="addEducation">
                                <el-icon>
                                    <CirclePlus />
                                </el-icon>&nbsp; Add More</el-button>
                        </div> -->
                    </el-collapse-item>
                    <!-- Education -->
                    <el-collapse-item name="1">
                        <template #title>
                            &nbsp;Education &nbsp;<el-icon>
                                <Reading />
                            </el-icon>
                        </template>
                        <div>
                            <br>
                            <draggable :list="resume.educations">
                                <EducationCard v-for="education in resume.educations" :key="education.id" :id="education.id"
                                    :school-name="education.schoolName" :degree="education.degree"
                                    :start-date="education.startDate" :end-date="education.endDate"
                                    :school-location="education.schoolLocation" :job-description="education.edDescription"
                                    :job-des-content="education.edDesContent" @on-remove="removeEducation"
                                    @on-update="updateEducation" v-bind="education">
                                </EducationCard>
                            </draggable>
                        </div>
                        <div style="
                        text-align: center;
                        /* padding-top: 1; */">
                            <el-button type="default" @click="addEducation">
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
                            <draggable :list="resume.certificates">
                                <CertificateCard v-for="certificate in resume.certificates" :id="certificate.id"
                                    :key="certificate.id" :cert-name="certificate.certName" :link="certificate.link"
                                    :start-date="certificate.startDate" :end-date="certificate.endDate"
                                    :cert-description="certificate.edDescription"
                                    :cert-des-content="certificate.edDesContent" @on-remove="removeCertificates"
                                    @on-update="updateCertificates" v-bind="certificate">
                                </CertificateCard>
                            </draggable>
                        </div>
                        <div style="
                        text-align: center;
                        /* padding-top: 3%; */">
                            <el-button type="default" @click="addCertificates">
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
                            <draggable :list="resume.experiences">
                                <ExperienceCard v-for="experience in resume.experiences" :key="experience.id"
                                    :id="experience.id" :company-name="experience.companyName"
                                    :start-date="experience.startDate" :end-date="experience.endDate"
                                    :job-title="experience.jobTitle" :company-location="experience.companyLocation"
                                    :job-description="experience.jobDescription" :job-des-content="experience.jobDesContent"
                                    @on-remove="removeExperience" @on-update="updateExperience" v-bind="experience">
                                </ExperienceCard>
                            </draggable>
                        </div>
                        <div style="
                        text-align: center;
                        /* padding-top: 3%; */">
                            <el-button type="default" @click="addExperience">
                                <el-icon>
                                    <CirclePlus />
                                </el-icon>&nbsp; Add Experience</el-button>
                        </div>
                    </el-collapse-item>

                    <!-- Reference  -->
                    <el-collapse-item name="4">
                        <template #title>
                            &nbsp;Reference &nbsp;<el-icon>
                                <Avatar />
                            </el-icon>
                        </template>
                        <div>
                            <br>
                            <draggable :list="resume.experiences">
                                <ReferenceCard v-for="reference in resume.references" :key="reference.id" :id="reference.id"
                                    :name="reference.name" :email="reference.email" :phone="reference.phone"
                                    :relation="reference.relation" :title="reference.title" @on-remove="removeReferences"
                                    @on-update="updateReferences" v-bind="reference">
                                </ReferenceCard>
                            </draggable>
                        </div>
                        <div style="
                        text-align: center;
                        /* padding-top: 3%; */">
                            <el-button type="default" @click="addReference">
                                <el-icon>
                                    <CirclePlus />
                                </el-icon>&nbsp; Add reference</el-button>
                        </div>
                    </el-collapse-item>
                </draggable>
            </el-collapse>

        </el-col>
        <!-- Preview -->
        <el-col :span="12" :lg="12" :md="12" :sd="24" :xs="24">
            <el-row class="bg-grey-darken-2 pa-4 position-relative" :span="24" :lg="24" :md="24" :sd="24" :xs="24"
                style="text-align: center;">
                <div class="pa-10 bg-white" style="width: 100%;padding: 1%;">
                    <div class="page-document" id="document_page" style="width: 100%; ">
                        <!-- Preview Starts from here -->

                        <!-- Personal Info -->
                        <div class="page-title">
                        {{
                            resume.personalInfo.firstname +
                            ' ' +
                            resume.personalInfo.lastname
                        }}
                        </div>
                        <div class="page-role-title">
                        {{ resume.personalInfo.jobTitle }}
                        </div>
                        <div class="page-subtitle-1">
                        <a style="text-decoration: none; color: black" :href="'mailto:' + resume.personalInfo.email">{{
                            resume.personalInfo.email }}</a>
                        |
                        <a style="text-decoration: none; color: black" :href="'tel:' + resume.personalInfo.phone">{{
                            resume.personalInfo.phone }}</a>
                        </div>
                        <div class="page-subtitle-1" v-if="resume.personalInfo.nationality">
                        {{ resume.personalInfo.nationality }}
                        </div>


                        <draggable>
                            <!-- Experiences -->
                            <div class="page-section" v-if="resume.experiences.length">
                                <div class="page-section-title">
                                    EXPERIENCES
                                    <div class="page-divider"></div>
                                    <draggable :list="resume.experiences">
                                        <div class="page-sub-section" v-for="experience in resume.experiences"
                                            :key="experience.id">
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
                                    </draggable>
                                </div>
                            </div>
                            <!-- Education -->
                            <div class="page-section" v-if="resume.educations.length">
                                <div class="page-section-title">
                                    EDUCATION
                                    <div class="page-divider"></div>
                                    <draggable :list="resume.educations">
                                        <div class="page-sub-section" v-for="education in resume.educations"
                                            :key="education.id">
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
                                    </draggable>
                                </div>
                            </div>

                            <!-- Certification -->
                            <div class="page-section" v-if="resume.certificates.length">
                                <div class="page-section-title">
                                    CERTIFICATIONS
                                    <div class="page-divider"></div>
                                    <draggable :list="resume.certificates">
                                        <div class="page-sub-section" v-for="cert in resume.certificates" :key="cert.id">
                                            <div class="page-section-content">
                                                <div class="cert-info">
                                                    <div class="page-section-content-title-1">
                                                        {{ cert.certName }}
                                                    </div>
                                                    <div class="page-section-content-title-1">
                                                        {{ formatDate(cert.startDate) }} - {{ formatDate(cert.endDate) }}
                                                    </div>
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
                            <!-- References -->
                            <div class="page-section" v-if="resume.references.length">
                                <div class="page-section-title">
                                    REFERENCES
                                    <div class="page-divider"></div>
                                    <draggable :list="resume.references">
                                        <div class="page-sub-section" v-for="ref in resume.references" :key="ref.id">
                                            <div class="page-section-content">
                                                <div class="page-section-content-title-1">
                                                    {{ ref.name }}

                                                    <span v-if="ref.employer && ref.title"> {{
                                                        '(' + ref.title + ' - ' + ref.employer + ')'
                                                    }}</span>
                                                    <span v-else-if="ref.title">{{
                                                        '(' + ref.title + ')'
                                                    }}</span>
                                                    <span v-else-if="ref.employer">{{
                                                        '(' + ref.employer + ')'
                                                    }}</span>
                                                </div>
                                            </div>
                                            <div class="page-section-content">
                                                <div class="page-section-content-title-2">
                                                    <a style="text-decoration: none; " v-if="ref.email"
                                                        :href="'mailto:' + ref.email" target="_blank">
                                                        {{ ref.email }}</a>,
                                                    <a style="text-decoration: none; color: black" v-if="ref.phone"
                                                        :href="'tel:' + ref.phone" target="_blank">
                                                        {{ ref.phone }}</a>
                                                </div>

                                                <div class="page-section-content-title-2" v-if="ref.relation">
                                                    {{ ref.relation }}
                                                </div>
                                            </div>

                                        </div>
                                    </draggable>
                                </div>
                            </div>
                        </draggable>

                    </div>
                </div>
            </el-row>
        </el-col>
    </el-row>
</template>ß

<script>
import moment from 'moment'
import EducationCard from '@/components/EducationCard.vue'
import ExperienceCard from '@/components/ExperienceCard.vue'
import CertificateCard from '@/components/CertificateCard.vue'
import { VueDraggableNext } from 'vue-draggable-next'
import ReferenceCard from '@/components/ReferenceCard.vue'
import PersonalInfoCard from '@/components/PersonalInfoCard.vue'

export default {
    components: {
        CertificateCard,
        ExperienceCard,
        EducationCard,
        CertificateCard,
        draggable: VueDraggableNext,
        ReferenceCard,
        PersonalInfoCard,
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
                    lastname: 'Last Name',
                    email: 'user@example.com',
                    phone: '+66123456789',
                    // jobTitle: 'Manager',
                    // nationality: '',
                    // address: '123,Home',
                    // country: 'Country',
                    // city: 'City',
                    // postalCode: '10110',
                    // linkedin: 'https://linkedin.com/in/name',
                },
                educations: [],
                experiences: [],
                certificates: [],
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
        updatePersonalInfo(newData) {
            // debugger
            console.log("🚀 ~ file: ResumeView.vue:405 ~ updatePersonalInfo ~ newData:", newData)
            console.log("🚀 ~ file: ResumeView.vue:406 ~ updatePersonalInfo ~ this.resume.personalInfo:", this.resume.personalInfo)
                this.resume.personalInfo = newData
                console.log("🚀 ~ file: ResumeView.vue:408 ~ updatePersonalInfo ~ this.resume.personalInfo:", this.resume.personalInfo)
                console.log("🚀 ~ file: ResumeView.vue:409 ~ updatePersonalInfo ~ newData:", newData)
        },
        addCertificates() {
            const id = this.resume.certificates.length + 1;
            this.resume.certificates.push({
                id,
                certName: 'VUE',
                link: 'link.com.',
                startDate: moment().format('L'),
                endDate: moment().format('L'),
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
            const id = this.resume.educations.length + 1;
            this.resume.educations.push({
                id,
                schoolName: 'School',
                degree: 'Degree or Subject',
                edDescription: [
                    "Velit ex ex aliquip eiusmod labore et est occaecat laboris cillum non laborum ullamco Lorem. Duis mollit et ea do elit et deserunt laborum fugiat occaecat consequat minim. In elit ullamco magna officia fugiat sunt cillum amet excepteur esse qui incididunt irure irure. Sunt non irure nulla anim ex minim dolore deserunt."
                ],
                edDesContent: '\u2022 Velit ex ex aliquip eiusmod labore et est occaecat laboris cillum non laborum ullamco Lorem. Duis mollit et ea do elit et deserunt laborum fugiat occaecat consequat minim. In elit ullamco magna officia fugiat sunt cillum amet excepteur esse qui incididunt irure irure. Sunt non irure nulla anim ex minim dolore deserunt.',
                startDate: moment().format('L'),
                endDate: moment().format('L'),
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
            const id = this.resume.experiences.length + 1;
            this.resume.experiences.push({
                id,
                companyName: 'Company.',
                jobTitle: 'Title of the Job.',
                jobDescription: ["Job Desc"],
                jobDesContent: '\u2022 Description.',
                startDate: moment().format('L'),
                endDate: moment().format('L'),
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

        // Update Reference
        addReference() {
            const id = this.resume.references.length + 1;
            this.resume.references.push({
                id,
                name: 'Fullname',
                employer: 'Employer',
                email: 'referererHere@referer.com',
                phone: '+12435668998',
                relation: "Manager"
            })
            this.refPanels = this.resume.references.findIndex((e) => e.id === id)
        },
        removeReferences(id) {
            const current = this.resume.references.findIndex((e) => e.id === id)
            this.resume.references.splice(current, 1)
        },
        updateReferences(newData) {
            const index = this.resume.references.findIndex((e) => e.id === newData.id)
            if (index !== -1) {
                this.resume.references[index] = newData
            }
        },
    },
    created() {
        this.addCertificates()
        this.addEducation()
        this.addExperience()
        this.addReference()
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

.empty-state {
    flex-grow: 1;
    background-color: #e0e0e0;
}

.cert-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
}</style>