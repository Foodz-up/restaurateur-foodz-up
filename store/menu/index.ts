// import store from '../../store'
import BaseStoreService from '~/store/abstract'
import { MenuStoreModule } from '~/store/menu/module'
import { MenuState } from '~/store/menu/state'
import { IMenu } from '~/store/interfaces/'
import axios from '~/plugins/axios'
import NotificationStore from '~/store/notification'
import RestaurantStore from '~/store/restaurant'
class MenuStore extends BaseStoreService<MenuState> {
  public mutations = MenuStoreModule.mutations
  public getters = MenuStoreModule.getters

  get menus (): Array<IMenu> {
    return this.read<Array<IMenu>>(this.getters.menus)
  }

  async addMenu (menu: IMenu) {
    try {
      let newId = 0
      if (RestaurantStore.restaurant.menus.length > 0) {
        newId = RestaurantStore.restaurant.menus[RestaurantStore.restaurant.menus.length - 1].id + 1
      }
      menu.id = newId
      const newMenu = await axios().post('/menus/me', menu)
      if (newMenu.status === 200) {
        this.commit(this.mutations.addMenu, newMenu.data.menu)
        NotificationStore.addNotification({ message: newMenu.data.message, status: newMenu.status })
      }
    } catch (error: any) {
      NotificationStore.addNotification({ message: error.response.data.message, status: error.response.status })
    }
  }

  async updateMenu (menu: IMenu) {
    try {
      const updatedMenu = await axios().patch('/menus/me/update', menu)
      if (updatedMenu.status === 200) {
        this.commit(this.mutations.updateMenu, updatedMenu.data.menu)
        NotificationStore.addNotification({ message: updatedMenu.data.message, status: updatedMenu.status })
      }
    } catch (error: any) {
      NotificationStore.addNotification({ message: error.response.data.message, status: error.response.status })
    }
  }

  async deleteMenu (menu: IMenu) {
    try {
      const deletedMenu = await axios().patch('/menus/me/delete', { menuId: menu.id })
      if (deletedMenu.status === 200) {
        this.commit(this.mutations.deleteMenu, deletedMenu.data.menu)
        NotificationStore.addNotification({ message: deletedMenu.data.message, status: deletedMenu.status })
      }
    } catch (error: any) {
      NotificationStore.addNotification({ message: error.response.data.message, status: error.response.status })
    }
  }

  setMenus (menus: Array<IMenu>) {
    this.commit(this.mutations.setMenus, menus)
  }
}
export default new MenuStore()
