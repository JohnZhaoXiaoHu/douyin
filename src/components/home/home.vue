<template>
	<div class="wrapper">
		<home-video :sendSlience="slienceData"></home-video>
		<home-header @slience="showMes"></home-header>
		<home-content></home-content>
		<gallary-footer></gallary-footer>
	</div>

</template>

<script>
import HomeHeader from './header'
import HomeContent from './content'
import HomeVideo from './video'
import GallaryFooter from '../public/footer'
export default {
	name:"Home",
	data () {
		return {
			slienceData:'muted'
		}
	},
	components: {
		HomeHeader,
		HomeContent,
		HomeVideo,
		GallaryFooter
	},
	methods: {
		showMes(res){
			res==0?this.slienceData='':this.slienceData='muted'
		}
	}
}
</script>

<style lang="stylus" scoped>
	.wrapper
		width 30rem
</style>