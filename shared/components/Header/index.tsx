
import Image from 'next/image';
const Header = () => {
  return (
    <div className="h-16 bg-white flex justify-between items-center px-5 drop-shadow-[0px_0px_10px_rgba(0,0,0,0.1)]">
      <Image src="/assets/logo.svg" alt="star wars logo" width={77} height={33}/>
      <div className="flex gap-[10px] items-center">
        <span className="text-md text-gray-200">Chewbacca</span>
        <Image src="/assets/user.svg" alt="profile picture" width={34} height={34}/>
      </div>
    </div>
  )
}

export default Header
