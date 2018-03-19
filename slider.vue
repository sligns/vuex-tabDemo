<template>
	<div class="Box">
		<div class="dian">
			<div class="prev" @click='aaa'></div>
			<div class="next" @click='ccc'></div>
		</div>
		<Card></Card>
	</div>
</template>


<script>
	import {mapActions} from 'vuex'
	import Card from './components/card.vue';
	export default {
	    name: 'Box',
	    methods:mapActions([
	    	'aaa', 'ccc'
	    ]),
		components:{
	    	Card
	    }
	}
</script>
<style>
	.dian{
		width: 100%;
		height: 400px;
		position: absolute;
		z-index: 111;
		display: flex;
	}
	.prev,.next{
		width: 50%;
		height: 400px;
		transition: .5s;
	}
</style>