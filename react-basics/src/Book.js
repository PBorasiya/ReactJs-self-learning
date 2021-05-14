import React from 'react'

const Book = (props) => {
    console.log(props)
    const { img, title, author } = props;
    return(
      <article>
        <img src={img} alt=''/>
        <h1>{title}</h1>
        <h2> {author}</h2>
      </article>
    );
  }
  
export default Book
