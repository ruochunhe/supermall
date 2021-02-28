import {request} from './network'


export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
export function getRecommend(){
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.priceInfo = {
      highNowPrice : itemInfo.highNowPrice,
      lowNowPrice : itemInfo.lowNowPrice,
      price : itemInfo.price,
      oldPrice : itemInfo.oldPrice,
    }
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
	
	}
}

export class TopImages {
  constructor(topImages) {
    this.topImages = topImages
  }
}
export class ShopInfo {
  constructor(shopInfo) {
    this.name = shopInfo.name
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods
    this.score = shopInfo.score
    this.shopLogo = shopInfo.shopLogo
  }
}