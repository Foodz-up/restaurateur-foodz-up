// import store from '../../store'
import BaseStoreService from '~/store/abstract'
import { RestaurantStoreModule } from '~/store/restaurant/module'
import { RestaurantState } from '~/store/restaurant/state'
import { IRestaurant } from '~/store/interfaces/'
import axios from '~/plugins/axios'
import NotificationStore from '~/store/notification'
import ArticleStore from '~/store/article'
import MenuStore from '~/store/menu'

class RestaurantStore extends BaseStoreService<RestaurantState> {
  public mutations = RestaurantStoreModule.mutations
  public getters = RestaurantStoreModule.getters

  get restaurant (): IRestaurant | null {
    return this.read<any>(this.getters.restaurant)
  }

  setRestaurant (restaurant: IRestaurant | null) {
    this.commit(this.mutations.setRestaurant, restaurant)
  }

  async getRestaurants () {
    try {
      const restaurant = await axios().get('/restaurants/me')
      if (restaurant.status === 200) {
        this.setRestaurant(restaurant.data.restaurant)
        ArticleStore.setArticles(restaurant.data.restaurant.articles)
        MenuStore.setMenus(restaurant.data.restaurant.menus)
      }
    } catch (error: any) {
      NotificationStore.addNotification({ message: error.response.data.message, status: error.response.status })
    }
  }

  async updateRestaurant (restaurant: IRestaurant) {
    try {
      const updatedRestaurant = await axios().put('/restaurants/me', restaurant)
      if (updatedRestaurant.status === 200) {
        this.commit(this.mutations.updateRestaurant, updatedRestaurant.data.restaurant)
        NotificationStore.addNotification({ message: updatedRestaurant.data.message, status: updatedRestaurant.status })
      }
    } catch (error: any) {
      NotificationStore.addNotification({ message: error.response.data.message, status: error.response.status })
    }
  }

  async deleteRestaurant () {
    try {
      const deletedRestaurant = await axios().delete('/restaurants/me')
      if (deletedRestaurant.status === 200) {
        NotificationStore.addNotification({ message: deletedRestaurant.data.message, status: deletedRestaurant.status })
        this.setRestaurant(null)
      }
    } catch (error: any) {
      NotificationStore.addNotification({ message: error.response.data.message, status: error.response.status })
    }
  }

  async addRestaurant (restaurant: IRestaurant) {
    try {
      const newRestaurant = await axios().post('/restaurants/me', restaurant)
      if (newRestaurant.status === 200) {
        this.setRestaurant(newRestaurant.data.restaurant)
        NotificationStore.addNotification({ message: newRestaurant.data.message, status: newRestaurant.status })
      }
    } catch (error: any) {
      NotificationStore.addNotification({ message: error.response.data.message, status: error.response.status })
    }
  }
}
export default new RestaurantStore()
