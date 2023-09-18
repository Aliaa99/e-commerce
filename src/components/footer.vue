<template>
    <div class="footer" data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
        <v-container>
            <v-row>
                <v-col lg="3" md="4" sm="6" cols="6">
                    <div class="head-title">Company</div>
                    <v-list>
                        <v-list-item-group>

                          <v-list-item v-for="item1 in items1" :key="item1.id">

                            <v-list-item-icon>
                              <v-icon >{{ item1.icon }} </v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                              <v-list-item-title ><v-btn>{{ item1.title }} </v-btn> </v-list-item-title>
                            </v-list-item-content>

                          </v-list-item>

                        </v-list-item-group>
                      </v-list>                  
                </v-col>
                <v-col lg="3" md="4" sm="6" cols="6">
                    <div class="head-title">contact</div>
                    <v-list>
                        <v-list-item-group>

                            <v-list-item class="contact">
                                <v-list-item-icon>
                                  <v-icon class="pr">mdi-map-marker </v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                  <v-list-item-title class="liststyle">123 Street, New York, USA </v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item class="contact">
                                <v-list-item-icon>
                                  <v-icon class="pr">mdi-phone </v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                  <v-list-item-title class="liststyle">+012 345 67890 </v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item class="contact">
                                <v-list-item-icon>
                                  <v-icon class="pr">mdi-email </v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                  <v-list-item-title class="liststyle">info@example.com </v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
            
                        </v-list-item-group>
                      </v-list>   
                      <div class="footer-social">
                        <v-btn><v-icon>mdi-facebook</v-icon></v-btn>
                        <v-btn><v-icon>mdi-youtube</v-icon></v-btn>
                        <v-btn><v-icon>mdi-twitter</v-icon></v-btn>
                        <v-btn><v-icon>mdi-linkedin</v-icon></v-btn>
                      </div>               
                </v-col>
                <v-col lg="3" md="4" sm="6" cols="6">
                    <div class="head-title">Opening</div>
                    <v-list>
                        <v-list-item-group>

                            <v-list-item class="m">
                                <v-list-item-content>
                                  <v-list-item-title class="liststyle">Monday - Saturday
                                    09AM - 09PM
                                     </v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item class="m">
                                <v-list-item-content>
                                  <v-list-item-title class="liststyle">Sunday
                                    10AM - 08PM
                                </v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
            
                        </v-list-item-group>
                      </v-list>   
                </v-col>
                <v-col lg="3" md="4" sm="6" cols="6">
                    <div class="head-title">Newsletter</div>

                        <div class="colorstyle m">
                          Dolor amet sit justo amet elitr clita ipsum elitr est.
                        </div>
                        <div >
                            <v-form>
                                <v-text-field
                                v-model="email"
                                :counter="10"
                                label="your email"
                                required
                                ></v-text-field>                            
                                <v-btn>SIGN UP</v-btn>
                            </v-form>
                        </div>
                </v-col>

            </v-row>
        </v-container>
    </div>
</template>
<script>
    export default({
        name:'Footer',
        data: () =>({
             items1:[{icon:'mdi-menu-right',title:'about'},
                     {icon:'mdi-menu-right',title:'contact'},
                     {icon:'mdi-menu-right',title:'reservation'},
                    ],
                    email:'',
        })
    })
</script>