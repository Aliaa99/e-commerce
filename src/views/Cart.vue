<template>
    <v-container>
        <Header />
        <v-row>
            <v-col cols="4" v-for="item in getlist " :key="item.id">
                <v-card class="product-item">
                    <div>
                        <img :src="item.image" >
                    </div>
                    <div>
                        <h5>{{item.title}}</h5>
                        <p>{{item.price}} $</p>    
                    </div>
                </v-card>
            </v-col>
        </v-row>
            <h1>
            Total =  {{ getprice }} $
            </h1>            
    </v-container> 
</template>
<script> 
import Header from '../components/header.vue'
export default {
    data:() =>({
        x:'',
        y:0,
    }),
    components:{
        Header
    },
    computed:{
        getlist(){
           return this.x= this.$store.getters.shopping
        },
        getprice(x){
            for(let i=0 ;i<this.x.length;i++ ){
               this.y= this.x[i].price + this.y 
               console.log(this.y)

            }
            console.log(this.y)
            return this.y

        }
    }
}
</script>