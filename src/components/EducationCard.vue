<template>
    
</template>
<script>
import moment from 'moment'

export default {
  props: [
    'id',
    'schoolName',
    'degree',
    'startDate',
    'endDate',
    'schoolLocation',
    'edDescription',
    'edDesContent',
  ],
  emits: ['onRemove', 'onUpdate'],
  data() {
    return {
      minLengthRule: [(v) => v.length >= 50 || 'Min 50 characters'],
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