<template>
    <br>
        <el-row :lg="24" :md="24" :sd="24">
            <el-col :lg="12" :md="12" :sd="12">
                <CertificateCard v-for="certificate in resume.certificates"
                :id="certificate.id"
                :key="certificate.id"
                :cert-name="certificate.certName"
                :link="certificate.link"
                :start-date="certificate.startDate"
                :end-date="certificate.endDate"
                :cert-description="certificate.edDescription"
                :cert-des-content="certificate.edDesContent"
                @on-remove="removeCertificates"
                @on-update="updateCertificates"
                v-bind="certificate">
                </CertificateCard>
            </el-col>
        </el-row>
        <el-row :lg="24" :md="24" :sd="24">
            <el-col :lg="12" :md="12" :sd="12">
                <practiceComponent  v-for="education in resume.educations"
                          :key="education.id"
                          :id="education.id"
                          :school-name="education.schoolName"
                          :degree="education.degree"
                          :start-date="education.startDate"
                          :end-date="education.endDate"
                          :school-location="education.schoolLocation"
                          :job-description="education.edDescription"
                          :job-des-content="education.edDesContent"
                          @on-remove="removeEducation"
                          @on-update="updateEducation"
                          v-bind="education">
                </practiceComponent>
            </el-col>
        </el-row>
</template>

<script>
import moment from 'moment'
import CertificateCard from '@/components/CertificateCard.vue'
import practiceComponent from '@/components/practiceComponent.vue'

export default {
    components: {
        CertificateCard,
        practiceComponent
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
        addCertificates() {
            // const id = generateHashUniqueID()
            let id=1;
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
        this.resume.certificates.splice(current, 1);
        // this.addCertificates();
        },
        addEducation() {
      const id = 2
      this.resume.educations.push({
        id,
        schoolName: 'School Name Here',
        degree: 'Degree or Subject',
        edDescription: [
          "sad. d"
        ],
        edDesContent: '\u2022 Ed Description here.',
        startDate: moment().format('DD-MM-YYYY'),
        endDate: moment().format('DD-MM-YYYY'),
        schoolLocation: 'Location jere',
      })
      this.edPanels = this.resume.educations.findIndex((e) => e.id === id)
    },
    },
    created(){
    this.addCertificates()
        this.addEducation()
    }
}
</script>