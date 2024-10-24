import { createContext } from "react";

interface Props
{
  children:React.ReactNode
}
const MainContext = createContext({})

export const MainProvider = ({children}:Props) => {
  return (
    <MainContext.Provider value={{}}>
      {children}
    </MainContext.Provider>
  )
}

export default MainContext;