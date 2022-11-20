import Quote from './Quote.svelte';
import Tabs from './Tabs.svelte';
import Counter from './Counter.svelte';

let data = [
		{
			id: 1,
			name: `h1`,
			tag: `h1`,
			type: `element`,
			component: null,
		 	value: `Svelte CMS!`,
			children: []
		},
		{
			id: 2,
			name: `p`,
			tag: `p`,
			type: `element`,
			component: null,
			value: `This is cool, I can't believe this works as well as it does, to be honest. Just below this paragraph is an actual svelte component that you can edit!`,
			children: []
		},
		{
			id: 3,
			name: `Quote`,
			tag: `Quote`,
			type: `component`,
			value: `` ,
			component: Quote,
			children: []
		},
		{
			id: 4,
			name: `p`,
			tag: `p`,
			type: `element`,
			value: `One moar paragraph, just for fun and profit! Make all the profits, and none of the costs! Buy low! Sell High!` ,
			component: null,
			children: []
		},
		{
			id: 5,
			name: `Tabs`,
			tag: `Tabs`,
			type: `component`,
			value: `` ,
			component: Tabs,
			children: []
		},
		{
			id: 6,
			name: `p`,
			tag: `p`,
			type: `element`,
			value: `OK...so...I lied...one moar paragraph on top of the last paragraph! It's just paragraphs all the way down! It never ends!` ,
			component: null,
			children: []
		},
		{
			id: 7,
			name: `Counter`,
			tag: `Counter`,
			type: `component`,
			value: `` ,
			component: Counter,
			children: []
		}
	];

export { data };