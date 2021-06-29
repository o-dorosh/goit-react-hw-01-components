import { Profile } from '../Profile/Profile';
import user from '../Profile/user.json';
import './App.css';

export function App() {
  return (
    <div>
      <Profile
        key={user.name}
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}

export default App;
