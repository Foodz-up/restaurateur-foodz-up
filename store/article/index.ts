// import store from '../../store'
import BaseStoreService from '~/store/abstract'
import { ArticleStoreModule } from '~/store/article/module'
import { ArticleState } from '~/store/article/state'
import { IArticle } from '~/store/interfaces/'
import axios from '~/plugins/axios'
import NotificationStore from '~/store/notification'
import RestaurantStore from '~/store/restaurant'

class ArticleStore extends BaseStoreService<ArticleState> {
  public mutations = ArticleStoreModule.mutations
  public getters = ArticleStoreModule.getters

  get articles (): Array<IArticle> {
    return this.read<any>(this.getters.articles)
  }

  async addArticle (article: IArticle) {
    try {
      let newId = 0
      if (RestaurantStore.restaurant.articles.length > 0) {
        newId = RestaurantStore.restaurant.articles[RestaurantStore.restaurant.articles.length - 1].id + 1
      }
      article.id = newId
      const newArticle = await axios().post('/articles/me', article)
      if (newArticle.status === 200) {
        this.commit(this.mutations.addArticle, newArticle.data.article)
        NotificationStore.addNotification({ message: newArticle.data.message, status: newArticle.status })
      }
    } catch (error: any) {
      NotificationStore.addNotification({ message: error.response.data.message, status: error.response.status })
    }
  }

  async updateArticle (article: IArticle) {
    try {
      const updatedArticle = await axios().patch('/articles/me/update', article)
      if (updatedArticle.status === 200) {
        // FIX: need to save 2 time -> fix it
        this.commit(this.mutations.updateArticle, updatedArticle.data.article)
        NotificationStore.addNotification({ message: updatedArticle.data.message, status: updatedArticle.status })
      }
    } catch (error: any) {
      NotificationStore.addNotification({ message: error.response.data.message, status: error.response.status })
    }
  }

  async deleteArticle (article: IArticle) {
    try {
      const deletedArticle = await axios().patch('/articles/me/delete', { articleId: article.id })
      if (deletedArticle.status === 200) {
        this.commit(this.mutations.deleteArticle, deletedArticle.data.article)
        NotificationStore.addNotification({ message: deletedArticle.data.message, status: deletedArticle.status })
      }
    } catch (error: any) {
      NotificationStore.addNotification({ message: error.response.data.message, status: error.response.status })
    }
  }

  setArticles (articles: Array<IArticle>) {
    this.commit(this.mutations.setArticles, articles)
  }
}
export default new ArticleStore()
