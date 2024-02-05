"use client";
import React, { useState } from "react";
import AlertBox from "./alertbox";

const Projects: React.FC = () => {
  const [showAlert, setShowAlert] = useState<boolean>(true);

  const dismissAlert = () => setShowAlert(false);

  return (
    <>
      <h2 className="font-sfmono text-2xl #475569">Мои проекты</h2>
      {showAlert && (
        <AlertBox
          message="мой профиль"
          buttonText="GitHub"
          buttonLink="https://github.com/metatt/"
          onDismiss={dismissAlert}
        />
      )}
 

      <div className="flex flex-col gap-4">
        <ul className="list-inside"></ul>
      </div>
    </>
  );
};

export default Projects;