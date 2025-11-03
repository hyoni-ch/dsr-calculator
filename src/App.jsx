import React from "react";
import DsrCalculator from "./DsrCalculator";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4 pb-20 sm:pb-6 transition-colors duration-300">
      <div className="w-full max-w-md">
        <DsrCalculator />
      </div>
    </div>
  );
};

export default App;
