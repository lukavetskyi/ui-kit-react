import { FC, DetailedHTMLProps, OptionHTMLAttributes, PropsWithChildren } from "react";

export interface SelectOptionProps extends DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement> { }

export const SelectOption: FC<PropsWithChildren<SelectOptionProps>> = ({
  children,
  ...props
}) => {
  return <option {...props}>{children}</option>
}
