<template>
    <v-app-bar
    app
    :class="{ 'onScroll': !view.topOfPage}"
    >
    <div class="d-flex align-center">
      <v-btn href="#" target="_blank" text   >
       <h1>
        <img src="../assets/logo.png" />
        Store
       </h1>
      </v-btn>
    </div>

    <v-spacer></v-spacer>    
  <!--icon button  -->
    <v-btn   class="nav-menu" @click="tooo"> <v-icon>mdi-view-list</v-icon></v-btn>
  <!-- nav list  -->
  
      <div class="nav-list "  v-if="this.X" >
        <v-menu  v-for='item in items' :key='item.id'>
          <template v-slot:activator="{ on }" >
              <v-btn class="nav-btn small"
                v-on="on" 
                :to="item.route"
              > 
                {{item.name}}
                <v-icon>{{item.icon}}</v-icon>
              </v-btn>
          </template>
          <v-list v-for='element in item.value ' :key='element.id' >
            <v-list-item>
              <v-list-item-title v-if="item.type = Array"> 
                <v-btn class="small-list" :to="element.route">{{ element.ex }}</v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
  </v-app-bar>
</template>
<script>
export default {
  name: 'Header',

  data: () => ({
    items:[
    {name:'Home',value:'' ,type:'text',icon:'',route:'/home'},
    {name:'Signin',value:'',type:'text',icon:'',route:'/Signin'},
    {name:'Signup',value:'',type:'text',icon:'',route:'/Signup'},
    {name:'about',value:'',type:'text',icon:'',route:'/about'},
    {name:'category',value:[
      {ex:'jewelery' ,route:'/jewelery'},
      {ex:'electronics',route:'/jewelery'},],type:'Array',icon:'mdi-menu-down'},
      {name:'products',value:'',type:'text',icon:'',route:'/products'},
    ],

    view: {
        topOfPage: true
      },
      X: true,

    }),
    
  
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods:{
    
    handleScroll(){
      if(window.pageYOffset>20){
        if(this.view.topOfPage) this.view.topOfPage = false
      } else {
        if(!this.view.topOfPage) this.view.topOfPage = true
      }
    },
    tooo(){
      this.X =!this.X
      console.log(this.X)
    }
  }

};
</script>
