import { memo } from 'react'
import { ShoppingBag } from 'lucide-react'
const ProductCard = memo(function ProductCard({ product, onAdd }) {
  return <article className="product-card"><img src={product.image} alt={product.name} onError={e => { e.currentTarget.style.display = 'none' }} /><div className="product-body"><span className="tag">{product.category}</span><h3>{product.name}</h3><p>{product.description}</p><div className="product-bottom"><strong>S/ {product.price.toFixed(2)}</strong><button onClick={() => onAdd(product)} aria-label={`Agregar ${product.name}`}><ShoppingBag size={18} /> Agregar</button></div><small>{product.stock} disponibles</small></div></article>
})
export default ProductCard
