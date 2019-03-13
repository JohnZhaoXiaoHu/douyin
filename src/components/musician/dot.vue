<template>
	<div class="wrapper">
		<ul>
			<li v-for="(item,index) in fontIndex" :font-index="item" :key="item" @click="handleItem"></li>
		</ul>	
	</div>

</template>

<script>
export default {
	name:"MusicianDot",
	data () {
		return {
			fontIndex: [1,2,3,4],
			font:''
		}
	},
	methods: {
		handleItem (event) {
			this.font = event.target.getAttribute("font-index")
			this.$emit("fontIndex",this.font)
		}
	}
}
</script>

<style lang="stylus" scoped>
	.wrapper
		background red
		position absolute
		height 20%
		right 20px
		top 50%
	li
		background green
		width 10px
		height 10px
		border-radius 5px
		margin-bottom 10px
</style>