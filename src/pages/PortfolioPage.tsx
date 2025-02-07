import Portfolio from "@/components/Portfolio";
import { useNavigate } from "react-router-dom";


const Gallery = () => {
  const navigate = useNavigate();

  return (
    <div >
      <Portfolio />
    </div>
  );
};

export default Gallery;