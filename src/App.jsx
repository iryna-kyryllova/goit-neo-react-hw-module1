import Profile from 'components/Profile/Profile'
import userData from 'data/userData.json'

const App = () => {
  return (
    <div className='container'>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  )
}

export default App
