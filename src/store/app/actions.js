/*          						  '$&
                                      @R$k
                                    '$!!!M&
                                    @?~~~!$k
                                  '9!!~ ~~!MX
                                  @X~~   `~!$k
                                 9!!      ~~!$X
                                dR!~       `~!$>
                               XR!~         `~!$k:
                              tR!~        ::~~!!MMXXHHHH!!<:.
                             <$!xxiXX!!!~~~~~~~!!MMMMMMMMMMMMMMMXXXXx::
                        .:X@N$$$RMMX!!!!~~~~~~~~!!MMMM@@MMMMMMMMMMMMXMSMMtHHHX!
                  :xiM#"~  <$!~  `~~~!~~~~~~~~~~~!!MX!!!!!??#RR888MMMMMMMMMMMHH
           ..XH@!~`       X$!~                 '~~~!MX!!!!!!!!!!!!?MMR@@$MMMMMM
     :xiM#"~             <$!~                     '~!MM??MMX!!!!!!!!!!!!!!??#R$
XH@M!``                 :$!!                        ~!R:   `~!MM!XH!!!!!!!!!!!!
                       <$!~                         `!!M:        `~"??HHX!!!!!!
                      :$!~                           `!!R:              `!!MMMH
                     '$!~                             `~!8:                   ~
                    :$!!                               ~!!N:
                   '$!~                                 `!!N:
                  .$!!~                                  ~~!&>
                 '@!!~                                    ~!MN
                .$!!~                                     ~~!M&>
               :@$MHHHHHHHHH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!H$N
                 
*/
/*
export function someAction (context) {
}
*/
import axios from 'axios'

const url = 'http://localhost:8000/api';

export function authUserAction (context,payload) {

	const token = Buffer.from(payload.user+":"+payload.pwd, 'utf8').toString('base64')
	return new Promise(function(resolve,reject){
		axios.post(url+'/auth',{},{
		  headers: {
		    'Authorization': 'Basic '+token
		  }
		}).then(function(res){
			let data = {};
			data.user = payload.user;
			data.token = res.data.token;
			//context.commit('app/updateUserMutation', data)
			context.commit('updateUserMutation', data)
			resolve({"success":true,"message":"autenticado com sucesso"});
		}).catch(function (error) {
		    reject(error);
		});
	});
}

export function feedbackAction (context,payload) {

	return new Promise(function(resolve,reject){
		if(!payload.token){
			reject({"message":"parametro token não foi passado"});
		}

		if(!payload.hasOwnProperty('like')){
			reject({"message":"parametro like não foi passado"});
		}

		if(!payload.hasOwnProperty('dislike')){
			reject({"message":"parametro dislike não foi passado"});
		}

		let data = {like:payload.like,
					dislike:payload.dislike};

		axios.post(url+'/feedback',data,{
		  headers: {
		    'Authorization': 'Bearer '+payload.token
		  }
		}).then(function(res){
			resolve({"success":true,"message":"realizado feedback","data":res});
		}).catch(function (error) {
		    reject(error);
		});
	})
}

export function feedbackCountAction (context,payload) {

	return new Promise(function(resolve,reject){
		if(!payload.token){
			reject({"message":"parametro token não foi passado"});
		}

		axios.post(url+'/feedback-count',{},{
		  headers: {
		    'Authorization': 'Bearer '+payload.token
		  }
		}).then(function(res){
			resolve({"success":true,"message":"contagem","data":res});
		}).catch(function (error) {
		    reject(error);
		});
	})
}
