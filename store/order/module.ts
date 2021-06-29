import { OrderState } from '~/store/order/state'
import { IOrder, EOrderState } from '~/store/interfaces/'

export const OrderStoreModule = {
  namespaced: false,
  state: () => ({ ...new OrderState() }),
  getters: {
    orders (state: OrderState): Array<IOrder> {
      return state.orders
    }
  },
  mutations: {
    setOrders (state: OrderState, orders: Array<IOrder>) {
      state.orders = orders
    },

    addOrder (state: OrderState, order: IOrder) {
      state.orders = [...state.orders, order]
    },
    updateOrder (state: OrderState, payload:{orderId: number, status: EOrderState}) {
      const orderSelected = state.orders.findIndex(order => order.id === payload.orderId)
      state.orders[orderSelected].status = payload.status
    }
  }
}
