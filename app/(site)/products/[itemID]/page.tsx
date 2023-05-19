'use client'
import { usePathname } from 'next/navigation';

const ItemPage: React.FC = () => {

    const pathname = usePathname()
    console.log(pathname)

    return (
        <div>{}</div>
    )
}

export default ItemPage;