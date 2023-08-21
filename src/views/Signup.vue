<template>
    <v-container>
        <v-row>
            <v-col cols="6">
                <img src="../assets/logo.png">
            </v-col>
            <v-col cols="6">
                <v-form class="Signup">
                    <h1>SIGN UP</h1>
                    <v-text-field label="email" v-model="email">      
                    </v-text-field>
                    <v-text-field label ="password"  type="password" v-model="pass">
                    </v-text-field>

                    <v-btn type="submit" @click="Signup()">
                        Signup
                    </v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
   export default{
    name:'Signup',
    data: () => ({
        details:{email:"" , password:""} 
    }),

   }
</script>