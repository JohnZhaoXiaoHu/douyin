<template>
	<div class="wrapper">
		<platform-header></platform-header>
		<platform-banner></platform-banner>
		<plathform-content></plathform-content>
		<plathform-footer></plathform-footer>
	</div>

</template>

<script>
import PlatformHeader from './header'
import PlatformBanner from './banner'
import PlathformContent from './content'
import PlathformFooter from './footer'
export default {
	name:"paltform",
	components: {
		PlatformHeader,
		PlatformBanner,
		PlathformContent,
		PlathformFooter
	}
}
</script>

<style lang="stylus" scoped>
	.wrapper
		min-width 24rem
</style>