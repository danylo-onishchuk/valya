import './App.css';
import { MainInfo } from './components/MainInfo/MainInfo';
import { MainLayout } from './components/layouts/MainLayout/MainLayout';

export function App() {
  return (
    <div className="app">
      <MainLayout>
        <MainInfo />
      </MainLayout>
    </div>
  );
}
