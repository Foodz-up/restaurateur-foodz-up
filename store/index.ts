import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { ArticleStoreModule } from './article/module'
import { MenuStoreModule } from './menu/module'
import { RestaurantStoreModule } from './restaurant/module'
import { AuthStoreModule } from '~/store/auth/module'
import { NotificationStoreModule } from '~/store/notification/module'
import { RootState } from '~/store/root'

Vue.use(Vuex)

const store: Store<RootState> = new Vuex.Store<RootState>({
  state: () => ({}),
  mutations: {},
  getters: {},
  actions: {
    nuxtServerInit () {},
    async nuxtClientInit () {}
  },
  modules: {
    auth: AuthStoreModule,
    notification: NotificationStoreModule,
    article: ArticleStoreModule,
    menu: MenuStoreModule,
    restaurant: RestaurantStoreModule
  }
})
export default function () {
  return store
}
