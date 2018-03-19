<template>
	<div class="card">
	<!-- <button @click='pv'>11</button> -->
		<ul>
			<li v-for="(key,index) in all" :class="allClass[index]">
				<h3>{{key.tit}}</h3>
				<p class="t"><i>{{key.smtit}}</i></p>
				<img :src="key.img" :alt="key">
				<div class="fd t">
					<span>姓名：<i>{{key.name}}</i></span>
					<span>薪资：<i>{{key.money}}</i></span>
				</div>
				<p class="t">入职：<i>{{key.date}}</i></p>
				<hr>
				<p>{{key.readme}}</p>
			</li>
		</ul>
	</div>
</template>
<script>
	// import animate from './assets/animate.css'
	import {mapGetters} from 'vuex'

	export default {
	    name: 'card',
	    computed:mapGetters(['all','allClass'])
	}
</script>
<style>
	body{
		width: 100%;
		background: linear-gradient(120deg,#3ae0d4,#a082e7);
	}
	h3{
		font-size: 20px;
	}
	ul{
		width: 100%;
		height: 400px;
		position: relative;
		text-align: left;
	}
	li{
		width: 225px;
		height: 320px;
		padding: 30px 15px 0;
		background-color: #fff;
		border-radius: 10px;
		transition: .2s;
		position: absolute;
		top: 20px;
	}
	.s6{
		left: 50%;
		margin-left: -112px;
		z-index: 9;
		transform: scale(1.1);
	}
	.s5{
		left: 34%;
		z-index: 8;
		opacity: .8;
	}
	.s7{
		left: 48%;
		z-index: 8;
		opacity: .8;
	}
	.s4{
		left: 28%;
		opacity: .7;
		transform: scale(.9);z-index: 7;
	}
	.s8{
		left: 54%;
		opacity: .7;
		transform: scale(.9);z-index: 7;
	}
	.s3{
		left: 22%;
		opacity: .6;
		transform: scale(.8);z-index: 6;
	}
	.s9{
		left: 59%;
		opacity: .6;
		transform: scale(.8);z-index: 6;
	}
	.s2{
		left: 18%;
		opacity: .5;
		transform: scale(.7);z-index: 5;
	}
	.s10{
		left: 64%;
		opacity: .5;
		transform: scale(.7);z-index: 5;
	}
	.s1{
		left: 13%;
		opacity: .4;
		transform: scale(.6);z-index: 4;
	}
	.s11{
		left: 69%;
		opacity: .4;
		transform: scale(.6);z-index: 4;
	}
	.fd{
		display: flex;
		justify-content: space-between;
	}
	li img{
		width: 100%;
	}
	hr{
		margin-top: 10px;
	}
	span,p{
		color: #848587;
	}
	i{
		color: black;
	}
	.t{
		margin-top: 10px;
	}
</style>