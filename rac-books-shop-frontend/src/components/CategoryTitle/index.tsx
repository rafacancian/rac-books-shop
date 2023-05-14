import './CategoryTitle.css'

interface CategoryTitleProps {
    text: string
}
const CategoryTitle = ({ text } : CategoryTitleProps) => {

    return (<h1 className="CategoryTitle">{text}</h1>)

}

export default CategoryTitle