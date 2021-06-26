import { IArticle, IMenu } from '~/store/interfaces'

export class Menu implements IMenu {
  constructor () {
    this.id = 0
    this.name = ''
    this.description = ''
    this.price = 0
    this.tag = ''
    this.articles = []
  }

  id: number
  name: string
  description?: string
  articles: Array<IArticle>
  price: number
  tag: string
}
