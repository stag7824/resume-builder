<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <Navbar @on-export="exportPDF" @on-word-export="exportWord" />
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
    exportWord(){
      
      //  var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
      //       "xmlns:w='urn:schemas-microsoft-com:office:word' "+
      //       "xmlns='http://www.w3.org/TR/REC-html40'>"+
      //       "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
      //  var footer = "</body></html>";
      //  var sourceHTML = header+document.getElementById("document_page").innerHTML+footer;;
      //  var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
      //  var fileDownload = document.createElement("a");
      //  document.body.appendChild(fileDownload);
      //  fileDownload.href = source;
      //  const uuid = uuidv4();
      //  fileDownload.download = uuid+'_Resume.doc';
      //  fileDownload.click();
      //  document.body.removeChild(fileDownload);
      const element = document.getElementById('document_page');
  const container = document.createElement('div');
  container.style.width = '100%';
  container.style.display = 'flex';
  container.appendChild(element.cloneNode(true));

  const uuid = uuidv4();
  console.log("uuid", uuid);

  const options = {
    styleMap: (htmlElement) => {
      // Extract and apply styles dynamically based on HTML structure
      const styles = getComputedStyle(htmlElement);
      const styleString = Object.keys(styles)
        .map(key => `${key}:${styles[key]}`)
        .join(';');
      return `p[style-name='${styleString}'] => p:fresh`;
    },
  };

  mammoth.extractRawText({ element: container }, options)
    .then(result => {
      const convertedHtml = result.value;
      const blob = new Blob([`<!DOCTYPE html><html><head><meta charset='UTF-8'></head><body>${convertedHtml}</body></html>`], { type: 'text/html' });

      const file = new File([blob], `${uuid}_resume.docx`, { type: 'application/msword' });

      saveAs(file);
    })
    .catch(error => {
      console.error("Error converting to Word document", error);
    });

    }
  }
}
</script>
