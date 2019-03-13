<template>
	<div class="wrapper">
		<div class="nav">
			<ul class="top">
				<span>|</span>
				<li class="item"><a href="">音乐</a></li>
				<span>|</span>
				<li class="item"><a href="">用户服务协议</a></li>
				<span>|</span>
				<li class="item"><a href="">隐私政策</a></li>
				<span>|</span>
				<li class="item"><a href="">账号找回</a></li>
				<span>|</span>
				<li class="item"><a href="">联系我们</a></li>
				<span>|</span>
				<li class="item"><a href="">广告投放</a></li>
				<span>|</span>				
			</ul>
		</div>
		<div class="info">
			<p> 2019 © 抖音  | 京ICP备16016397号-3 | 北京微播视界科技有限公司 |  京B2-20170846</p>
			<p> <a href="http://www.12377.cn/">中国互联网举报中心</a> | 网络文化许可证-京网文-（2016）2282-264号 | 违法和不良信息举报：010-83434212 | 举报邮箱：jubao@douyin.com</p>
			<p> <span class="iconfont police">&#xe610;</span><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802023605">京公网安备 11010802023605号</a> |  地址 : 北京市海淀区知春路51号4层408 </p>
		</div>
	</div>
</template>

<script>
export default {
	name:"Footer"
}
</script>

<style lang="stylus" scoped>
	.nav
		position absolute
		bottom 2rem
		width 100%
		.top
			display flex
			justify-content center
			align-items flex-end
			span
				color #fff
				text-shadow: 1px 1px 2px rgba(0,0,0,.7)
			.item
				padding 0 .2rem
	.info
		position absolute
		bottom .1rem
		width 100%
		p
			text-align center
			padding-bottom .2rem
			color #fff
			text-shadow: 1px 1px 2px rgba(0,0,0,.7)
			.police
				font-size .4rem
	a
		color #fff
		text-shadow: 1px 1px 2px rgba(0,0,0,.7)
</style>