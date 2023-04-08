import classNames from 'classnames'
import { useState, Children, isValidElement, cloneElement, useEffect, ReactNode } from 'react'

type arrOfObj = {
  index: number
  status: 'opened' | 'closed'
}
type arrOfObjType = arrOfObj[]

export const Accordions = ({ children, className }: { children: ReactNode; className: string }) => {
  const [states, setstates] = useState<arrOfObjType>([])

  const arr = Children.toArray(children)
  useEffect(() => {
    let temp: arrOfObjType = []

    Children.map(arr, (child, i) => {
      if (i === 0) {
        temp.push({
          index: i,
          status: 'opened'
        })
      } else {
        temp.push({
          index: i,
          status: 'closed'
        })
      }
    })

    setstates(temp)
  }, [])

  const modifiedChild = Children.map(arr, (child, i) => {
    if (isValidElement(child) && child.type && (child.type as any).name === 'AccordionItem') {
      return cloneElement(child, {
        states,
        setstates,
        index: i
      } as { states: arrOfObjType; setstates: React.Dispatch<React.SetStateAction<arrOfObjType>>; index: number })
    } else {
      return null
    }
  })
  return <div className={className}>{modifiedChild}</div>
}

export const AccordionItem = ({
  children,
  states,
  setstates,
  index,
  className
}: {
  children: ReactNode
  states?: arrOfObjType
  setstates?: React.Dispatch<React.SetStateAction<arrOfObjType>>
  index?: number
  className?: string
}) => {
  const arr = Children.toArray(children)
  const openedIndex = states?.findIndex(({ status }) => status === 'opened')
  const modifiedChild = Children.map(arr, (child, i) => {
    if (
      isValidElement(child) &&
      ['AccordionTitle', 'AccordionContent'].includes(child.type && (child.type as any).name)
    ) {
      return cloneElement(child, {
        states,
        setstates,
        index,
        openedIndex
      } as { states: arrOfObjType; setstates: React.Dispatch<React.SetStateAction<arrOfObjType>>; index: number; openedIndex: number })
    } else {
      return null
    }
  })
  return <div className={classNames('p-2 shadow-lg', className)}>{modifiedChild}</div>
}

export const AccordionTitle = ({
  children,
  states,
  setstates,
  index,
  openedIndex,
  className,
  arrowKey,
  arrowKeyClassName
}: {
  children: ReactNode
  states?: arrOfObjType
  setstates?: React.Dispatch<React.SetStateAction<arrOfObjType>>
  index?: number
  openedIndex?: number
  className?: string
  arrowKey?: ReactNode
  arrowKeyClassName?: string
}) => {
  const handleClick = () => {
    if (setstates) {
      const newState = states?.map(({ index: i }) => {
        if (i === index) {
          return {
            index: i,
            status: 'opened'
          }
        } else {
          return {
            index: i,
            status: 'closed'
          }
        }
      })

      setstates(newState as arrOfObjType)
    }
  }
  return (
    <div
      className={classNames('p-2 cursor-pointer flex items-center justify-between font-bold', className)}
      onClick={handleClick}
    >
      <div>{children}</div>
      {arrowKey ? (
        <div className={classNames(arrowKeyClassName, { 'rotate-90': openedIndex === index })}>{arrowKey}</div>
      ) : (
        <div
          className={classNames(
            'w-0 h-0 border-t-[10px] border-transparent border-l-[10px] border-l-gray-800 border-b-[10px] border-b-transparent mr-1',
            { 'rotate-90': openedIndex === index }
          )}
        ></div>
      )}
    </div>
  )
}

export const AccordionContent = ({
  children,
  index,
  openedIndex,
  className
}: {
  children: ReactNode
  index?: number
  openedIndex?: number
  className?: string
}) => {
  return (
    <div
      className={classNames(
        'overflow-hidden',
        { 'max-h-[1000px]': openedIndex === index },
        { 'max-h-0': openedIndex !== index },
        className
      )}
    >
      <div
        className={classNames(
          'transition-opacity duration-300',
          { 'opacity-100': openedIndex === index },
          { 'opacity-0': openedIndex !== index }
        )}
      >
        {children}
      </div>
    </div>
  )
}
