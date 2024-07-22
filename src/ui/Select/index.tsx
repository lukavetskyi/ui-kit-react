import { DetailedHTMLProps, FC, ReactElement, SelectHTMLAttributes } from 'react'
import cls from './select.module.scss'
import { SelectOption } from './Option'
import { colorsType } from '@/types/colors'
import { CaretDown } from '@phosphor-icons/react'

type ValidChildren = ReactElement<typeof SelectOption>

export interface SelectProps extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  children: ValidChildren | ValidChildren[],
  color?: colorsType
}

export const Select: FC<SelectProps> = ({
  children,
  className = "",
  color = "primary",
  ...props
}) => {
  const styles = [
    `color-${color}`,
    cls.select,
    className
  ].join(' ')

  return <div className={cls.wrapper}>
    <select className={styles} {...props}>
      {children}
    </select>
    <CaretDown />
  </div>
}
