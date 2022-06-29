export interface productList{
  code: string,
  img: string,
  sale: string,
  title: string,
  rate: string,
  price: string,
  priceOld: string,
  cacheBack: string
}

export const product: productList[] =[
  {
    code: '488796',
    img: 'assets/img/video-card.png',
    sale: '-10%',
    title: 'Asus PCI-Ex GeForce RTX 3060 Ti Dual Mini V2 LHR 8GB GDDR6',
    rate: '6 відгуків',
    price: '22090 грн',
    priceOld: '23999 грн',
    cacheBack: '+82 грн кешбек'
  },
  {
    code: '568814',
    img: 'assets/img/video-card-1.png',
    sale: '-14%',
    title: 'Asus PCI-Ex GeForce GTX 1660 Ti TUF Gaming OC Edition 6GB GDDR6',
    rate: '14 відгуків',
    price: '12803 грн',
    priceOld: '14888 грн',
    cacheBack: '+12 грн кешбек'
  },
  {
    code: '964896',
    img: 'assets/img/video-card-2.png',
    sale: '-20%',
    title: 'Asus PCI-Ex GeForce RTX 3050 Dual OC Edition 8GB GDDR6',
    rate: '11 відгуків',
    price: '15264 грн',
    priceOld: '19080 грн',
    cacheBack: '+15 грн кешбек'
  },
]
