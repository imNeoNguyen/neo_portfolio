import './Card.css'

// eslint-disable-next-line react/prop-types
export default function Card({classname, children}) {
  return (
    <article className={`card ${classname}`}>
        {children}
    </article>
  )
}
