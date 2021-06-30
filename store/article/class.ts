import { IArticle } from '~/store/interfaces'

export class Article implements IArticle {
  constructor () {
    this.id = 0
    this.type = ''
    this.name = ''
    this.description = ''
    this.price = 0
    this.tag = ''
    this.picture = 'noarticle.jpg'
  }

  id: number
  type: string
  name: string
  description: string
  price: number
  tag: string
  picture: string
}
