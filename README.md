# GameZone — Tienda Gamer

SPA académica para la Guía Práctica Semana 07 (UNCP). Su objetivo es demostrar React Hooks en una tienda de periféricos gamer funcional, sin pagos reales ni backend.

## Tecnologías e inicio

React, Vite, JavaScript, CSS moderno y Lucide React.

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Estructura

`src/components` contiene UI reutilizable; `context` el tema; `hooks/useFetch.js` la carga HTTP; `reducers` el carrito; `public/data/products.json` el catálogo local.

## Funcionalidades

Catálogo de 12 productos, búsqueda, filtros y ordenamiento; carrito con cantidades y límite de stock; checkout validado de demostración; tema claro/oscuro y persistencia de carrito/tema.

## Hooks y los cinco pasos

1. **Renderizado:** `React.StrictMode` está en `main.jsx`; cambios de búsqueda, filtros, formulario y carrito disparan re-renders observables con Profiler.
2. **useEffect:** `useFetch` carga JSON con `async/await` y `AbortController`; su comentario explica el montaje adicional de StrictMode. ThemeProvider sincroniza tema.
3. **useContext:** ThemeContext evita prop drilling para el cambio de tema desde Header.
4. **Optimización:** `useMemo` calcula catálogo filtrado, total y cantidad; `useCallback` estabiliza agregar; `useRef` enfoca búsqueda; ProductCard usa `React.memo`.
5. **Hook personalizado:** `useFetch` encapsula datos, loading, error y cancelación. Se reutiliza en App para el catálogo y en Home para los destacados.

## React DevTools Profiler

Abra DevTools → Profiler → Record. Busque y filtre productos, agregue un producto y cambie el tema. Compare los commits de ProductCard antes/después de aplicar `memo`/`useCallback` en una copia temporal del componente.

### Registro de mediciones reales

| Escenario | Antes | Después | Fecha/evidencia |
|---|---|---|---|
| Filtrar catálogo | | | |
| Agregar producto | | | |

### Capturas, enlaces

- Captura Inicio: pendiente.
- Captura Catálogo/Carrito: pendiente.
- GitHub: pendiente.
- Video explicativo: pendiente.
