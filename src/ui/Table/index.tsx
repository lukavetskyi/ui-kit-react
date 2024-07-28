import { DetailedHTMLProps, FC, PropsWithChildren, TableHTMLAttributes } from "react"

import cls from "./table.module.scss"
import { colorsType } from "@/types/colors"

export interface TableProps extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  color?: colorsType
}

export const Table: FC<PropsWithChildren<TableProps>> = ({
  children,
  className,
  color='primary',
  ...props
}) => {
  const styles = [
    `color-${color}`,
    cls.table,
    className
  ].join(' ')
  return <table className={styles} {...props}>{children}</table>
}
