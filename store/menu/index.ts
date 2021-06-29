// import store from '../../store'
import BaseStoreService from '~/store/abstract'
import { MenuStoreModule } from '~/store/menu/module'
import { MenuState } from '~/store/menu/state'
import { IMenu } from '~/store/interfaces/'

class MenuStore extends BaseStoreService<MenuState> {
  public mutations = MenuStoreModule.mutations
  public getters = MenuStoreModule.getters

  get menus (): Array<IMenu> {
    return this.read<any>(this.getters.menus)
  }

  addMenu (menu: IMenu) {
    this.commit(this.mutations.addMenu, menu)
  }

  updateMenu (menu: IMenu) {
    this.commit(this.mutations.updateMenu, menu)
  }

  deleteMenu (menu: IMenu) {
    this.commit(this.mutations.deleteMenu, menu)
  }

  setMenus (menus: Array<IMenu>) {
    this.commit(this.mutations.setMenus, menus)
  }
}
export default new MenuStore()
