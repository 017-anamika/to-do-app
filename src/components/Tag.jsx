import React from 'react';
// import Tag ".Tag.css";
const tag = (tagName,selectTag) => {
    console.log("props",props)
  return (
      <button  type="button" className='tag' onClick={()=>
        selectTag(tagName)}>
          {tagName}
      </button>
  )
};

export default Tag;
