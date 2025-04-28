import { Container } from "@mui/material"
import Header from "./components/Header"
import Form from "./components/Form"

function App() {
  return (
    <Container
      sx={{
        minWidth: "100%",
        bgcolor: "#242424",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          opacity: 0.2
        }}
      >
        <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1" fill="#ffffff" />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.1" />
      </svg>

      <Container
        sx={{
          bgcolor: "#000000",
          minHeight: "537px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          pt: "40px",
          gap: 3,
          position: "relative",
          zIndex: 1,
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)"
        }}
      >
        <Header />
        <Form />
      </Container>
    </Container>
  )
}

export default App