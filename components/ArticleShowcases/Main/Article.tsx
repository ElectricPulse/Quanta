import React from 'react';
import styles from './Article.module.scss';
import ExternalImage from './../../UI/ExternalImage';

export interface Article {
    title: string;
    imageName: string;
    url: string; 
}

const Article: React.FC<{article: Article}> = ({article}) => {
    return <li>
        <ExternalImage imageName={article.imageName} />
    </li>
}

export default Article