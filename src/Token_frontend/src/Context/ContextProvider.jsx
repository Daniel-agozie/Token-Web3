import React,{useState,createContext} from "react"

export const AddContext = createContext();
const ContentProvider = ({children}) => {

  const [isOpen, setOpen] = useState(false)

  return (
    <AddContext.Provider value={{isOpen, setOpen}}>
      {children}
    </AddContext.Provider>
  )
}

export default ContentProvider;