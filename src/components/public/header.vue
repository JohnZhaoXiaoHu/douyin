<template>
	<div class="wrapper">
		<a href="./index.html" class="left">
			<img src="../../../static/img/plathformLogo.png" alt="logo">
		</a>
		<div class="right">
			<span class="iconfont">&#xe601;</span>
			<p><a href="">&nbsp;&nbsp;&nbsp;登陆</a></p>
		</div>
	</div>
</template>

<script>
export default {
	name:"PlatformHeader"
}
</script>

<style lang="stylus" scoped>
	.wrapper
		width 100%
		min-width 21rem
		padding-bottom .2rem
		position fixed
		top 0
		z-index 99
		background rgba(255,255,255,.65)
		height 1.5rem
		.left
			margin-left 2rem
			img
				margin-top .5rem
				height .8rem
		.right
			float right
			height .6rem
			margin-top .7rem
			margin-right 4rem
			.iconfont
				font-size .5rem
			p
				display inline-block
				font-size .3rem
				line-height .6rem
	a
		color #333
						
</style>