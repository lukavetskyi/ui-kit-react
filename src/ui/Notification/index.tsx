import { DetailedHTMLProps, DialogHTMLAttributes, FC, PropsWithChildren, useEffect, useState } from "react"
import cls from "./notification.module.scss"
import { colorsType } from "@/types/colors"
import { Check, Info, Warning, X } from "@phosphor-icons/react"

export interface NotificationProps extends DetailedHTMLProps<DialogHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string,
  open?: boolean,
  color?: colorsType,
  onClose?: () => void,
  autoCloseDelay?: number,
}

export const Notification: FC<PropsWithChildren<NotificationProps>> = ({
  children,
  open = true,
  color = 'primary',
  onClose,
  className = '',
  title,
  autoCloseDelay = 0,
  ...props
}) => {
  const [openNotification, setOpenNotification] = useState<boolean>(open);

  useEffect(() => { setOpenNotification(open) }, [open])
  
  useEffect(() => {
    if (autoCloseDelay) {
      const autoClose = setTimeout(() => { setOpenNotification(false) }, autoCloseDelay*1000)
      return () => {
        clearTimeout(autoClose)
      }
    }
  }, [autoCloseDelay])

  if (onClose === undefined) onClose = () => { setOpenNotification(false) }

  let titleIcon;
  if (color === "danger") titleIcon = <Warning />
  else if (color === "success") titleIcon = <Check />
  else if (color === "warning") titleIcon = <Warning />
  else if (color === "info") titleIcon = <Info />

  const styles = [
    `color-${color}`,
    cls.notification,
    openNotification ? cls.open : cls.close,
    titleIcon === undefined ? '' : cls.icon,
    className
  ].join(' ')


  return <div className={styles} {...props}>
    <div><h3>{titleIcon}<span>{title}</span></h3><X onClick={onClose} /></div>
    <div>{children}</div>
  </div>
}
