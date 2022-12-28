import './App.scss';
import DiaryCard from './components/diary-card/DiaryCard';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <DiaryCard text="Today was a really good day. I woke up feeling rested and ready to start the day. I had a productive morning at work and got a lot of things done. I even had time to go for a run in the park before lunch. After work, I met up with some friends for dinner. We had a great time chatting and catching up. It's always so nice to see them and spend some quality time together. Overall, it was just a really enjoyable day. I feel grateful and thankful for the people in my life and for the opportunities I have." />
      </div>
    </div>
  );
}

export default App;
