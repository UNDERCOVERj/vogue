<template>
	<div class="home_first">
		<div class="home_first_content">
			<img :src="contents.src" alt="src"/>
			<p><strong>The brand name:</strong><span>{{contents.name}}</span></p>
			<p><strong>The brand time:</strong><span>{{contents.time}}</span></p>
			<p><strong>The brand person:</strong><span>{{contents.person}}</span></p>
			<p><strong>The brand story:</strong><span>{{contents.story}}</span></p>
		</div>
		<div class="home_first_content">
			<p><strong>The brand name:</strong><span>{{contents.name}}</span></p>
			<p><strong>The brand time:</strong><span>{{contents.time}}</span></p>
			<p><strong>The brand person:</strong><span>{{contents.person}}</span></p>
			<p><strong>The brand story:</strong><span>{{contents.story}}</span></p>
		</div>
		<div class="home_first_content">
			<p><strong>The brand name:</strong><span>{{contents.name}}</span></p>
			<p><strong>The brand time:</strong><span>{{contents.time}}</span></p>
			<p><strong>The brand person:</strong><span>{{contents.person}}</span></p>
			<p><strong>The brand story:</strong><span>{{contents.story}}</span></p>
		</div>
	</div>
</template>
<script type="text/javascript">
import {mapGetters} from 'vuex'
	export default {
		data(){
			return {
				type:null
			}
		},
		created(){
			this.type=this.$route.params.id;
			this.$store.dispatch('changeShow',this.$route.params.id)
			this.$store.dispatch('changeNowbrand',this.$route.params.id);
		},
		watch:{
			$route(){
				this.type=this.$route.params.id;
				this.$store.dispatch('changeShow',this.$route.params.id)
				this.$store.dispatch('changeNowbrand',this.$route.params.id)
			}
		},
		computed:{
			...mapGetters({
				contents:'getIntro'
			})
		
		}
	}
</script>
<style scoped>
	.home_first{margin-right: 400px;}
	.home_first_content{width: 700px;margin:0 auto;}
	.home_first_content img{width: 100px;height: 100px}
</style>