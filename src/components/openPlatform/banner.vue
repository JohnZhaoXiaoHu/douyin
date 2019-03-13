<template>
	<div class="wrapper">
		<div class="contain">
			<h2 class="title">移动应用 & 网站接入</h2>
			<h3 class="subtitle">让你的应用和网站支持抖音账号登录，提供给用户快捷登录体验</h3>
			<div class="btns">
				<div class="btn"><a  href="">现在加入</a></div>
				<div class="btn"><a  href="">技术文档</a></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:"plathformBanner",
}
</script>

<style lang="stylus" scoped>
	.wrapper
		background url(../../../static/img/platformBanner.png)
		min-width 24rem
		height 7rem
		background-size cover
		.contain
			width 50%
			margin-left 25%
			display flex
			flex-direction column
			justify-content center
			align-items center
			.title
				margin-top 2.2rem
				font-size .8rem
				color white
			.subtitle
				margin .5rem 0
				margin-top .7rem
				font-size .32rem
				color white
		.btns
			display flex
			justify-content center
			.btn
				margin .2rem .5rem
				padding 0 .4rem
				background #fe2d54
				height .8rem
				border-radius .1rem
				display flex
				justify-content center
				flex-direction column
				&.btn:hover
					background #f08196
					cursor pointer
				a
					color white
					text-shadow 0 -1px 0 rgba(0, 0, 0, 0.12)
</style>