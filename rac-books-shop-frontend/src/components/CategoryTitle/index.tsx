import './CategoryTitle.css'

interface CategoryTitleProps {
    title: string
}
const CategoryTitle = ({ title } : CategoryTitleProps) => {

    return (<h1 className="CategoryTitle">{title}</h1>)

}

export default CategoryTitle