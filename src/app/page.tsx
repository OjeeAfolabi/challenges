import Image from "next/image";
import Duiker from "../../public/Grey-Duiker-800-600.png";
const Home = () => {
  return (
    <div>
      <Image src={Duiker} alt="Grey Duiker" width={800} height={600} />
    </div>
  );
};

export default Home;
