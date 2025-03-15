import './HeadingText.css';

// eslint-disable-next-line react/prop-types
export default function HeadingText({ title, titlePrimary }) {
  return (
    <div className="heading-text">
      <h2>
        {title} <span>{titlePrimary}</span>
      </h2>
      <div className="heading-underline"></div>
    </div>
  );
}
