<template>
	<div class="shoppingItem">
		<div class="item_left">
			<img :src="item.src" alt="item" class="item_img"/>
		</div>
		<div class="item_right">
			<h1>{{item.title}}</h1>
			<p>
				<label>描述： </label>
				<span class="desc">{{item.description}}</span>
			</p>
			<div>
				<label>尺寸：</label>
				<span class="size" v-for="(size,index) in item.sizes" @click="changeSize(index)" :class="{isselected:item.size===size}">{{size}}</span><!-- 点击改变尺寸 -->
			</div>
			<div>
				<label>颜色：</label>
				<span class="size" v-for="(color,num) in item.colors" @click="changeColor(num)" :class="{isselected:item.color===color}">{{color}}</span>
			</div>
			<div>
				<label>数量：</label>
				<span class="subtract" @click="changeNumSub" :class="{disabled:item.num<=1}">-</span>
				<input type="text" class="input_num" :value="item.num" disabled/>
				<span class="add" @click="changeNumAdd" :class="{disabled:item.num>=8}">+</span>
			</div>
			<div class="addToCart">
				<span class="addToCart_btn"  @click="addToCart" v-if="!!this.item.color&&!!this.item.size"><router-link to="/cart">加入购物车</router-link></span>
				<p class="addToCart_layout" v-if="!this.item.color||!this.item.size">加入购物车</p>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import {mapGetters} from 'vuex'
	export default {
		data (){
			return {

			}
		},
		computed:{
			...mapGetters({
				item:'getSelectedItem'
			}),
			

		},
		methods:{
			changeSize(index){
				this.$store.dispatch('changeSize',index)
			},
			changeColor(num){
				this.$store.dispatch('changeColor',num)
			},
			changeNumSub(){
				if(this.item.num>1){
					this.$store.dispatch('changeNumSub')
				}
				
			},
			changeNumAdd(){
				if(this.item.num<8){
					this.$store.dispatch('changeNumAdd')
				}
			},
			addToCart(){
				if(!!this.item.color&&!!this.item.size){
					this.$store.dispatch('addToCart')
				}
			}
		}
	}
</script>
<style>
	.shoppingItem{width: 900px;min-height: 500px;margin: 30px auto}
	.shoppingItem:after{clear: both;content:"";display: block;width: 0;height: 0;}
	.item_left{float:left;width: 400px}
	.item_img{width: 400px;height: 400px;border: none}
	.item_right{float:right;width: 480px}
	.item_right h1{font-size: 20px;font-weight: bold;margin-bottom: 10px;line-height: 22px}
	label{display: inline-block;color:#111;font-size: 16px;padding-right: 20px;line-height: 16px;vertical-align: top;}
	.item_right div{margin: 20px 0;height: 20px;border-top:1px solid #00BC9B;padding-top:20px;}
	.item_right .desc{font-size:12px;font-weight: 400;color:#666;display: inline-block;width: 370px;word-break: break-all;}
	.item_right .size{cursor: pointer;margin-right: 5px;display: inline-block;width: 40px;text-align: center;box-sizing: border-box;height: 24px;line-height: 20px;font-size: 16px}
	.item_right .size:hover{border: 1px solid #00BC9B;}
	.item_right .isselected{border: 1px solid #00BC9B;}
	 .subtract{display: inline-block;height: 25px;width: 25px;line-height: 25px;text-align: center;background: #ccc;cursor: pointer;font-weight: bold;font-size: 20px;color: black}
	 .add{display: inline-block;height: 25px;width: 25px;line-height: 25px;text-align: center;background: #ccc;cursor: pointer;font-weight: bold;font-size: 20px;color:black;}
	 .input_num{display: inline-block;width: 25px;height: 22px;vertical-align: top;}
	 .addToCart_btn{display: inline-block;}
	.addToCart_btn a{display: inline-block;height: 50px;line-height: 50px;width: 150px;text-align: center;font-size:20px;background:  #00BC9B;border-radius: 5px;cursor: pointer;}
	.addToCart_layout{width: 150px;height: 50px;z-index: 10;top:20px;color:#fff; cursor: not-allowed;background: #ededed;text-align: center;line-height: 50px;border-radius: 5px;}
</style>