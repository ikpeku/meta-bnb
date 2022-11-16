
import { Card } from "../../../components/Card";

export const Nftlisting = ({items, show}) => {


  return (
    <div className="container mx-auto max-w-screen-xl py-5 md:py-10">
      {
       show && <h2 className="text-center font-bold text-4xl py-12">
        Inspiration for your next adventure
      </h2>
      }
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {items && items.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </div>
  );
};
