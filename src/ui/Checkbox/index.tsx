import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'
import cls from './checkbox.module.scss'
import { colorsType } from '@/types/colors'

export interface CheckboxProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  color?: colorsType;
  disabled?: boolean,
}

export const Checkbox: FC<CheckboxProps> = ({ color = "primary", className = '', ...props }) => {
  const styles = [
    `color-${color}`,
    cls.checkbox,
    className
  ].join(' ')

  return <input type="checkbox" className={styles} {...props} />
}
