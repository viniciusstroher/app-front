<template>
  <q-page class="column flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
    <div class="row q-mt-xl">
    
       <q-btn color="green" @click="like()" class="q-ma-md">
		    <q-icon left size="2em" name="thumb_up" /> Curtir <span class="q-ml-xs" v-if="feedback.user.like"> <q-icon left size="2em" name="navigate_before" /> </span>
		</q-btn>


		<q-btn color="green" @click="dislike()" class="q-ma-md">
	      <q-icon left size="2em" name="thumb_down" /> Não Curtir <span class="q-ml-xs" v-if="feedback.user.dislike"> <q-icon left size="2em" name="navigate_before" /> </span>
	    </q-btn>

    </div>
    
    <div class="row q-mt-xl">
    	<div class="flex flex-center q-pa-xs">
    		<q-icon left size="2em" name="thumb_up" />
    	</div>
    	<div> Total Curtidas: {{feedback.count.likes}} </div>
    </div>
    
    <div class="row">
    	<div class="flex flex-center q-pa-xs">
    		<q-icon left size="2em" name="thumb_down" />
    	</div>
    	<div> Total Não Curtidas: {{feedback.count.dislikes}} </div>
    </div>
    

    <div class="row q-mt-xl">
    	<q-btn color="red" @click="back()" >
	      <q-icon left size="2em" name="exit_to_app" />Sair 
	    </q-btn>
    </div>
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
  		feedback:{
  			user:{
	  			like:null,
	  			dislike:null
  			},
  			count:{
	  			likes:0,
	  			dislikes:0
	  		}
  		},
  		
  	}
  },
  mounted () {
  	this.feedbackRefresh()
  },
  methods:{
  	
  	like:function(){
  		this.feedback.user.like = true;
  		this.feedback.user.dislike = false;
  		this.feedbackSet(this.feedback.user.like,this.feedback.user.dislike)
  	},
  	
  	dislike:function(){
  		this.feedback.user.dislike = true;
  		this.feedback.user.like = false;
  		this.feedbackSet(this.feedback.user.like,this.feedback.user.dislike)
  	},
  	
  	feedbackRefresh:function(){
  		this.feedbackGet()
  		this.feedbackCount()
  	},

  	feedbackGet:function(){
  		self = this
  		let data = {token:this.$store.getters['app/authUserGetter'].token}
  		
	    this.$store.dispatch('app/feedbackGetAction',data).then(function(){
	    	self.feedback.user.dislike = self.$store.getters['app/feedbackUserGetter'].dislike
	    	self.feedback.user.like = self.$store.getters['app/feedbackUserGetter'].like
	    })
  	},

  	feedbackSet:function(like,dislike){
  		self = this
  		let data = {token:this.$store.getters['app/authUserGetter'].token,
  					like:like,
  					dislike:dislike}

	    this.$store.dispatch('app/feedbackPutAction',data).then(function(){
	    	
	    	self.feedback.user.dislike = self.$store.getters['app/feedbackUserGetter'].dislike
	    	self.feedback.user.like = self.$store.getters['app/feedbackUserGetter'].like
	    	self.feedbackRefresh()
	    	
	    	
	    })

  	},

  	feedbackCount:function(){
  		self = this;
  		let data = {token:this.$store.getters['app/authUserGetter'].token}
	    
	    this.$store.dispatch('app/feedbackCountAction',data).then(function(){
	    	self.feedback.count.dislikes = self.$store.getters['app/feedbackCountGetter'].dislikes
	    	self.feedback.count.likes = self.$store.getters['app/feedbackCountGetter'].likes
	    })
  	},

  	back:function() {
  		//LOGOFF
  		self = this
  		this.$store.dispatch('app/logoutAction').then(function(){
  			self.$router.push("/");
  		});
  		
  	}
  }
}
</script>
