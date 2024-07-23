import { FC, useEffect, useState } from "react";
import cls from './rating.module.scss'
import Star from "@/assets/star-svgrepo-com.svg?react"

export interface RatingProps {
  selectedStars: number,
  maxStars?: number,
  onStarSelect?: (stars: number) => void,
  className?: string
}

export const Rating: FC<RatingProps> = ({
  selectedStars,
  maxStars = 5,
  onStarSelect,
  className = ''
}) => {
  const stars = useState<number>(selectedStars)
  const [hoverStar, setHoverStar] = useState<number>(0);

  useEffect(() => {
    stars[1](selectedStars)
  }, [selectedStars])

  const handlerStarSelect = (s: number) => {
    stars[1](s+1)
    onStarSelect?.(s)
  }

  const mouseOver = (e: any) => {
    const s = e.target.getAttribute("data-index")
    if (s !== null)
      setHoverStar(s)
  }

  const chooseClassName = (i: number) => {
    if (hoverStar) {
      if (i <= hoverStar) return cls.selected
    }
    else if (i + 1 <= stars[0]) return cls.selected

    return ''
  }

  const styles = [
    cls.rating,
    className
  ].join(' ')

  return <div className={styles}>
    {[...Array(maxStars)].map((_, i) =>
      <Star
        key={i}
        className={chooseClassName(i)}
        onClick={() => handlerStarSelect(i)}
        onMouseOver={mouseOver}
        onMouseLeave={() => setHoverStar(0)}
        data-index={i}
      />
    )}
  </div>
}
