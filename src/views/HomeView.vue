<template>
  <div>
    <div>
    <carousle />
    </div>
    <div>
      <Categories />
    </div>
 
    <div>
      <products />
    </div>

  </div>


</template>

<script>
  import Carousle from '@/components/Carousle';
  import Categories from '../components/Categories';
  import Products from '../components/Products';

  export default {
    name: 'Home',

    data: () => ({
      
    }),

    components: {
      Carousle,
      Categories,
      Products
    },
  }
</script>
