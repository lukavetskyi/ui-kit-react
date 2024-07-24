import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement } from "react"
import cls from "./tab.module.scss"
import { TabCell } from "./Cell"
import { colorsType } from "@/types/colors"

type ValidChildren = ReactElement<typeof TabCell> | ReactElement<typeof TabCell>

export interface TabProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  children: ValidChildren | ValidChildren[],
  color?: colorsType
}

export const Tab: FC<TabProps> = ({
  children,
  color = 'primary',
  className,
  ...props
}) => {
  const styles = [
    `color-${color}`,
    cls.tab,
    className
  ].join(' ')

  return <ul className={styles} {...props}>
    {children}
  </ul>
}
