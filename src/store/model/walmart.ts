import {Store} from './store';

export const Walmart: Store = {
	labels: {
		inStock: {
			container:
				'.button.spin-button.prod-ProductCTA--primary.button--primary',
			text: ['add to cart']
		},
		maxPrice: {
			container: 'span[class*="price-characteristic"]'
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.walmart.com/ip/Keurig-K-compact-Brewer-Black-Coffee-Maker/806217614'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.walmart.com/ip/PlayStation5-Console/363472942'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://www.walmart.com/ip/Sony-PlayStation-5-Digital-Edition/493824815'
		},
		{
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url: 'https://www.walmart.com/ip/Xbox-Series-X/443574645'
		},
		{
			brand: 'microsoft',
			model: 'xbox series s',
			series: 'xboxss',
			url: 'https://www.walmart.com/ip/Xbox-Series-S/606518560'
		},
		{
			brand: 'corsair',
			model: '750 platinum',
			series: 'sf',
			url: 'https://www.walmart.com/ip/SF750-Power-Supply/197046151'
		},
		{
			brand: 'corsair',
			model: '600 platinum',
			series: 'sf',
			url:
				'https://www.walmart.com/ip/Corsair-SF-Series-600W-80-Platinum-Power-Supply/250717047'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url:
				'https://www.walmart.com/ip/AMD-Ryzen-9-5900X-12-core-24-thread-Desktop-Processor/159710953'
		},
		{
			brand: 'jon-custom',
			model: '750 platinum',
			series: 'jon_corsair',
			url: 'https://www.walmart.com/ip/SF750-Power-Supply/197046151'
		},
		{
			brand: 'jon-custom',
			model: 'noctua',
			series: 'jon_noctua',
			url: 'https://www.walmart.com/ip/Noctua-NF-A12x25-PWM-4-Pin-Premium-Quiet-Fan-120mm-Brown/365714587'
		}

	],
	name: 'walmart'
};
