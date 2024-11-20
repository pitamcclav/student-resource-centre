import React from 'react';

const FavouriteResources: React.FC = () => {
    const favouriteResources = [
        { id: 1, title: 'React Documentation', link: 'https://reactjs.org/docs/getting-started.html' },
        { id: 2, title: 'TypeScript Handbook', link: 'https://www.typescriptlang.org/docs/handbook/intro.html' },
        { id: 3, title: 'MDN Web Docs', link: 'https://developer.mozilla.org/en-US/' },
    ];

    return (
        <div>
            <h1>Favourite Resources</h1>
            <ul>
                {favouriteResources.map(resource => (
                    <li key={resource.id}>
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
                            {resource.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavouriteResources;