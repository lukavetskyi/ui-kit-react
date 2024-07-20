import { Checkbox } from "@/ui/Checkbox"
import { Label } from "@/ui/Label"
import { ChangeEvent, FC, useEffect, useState } from "react"
import cls from "./option.module.scss"
import { v4 as uuidv4 } from 'uuid';

export interface DropdownOptionProps {
  text: string
  checkbox?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  checkedState?: boolean,
  disabled?: boolean
}

export const DropdownOption: FC<DropdownOptionProps> = ({
  text,
  checkbox = false,
  checkedState = false,
  disabled = false,
  onChange = () => { }
}) => {
  const [checked, setChecked] = useState<boolean>(checkedState)

  useEffect(() => { setChecked(checkedState) }, [checkedState])

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange(e);
  }

  const styles = [
    cls.option,
    checkbox ? '' : cls.cb
  ].join(' ')

  const id = checkbox ? uuidv4() : '';
  const cb = checkbox ? <Checkbox className={cls.checkbox} checked={checked} onChange={onChangeHandler} id={id} /> : <></>;

  return <button disabled={disabled} className={styles}>
    {cb}<Label htmlFor={id}>{text}</Label>
  </button>
}
