import { ChangeEvent, DetailedHTMLProps, FC, TextareaHTMLAttributes, useState } from 'react'
import cls from './textarea.module.scss'
import { colorsType } from '@/types/colors'

export interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  color?: colorsType,
  helperText?: string,
  disabled?: boolean,
}

export const Textarea: FC<TextareaProps> = ({
  color = "primary",
  className = '',
  helperText = '',
  maxLength,
  onChange = () => { },
  ...props
}) => {

  const [length, setLength] = useState<number>(0);

  const countSymbols = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setLength(e.target.value.length);
    onChange(e);
  }

  const styles = [
    `color-${color}`,
    cls.textarea,
    className
  ].join(' ')


  if (helperText || maxLength) {
    return <div className={cls.wrapper}>
      <textarea onChange={countSymbols} className={styles} {...props}></textarea>
      <div>
        <span>{helperText}</span>
        <span>{maxLength? `${length}/${maxLength}` : ''}</span>
      </div>
    </div>
  }

  return <textarea onChange={countSymbols} className={styles} {...props}></textarea>
}
