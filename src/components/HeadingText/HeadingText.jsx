import './HeadingText.css'

// eslint-disable-next-line react/prop-types
export default function HeadingText({title, titlePrimary}) {
  return (
    <div className='heading-text'>
        {title}<span> {titlePrimary}</span>
    </div>
  )
}
