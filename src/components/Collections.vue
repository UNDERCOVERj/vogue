<template>
	<div>
		<div class="collections">
			<div v-for="i in 25">
				<img :src="'../static/images/'+i+'.jpg'"/>
			</div>
		
		</div>
		
	</div>
	

</template>
<script type="text/javascript">
	export default {
		data (){
			return {
				
			}
		},
		
		created(){
			this.$store.dispatch('changeShow','collections');
			
		}
	}
</script>
<style scoped>
	.collections{width:1000px;column-count: 4;-moz-column-count: 4;-webkit-column-count: 4;margin: 20px auto}
	.collections div{padding-bottom: 15px}
</style>