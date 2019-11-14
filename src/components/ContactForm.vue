<template>
  <div class="contact-form">
    <h1>{{ msg }}</h1>
    <form action>
      <input type="text" class="input" placeholder="name" />
      <input type="text" class="input" placeholder="email" />
      <textarea type="text" class="textarea" placeholder="message"></textarea>
      <button class="button is-primary" @click="alert">Envoyer</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  props: {
    msg: String
  },
  methods: {
    alert() {
      this.$buefy.dialog.alert("Everything looks fine!");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$colorDefault: blue;


.contact-form {
  border: 1px solid $colorDefault;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  form {
    display: flex;
    flex-direction: column;
    input,
    textarea {
      margin: 0.5rem 0;
    }
  }
}
</style>
