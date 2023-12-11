<template>
    <br>
    <el-row :span="24" :lg="24" :md="24" :sd="24" :xs="24">
        <!-- Input -->
        <el-col :span="12" :lg="12" :md="12" :sd="24" :xs="24">
            <el-collapse accordion>

                <!-- Education -->
                <el-collapse-item name="1">
                    <template #title>
                        &nbsp;Education &nbsp;<el-icon>
                            <DataBoard />
                        </el-icon>
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
// import { event } from 'vue-gtag'
import EducationCard from '@/components/EducationCard.vue'
import ExperienceCard from '@/components/ExperienceCard.vue'
import CertificateCard from '@/components/CertificateCard.vue'
import { ref } from 'vue'

const activeName = ref('1')

// import { generateHashUniqueID } from '@/helpers'

export default {
    components: {
        ExperienceCard,
        EducationCard,
        // SingleInput,
        // DoubleInput,
        CertificateCard,
        // References,
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
                customSections: [],
            },
        }
    },
    watch: {
        expPanels(val) {
            console.log(val)
        },
    },
    methods: {
        formatDate(val) {
            return moment(val).format('MMMM YYYY')
        },
        addSkills() {
            const id = 1 //generateHashUniqueID()
            this.resume.skills.push({
                id,
                name: 'Skill',
                value: 'Pariatur'
            })
        },
        removeSkills(id) {
            const current = this.resume.skills.findIndex((e) => e.id === id)
            this.resume.skills.splice(current, 1)
        },
        updateSkills(newData) {
            const index = this.resume.skills.findIndex((e) => e.id === newData.id)
            if (index !== -1) {
                this.resume.skills[index] = newData
            }
        },
        addLanguages() {
            const id = 1 //generateHashUniqueID()
            this.resume.languages.push({
                id,
                name: 'Language',
                value: 'Non pariatur nostrud in ea elit sint.'
            })
        },
        removeLanguages(id) {
            const current = this.resume.languages.findIndex((e) => e.id === id)
            this.resume.languages.splice(current, 1)
        },
        updateLanguages(newData) {
            const index = this.resume.languages.findIndex((e) => e.id === newData.id)
            if (index !== -1) {
                this.resume.languages[index] = newData
            }
        },
        addCertificates() {
            const id = 1 //generateHashUniqueID()
            this.resume.certificates.push({
                id,
                certName: 'Sit mollit fugiat ad incididunt.',
                link: 'Consectetur exercitation dolor minim officia consectetur laborum irure et sit culpa.',
                startDate: moment().format('DD-MM-YYYY'),
                endDate: moment().format('DD-MM-YYYY'),
                certDescription: ["Nisi laboris deserunt ipsum enim ullamco excepteur voluptate Lorem et Lorem in magna."],
                certDesContent: '\u2022 Magna culpa est irure laboris.',
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
        addReferences() {
            const id = 1 //generateHashUniqueID()
            this.resume.references.push({
                id,
                name: 'Fullname',
                employer: 'Employer',
                email: 'name@employer.com',
                phone: '+12435668998',
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
        addSoicalLinks() {
            const id = 1 //generateHashUniqueID()
            this.resume.socialLinks.push({
                id,
                value1: 'Name',
                value2: 'Link',
            })
        },
        removeSoicalLinks(id) {
            const current = this.resume.socialLinks.findIndex((e) => e.id === id)
            this.resume.socialLinks.splice(current, 1)
        },
        updateSoicalLinks(newData) {
            const index = this.resume.socialLinks.findIndex(
                (e) => e.id === newData.id
            )
            if (index !== -1) {
                this.resume.socialLinks[index] = newData
            }
        },
        addPortfolios() {
            const id = 1 //generateHashUniqueID()
            this.resume.portfolios.push({
                id,
                value1: 'Name',
                value2: 'Link',
            })
        },
        removePortfolios(id) {
            const current = this.resume.portfolios.findIndex((e) => e.id === id)
            this.resume.portfolios.splice(current, 1)
        },
        updatePortfolios(newData) {
            const index = this.resume.portfolios.findIndex((e) => e.id === newData.id)
            if (index !== -1) {
                this.resume.portfolios[index] = newData
            }
        },
        addEducation() {
            const id = 1 //generateHashUniqueID()
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
            const id = 1 //generateHashUniqueID()
            this.resume.experiences.push({
                id,
                companyName: 'Eiusmod ipsum esse ullamco et.',
                jobTitle: 'Culpa dolore anim Lorem non magna.',
                jobDescription: ["Velit ex ex aliquip eiusmod labore et est occaecat laboris cillum non laborum ullamco Lorem. Duis mollit et ea do elit et deserunt laborum fugiat occaecat consequat minim. In elit ullamco magna officia fugiat sunt cillum amet excepteur esse qui incididunt irure irure. Sunt non irure nulla anim ex minim dolore deserunt."],
                jobDesContent: '\u2022 Velit ex ex aliquip eiusmod labore et est occaecat laboris cillum non laborum ullamco Lorem. Duis mollit et ea do elit et deserunt laborum fugiat occaecat consequat minim. In elit ullamco magna officia fugiat sunt cillum amet excepteur esse qui incididunt irure irure. Sunt non irure nulla anim ex minim dolore deserunt.',
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
        addCustomSection() {
            const id = 1 //generateHashUniqueID()
            this.resume.customSections.push({
                id,
                title: 'Custom Section',
            })
        },
    },

    created() {
        this.defaultPanel = 0
        this.resume.summary = "Excepteur mollit dolor tempor pariatur sunt pariatur. Lorem aute adipisicing aute veniam. Tempor cupidatat culpa excepteur ea dolor sunt exercitation anim incididunt laboris ea labore. Non proident in eiusmod aliqua cupidatat reprehenderit. Magna dolore sit occaecat ullamco eu aliqua ex deserunt veniam."
        this.addExperience()
        this.addExperience()
        this.addEducation()
        this.addEducation()

        this.addCertificates()
        this.addSkills()
        this.addSkills()
        this.addSkills()
        this.addSkills()
        this.addSkills()
        this.addLanguages()
        this.addLanguages()
        this.addLanguages()
        this.addLanguages()
        this.addReferences()
        this.addReferences()
    },
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

.page-portfolio-section {}
</style>
