<template>
    <v-container>
        <v-row>
            <v-col cols="6">
                <img src="../assets/logo.png">
            </v-col>
                <v-col cols="6">
                    <v-form class="signin">
                        <h1>SIGN IN</h1>
                        <v-text-field label="email" v-model="details.email">      
                        </v-text-field>
                        <v-text-field label="password" type="password" v-model="details.password">
                        </v-text-field>

                        <v-btn type="submit" @click="login()">
                            signin
                        </v-btn>
                    </v-form>
                </v-col>
        </v-row>
    </v-container>
</template>
<script>
import axios from 'axios';
  export default {
    // props:{
    //     isAuthenticated:false
    // },
    name: 'signin',
    data: () => ({
        details:{email:"" , password:""},
    }),
    methods:{
        login(){
        this.axios.post('https://reqres.in/api/login',{ ...this.details}).then((res) => {
            const { data } = res;
            localStorage.setItem("token", data.token);
            // this.$store.commit('TOGGLE_NAV',true);
            this.$router.push('/');

       
            })

        }, 
        
    },
    computed: {
        // isAuthenticated() {
        //     return localStorage.getItem('token') ? true : false
        // }
    }
    
       
    

 }
</script>