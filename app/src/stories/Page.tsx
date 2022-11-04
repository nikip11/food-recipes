import { useState } from 'react'

import { Header } from './header/Header'
import './page.css'

type User = {
  name: string;
};

export const Page: React.VFC = () => {
  const [user, setUser] = useState<User>()

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />
    </article>
  )
}
