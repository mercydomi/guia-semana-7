import { useEffect, useState } from 'react'

export function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  useEffect(() => {
    const controller = new AbortController()
    async function load() {
      setLoading(true); setError('')
      try {
        const response = await fetch(url, { signal: controller.signal })
        if (!response.ok) throw new Error('No se pudo cargar la información.')
        setData(await response.json())
      } catch (err) { if (err.name !== 'AbortError') setError(err.message) }
      finally { if (!controller.signal.aborted) setLoading(false) }
    }
    load()
    return () => controller.abort()
    // StrictMode monta/desmonta efectos extra en desarrollo para detectar limpiezas inseguras.
  }, [url])
  return { data, loading, error }
}
