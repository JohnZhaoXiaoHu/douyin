<template>
	<div class="video">
		<video 
			:loop="loop" 
			:autoplay="auto" 
			:src="src"
			:muted='muted' 
			class="audio"
		>
			抱歉，您的浏览器不支持内嵌视频
		</video>
	</div>
</template>

<script>
export default {
	name:"HomeVide",
	data () {
		return{
			src:"./static/video/video.mp4",
			auto:"autoplay",
			loop:"loop",
			muted:'munted'
		}
	},
	props: {
		sendSlience:String
	},
	watch: {
		sendSlience(val){
			this.muted=val
			console.log(val)
		}
	}
}
</script>

<style lang="stylus" scoped>
	.audio
		z-index -1
		position absolute
		height 100%
	    width 100%
	    object-fit cover
		top 0
		right 0
		bottom 0
		left 0
</style>