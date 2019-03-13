<template>
	<div ref="setHeight" class="wrapper">
		<div class="container">
			<div class="top">
				<div class="top-header">
					<img src="../../../static/img/musician/four/1.png" alt="战略合作伙伴">
				</div>
				<div class="top-container">
					<div class="top-item">
						<div class="item">
							<img alt="华纳唱片" src="../../../static/img/musician/four/2.png">
						</div>
					</div>
					<div class="top-item">
						<div class="item">
							<img alt="SONY MUSIC" src="../../../static/img/musician/four/3.png">
						</div>
					</div>
					<div class="top-item">
						<div class="item">
							<img alt="SONY/ATV" src="../../../static/img/musician/four/4.png">
						</div>
					</div>
					<div class="top-item">
						<div class="item">
							<img alt="环球音乐" src="../../../static/img/musician/four/3.png">
						</div>
					</div>
					<div class="top-item">
						<div class="item">
							<img alt="咪咕音乐" src="../../../static/img/musician/four/4.png">
						</div>
					</div>
					<div class="top-item">
						<div class="item">
							<img alt="滚石唱片" src="../../../static/img/musician/four/3.png">
						</div>
					</div>
					<div class="top-item">
						<div class="item">
							<img alt="NNIDI" src="../../../static/img/musician/four/15.png">
						</div>
					</div>
					<div class="top-item">
						<div class="item">
							<img alt="碎乐" src="../../../static/img/musician/four/16.png">
						</div>
					</div>
					<div class="top-item">
						<div class="item">
							<img alt="唱吧" src="../../../static/img/musician/four/14.png">
						</div>
					</div>
					<div class="top-item">
						<div class="item">
							<img alt="福茂唱片" src="../../../static/img/musician/four/3.png">
						</div>
					</div>
					<div class="top-item">
						<div class="item">
							<img alt="天浩盛世" src="../../../static/img/musician/four/4.png">
						</div>
					</div>
					<div class="top-item">
						<div class="item">
							<img alt="腾讯音乐人" src="../../../static/img/musician/four/14.png">
						</div>
					</div>
					<div class="top-item">
						<div class="item">
							<img alt="摩登天空" src="../../../static/img/musician/four/12.png">
						</div>
					</div>
					<div class="top-item">
						<div class="item">
							<img alt="网易云音乐" src="../../../static/img/musician/four/3.png">
						</div>
					</div>
					<div class="top-item">
						<div class="item">
							<img alt="虾米音乐" src="../../../static/img/musician/four/16.png">
						</div>
					</div>
				</div>
			</div>
			<div class="bottom">
				<div class="bottom-header">
					<img class="page-3-title" src="../../../static/img/musician/four/5.png" alt="战略合作伙伴">
				</div>
				<div class="bottom-container">
					<div class="bottom-icon">
						<img alt="今日头条" src="../../../static/img/musician/four/11.png">
					</div>
					<div class="bottom-icon">
						<img alt="火山小视频" src="../../../static/img/musician/four/12.png">
					</div>
					<div class="bottom-icon">
						<img alt="西瓜视频" src="../../../static/img/musician/four/14.png">
					</div>
					<div class="bottom-icon">
						<img alt="悟空问答" src="../../../static/img/musician/four/15.png">
					</div>
					<div class="bottom-icon">
						<img alt="Flipagram" src="../../../static/img/musician/four/16.png">
					</div>
					<div class="bottom-icon">
						<img alt="头条音乐" src="../../../static/img/musician/four/17.png">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:"SectionFour",
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
		background-image url("../../../static/img/musician/four/bg.jpg")
		background-size cover
		background-position center
		background-color #DADAE3
		display flex
		justify-content center
		align-items center
		.container
			margin-top 9%
			width 50%
			.top
				.top-header
					width 20%
					margin-left 40%
					padding-bottom 2%
					img
						width 100%
				.top-container
					display flex
					box-pack start
					justify-content flex-satrt
					flex-wrap wrap
					.top-item
						width 140px
						margin 10px 5px
						.item
							display flex
							justify-content center
							img
								width 60%
								height 60%
			.bottom
				margin-bottom 10%
				.bottom-header
					margin-top 2%
					width 30%
					margin-left 35%
					img
						width 100%
				.bottom-container
					display flex
					box-pack start
					justify-content space-around
					flex-wrap wrap
					margin-left -20px
					.bottom-icon
						width 70px
						padding 20px
						img
							width 100%
					
</style>