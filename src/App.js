import './App.css';
import Section from './Section';

const text1 = "I wanted to use this journal as a way of expressing my thoughts in a branching manner as they came to me and chose to represent them through this site as a means of connecting my different ideas, questions, and overall thoughts"
function App() {
  return (
    <div class="App">
      <Section text={text1} content={
        <>
        <Section text="Text 2" />
        <Section text="Text 3" />
        </>}
      />
    </div>
  );
}

export default App;