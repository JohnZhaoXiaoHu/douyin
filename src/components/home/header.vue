<template>
	<div class="wrapper">
		<a href="javascript:void(0)" class="left">
			<img src="../../../static/img/logo.png" alt="logo">
		</a>
		<ul class="right">
			<router-link to="/platform">
				<li class="item"><a href="">开放平台</a></li>
			</router-link>
			<li class="item"><span class="iconfont beta">&#xe61c;</span></li>
			<li class="item"><a href="">视频上传</a></li>
			<li class="item"><a href="">抖音特效师</a></li>
			<router-link to="/musician">
				<li class="item"><a href="">抖音音乐人</a></li>
			</router-link>
			<li class="item"><a href="">机构认证</a></li>
			<li class="item"><a href="">企业认证</a></li>
			<li class="item slience" :style="opacity"><a href="javascript:void(0)" @click="handleSlience"><span class="iconfont">&#xe607;</span></a></li>
		</ul>
	</div>
</template>

<script>
export default {
	name:"HomeHeader",
	data () {
		return {
			opacity:{
				opacity:1
			}
		}
	},
	methods: {
		handleSlience () {
			this.opacity.opacity==1?this.opacity.opacity=0:this.opacity.opacity=1
			this.$emit('slience',this.opacity.opacity)
		}
	}
}
</script>

<style lang="stylus" scoped>
	.wrapper
		display flex
		position absolute
		top .4rem
		justify-content space-between
		align-items flex-end
		width 100%
		min-width 21rem
		height 1.4rem
		.left
			margin-left 2rem
		.right
			margin-right 2rem
			height .8rem
			line-height .8rem
			font-size .35rem
			color #dbdbdb
			.item
				text-shadow: 1px 1px 2px rgba(0,0,0,.7)
				float left
				padding 0 .25rem
				a
					color #fff
				.beta
					font-size .8rem
					line-height .8rem
					margin-left -.4rem
			.slience .iconfont
					font-size .6rem
</style>