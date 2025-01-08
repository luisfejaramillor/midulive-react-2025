import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const UserCard = ({userName, name}) => {

  const [isFollow, setIsFollow] = useState('')


  const handleClickButton = () => {
    setIsFollow(!isFollow)
  }


  const className = isFollow ? 'is-following' : '';

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de midudev'
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button onClick={handleClickButton}  className={`tw-followCard-button ${className}`} >
          <span className='tw-followCard-text'>{isFollow ? 'Siguiendo': 'Seguir'}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
