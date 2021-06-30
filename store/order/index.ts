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

  getOrder (idOrder: string): IOrder | undefined {
    return this.orders.find(order => order._id === idOrder)
  }

  async getOrders () {
    try {
      const orders = await axios().get('orders/me/restaurator')
      console.log({ orders })

      if (orders.status === 200 && orders.data.orders.length > 0) {
        this.addOrders(orders.data.orders)
        console.log({ storeOrder: this.orders })
      }
    } catch (error: any) {
      NotificationStore.addNotification({ message: error.response.data.message, status: error.response.status })
    }
  }

  setOrders (orders: Array<IOrder>) {
    this.commit(this.mutations.setOrders, orders)
  }

  addOrders (orders: Array<IOrder>) {
    this.commit(this.mutations.addOrders, orders)
  }

  addOrder (order: IOrder) {
    this.commit(this.mutations.addOrder, order)
  }

  async updateOrder (orderId: object, status: EOrderState) {
    try {
      const order = await axios().patch('orders/me/update', { orderId, status })
      console.log({ order })

      if (order.status === 200) {
        this.commit(this.mutations.updateOrder, { orderId: order.data.order._id, status: order.data.order.status })
      }
    } catch (error: any) {
      console.log({ error })
      NotificationStore.addNotification({ message: error.response.data.message, status: error.response.status })
    }
  }
}
export default new OrderStore()
