import ColorContext from "./context/ColorContext"
import HappyColor from "./HappyColor"


function App() {

  return (
    <>
    <ColorContext.Provider value={"black"}>
    <HappyColor/>
    </ColorContext.Provider>

    </>
  )
}

export default App
