import { getByTitle } from '@testing-library/react';
import React from 'react';
import "../App.css"
import Main from '../components/Main/main';

const Post = (props) => {
    console.log(props)
    return (
        <div className='post'>
               <h5 className="title">{props.title}</h5>
               <p className='descr'>{props.descr}</p>
        </div>
    );
};

export default Post;