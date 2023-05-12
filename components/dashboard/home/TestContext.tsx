import React, { createContext, useState } from "react";

export const TestContext = createContext(null);
interface ContextProps {
  children: React.ReactNode;
}
function TestContextProvider({ children }: ContextProps) {
  const [image, setImage] = useState(null);
  const [selectedChooseStyle, setSelectedChooseStyle] = useState(null);
  return (
    <TestContext.Provider
      value={
        { image, setImage, selectedChooseStyle, setSelectedChooseStyle } as any
      }
    >
      {children}
    </TestContext.Provider>
  );
}

export default TestContextProvider;
