import { UserCard } from "./components/UserCard"

export const App = () => {

  const githubUsers = [
    {
      name: 'luis Jaramillo',
      username: 'luisfejaramillor'
    },
    {
      name: 'Miguel duran',
      username: 'midudev'
    }
  ]

  return (

    <div className="app">
      {
        githubUsers.map(
          user =>(
            <UserCard userName={user.username} name={user.name}  key={user.username} />
          )
        )
      }
    </div>
  )
}

