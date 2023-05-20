import './GridError.css'

interface ErrorProps {
    message?: string
    subMessage?: string

}

const GridError = ({ message, subMessage } : ErrorProps) => {
    return (<div className='container-error'>
        <h2>{message}</h2>
        <p>{subMessage}</p>
    </div>)
}

export default GridError