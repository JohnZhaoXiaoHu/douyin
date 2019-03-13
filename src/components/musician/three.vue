<template>
	<div ref="setHeight" class="wrapper">
		<div class="top">
			<div class="top-header">
				<img class="top-img" src="../../../static/img/musician/3-1.png" alt="行业指导机构">
			</div>
			<div class="img-cont">
				<img src="../../../static/img/musician/3-2.png" alt="CMIC">
			</div>
		</div>
		<div class="bottom">
			<div class="bottom-header">
				<img class="bottom-img" src="../../../static/img/musician/3-3.png" alt="战略合作伙伴">
			</div>
			<div class="bottom-last">
				<div class="bottom-left">
					<img class="bottom-img" src="../../../static/img/musician/3-4.png" alt="Young Blood计划">
					<p>Young Blood 新血计划</p>
					<p class="txt">由摩登天空于2017年发起，2018年Young Blood音乐版块全面升级，开启包括专业制作人和评审团加入的唱片计划，旨在帮助更多新血青年探索音乐世界，实现自己的音乐梦想。</p>
				</div>
				<div class="bottom-right">
					<img class="bottom-img" src="../../../static/img/musician/3-5.png" alt="太合音乐集团C">
					<p>中国领先的音乐服务提供商</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:"SectionThree",
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
		background-image url("../../../static/img/musician/bg3.jpg")
		background-size cover
		background-position center
		background-color #DADAE3
		display flex
		box-align center
		align-items center
		box-pack center
		justify-content center
		box-direction normal
		box-orient vertical
		flex-direction column
		.top
			width 100%
			display flex
			flex-flow column
			box-align center
			align-items center
			.top-header
				margin-top 8%
				width 15%
				img
					width 100%
			.img-cont
				width 10%
				margin-top 1%
				img
					width 100%
		.bottom
			width 100%
			display flex
			flex-flow column
			box-align center
			align-items center
			.bottom-header
				margin-top 1%
				width 15%
				img
					width 100%
			.bottom-last
				margin-top 1%
				width 25%
				display flex
				justify-content space-between
				box-align center
				.bottom-left
					width 40%
					img
						width 100%
					p
						padding-top 6%
						font-size 16px
						margin 2% -6%
						text-align center
					.txt
						color #595959
						font-size 12px
						text-align center
						margin 1% -6%
				.bottom-right
					width 40%
					img
						width 100%
					p
						font-size 16px
						margin 2% -16%
						padding-top 6%
						text-align center
						
			
</style>