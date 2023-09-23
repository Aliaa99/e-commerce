<template>
    <v-container>
        <Header />
        <v-row>
            <v-col cols="4" v-for="item in getlist " :key="item.id">
                <v-card >
                    {{ item.id}}
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script> 
import Header from '../components/header.vue'
export default {
    data:() =>({
    }),
    components:{
        Header
    },
    computed:{
        getlist(){
           return this.$store.getters.shopping
        }
    }
}
</script>