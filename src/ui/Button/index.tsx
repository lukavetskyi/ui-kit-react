import { CaretCircleRight, Icon } from "@phosphor-icons/react";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react"
import cls from './button.module.scss'
import { colorsType } from "@/types/colors";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content?: "text" | "icon" | "text-icon",
  size?: "normal" | "big",
  btnType?: "primary" | "secondary" | "outline" | "text",
  color?: colorsType,
  icon?: Icon;
  disabled?: boolean;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  content = "text",
  size = "normal",
  btnType = "primary",
  color = "primary",
  className = '',
  icon = <CaretCircleRight />,
  ...props
}) => {
  let child;
  if (content === "text") child = <>{children}</>
  else if (content === "text-icon") child = <><span>{children}</span>{icon}</>
  else child = <>{icon}</>

  const styles = [
    cls['common'],
    cls[content],
    cls[size],
    cls[`type-${btnType}`],
    `color-${color}`,
    className
  ].join(' ');

  return <button className={styles} {...props}>{child}</button>
}
