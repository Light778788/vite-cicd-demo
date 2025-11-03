import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>⚡ Vite CI/CD Demo ⚡ 
          <div className="emoji">🚀</div>
          <div className="emoji">🚀</div>
          <div className="emoji">🚀</div>
          <div className="emoji">🚀</div>
          <div className="emoji">🚀</div>

        </h1>
        
        <div className="info-card">
          <h2>Environment Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="label">Environment:</span>
              <span className="value env-badge">
                {import.meta.env.VITE_ENV || 'local'}
              </span>
            </div>
            
            <div className="info-item">
              <span className="label">API URL:</span>
              <span className="value">
                {import.meta.env.VITE_API_URL || 'not set'}
              </span>
            </div>
            
            <div className="info-item">
              <span className="label">Build Number:</span>
              <span className="value">
                {import.meta.env.VITE_BUILD_NUMBER || 'local'}
              </span>
            </div>
            
            <div className="info-item">
              <span className="label">Commit SHA:</span>
              <span className="value">
                {import.meta.env.VITE_COMMIT_SHA?.substring(0, 7) || 'local'}
              </span>
            </div>
          </div>
        </div>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>

        <div className="deployment-info">
          <p>✅ Deployed successfully via GitHub Actions!</p>
          <p>🚀 This is a fully automated CI/CD pipeline</p>
          <p>⚡ Built with Vite for ultra-fast builds</p>
        </div>
      </header>
    </div>
  )
}

export default App