<template>
	<div class="login">
		<h4 class="login_title">
			 <div class="login_normal_title">
				 <span @click="changeLoginway('login')" :class="{login_active:loginway==='login'}">登录</span>
				 <b>·</b>
				 <span @click="changeLoginway('register')" :class="{login_active:loginway==='register'}">注册</span>
			 </div>
			 <div v-if="loginway==='login'">
				 
				 	<div class="input_div">
					 	<input type="text" placeholder="手机号或邮件箱" class="input_top input_normal">
					</div>
				 	<div class="input_div">
				 		<input type="password" placeholder="密码" class="input_bottom input_normal">
				 	</div>
				 	<div class="forget">
				 		<span>忘记密码？</span>
				 	</div>
				 	<button class="login_button">登录</button>
				

			 </div>
			 <div v-if="loginway==='register'">
				 	<div class="input_div">
					 	<input type="text" placeholder="你的昵称" class="input_top input_normal">
					</div>
				 	<div class="input_div">
				 		<input type="password" placeholder="手机号" class="input_middle input_normal">
				 	</div>
				 	<div class="input_div">
				 		<input type="password" placeholder="输入密码" class="input_bottom input_normal">
				 	</div>
				 	<button class="login_button">注册</button>
			 </div>
		</h4>
	</div>
</template>
<script type="text/javascript">
	import　　{mapGetters} from 'vuex'
	export default {
		computed:{
			...mapGetters({
				loginway:'getLoginway'
			})
		},
		methods:{
			changeLoginway(type){
				this.$store.dispatch('changeLoginway',type)
			}
		},
		created(){
			this.$store.dispatch('changeShow','')
		}
	}
</script>
<style scoped>
	.login{width: 400px;margin: 0 auto 50px;padding: 20px 30px 30px 30px ;border-radius: 4px;box-shadow: 0 0 8px rgba(0,0,0,.1);height: 400px}
	.login_normal_title{text-align: center; font-weight: 400; color: #969696;font-size: 18px;margin-bottom: 20px}
	.login_normal_title span{display: inline-block;padding: 10px;cursor: pointer;box-sizing: border-box;}
	.login_normal_title span:hover{border-bottom: 2px solid #00BC9B;}
	.login_active{color: #00BC9B; border-bottom: 2px solid #00BC9B;}
	.input_div{width: 300px;margin: 0px auto}
	.forget{width: 300px;margin: 20px auto;text-align: right;font-weight: 400; color: #969696;font-size: 12px;}
	.input_top{border: 1px solid #c8c8c8;border-bottom: none;border-radius: 4px 4px 0 0;}
	.input_bottom{border:1px solid #c8c8c8;border-radius:0 0 4px 4px; }
	.input_middle{border: 1px solid #c8c8c8;border-radius: 0;border-bottom: none}
    .input_normal{background-color: hsla(0,0%,71%,.1);width: 100%;padding: 4px 0 4px 15px; height: 50px;box-sizing: border-box;}
	.login_button{display: block;font-size: 18px;color:#fff;background:#00BC9B;border: none;border-radius: 5px;outline: none;width: 300px;height: 43px;line-height: 43px;margin: 30px auto }
</style>