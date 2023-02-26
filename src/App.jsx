import React from "react"
import CountdownTimer from "./components/CountdownTimer"

import "./App.css"

export default function App() {
  const REUNION_COUNTDOWN = 89.688 * 24 * 60 * 60 * 1000
  const NOW_IN_MS = new Date().getTime()

  const dateTimeAfterThreeDays = NOW_IN_MS + REUNION_COUNTDOWN

  return (
    <div className="App">
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
    </div>
  )
}

// The content of this project is all copied from https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks
