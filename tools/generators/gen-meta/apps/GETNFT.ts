export const getGETNFT = async (): Promise<unknown[]> => {
  return [
    {
      name: 'test',
      symbol: '',
      description: '',
      image: 'image.png',
      seller_fee_basis_points: 5,
      properties: {
        files: [
          {
            uri: 'https://www.arweave.net/abcd5678?ext=png',
            type: 'image/png'
          }
        ],
        category: 'image',
        creators: [
          {
            address: '859NKesAK6n4jG9T777QzGMZEHkvVJR65HK63pY9Ff4C',
            share: 80
          },
          {
            address: '4GnNK6VAkLzNiVWmiC28gJoa7jqTWMuWYqRo5erZ8iWj',
            share: 20
          }
        ]
      }
    }
  ]
}