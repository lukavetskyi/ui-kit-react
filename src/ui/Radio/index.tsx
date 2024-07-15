import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'
import cls from './radio.module.scss'
import { colorsType } from '@/types/colors';

export interface RadioProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  color?: colorsType;
  disabled?: boolean,
}

export const Radio: FC<RadioProps> = ({
  color = "primary",
  className = "",
  ...props
}) => {
  const styles = [
    `color-${color}`,
    cls.radio,
    className
  ].join(' ')

  return <input type="radio" className={styles} {...props} />
}
