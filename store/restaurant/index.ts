// import store from '../../store'
import BaseStoreService from '~/store/abstract'
import { RestaurantStoreModule } from '~/store/restaurant/module'
import { RestaurantState } from '~/store/restaurant/state'
import { IRestaurant } from '~/store/interfaces/'

class RestaurantStore extends BaseStoreService<RestaurantState> {
  public mutations = RestaurantStoreModule.mutations
  public getters = RestaurantStoreModule.getters

  get restaurant (): IRestaurant {
    return this.read<any>(this.getters.restaurant)
  }

  setRestaurant (restaurant: IRestaurant) {
    this.commit(this.mutations.setRestaurant, restaurant)
  }

  updateRestaurant (restaurant: IRestaurant) {
    this.commit(this.mutations.setRestaurant, restaurant)
  }

  deleteRestaurant () {
    this.commit(this.mutations.deleteRestaurant, this.restaurant)
  }
}
export default new RestaurantStore()
