function Card({children}) {
  return (
    <div className="bg-white shadow-xl w-full rounded-lg overflow-hidden">{children}</div>
  )
}

function Title({children}) {
  return (
    <div className="p-4 border-b">
      <h1 className="text-2xl font-bold">{children}</h1>
    </div>
  )
}

function Body({children}) {
  return (
    <div className="p-4 antialiased ">{ children }</div>
  )
}

function Footer({children}) {
  return (
    <div className="p-4 rounded-lg">{ children }</div>
  )
}

Card.Title = Title
Card.Body = Body
Card.Footer = Footer


export default Card