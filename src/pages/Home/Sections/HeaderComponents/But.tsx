import React from "react";
import MadButton from "./MadButton";

const But: React.FC = () => {
  return (
    <div>
      <MadButton variant="btn">Click me baby yeah</MadButton>
      <MadButton variant="cta">So Click-a-licious</MadButton>
      <MadButton variant="bg">Ain't no click-nic</MadButton>
    </div>
  );
};

export default But;
