<template>
    
    <div>
        <v-container>
            <!-- <v-btn @click="gogo()">
                go
            </v-btn> -->
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
                        <v-btn class="general-btn">buy now</v-btn>
                    </div>
                </v-card>
                </v-col>
                    </v-row>
                    </v-container>

    </div>
</template>
<script>
    export default{
        name:'jewelery',
        data:() =>({
            info:''
        }),
        methods:{
            gogo(){
                this.axios.get('https://fakestoreapi.com/products/category/jewelery')
                .then(response =>{
                const { data } = response;
                this.info = data
                console.log(this.info)
            })

            }
        },
        beforeMount() {
            this.gogo()
    },

    }
</script>