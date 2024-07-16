import { CaretDown } from "@phosphor-icons/react";
import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren, useEffect, useState } from "react";
import cls from './accordion.module.scss'

export interface AccordionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string,
  open?: boolean,
}

export const Accordion: FC<PropsWithChildren<AccordionProps>> = ({
  title,
  open = false,
  className = '',
  children,
  ...props
}) => {
  const [openAccordion, setOpenAccordion] = useState<boolean>(open);

  useEffect(() => { setOpenAccordion(open) }, [open])

  const toggleAccordion = () => setOpenAccordion(prev => !prev)

  const openStyle = openAccordion ? cls.open : cls.close

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
