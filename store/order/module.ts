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
    addOrders (state: OrderState, orders: Array<IOrder>) {
      state.orders = [...state.orders, ...orders]
    },
    updateOrder (state: OrderState, payload: { orderId: object, status: EOrderState }) {
      
      const orderSelected = state.orders.findIndex(order => order._id === payload.orderId)
      console.log({ payload, os: state.orders, orderSelected })
      state.orders[orderSelected].status = payload.status
    }
  }
}
