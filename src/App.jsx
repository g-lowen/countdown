import React from "react"
import CountdownTimer from "./components/CountdownTimer"

import "./App.css"

export default function App() {
  const PRESENT_DATE = new Date().getTime()
  const REUNION_DATE = new Date("5/27/2023").getTime()
  const TIME_DIFFERENCE = PRESENT_DATE - REUNION_DATE
  const REUNION_COUNTDOWN = TIME_DIFFERENCE * -1

  const reunion = PRESENT_DATE + REUNION_COUNTDOWN

  return (
    <div className="App">
      <CountdownTimer targetDate={reunion} />
    </div>
  )
}

// The content of this project is copied from https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks
