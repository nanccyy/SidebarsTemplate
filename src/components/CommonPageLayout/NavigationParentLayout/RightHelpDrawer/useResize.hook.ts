import { useCallback, useEffect, useState } from 'react'

type UseResizeProps = {
  minWidth: number
}

type UseResizeReturn = {
  width: number
  enableResize: () => void
  disableResize: () => void
}

const useResize = ({
  minWidth,
}: UseResizeProps): UseResizeReturn => {
  const [isResizing, setIsResizing] = useState(false)
  const [width, setWidth] = useState(minWidth)

  const enableResize = useCallback(() => {
    setIsResizing(true)
  }, [])

  const disableResize = useCallback(() => {
    setIsResizing(false)
  }, [])

  const resize = useCallback(
    (e: MouseEvent) => {
      if (isResizing) {
        const newWidth = window.innerWidth - e.clientX // You may want to add some offset here from props
        const isLessThan90perc = (e.clientX / window.innerWidth) > 0.1; //the max width for the sidebar is 90% of the screen 
        if (newWidth >= minWidth && isLessThan90perc) {
          setWidth(newWidth)
        }
      }
    },
    [isResizing],
  )

  useEffect(() => {
    document.addEventListener('mousemove', resize)
    document.addEventListener('mouseup', disableResize)

    return () => {
      document.removeEventListener('mousemove', resize)
      document.removeEventListener('mouseup', disableResize)
    }
  }, [disableResize, resize])

  return { width, enableResize, disableResize }
}

export default useResize