import Image from "next/image";

const RestaurantHeader = () => {
  return ( 
      <div className="relative h-[220px] w-full">
        <Image
          src="/images/BANNER_CAFETERIA.jpg"
          alt="BANNER CAFETERIA"
          fill
          className="object-cover"
        />
      </div>
   );
}
 
export default RestaurantHeader;