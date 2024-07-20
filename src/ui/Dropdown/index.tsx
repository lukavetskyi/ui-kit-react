import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement, useState } from "react"
import { DropdownOption } from "./Option"
import { DropdownLine } from "./Line"
import { CaretDown } from "@phosphor-icons/react"
import { colorsType } from "@/types/colors"
import cls from "./dropdown.module.scss"

type ValidChildren = ReactElement<typeof DropdownOption> | ReactElement<typeof DropdownLine>

export interface DropdownProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ValidChildren | ValidChildren[],
  title: string,
  color?: colorsType,
  disabled?: boolean
}

export const Dropdown: FC<DropdownProps> = ({
  children,
  title,
  color = "primary",
  className,
  disabled = false,
  ...props
}) => {
  const [open, setOpen] = useState<boolean>(false)

  const toggleDropdown = () => setOpen(prev => !prev)

  const openStyle = open ? cls.open : cls.close;

  const styles = [
    `color-${color}`,
    cls.dropdown,
    className
  ].join(' ')

  return <div className={styles} {...props}>
    <button disabled={disabled} onClick={toggleDropdown}>
      <span>{title}</span>
      <CaretDown className={openStyle} />
    </button>
    <div className={openStyle}><div>{children}</div></div>
  </div>
}

