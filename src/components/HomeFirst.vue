<template>
	<div class="home_first">
		<div class="home_first_left" :style="{height:home_first_height+'px'}">
			<h1 :style="{height:home_first_height_margin+'px',lineHeight:home_first_height_margin+'px'}">nigo&kaws</h1>
			<router-link to="/collection" tag="img" src="../static/images/kaws.jpg" alt="kaws" class="kaws"></router-link>
		</div>
		<div class="wrapper" :style="{height:home_first_height+'px'}">
			<ul :class="['shuffling-bar',{trans : open, transnext: openNext, transpre: openPre}]" @mouseover="clear" @mouseout="autoScroll" :style="{top:home_first_height_margin-20+'px'}">
				<li v-for="index in 4" :class="['item', {pre: index == preIndex ,next: index == nextIndex ,current: index == shufflingIndex}]" >
					<img :src="'../static/images/home_'+index+'.jpg'"/>
				</li>
				<div @click="click_next" class="btn left_btn"></div>
				<div @click="click_pre" class="btn right_btn"></div>
				<ul class="round_ul">
					<li v-for="j in 4" class="round_li" :class="{active_round_li:j==shufflingIndex}" @click="round(j)"></li>
				</ul>
			</ul>
			
		</div>
	</div>
</template>
<script type="text/javascript">
import {mapGetters} from 'vuex'
	export default {
		data (){
			return {
				shufflingIndex: 1, //当前元素的index
		        nextIndex: 0, //后一个元素的序列
		        preIndex: 0, //前一个元素的序列
		        open:true,
		        openPre:true,
		        openNext:false,
		        interval_timer:null,
		        timeout_timer:null
			}
		},
		computed:{
			...mapGetters({
				hw:'getHW'
			}),
			 home_first_width:function(){
			 	return parseInt(this.hw.w)-400;			
			},
			home_first_height:function(){
				
				var a= parseInt(this.hw.h)-200
				return a<389?389:a
			},
			home_first_height_margin:function(){
				return parseInt(this.home_first_height-300)/2
			}
		},
		methods:{
			
		      caculateIndex(){ //计算上一个元素和下一个元素的index
		        this.preIndex = this.shufflingIndex - 1 < 1 ? 4: this.shufflingIndex - 1;
		        this.nextIndex = this.shufflingIndex + 1 > 4 ? 1 : this.shufflingIndex + 1;
		      },
		      autoScroll(){
		      	var self=this
		      	this.clear()
		      	this.openNext=false;
			     this.openPre=true;
		      	this.interval_timer=setInterval(self.autoChange,2000)
		      },
		      autoChange(){
		      	if(this.shufflingIndex == 4){
		          	this.shufflingIndex = 1;
		        }else{
		           	this.shufflingIndex++;
		        }	
		        this.caculateIndex();
		      },
		      //向前面移动
		      click_pre(){
		      	
		      	if(this.timeout_timer){
		      		clearTimeout(this.timeout_timer)
		      	}
		      	var self=this;
		      	self.openNext=false;
			     	self.openPre=true;
		      	this.timeout_timer=setTimeout(function(){
		      		
			     	self.autoChange();
		      	},300)	
		      },
		      //向后面移动
		      click_next(){
		      	
		      	if(this.timeout_timer){
		      		clearTimeout(this.timeout_timer)
		      	}
		      	var self=this;
		      	self.openNext=true;
			     	self.openPre=false;
		      	
		      	this.timeout_timer=setTimeout(function(){
			     	self.shufflingIndex=self.shufflingIndex==1?4:self.shufflingIndex-1
			     	self.caculateIndex()
		      	},300)
		      	
		      },
		      clear(){
		      	if(this.interval_timer){
		      		clearInterval(this.interval_timer)
		      	}
		      },
		      round(index){
		      	var self=this
		      	//点击圆点，就相当于点多少次左右键
		        if(this.shufflingIndex<index){
			      	this.openNext=false;
			      	this.openPre=true;
			      		this.interval_timer=setInterval(function(){
			      			if(self.shufflingIndex==index){
			      				self.clear()		
			      			}else{
			      				self.shufflingIndex++;
			      				self.caculateIndex();
			      			}
			      			//必须要用if，else来clear
			      		},200)
			      	      	
		      		
		      	}else if(this.shufflingIndex>index){
		      		
		      		this.openNext=true;
			      	this.openPre=false;
		      		
			      		this.interval_timer=setInterval(function(){
			      			if(self.shufflingIndex==index){
			      				self.clear()
			      			}else{
			      				self.shufflingIndex--;
			      				self.caculateIndex();
			      			}
			      			//必须要用if，else来clear
			      		},200)
			      	 
			      	 	
			      	
		      	}
		      	
		      }
		},
		created(){
			this.$store.dispatch('changeShow','home')
			this.caculateIndex();
			this.autoScroll();
		}
	}
</script>
<style scoped>
	.home_first{overflow: hidden;margin-right: 400px;}
	.home_first:after{display: block;content:"";width: 0;height: 0;clear:both;}
	.home_first_left{float:left;width: 400px;text-align: center;background: #00BC9B}
	.home_first_left h1{text-align: center;font-family: TrashHand;font-size: 32px;
color:darkslateblue;}
	.kaws{border: none;height: 300px;height: 300px}
	.wrapper{margin-left: 400px;}
	.shuffling-bar{position: relative; overflow: hidden;margin: auto}
	.item{ position: absolute;top: 0;bottom: 0;left: 0;right: 0;z-index:100;}
	 .current{
      	transform: translate3d(0, 0, 0);
		-ms-transform: translate3d(0, 0, 0);		/* IE 9 */
		-webkit-transform: translate3d(0, 0, 0);	/* Safari and Chrome */
		-o-transform: translate3d(0, 0, 0);		/* Opera */
		-moz-transform: translate3d(0, 0, 0);
     	z-index: 300;
    }
    .pre{
	  transform: translate3d(-350px, 0, 0);
	  -ms-transform: translate3d(-350px, 0, 0);		/* IE 9 */
	  -webkit-transform: translate3d(-350px, 0, 0);	/* Safari and Chrome */
	  -o-transform: translate3d(-350px, 0, 0);		/* Opera */
	  -moz-transform: translate3d(-350px, 0, 0);
      z-index: 300;
    }
    .next{
	  transform: translate3d(350px, 0, 0);
	  -ms-transform: translate3d(350px, 0, 0);		/* IE 9 */
	  -webkit-transform: translate3d(350px, 0, 0);	/* Safari and Chrome */
	  -o-transform: translate3d(350px, 0, 0);		/* Opera */
	  -moz-transform: translate3d(350px, 0, 0);
      z-index: 300;
    }
   .trans .current,.transpre .pre,.transnext .next{
        transition: transform .2s ease-in-out;
		-moz-transition: transform .2s ease-in-out;	/* Firefox 4 */
		-webkit-transition: transform .2s ease-in-out;	/* Safari 和 Chrome */
		-o-transition: transform .2s ease-in-out;	/* Opera */ 
  }
  .shuffling-bar img,.shuffling-bar,.item{width: 350px;height: 350px;}
  .btn{position: absolute;z-index:500;width: 50px;height: 200px;top:75px;cursor: pointer;opacity: 0.5}
  .left_btn{left:0;}
  .right_btn{right:0;}
  .btn:hover{opacity: 1}
  .round_ul{text-align: center;position: absolute;z-index: 500;width: 100%;bottom: 10px;}
  .round_li{display: inline-block;width: 20px;height: 20px;border-radius: 10px;background: green;z-index:400;margin:0 5px;cursor:pointer;}
  .active_round_li{background: red}
</style>