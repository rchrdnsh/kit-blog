<script>
  export let items = [
		{value: 1, label: `Tab 1`, content: `Words and stuff.`},
		{value: 2, label: `Tab 2`, content: `Stuff and things.`},
		{value: 3, label: `Tab 3`, content: `Things and junk.`}
	];
  export let activeTabValue = 1;

  const handleClick = tabValue => () => (activeTabValue = tabValue);
</script>

<ul>
	{#each items as item}
		<li class={activeTabValue === item.value ? 'active' : ''}>
			<span on:click={handleClick(item.value)}>{item.label}</span>
		</li>
	{/each}
</ul>

{#each items as item}
	{#if activeTabValue == item.value}
		<div class="box">
			<p contenteditable>{item.content}</p>
		</div>
	{/if}
{/each}

<style>
	.box {
		margin-bottom: 10px;
		padding: 40px;
		border: 1px solid #ddd;
    border-radius: 0 0 8px 8px;
    border-top: 0;
		height: 100px;
	}
  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    border-bottom: 1px solid #ddd;
  }
	li {
		margin-bottom: -1px;
	}

  span {
    border: 1px solid transparent;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    display: block;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  span:hover {
    border-color: #e9ecef #e9ecef #dee2e6;
  }

  li.active > span {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
  }
	
		[contenteditable] {
   -webkit-user-select: text;
    user-select: text;
		padding: 8px;
		line-height: 1.5;
		outline: none;
		cursor: text;
		transition: border-color 250ms;
		border: 1px dashed;
		border-radius: 8px;
		border-color: white;
	}
	
	[contenteditable]:hover  {
		border-color: #ddd;
		background-color: white;
		border-radius: 8px;
	}
</style>