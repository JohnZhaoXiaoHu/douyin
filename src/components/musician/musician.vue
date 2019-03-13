<template>
	<div>
		<public-header></public-header>
		<div @mousewheel="move">
			<div class="wrapper" ref="wrapper" >
				<div class="contain" :style="containStyle">
					<section-one :fullHe="fullHeight" class="item" :key=1></section-one>
					<section-two :fullHe="fullHeight" class="item" :key=2></section-two>
					<section-three :fullHe="fullHeight" class="item" :key=3></section-three>
					<section-four :fullHe="fullHeight" class="item" :key=4></section-four>
				</div>
			</div>
		</div>
		<div class="dot">
			<ul>
				<li v-for="(item,index) in fontIndex" :key="item" @click=jump(item)></li>
			</ul>
		</div>
	</div>
</template>

<script>
import PublicHeader from '../public/header'
import SectionOne from './one'
import SectionTwo from './two'
import SectionThree from './three'
import SectionFour from './four'
import MusicianDot from './dot'
export default {
	name:"Musician",
	components: {
		SectionOne,
		SectionTwo,
		SectionThree,
		SectionFour,
		PublicHeader
	},
	data () {
		return {
			fullHeight:0,
			pageHeight:1445,
			font: '',
			distance:0,
			num:0,
			transitionKey:true,  //节流
			fontIndex: [1,2,3,4],
			currentIndex:0
		}
	},
	mounted () {
		this.fullHeight = document.documentElement.clientHeight
		const that = this
			window.onresize = () => {
		        return (() => {
			        window.fullHeight = document.documentElement.clientHeight
			        that.fullHeight = window.fullHeight
        		})()
        }
        // 动态获取用户浏览器高度
	},
	methods: {
		fontIndex (res) {
			this.font = res
		},
		jump(e){
			this.distance = -(e-1)*this.fullHeight
		},
		move (e) {
			if(!this.transitionKey) return
			this.transitionKey = false
			if(e.wheelDelta > 0 && this.distance < 0){
				this.animate(1)
			}else if(e.wheelDelta < 0 && this.distance >= -this.pageHeight){
				this.animate(-1)
			}else{
				this.transitionKey=true
			}
			console.log(this.distance)
		},
		animate(direc) {
			if(this.num <= this.fullHeight){
				let i = this.fullHeight/50
				this.num += i
				this.distance += i*direc
				window.setTimeout(()=>{
					this.animate(direc)
				},10)
			}else{
				this.transitionKey = true
				this.num = 0
			}
		}
	},
	watch: {
		fullHeight(val){
			this.fullHeight = val
			this.$refs.wrapper.style.height=this.fullHeight+'px'
		}
		//监测用户浏览器高度变化
	},
	computed: {
		containStyle () {
			return {
				transform:'translate(0,'+this.distance+'px)'
			}
		}
		//计算轮播所需移动距离
	}
}
</script>

<style lang="stylus" scoped>
	.wrapper
		height 100%
		overflow hidden
	.dot
		width 10px
		height 100px
		position fixed
		z-index 99
		top 50% 
		right 5%
	li
		width 5px
		height 5px
		border-radius 2.5px
		margin 10px 2.5px
		background black
		cursor pointer 
</style>