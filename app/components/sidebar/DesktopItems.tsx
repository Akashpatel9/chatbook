'use client'

import clsx from "clsx";
import Link from 'next/link'

interface DesktopItemsProps {
    href: string;
    label: string;
    icon: any;
    onClick?: () => void;
    active?: boolean;
}

const DesktopItems: React.FC<DesktopItemsProps> = ({
    label, href, icon: Icon, active, onClick
}) => {
    const handleClick = () => {
        if (onClick) {
            return onClick()
        }
    }

    return (
        <li onClick={handleClick}>
            <Link href={href}
             className={clsx(`
              group flex gap-x-3
              lext-sm leading-6
              font-semibold w-full
              justify-center p-4
              text-gray-500
              hover:text-black
              hover:bg-gray-300
              rounded-xl
             `,
             active && `bg-purple-100 text-black`)}
            >
                <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                
            </Link>
        </li>
    )
}

export default DesktopItems;