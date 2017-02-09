<template>
	<div class="news">
		<ul>
			<li v-for="content in contents" class="news_li">
				<router-link to="/newsarticle" tag="img" :src="content.src" class="news_img"></router-link>
				<router-link to="/newsarticle" class="news_title">{{content.title}}</router-link>
				<p class="news_p">{{content.time}}</p>
			</li>
		</ul>
	</div>	
</template>
<script type="text/javascript">
import {mapGetters} from 'vuex'
	export default {
		data (){
			return {

			}
		},
		created(){
			this.$store.dispatch('changeShow','news')
		},
		computed:{
			...mapGetters({
				contents:'getNews'
			})
		}

	}
</script>
<style scoped>
	.news{padding-top: 10px}
	.news ul{width:984px;margin: 0 auto}
	.news_li{display: inline-block;border: 1px solid #ccc;width: 226px;margin: 10px;box-sizing: border-box;height: 243px;vertical-align: top }
	.news_img{max-width: 100%;height: auto;cursor: pointer;}
	.news_title{word-wrap: break-word;word-break: break-all;color: #111;font-size: 16px;font-weight: bold;margin: 16px 0;display: inline-block;line-height: 20px;height: 40px;}
	.news_p{white-space: nowrap; line-height: 16px;font: 14px;color:#999;text-align: left;padding-bottom: 5px;margin-bottom: 0}
</style>