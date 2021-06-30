import BaseStoreService from '~/store/abstract'
import { OrderStoreModule } from '~/store/order/module'
import { OrderState } from '~/store/order/state'
import { IOrder, EOrderState } from '~/store/interfaces/'
import axios from '~/plugins/axios'
import NotificationStore from '~/store/notification'

class OrderStore extends BaseStoreService<OrderState> {
  public mutations = OrderStoreModule.mutations
  public getters = OrderStoreModule.getters

  get orders (): Array<IOrder> {
    return this.read<any>(this.getters.orders)
  }

  getOrder (idOrder: number): IOrder | undefined {
    return this.orders.find(order => order.id === idOrder)
  }

  async getOrders () {
    try {
      const orders = await axios().get('orders/me/restaurator')
      console.log({ orders })

      if (orders.status === 200 && orders.data.orders.length > 0) {
        this.setOrders(orders.data.orders)
      }
    } catch (error: any) {
      NotificationStore.addNotification({ message: error.response.data.message, status: error.response.status })
    }
  }

  setOrders (orders: Array<IOrder>) {
    this.commit(this.mutations.setOrders, orders)
  }

  addOrder (order: IOrder) {
    this.commit(this.mutations.addOrder, order)
  }

  updateOrder (orderId: number, status: EOrderState) {
    this.commit(this.mutations.updateOrder, { orderId, status })
  }
}
export default new OrderStore()
