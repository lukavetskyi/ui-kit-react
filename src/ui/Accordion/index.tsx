import { CaretDown } from "@phosphor-icons/react";
import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren, useEffect, useState } from "react";
import cls from './accordion.module.scss'

export interface AccordionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string,
  isOpenDefault?: boolean,
}

export const Accordion: FC<PropsWithChildren<AccordionProps>> = ({
  title,
  isOpenDefault = false,
  className = '',
  children,
  ...props
}) => {
  const [open, setOpen] = useState<boolean>(isOpenDefault);

  useEffect(() => { setOpen(isOpenDefault) }, [isOpenDefault])

  const toggleAccordion = () => setOpen(prev => !prev)

  const openStyle = open ? cls.open : cls.close

  const styles = [
    cls.accordion,
    openStyle,
    className
  ].join(' ')

  return <div className={styles} {...props}>
    <h4 onClick={toggleAccordion}>
      <span>{title}</span>
      <CaretDown className={openStyle} />
    </h4>
    <div className={openStyle}><div>{children}</div></div>
  </div>
}
