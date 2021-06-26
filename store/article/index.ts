// import store from '../../store'
import BaseStoreService from '~/store/abstract'
import { ArticleStoreModule } from '~/store/article/module'
import { ArticleState } from '~/store/article/state'
import { IArticle } from '~/store/interfaces/'

class ArticleStore extends BaseStoreService<ArticleState> {
  public mutations = ArticleStoreModule.mutations
  public getters = ArticleStoreModule.getters

  get articles (): Array<IArticle> {
    return this.read<any>(this.getters.articles)
  }

  addArticle (article: IArticle) {
    this.commit(this.mutations.addArticle, article)
  }

  updateArticle (article: IArticle) {
    this.commit(this.mutations.updateArticle, article)
  }

  deleteArticle (article: IArticle) {
    this.commit(this.mutations.deleteArticle, article)
  }

  setArticles (articles: Array<IArticle>) {
    this.commit(this.mutations.setArticles, articles)
  }
}
export default new ArticleStore()
