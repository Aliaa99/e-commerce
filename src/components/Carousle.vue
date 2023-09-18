<template>
    <v-carousel hide-delimiters cycle >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    
</template>
<script>
    export default{
        name:'Carousle',
        data: () => ({
        items: [
            {
                src: require('@/assets/images/store2.jpeg'),
            },
            {
                src: require('@/assets/images/store3.jpg'),
            },
            {
                src: require('@/assets/images/store1.jpg'),
            },
            ],
        }),

    }
</script>