<template>
  <section class="home_section">
    <Header/>
    <main>
        Home
    </main>
    <Footer/>
  </section>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
    name: "Home",

    components: {
      Header,
      Footer
    } 
}
</script>

<style>

</style>