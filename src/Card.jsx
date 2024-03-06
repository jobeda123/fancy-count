import { useEffect, useState } from "react"
import Count from "./Count"
import ButtonContainer from "./ButtonContainer"
import ResetButton from "./ResetButton"
import CountButton from "./CountButton"
import Title from "./Title"

const Card = () => {
  const [count, setCount] = useState(0)
  const locked = count === 5 ? true : false

  useEffect(() => {
    // this use effect work like a closure. 
    // jkhn e ekbar space click kortasi 
    // tkhn e se abr 0 theke start kore count kore then increase kore
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        setCount((prev) => {
          const newCount = prev + 1
          if (newCount > 5) {
            return 5
          }
          return newCount
        })
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    // clean up function
    // er jonno e cleaner function ta dorkar
    // jkhn e function ta run hobe age clean kore nibe
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [count])

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type="minus" setCount={setCount} locked={locked} />
        <CountButton type="plus" setCount={setCount} locked={locked} />
      </ButtonContainer>
    </div>
  )
}

export default Card