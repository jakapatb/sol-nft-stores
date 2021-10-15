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
            uri: 'image.png',
            type: 'image/png'
          }
        ],
        category: 'image',
        creators: [
          {
            address: '859NKesAK6n4jG9T777QzGMZEHkvVJR65HK63pY9Ff4C',
            share: 100
          }
        ]
      }
    }
  ]
}
