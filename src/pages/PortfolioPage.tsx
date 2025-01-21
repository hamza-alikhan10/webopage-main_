import Portfolio from "@/components/Portfolio";
import { useNavigate } from "react-router-dom";


const PortfolioPage = () => {
  const navigate = useNavigate();

  return (
    <div >
      <Portfolio />
    </div>
  );
};

export default PortfolioPage;