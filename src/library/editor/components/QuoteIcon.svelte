<script>
</script>

<div class='counter'>
	<p class='left'>&ldquo;</p>
	<p class='right'>&rdquo;</p>
</div>

<style>
	.counter {
		width: 32px;
		height: 20px;
		display: grid;
		grid-auto-flow: column;
		background-color: #eee;
		border: 1px solid #aaa;
		border-radius: 4px;
		place-content: center;
		column-gap: 4px;
	}
	
	p {
		font-size: 20px;
		margin-bottom: -12px;
		font-family: serif;
		line-height: 1;
		color: #666;
	}
	
	.left {
/* 		margin-bottom: 4px; */
		margin-top: -4px;
	}
	
	/* .right {
		margin-bottom: 8px;
		margin-bottom: -4px;
	} */
</style>