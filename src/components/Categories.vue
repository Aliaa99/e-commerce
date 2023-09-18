<template>
    <div class="Categories">
        <v-container>
            <h1 class="mainhead"> Categories</h1>
            <v-row>
                <v-col col-lg-3 col-md-4
                v-for="item in info" :key="item.id">
                    <!-- <v-btn @click="$router.push(item)">
                        {{ item }}
                    </v-btn> -->
                    <v-btn @click="$router.push('jewelery')">
                        {{ item }}
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
 export default{
    name :'Categories',
    data:() =>({
        info:'',
    }),
    methods:{
        categories(){
            this.axios.get('https://fakestoreapi.com/products/categories')
            .then(response =>{
            const { data } = response;
            this.info = data
            })
        },
    },
    beforeMount() {
        this.categories()
    },
    
}
 
</script>