import { Route, Routes } from 'react-router-dom';
import './App.css';
import { MainInfo } from './components/MainInfo/MainInfo';
import { MainLayout } from './components/layouts/MainLayout/MainLayout';
import { InProgress } from './components/InProgress/InProgress';

export function App() {
  return (
    <div className="app">
      <MainLayout>
        <>
          <Routes>
            <Route path="/" element={<MainInfo />} />
            <Route path="/about" element={<MainInfo />} />
            <Route path="/cards" element={<InProgress />} />
            <Route path="/books" element={<InProgress />} />
            <Route path="/shop" element={<InProgress />} />
            <Route path="/contact" element={<InProgress />} />
            <Route path="*" element={<MainInfo />} />
          </Routes>
        </>
      </MainLayout>
    </div>
  );
}
