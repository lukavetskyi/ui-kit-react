import { DetailedHTMLProps, DialogHTMLAttributes, FC, PropsWithChildren, useEffect, useState } from "react"
import cls from "./modal.module.scss"
import { colorsType } from "@/types/colors"
import { Check, Info, Warning, X } from "@phosphor-icons/react"
import { Button } from "../Button"

export interface ModalProps extends DetailedHTMLProps<DialogHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string,
  open?: boolean,
  color?: colorsType,
  onClose?: () => void,
  onSuccess?: () => void,
  onCancle?: () => void
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  open = true,
  color = 'primary',
  onClose,
  onSuccess,
  onCancle,
  className = '',
  title,
  ...props
}) => {
  const [openModal, setOpenModal] = useState<boolean>(open);

  useEffect(()=>{setOpenModal(open)}, [open])

  if (onClose === undefined) onClose = () => { setOpenModal(false) }
  if (onSuccess === undefined) onSuccess = () => { setOpenModal(false) }
  if (onCancle === undefined) onCancle = () => { setOpenModal(false) }

  let titleIcon;
  if (color === "danger") titleIcon = <Warning />
  else if (color === "success") titleIcon = <Check />
  else if (color === "warning") titleIcon = <Warning />
  else if (color === "info") titleIcon = <Info />

  const styles = [
    `color-${color}`,
    cls.modal,
    openModal ? cls.open : cls.close,
    titleIcon === undefined ? '' : cls.icon,
    className
  ].join(' ')


  return <div className={styles} {...props}>
    <div><h3>{titleIcon}<span>{title}</span></h3><X onClick={onClose} /></div>
    <div>{children}</div>
    <div>
      <Button onClick={onSuccess} color={color}>Okay</Button>
      <Button onClick={onCancle} color={color} btnType="secondary">Cancel</Button>
    </div>
  </div>
}
