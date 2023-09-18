<template>
    <v-container>
        <v-row>
            <v-col cols="6">
                <img src="../assets/logo.png">
            </v-col>
            <v-col cols="6">
                <v-form class="Signup">
                    <h1>SIGN UP</h1>
                    <v-text-field label="email" v-model="details.email">      
                    </v-text-field>
                    <v-text-field label ="password"  type="password" v-model="details.password">
                    </v-text-field>

                    <v-btn type="submit" @click="signup()">
                        Signup
                    </v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import axios from 'axios';

  export default {
    name: 'signup',
    data: () => ({
        details:{email:"" , password:""} 
    }),
    methods:{
     signup(){
        this.axios.post('https://reqres.in/api/register',{ ...this.details}).then((res) => {
            const { data } = res;
            localStorage.setItem("token", data.token);
            this.$router.push('/signin');

       
            })
     }
}

 }
</script>