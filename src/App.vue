<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <Navbar @on-export="exportPDF" />
  <router-view />
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import html2pdf from 'html2pdf.js'
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {}
  },
  computed: {

  },
  methods: {
    generateUniqueId() {
      const timestamp = new Date().getTime().toString(16);
      const randomString = Math.random().toString(16).substring(2);
      const uniqueId = timestamp + randomString;
      return uniqueId;
    },
    exportPDF() {
      const element = document.getElementById('document_page')
      const container = document.createElement('div')
      container.style.width = '100%'
      container.style.display = 'flex'
      container.appendChild(element.cloneNode(true))
      const uuid = uuidv4();
      console.log("uuid",uuid)
      const opt = {
        margin: 0.5,
        filename: uuid+'_resume.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
          letterRendering: true,
          useCORS: true,
          logging: true,
          scale: 2,
        },
        pagebreak: { mode: 'css' },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      }

      html2pdf().from(container).set(opt).save()
    },
  }
}
</script>
