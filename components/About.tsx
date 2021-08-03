import { useRef } from "react"

export default function About (): any {

    const aboutRef = useRef(null)

    return (
        <div id="about">
         <p ref={aboutRef}>Hello from About</p>
        </div>
    )
}