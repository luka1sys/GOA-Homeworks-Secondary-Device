import { useState, useMemo } from "react";

function App() {
  const [text, setText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // ტექსტის ტიპის გამოთვლა მხოლოდ მაშინ, როცა text იცვლება
  const textType = useMemo(() => {
    const length = text.length;
    if (length < 20) return "Short text";
    if (length <= 50) return "Medium text";
    return "Long text";
  }, [text]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const themeStyle = {
    backgroundColor: isDarkMode ? "black" : "white",
    color: isDarkMode ? "white" : "black",
   
    
    
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
    
  };

  return (
    <div style={themeStyle}>
      <h1>Text Analyzer</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text..."
        style={{
       
        }}
      />

      <button onClick={toggleTheme} >
        {isDarkMode ? "Switch to Light" : "Switch to Dark"}
      </button>

      <p>Text Type: {textType}</p>
      <p>Theme:{isDarkMode ? "dark" : "light"}</p>
    </div>
  );
}

export default App;