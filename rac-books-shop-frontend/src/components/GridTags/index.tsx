import Button from '@mui/material/Button';

import './GridTags.css'

const GridTags = () => {

    const tags = [
        'Java',
        'Backend',
        'Spring bookt',
        'Kafka',
        'JUnit',
        'Docker',
        'Kubernets',
        'AWS',
        'ArgoCD',
        'Git',
        'Javascript',
        'React',
        'Grafana',
        'Prometheus'
    ]

    return (<section className="GridTags">
        <h4>Search for categories</h4>
        <div className="container">
            {tags.map(tag => 
             <Button variant="contained" size="large">{tag} </Button>
             )}
        </div>
    </section>)
}

export default GridTags