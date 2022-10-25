
import Image from 'next/image';
const TableHead = () => {
  return (
    <div className="flex text-sm">
      <div className="w-[30%] ml-3 flex items-center">
        Name
        <Image src="/assets/arrow-down.svg" alt="arrow down" width={16} height={16} />
      </div>
      <div className="flex gap-8 justify-between ml-auto w-[50%] mr-[10%] break-words">
        <div className="whitespace-nowrap	flex items-center gap-1">
          Eye color 
          <Image src="/assets/arrow-down.svg" alt="arrow down" width={16} height={16} />
        </div>
        <div className="whitespace-nowrap	flex items-center gap-1">
          Gender
          <Image src="/assets/arrow-down.svg" alt="arrow down" width={16} height={16} />
        </div>
        <div className="whitespace-nowrap	flex items-center gap-1">
          Height
          <Image src="/assets/arrow-down.svg" alt="arrow down" width={16} height={16} />
        </div>
        <div className="whitespace-nowrap	flex items-center gap-1">
          Birth year
          <Image src="/assets/arrow-down.svg" alt="arrow down" width={16} height={16} />
        </div>
        <div className="whitespace-nowrap	flex items-center gap-1">
          Mass
          <Image src="/assets/arrow-down.svg" alt="arrow down" width={16} height={16} />
        </div>
        <div className="whitespace-nowrap	flex items-center gap-1">
          Created
          <Image src="/assets/arrow-down.svg" alt="arrow down" width={16} height={16} />
        </div>
      </div>
    </div>
  )
}


export default TableHead
