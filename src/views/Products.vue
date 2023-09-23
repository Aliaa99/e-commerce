<template>
    <div>
      <div>
        <Header />
      </div>
  
      <div>
        <products />
      </div>
  
    </div>
  
  
  </template>
  
  <script>
    import Products from '../components/Products';
    import Header from '../components/header.vue';

    export default {
      name: 'ProductsView',
  
      data: () => ({
        
      }),
  
      components: {
        Products,
        Header
      },
    }
  </script>
  