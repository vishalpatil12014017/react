import React from 'react'
import { useState, useEffect } from 'react';
function useDelay(delay) {
  const [render, setRender] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setRender(true)
    }, delay * 1000)
    return () => clearTimeout(timer)
  }, [delay])
  return render
}
function CustomHooks() {
  const ready = useDelay(5)
  if (!ready) {
    return  <h1>React CustomHooks</h1>;
  }
  return (
    <div>
      <h1>React CustomHooks</h1>
      <h1>Hello Peter</h1>
    </div>
  )
}

export default CustomHooks
