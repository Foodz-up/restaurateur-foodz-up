import { ArticleState } from '~/store/article/state'
import { IArticle } from '~/store/interfaces'

export const ArticleStoreModule = {
  namespaced: false,
  state: () => ({ ...new ArticleState() }),
  getters: {
    articles (state: ArticleState): Array<IArticle> {
      return state.articles
    }
  },
  mutations: {
    setArticles (state: ArticleState, articles: Array<IArticle>) {
      state.articles = articles
    },
    addArticle (state: ArticleState, article: IArticle) {
      state.articles.push(article)
    },
    updateArticle (state: ArticleState, article: IArticle) {
      const indexOfSelectedArticle = state.articles.findIndex(x => x.id === article.id)
      state.articles[indexOfSelectedArticle] = article
    },
    deleteArticle (state: ArticleState, article: IArticle) {
      const indexOfSelectedArticle = state.articles.findIndex(x => x.id === article.id)
      state.articles.splice(indexOfSelectedArticle, 1)
    }
  }
}
