import './App.css';
import Section from './Section';
import Stack from '@mui/material/Stack';

const text1 = "I wanted to use this journal as a way of expressing my thoughts in a branching manner as they came to me and chose to represent them through this site as a means of showcasing my journey through my different ideas, questions, and overall thoughts that formulated during class and how they stemmed from one another. However, one thing to note is that the showcase of this journal is not entirely what I envisioned from the beginning due to some troubles getting the site working in time, however it still does get across what I wished to voice. When you are finished reading, click on this text box to open up more text paths and continue down those paths similarly."
const text2 = "Previously I had been very disconnected from the world of Yoga and my only experience with it both physically and historically had been from brief outside views of the “Western” practices of yoga. This led to certain portions of the lectures being much more fascinating than I originally expected as there was a lot more depth to it than I imagined and that led to an immediate reaction of feeling somewhat overwhelmed with the amount of information that actually made up the origins of Yoga and how it evolved over time."
const text3 = "The more we went into how yoga got to where it is today, how it evolved and how it was adopted within the West, I tended to sometimes get the feeling that I was 'out of place' in my pursuit of learning yoga. I believe that learning in more detail about what it was and how it came to be will help alleviate those feelings, though I would appreciate any feedback on any specifics I should attempt to keep in mind when learning to best come at it from an appreciation standpoint rather than one of appropriation."
const text4 = "So far the practices have been somewhat more intensive than I originally expected, however I believe that is for the better as I have found that the medium intensity postures to be what works best for my body and mind. However, I don't want to focus too much on any one particular type of yoga until I have experienced the other classes to best gauge my opinion as a whole."
const text5 = "I don't recall this being explicitly mentioned or discussed at any point and would like to know if this is coincidental or a direct/indirect following of beginning to practice yoga. In the past I very rarely would recall my dreams (maybe one or twice a month). However, since beginning our sessions I have recalled one every night and they have been much more vivid than usual and am curious if this stems from beginning to practice yoga and additionally if it is certain aspects of the practice of yoga that are promoting it to occur more."
const text6 = "I noticed many of my notable observations of the practice of yoga come directly after class or during rest and believe this may somewhat sway my overall impressions to be focused on the end result rather than the process."
const text7 = "You had mentioned that many portions of yoga have adjustments to accommodate for differing factors in practitioners, and during our first yoga practice I momentarily experienced situational tinnitus during Shavasana, it quickly went away, however it led to a question that was a little difficult to formulate at the time. In the event of someone having permanent tinnitus or something of a similar nature that 'interrupts' the intended silence, is there something they are supposed to work towards to accommodate this type of ailment, or is simply a hard clash that they would be forced to implement into their relaxation?"
const text8 = "Less so a problem and more so a very fascinating observation, I found that after our first two practices, the morning after I experienced soreness in various places, the fascinating part to me is that the morning after first practice, I felt stiffest in the areas of my body that worked the least and actually felt at ease in those that we worked the most."



function App() {
	return (
  	<div class="App">
      <Section title="Intro" dir="row" text={text1} content={
        <Stack direction="row" spacing={2}>
        <Section title="Lectures" content={
          <Stack direction="row" spacing={2}>
          <Section title="Origins of Yoga" dir="row" text={text2} />
          <Section title="Yoga Today" text={text3} />
          </Stack>
        }/>
          <Section title="Practicing Yoga" text='' content={
            <Stack direction="column" spacing={2}>
            <Section title="General Thoughts" dir="row" text={text4} content={
							<Stack direction="row" spacing={2}>
							<Section title="Additional Dreaming" text={text5} />
							</Stack>
						}/>
            <Section title="Potential Problems/Questions" dir="row" text={text6} content={
							<Stack direction="row" spacing={2}>
							<Section title="Tinnitus" text={text7} />
							<Section title="Morning Soreness" text={text8} />
							</Stack>
						}/>
            </Stack>
          }/>
      	</Stack>
			}
      />
    </div>
  );
}

export default App;