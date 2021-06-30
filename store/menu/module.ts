import { MenuState } from '~/store/menu/state'
import { IMenu } from '~/store/interfaces'

export const MenuStoreModule = {
  namespaced: false,
  state: () => ({ ...new MenuState() }),
  getters: {
    menus (state: MenuState): Array<IMenu> {
      return state.menus
    }
  },
  mutations: {
    setMenus (state: MenuState, menus: Array<IMenu>) {
      state.menus = menus
    },
    addMenu (state: MenuState, menu: IMenu) {
      console.log({ menu, d: state.menus })

      state.menus.push(menu)
    },
    updateMenu (state: MenuState, menu: IMenu) {
      const indexOfSelectedMenu = state.menus.findIndex(x => x.id === menu.id)
      state.menus[indexOfSelectedMenu] = menu
    },
    deleteMenu (state: MenuState, menu: IMenu) {
      const indexOfSelectedMenu = state.menus.findIndex(x => x.id === menu.id)
      state.menus.splice(indexOfSelectedMenu, 1)
    }
  }
}
