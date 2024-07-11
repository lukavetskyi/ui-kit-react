import { CaretCircleRight } from "@phosphor-icons/react";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react"
import cls from './button.module.scss'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content?: "text" | "icon" | "text-icon",
  size?: "normal" | "big",
  btnType?: "primary" | "secondary" | "outline" | "text",
  color?: "primary" | "danger" | "warning" | "info" | "success",
  disabled?: boolean;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  content = "text",
  size = "normal",
  btnType = "primary",
  color = "primary",
  className = '',
  ...props
}) => {
  let child;
  if (content === "text") child = <>{children}</>
  else if (content === "text-icon") child = <><span>{children}</span><CaretCircleRight /></>
  else child = <><CaretCircleRight /></>

  const styles = [
    cls['common'],
    cls[content],
    cls[size],
    cls[`type-${btnType}`],
    cls[`color-${color}`],
    className
  ].join(' ');

  return <button className={styles} {...props}>{child}</button>
}
