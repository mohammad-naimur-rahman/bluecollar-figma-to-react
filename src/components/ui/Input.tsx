import classNames from 'classnames'
import { DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type TextareaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

type Props = {
  className?: string
  as?: 'input' | 'textarea'
} & (InputProps | TextareaProps)

const Input = ({ className, as = 'input', ...rest }: Props) => {
  if (as === 'textarea') {
    return (
      <textarea
        className={classNames(
          'p-3 mb-6 sm:p-2 sm:mb-4 placeholder:text-gray text-secondary border-[1px] border-gray border-opacity-30 focus:outline-none',
          className
        )}
        {...(rest as TextareaProps)}
      ></textarea>
    )
  }

  return (
    <input
      className={classNames(
        'p-3 mb-6 sm:p-2 sm:mb-4 placeholder:text-gray text-secondary border-[1px] border-gray border-opacity-30 focus:outline-none',
        className
      )}
      {...(rest as InputProps)}
    />
  )
}

export default Input
