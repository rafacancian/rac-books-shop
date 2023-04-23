import './GridTitle.css'

interface GridTitleProps {
    text: string
}

const GridTitle = ({ text } : GridTitleProps) => {
    return (<h4 className='titulo-interno'>{text}</h4>)
}

export default GridTitle