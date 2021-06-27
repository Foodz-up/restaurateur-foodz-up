import { RestaurantState } from '~/store/restaurant/state'
import { IRestaurant } from '~/store/interfaces'

export const RestaurantStoreModule = {
  namespaced: false,
  state: () => ({ ...new RestaurantState() }),
  getters: {
    restaurant (state: RestaurantState): IRestaurant | null {
      return state.restaurant
    }
  },
  mutations: {
    setRestaurant (state: RestaurantState, restaurant: IRestaurant) {
      state.restaurant = restaurant
    },
    updateRestaurant (state: RestaurantState, restaurant: IRestaurant) {
      state.restaurant = {
        ...state.restaurant,
        ...restaurant
      }
    },
    deleteRestaurant (state: RestaurantState) {
      state.restaurant = null
    }
  }
}
