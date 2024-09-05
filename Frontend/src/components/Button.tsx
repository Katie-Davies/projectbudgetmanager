import { ReactNode } from 'react'

function Button(props: {
  onClick?: () => void
  className?: string
  children: ReactNode
}) {
  const { onClick, className, children } = props
  const defaultClassName =
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-10'
  return (
    <button className={`${defaultClassName} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button