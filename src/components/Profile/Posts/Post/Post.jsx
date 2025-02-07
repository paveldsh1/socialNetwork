import React, { useRef, useState } from 'react';
import style from './_Post.module.scss';

const Post = (props) => {
  const likeButtonRef = useRef(null);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  }

  return (
    <div className={style['post']}>
      <div className={style['post__body']}>
        <p>{props.message}</p>
      </div>
      <div className={style['post__button']}>
        <button
          ref={likeButtonRef}
          onClick={handleLike}
          className={liked ? style['liked'] : ''}
        >
          Like
        </button>
      </div>
      {' '}{props.likesCount}
    </div>
  )
}

export default Post;