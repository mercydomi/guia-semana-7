export function cartReducer(state, action) {
  const found = state.find(item => item.id === action.product?.id || item.id === action.id)
  switch (action.type) {
    case 'ADD_ITEM': return found ? state.map(x => x.id === found.id && x.quantity < x.stock ? { ...x, quantity: x.quantity + 1 } : x) : [...state, { ...action.product, quantity: 1 }]
    case 'INCREASE_QUANTITY': return state.map(x => x.id === action.id && x.quantity < x.stock ? { ...x, quantity: x.quantity + 1 } : x)
    case 'DECREASE_QUANTITY': return state.map(x => x.id === action.id ? { ...x, quantity: x.quantity - 1 } : x).filter(x => x.quantity > 0)
    case 'REMOVE_ITEM': return state.filter(x => x.id !== action.id)
    case 'CLEAR_CART': return []
    default: return state
  }
}
