
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Render the application immediately without redirects or conditional logic
const root = createRoot(document.getElementById("root")!);
root.render(<App />);
