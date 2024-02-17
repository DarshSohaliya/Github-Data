
import './App.css'
import { RecoilRoot } from 'recoil'
import GithubCard from './components/GithubCard'

function App() {

  return (
    <RecoilRoot>
     <div className='container mx-auto p-4 bg-gray-100 min-h-screen flex items-center justify-center'>
      <GithubCard username=''/>
     </div>
    </RecoilRoot>
  )
}

export default App
