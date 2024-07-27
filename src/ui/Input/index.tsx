import { colorsType } from "@/types/colors"
import cls from "./input.module.scss"
import { ChangeEvent, DetailedHTMLProps, FC, HTMLInputTypeAttribute, InputHTMLAttributes, useEffect, useState } from "react"
import { Check, Eye, Warning } from "@phosphor-icons/react"

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  correctInput?: (s: string) => boolean
  helperText?: string
  classNameWrapper?: string
  disabled?:boolean
}

type Status = Extract<colorsType, "primary" | "danger" | "success">

export const Input: FC<InputProps> = ({
  correctInput,
  helperText,
  onChange,
  classNameWrapper,
  type,
  ...props
}) => {
  const [status, setStatus] = useState<Status>("primary")
  const [inputType, setInputType] = useState<HTMLInputTypeAttribute | undefined>(type)

  useEffect(() => {
    setInputType(type)
  }, [type])

  const stylesWrapper = [
    `color-${status}`,
    cls.wrapper,
    cls[status],
    classNameWrapper
  ].join(' ')

  const helperTextComponent = helperText ? <span>{helperText}</span> : <></>

  const togglePassHandler = () => {
    if (inputType === "password") setInputType("text")
    else setInputType(type)
  }

  let icon = <></>
  if (type === "password") icon = <Eye onClick={togglePassHandler} />
  else if (status === "danger") icon = <Warning />
  else if (status === "success") icon = <Check />

  if (correctInput) {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (correctInput(e.target.value)) setStatus("success")
      else setStatus("danger")

      onChange?.(e)
    }

    return <div className={stylesWrapper}>
      <input
        type={inputType}
        {...props}
        onChange={onChangeHandler} />
      {helperTextComponent}
      {icon}
    </div>
  }

  return <div className={stylesWrapper}>
    <input
      type={inputType}
      {...props}
      onChange={onChange} />
    {helperTextComponent}
    {icon}
  </div>


}
