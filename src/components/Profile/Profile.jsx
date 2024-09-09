import css from './Profie.module.css'

const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) => {
  return (
    <div className={css.profile}>
      <div className={css.info}>
        <img className={css.img} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.statsTitle}>Followers</span>
          <span className={css.statsNumber}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsTitle}>Views</span>
          <span className={css.statsNumber}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsTitle}>Likes</span>
          <span className={css.statsNumber}>{likes}</span>
        </li>
      </ul>
    </div>
  )
}

export default Profile
