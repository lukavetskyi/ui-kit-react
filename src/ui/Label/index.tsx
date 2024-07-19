import { DetailedHTMLProps, FC, LabelHTMLAttributes, PropsWithChildren } from "react"
import cls from "./label.module.scss"

export interface LabelProps extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> { }

export const Label:FC<PropsWithChildren<LabelProps>> = ({
  children,
  className = '',
  ...props
}) => {
 const styles = [
    cls.label,
    className
  ].join(' ')
  
  return <label className={styles} {...props}>{children}</label>
}
