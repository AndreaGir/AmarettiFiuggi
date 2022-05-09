<template>
    <section class="products_section">
    <Header/>
    <main>
      Prodotti
    </main>
    <Footer/>
  </section>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Main from '../components/Main.vue';

export default {
    name: 'Products',

    components: {
      Header,
      Footer,
        Main
    } 
}
</script>

<style>
</style>