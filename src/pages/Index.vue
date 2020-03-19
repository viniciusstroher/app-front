<template>
  <q-page class="column flex flex-center">
    
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
    
    <q-form method="post" ref="loginForm">
    	<div align="center">Login</div>
	   <q-input color="teal" filled v-model="user.user" label="Usuário" class="q-pa-md">
        <template v-slot:prepend>
          <q-icon name="accessibility" />
        </template>
       </q-input>

       <q-input  color="teal" filled v-model="user.pwd" type="password" label="Password" class="q-pa-md">
        <template v-slot:prepend>
          <q-icon name="vpn_key" />
        </template>
       </q-input>
       <div align="center">
	       
	    </div>
       <div align="center">
	       <q-btn color="green" @click="submit()" >
		      Autenticar
		    </q-btn>
	    </div>
	</q-form>
		

	<q-dialog v-model="errorDialogOpen">
      <q-card>
        <q-card-section>
          <div class="text-h6">Usuario Invalido</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
         	{{msgError}}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import {
	Quasar,
	QForm,
	QInput,
	QBtn,
	QDialog
} from 'quasar'

export default {
  name: 'PageIndex',
  Components:{
  	QForm,QInput,QBtn
  },

  data(){
  	return {
  		user:{
  			user:'',
  			pwd:'',
  		},
  		msgError:'',
  		errorDialogOpen:false,
  	}
  },

  methods:{
  	
  	showDialog:function(msg){
  		this.msgError = msg;
		this.errorDialogOpen = true
  	},
  	
  	closeDialog(){
  		this.errorDialogOpen = false
  	},

    submit:function(evt){
    	//console.log(this.$axios);
		if(!this.user.user || !this.user.pwd){
			this.showDialog("Usuario e Senha devem ser preenchidos")
		}else{
			self = this;
			// console.log(this.$store.dispatch('app/feedbackCountAction',this.user))
			this.$store.dispatch('app/authUserAction',this.user).then(function(){
				self.user.user = "";
				self.$router.push("/main")
			}).catch(function(){
				self.showDialog("Usuario invalido")
			});
		}
    },
  }
}
</script>
