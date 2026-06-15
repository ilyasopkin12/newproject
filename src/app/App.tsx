import { Home, Cabinet } from '@/pages/index';
import { ProtectedRoute } from './router/protected-route';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/cabinet" element={<Cabinet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
