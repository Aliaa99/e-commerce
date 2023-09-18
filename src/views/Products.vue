<template>
    <div>
   
      <div>
        <products />
      </div>
  
    </div>
  
  
  </template>
  
  <script>
    import Products from '../components/Products';
  
    export default {
      name: 'ProductsView',
  
      data: () => ({
        
      }),
  
      components: {
        Products
      },
    }
  </script>
  