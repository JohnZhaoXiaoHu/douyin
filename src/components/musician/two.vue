<template>
	<div ref="setHeight" class="wrapper">
		<div class="title">
			<img src="../../../static/img/musician/2-1.png" alt="丰富宣推资源">
		</div>
		<div class="item">
			<div class="box">
				<div class="icon">
					<img src="../../../static/img/musician/2-2.png">
				</div>
				<div class="primary">好内容让好音乐被看见</div>
				<div class="sec">抖音的用户们有千百种玩法和</div>
				<div class="sec">丰富的创意，实力演绎</div>
				<div class="sec">你的原创音乐</div>
			</div>
			<div class="box">
				<div class="icon">
					<img src="../../../static/img/musician/2-3.png">
				</div>
				<div class="primary">个性化分发推荐</div>
				<div class="sec">不管是成名已久，还是新人新作，</div>
				<div class="sec">抖音都会让你的原创音乐</div>
				<div class="sec">与伯乐相遇</div>
			</div>
			<div class="box">
				<div class="icon">
					<img src="../../../static/img/musician/2-4.png">
				</div>
				<div class="primary">全系产品推广渠道支持</div>
				<div class="sec">不仅是抖音，好的原创音乐将会</div>
				<div class="sec">根据风格及受众分发至</div>
				<div class="sec">头条全系产品</div>
			</div>
		</div>
		<div class="footer">
			<p>数万首原创音乐，都获得了上万使用量，抖音重新定义了音乐宣发时代2.0</p>
			<p>我们会倾尽全力扶持中国原创音乐，助力音乐人 ，传播好音乐</p>
		</div>
	</div>
</template>

<script>
export default {
	name:"SectionTwo",
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
		background-image url("../../../static/img/musician/bg2.jpg")
		background-size cover
		background-position center
		background-color #DADAE3
		display flex
		box-orient vertical
		box-direction normal
		flex-direction column
		justify-content space-around
		box-align center
		align-items center
		padding-top 0px
		.title
			text-align center
			padding-top 80px
			img
				height 40px
		.item
			display flex
			justify-content space-around
			.box
				margin auto 40px
				height 280px
				width 280px
				background-image url("../../../static/img/musician/bg.png")
				background-repeat no-repeat
				background-size cover
				background-position center
				bakcground-color transparent
				display flex
				flex-flow column nowrap
				box-align center
				align-items center
				.icon
					margin-top 19%
					width 19%
					img
						width 100%
				.primary
					color #404040
					font-size 16px
					line-height 1.8
				.sec
					color #a5a8aa
					font-size 14px
					line-height 1.5
		.footer
			text-align center
			line-height 1.6
</style>