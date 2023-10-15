import "./App.css"
import Body from "./components/Body"

function App() {
  const AppStyle = {
    width: "100%",
    minHeight:"100vh"
  }
  return (
    <div style={AppStyle}>
      <Body />
    </div>
  )
}

export default App