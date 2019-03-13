<template>
	<div ref="setHeight" class="wrapper">
		<div class="group">
			<div class="banner">
				<img class="bannerImg" alt="抖音原创音乐人，看见音乐计划" src="../../../static/img/musician/1.png">
			</div>
			<div class="btn">
				<a href="#">
					<img class="animateImg" alt="音乐" src="../../../static/img/musician/2.png"> 
					<img class="btnBanner" alt="上传音乐" src="../../../static/img/musician/3.png">
				</a>
			</div>
		</div>
		<div class="bottom">
			<div class="title">
				<div class="left"></div>
				<div class="txt">已入驻抖音音乐人</div>
				<div class="right"></div>
			</div>
			<div class="item">
				<div class="musician">
        			<div class="jinzhiwen">
        				<img src="../../../static/img/musician/4.jpg" alt="">
        			</div>
        			<div class="name">艾菲</div>
   				</div>
   				<div class="musician">
        			<div class="jinzhiwen">
        				<img src="../../../static/img/musician/4.jpg" alt="">
        			</div>
        			<div class="name">艾菲</div>
   				</div>
   				<div class="musician">
        			<div class="jinzhiwen">
        				<img src="../../../static/img/musician/4.jpg" alt="">
        			</div>
        			<div class="name">艾菲</div>
   				</div>
   				<div class="musician">
        			<div class="jinzhiwen">
        				<img src="../../../static/img/musician/4.jpg" alt="">
        			</div>
        			<div class="name">艾菲</div>
   				</div>
   				<div class="musician">
        			<div class="jinzhiwen">
        				<img src="../../../static/img/musician/4.jpg" alt="">
        			</div>
        			<div class="name">艾菲</div>
   				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:"SectionOne",
	data () {
		return {
			num : 0
		}
	},
	props: {
		fullHe:Number
	},
	watch: {
		fullHe(val){
			this.num = val
			console.log(this.num)
			this.$refs.setHeight.style.height = this.num+'px'
		}
	},
	methods: {

	}
}
</script>

<style lang="stylus" scoped>
	.wrapper
		width 100%
		height 100%
		background-image url("../../../static/img/musician/bg1.jpg")
		background-size cover
		background-position center
		background-color #DADAE3
		.banner
			margin-top 12%
			margin-left 27.5%
			width 45%
			.bannerImg
				height 100%
				width 100%
		.btn
			margin-top 2%
			margin-left 40%
			width 20%
			.animateImg
				width 2.5%
				display inline-block
				position absolute
				margin-left 2.8%
				margin-top .9%
			.btnBanner
				width 100%
	.bottom
		position fixed
		width 100%
		top 18%
		background rgba(255,255,255,.65)
		height 270px
		z-index 90
		.title
			margin-top 40px
			display flex
			justify-content space-between
			box-align center
			.left
				width 650px
				height 2px
				background linear-gradient(to left,#afafaf,rgba(175,175,175,0))
			.txt
				color #060606
				font-size 18px
				margin-top -2px
			.right
				width 650px
				height 2px
				background linear-gradient(to right,#afafaf,rgba(175,175,175,0))
		.item
			width 40%
			margin 0 auto
			margin-top 40px
			display flex
			justify-content space-between
			box-align center
			.musician
				margin auto 20px
				.jinzhiwen
					width 80%
					margin 2px auto
					img
						width 100%
				.name
					font-size 16px
					text-align center
					margin-top 12px
					color #a2a1a4
</style>

