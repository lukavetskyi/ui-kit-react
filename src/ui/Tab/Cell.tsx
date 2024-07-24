import { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from "react"
import cls from "./tab.module.scss"

export interface CellProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  active?: boolean
}

export const TabCell: FC<PropsWithChildren<CellProps>> = ({
  children,
  active = false,
  className = '',
  ...props
}) => {
  const styles = [
    active ? cls.active : "",
    className
  ].join(' ')
  return <li><button className={styles} {...props}>{children}</button></li>
}

