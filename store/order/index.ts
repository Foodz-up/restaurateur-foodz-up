import BaseStoreService from '~/store/abstract'
import { OrderStoreModule } from '~/store/order/module'
import { OrderState } from '~/store/order/state'
import { IOrder, EOrderState } from '~/store/interfaces/'

class OrderStore extends BaseStoreService<OrderState> {
  public mutations = OrderStoreModule.mutations
  public getters = OrderStoreModule.getters

  get orders (): Array<IOrder> {
    return this.read<any>(this.getters.orders)
  }

  getOrder (idOrder: number): IOrder | undefined {
    return this.orders.find(order => order.id === idOrder)
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
