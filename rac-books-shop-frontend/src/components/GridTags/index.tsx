import { AbTag } from "ds-alurabooks"

import './GridTags.css'

const GridTags = () => {

    const tags = [
        'Java',
        'Backend',
        'Spring bookt',
        'JUnit',
        'Docker',
        'Kubernets',
        'AWS',
        'Git',
        'Javascript',
        'React',
    ]

    return (<section className="GridTags">
        <h4>Search for categories</h4>
        <div className="container">
            {tags.map(tag => <AbTag texto={tag} key={tag}/>)}
        </div>
    </section>)
}

export default GridTags