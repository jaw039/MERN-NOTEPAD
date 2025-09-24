import { useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUi from "../components/RateLimitedUI";

const HomePage = () => {
  const [isRateLimited, setRateLimited] = useState(true);

  return (
    // minimum height screen
    <div className = "min-h-screen">
      <Navbar />

      {isRateLimited && <RateLimitedUi />}
    </div>

  );
};

export default HomePage;