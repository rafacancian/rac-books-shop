import './BookDescription.css'

interface BookDescriptionProps {
    title?: string
    description?: string
}

const BookDescription = ({ title, description }: BookDescriptionProps) => {
    return (<div className='bloco-sobre'>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>)
}

export default BookDescription