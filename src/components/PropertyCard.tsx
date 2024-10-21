import { Property } from '@/lib/types'
import { NextPage } from 'next'
import Link from 'next/link'
import Image  from 'next/image';
import area from '../../public/areaicon.png'
import bath from '../../public/bathicon.png'
import bed from '../../public/bedicon.png'
interface Props {
    property:Property,
    index:number
}
interface Currency {
    name: string;
    symbol: string;
}

const currencies: Currency[] = [
    { name: "United States Dollar", symbol: "$" },
    { name: "Euro", symbol: "€" },
    { name: "British Pound Sterling", symbol: "£" },
    { name: "Japanese Yen", symbol: "¥" },
    { name: "Australian Dollar", symbol: "A$" },
    { name: "Canadian Dollar", symbol: "C$" },
    { name: "Swiss Franc", symbol: "CHF" },
    { name: "Chinese Yuan", symbol: "¥" },
    { name: "Indian Rupee", symbol: "₹" },
    { name: "South African Rand", symbol: "R" }
];
const PropertyCard: NextPage<Props> = ({property,index}) => {
    const currency = currencies.find((ele)=>ele.name===property.currency.toUpperCase())
  return ( <Link href={`/property/${property.id}`}>
  <div className={`propcard ${index %2 === 0 ? "":"xl:mt-[100px]"}`}>
    <Image src={property.coverphoto} alt='propimg' width={1024} quality={100} height={1024} className='propimage'></Image>
    <div className='w-[100px] h-[2px] my-2 bg-black'></div>
    <h1 className='text-[45px] max-md:text-[30px] font-[700px]'>{currency?.symbol || "$"} {property.price}</h1>
    <h2 className="text-[24px] max-md:text-[20px]">{property.title},{property.location.city}</h2>
    <div className='w-full h-[1px] my-2 bg-black/25'></div>
    <div className="flex justify-between">
        <h1 className='pcamenities'><Image src={area} alt='area' height={20} width={20}></Image>{property.area}Sqft</h1>
        <h1 className='pcamenities'><Image src={bed} alt='bed' height={20} width={20} />{property.bedrooms}</h1>
        <h1 className='pcamenities'><Image src={bath} alt='bath' height={20} width={20} />{property.bathrooms}</h1>
    </div>
</div>
  </Link>
  )
}

export default PropertyCard