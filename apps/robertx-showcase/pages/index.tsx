import { ParallaxNFT } from '@sol-nft-stores/robertx-nft'

export function Index() {
	return (
		<ParallaxNFT
			{...{
				bag: 'bag.png',
				bg: 'bg.png',
				core: 'core.png',
				eye: 'eye.png',
				head: 'head.png',
				horn: 'horn.png',

				shirt: 'shirt.png',
				sticker: 'sticker.png'
			}}
		/>
	)
}

export default Index
