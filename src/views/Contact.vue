<template>
  <div class="contact">
    <ContactForm msg="Contactez-nous"/>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'contact',
  components: {
    ContactForm
  }
}
</script>