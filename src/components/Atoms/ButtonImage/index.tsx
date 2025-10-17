import React from 'react'
import Image from 'next/image'
import Button from '../../../../public/Button.svg'
import { cn } from '@/utils/CN'

interface ButtonImageProps {
    children?: React.ReactNode
    className?: string
    width?: number
    height?: number
    onClick?: () => void
    disabled?: boolean
    isLoading?: boolean
    classNameText?: string
}

const ButtonImage = ({ children, className, width = 150, height = 150, onClick, disabled = false, isLoading = false, classNameText = 'text-xl' }: ButtonImageProps) => {
    return (
        <button className={cn('relative cursor-pointer', className)} onClick={onClick} disabled={disabled} aria-disabled={disabled}>
            <Image src={Button} alt="button" width={width} height={height} />
            <span className={cn('absolute text-secondary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold', classNameText)}>{children}</span>
        </button>
    )
}

export default ButtonImage