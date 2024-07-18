import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'
import cls from './switch.module.scss'
import { colorsType } from '@/types/colors'

export interface SwitchProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  color?: colorsType;
  disabled?: boolean,
}

export const Switch: FC<SwitchProps> = ({ color = "primary", className = '', ...props }) => {
  const styles = [
    `color-${color}`,
    cls.switch,
    className
  ].join(' ')

  return <input type="checkbox" className={styles} {...props} />
}
