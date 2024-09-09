import clsx from 'clsx'
import css from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friend}>
      <img className={css.img} src={avatar} alt={name} width='48' />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline && css.online)}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  )
}

export default FriendListItem
