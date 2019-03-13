<template>
	<div class="wrapper">
		<div class="slogan">
			<img src="../../../static/img/slogan.png" alt="">
		</div>
		<div class="bts">
			<a class="btn" href="" v-show="showDownload">
				<span class="iconfont mphone">&#xe611;</span>
				<p>AppStore</p>
			</a>
			<a class="btn" href="" v-show="showDownload">
				<span class="iconfont mphone">&#xe618;</span>
				<p>Android</p>
			</a>
			<div class='QRcode' ref='QRcode' @mouseenter="showCode" @mouseleave="hiddenCode">
				<span class="iconfont qr" ref="QRicon">&#xe600;</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:"HomeContent",
	data () {
		return {
			showDownload:true
		}
	},
	methods: {
		showCode () {
			console.log(this.$refs.QRcode.style.transformOrigin)
			this.$refs.QRcode.style.transform="scale(6)"
			this.$refs.QRcode.style.transformOrigin="101% 0"
			this.$refs.QRcode.style.borderRadius=".02rem"
			this.$refs.QRcode.style.backgroundImage="url('./static/img/QRcode.png')"
			this.$refs.QRcode.style.backgroundSize="cover"
			this.$refs.QRcode.style.boxShadow=".5px -.5px .7px .4px rgba(0,0,0,.54)"
			this.$refs.QRicon.style.opacity="0"
			this.showDownload=false
		},
		hiddenCode () {
			this.$refs.QRcode.style.transform="scale(1)"
			this.$refs.QRcode.style.borderRadius=".1rem"
			this.$refs.QRcode.style.backgroundImage=""
			this.$refs.QRicon.style.opacity="1"
			this.$refs.QRcode.style.boxShadow="1px 1px 7px 2px rgba(0,0,0,.54)"
			this.showDownload=true
		}
	}
}
</script>

<style lang="stylus" scoped>
	.wrapper
		position absolute
		top 38%
		width 10rem
		right 2.2rem
		.slogan
			float right
		.bts
			float right
			margin-top .5rem
			font-size .36rem
			.btn
				margin-right .2rem
				background #fff
				padding .25rem .2rem
				border-radius .1rem
				box-shadow 1px 1px 7px 2px rgba(0,0,0,.54)
				&.btn:hover
					color #666
				p
					display inline-block
				.mphone
					font-size .4rem
		.QRcode
			display inline-block
			line-height .54rem
			background #fff
			padding .16rem .22rem
			border-radius .1rem
			box-shadow 1px 1px 7px 2px rgba(0,0,0,.54)
			&.QRcode:hover
			.qr
				font-size .4rem	
	a
		color black
</style>