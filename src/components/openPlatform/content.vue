<template>
	<div class="wrapper">
		<div class="process">
			<h2>接入流程</h2>
			<div class="items">
				<div class="item itemex">
					<div class="circle"><img src="../../../static/img/plathform/content1.png" alt=""></div>
					<p>4.获取配置信息</p>
				</div>
				<div class="item">
					<div class="circle"><img src="../../../static/img/plathform/content1.png" alt=""></div>
					<p>3.进入审核流程</p>
				</div>
				<div class="item">
					<div class="circle"><img src="../../../static/img/plathform/content1.png" alt=""></div>
					<p>2.网站应用接入申请</p>
				</div>
				<div class="item">
					<div class="circle"><img src="../../../static/img/plathform/content1.png" alt=""></div>
					<p>1.开发者身份</p>
				</div>
			</div>
		</div>
		<div class="supply">
			<h2>为您提供</h2>
			<div class="supply-items">
				<div class="supply-item">
					<div class="icon">
						<img src="../../../static/img/plathform/supplyIcon1.png" alt="">
					</div>
					<div class="content">
						<p class="title">数亿抖音用户直接登录</p>
						<p class="text">免除繁琐登录流程</p>
					</div>
				</div>
				<div class="supply-item">
					<div class="icon">
						<img src="../../../static/img/plathform/supplyIcon2.png" alt="">
					</div>
					<div class="content">
						<p class="title">获取用户抖音公开信息</p>
						<p class="text">无需填写，内容真实可靠</p>
					</div>
				</div>
				<div class="supply-item">
					<div class="icon">
						<img src="../../../static/img/plathform/supplyIcon3.png" alt="">
					</div>
					<div class="content">
						<p class="title">安全策略防范恶意注册</p>
						<p class="text">专业团队为您保驾护航</p>
					</div>
				</div>
				<div class="supply-item">
					<div class="icon">
						<img src="../../../static/img/plathform/supplyIcon4.png" alt="">
					</div>
					<div class="content">
						<p class="title">支持用户选择授权范围</p>
						<p class="text">更多权限开放在即</p>
					</div>
				</div>
			</div>
		</div>
		<div class="api">
			<h2>移动应用接入/网站接入</h2>
			<div class="api-content">
				<img class="iphone-1" src="../../../static/img/plathform/phone-1.png" alt="app-demo">
				<img class="iphone-2" src="../../../static/img/plathform/phone-2.png" alt="app-demo">
				<img class="mac-1" src="../../../static/img/plathform/QRcode.png" alt="app-demo">
				<img class="mac-2" src="../../../static/img/plathform/computer.jpg" alt="app-demo">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:"PlathformContent"
}
</script>

<style lang="stylus" scoped>
	.wrapper
		width 100%
		min-width 21rem
		.process
			height 5rem
			h2
				height 1rem
				padding-top .8rem
				padding-left 4rem
				font-size 24px
				font-weight 600
			.items
				width 80%
				margin auto
				padding-top .6rem
				.item
					position relative
					width 25%
					float right
					text-align center
					&.item:after
						content ' '
						position absolute
						width 4.1rem
						height .02rem
						background #e6e6e6
						left 4.1rem
						top 1rem
					&.itemex:after
						content ' '
						position absolute
						width 0
					.circle
						height 2rem
						width 2rem
						border .02rem solid #e6e6e6
						border-radius 1rem
						display inline-block
						vertical-align middle
						img
							margin-top .5rem
							width 1rem
							height 1rem
							background cover
					p
						padding-top .5rem
						font-size .3rem
		.supply
			height 5rem
			h2
				height 1rem
				padding-top .8rem
				padding-left 4rem
				font-size 24px
				font-weight 600
			.supply-items
				width 80%
				margin auto
				padding-top .6rem
				padding-left 2rem
				.supply-item
					position relative
					width 25%
					float left
					text-align left
					.icon
						float left
						margin-top .15rem
						img
							width 1rem
					.content
						margin-left 1.2rem
						margin-top .2rem
						.title
							font-size 18px
							line-height 1.5
							color rgba(0,0,0,.5)
						.text
							margin-top .05rem
							font-size 16px
							color #808080
		.api
			h2
				height 1rem
				padding-top .8rem
				padding-left 4rem
				font-size 24px
				font-weight 600
			.api-content
				position relative
				width 80%
				margin auto
				padding-bottom 10rem
				padding-top .6rem
				padding-left 2rem
				.iphone-1
					position absolute
					left 2rem
					width 4rem
				.iphone-2
					position absolute
					left 6.5rem
					width 4rem
				.mac-1
					position absolute
					left 12.8rem
					width 10rem
				.mac-2
					position absolute
					left 16.5rem
					top 2.5rem
					width 10rem
	</style>