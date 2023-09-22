import { forwardRef, useEffect, useRef } from "react"

const Input = forwardRef(({type='text', ...props}, ref) => (
    <input ref={ref} {...props} {...{type}} className='w-full  focus:outline-none focus:ring focus:ring-blue-200 focucs:border-blue-400 rounded-lg ' />
))

export default Input