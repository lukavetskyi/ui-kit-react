import { colorsType } from "@/types/colors";
import { HeartStraight, Icon } from "@phosphor-icons/react";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react"
import cls from './tag.module.scss'

export interface TagProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content?: "text" | "text-icon",
  icon?: Icon,
  color?: colorsType,
  disabled?: boolean
}

export const Tag: FC<PropsWithChildren<TagProps>> = ({
  children,
  content = "text",
  color = "primary",
  className = '',
  icon = <HeartStraight />,
  ...props
}) => {
  let child;
  if (content === "text") child = <>{children}</>
  else child = <><span>{children}</span>{icon}</>

  const styles = [
    cls.common,
    cls[content],
    `color-${color}`,
    className
  ].join(' ')

  return <button className={styles} {...props}>{child}</button>
}
