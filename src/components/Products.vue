<template>
    <v-container>
        <h1 class="mainhead"> Products </h1>
        <v-row>
            <v-col cols="3" 
               v-for="item in info" :key="item.id">
                <v-card class="product-item">
                    <div>
                        <img :src="item.image" >
                    </div>
                    <div>
                        <h5>{{item.title}}</h5>
                        <p>{{item.price}} $</p>    
                        <v-btn @click="getproduct(item)" class="general-btn">buy now</v-btn>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
 export default{
    name :'Products',
    data:() =>({
        info:'',
        oneproduct:[],
        oneproductid:''
    }),
    methods:{
        Products(){
            this.axios.get('https://fakestoreapi.com/products')
            .then(response =>{
            const { data } = response;
            this.info = data
            console.log(this.info)
            })
        },
        getproduct(item){
        this.oneproductid=item.id;
        console.log(this.oneproductid)
        this.oneproduct=item
        console.log(this.oneproduct)
        this.$store.commit('takeproduct',this.oneproduct)
        },
    },
    beforeMount() {
        this.Products()
    },
    
}
 
</script>