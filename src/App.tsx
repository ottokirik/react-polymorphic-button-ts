import './App.css';
import { Button } from './components/button/Button';

function App() {
  return (
    <>
      <Button as="a" href="https://google.com" target="_blank">
        Ссылка как кнопка
      </Button>
      <Button type="button" color="secondary">
        Кнопка
      </Button>
    </>
  );
}

export default App;
