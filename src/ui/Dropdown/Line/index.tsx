import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import cls from './line.module.scss'

export interface LineProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const DropdownLine: FC<LineProps> = ({ className, ...props }) => {
  const styles = [cls.line, className].join(' ')
  return <div className={styles} {...props}></div>
}
