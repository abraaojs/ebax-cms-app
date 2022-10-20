import { useEffect } from 'react'

export default (url: string, isAsync: boolean = true) => {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = url
    script.async = isAsync

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])
}
