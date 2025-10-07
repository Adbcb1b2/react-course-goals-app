import { useState } from 'react';
// import CourseGoal from './components/CourseGoal.tsx';
import CourseGoalList from './components/CourseGoalList.tsx';
import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg';

// Custom type for a course goal
type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

export default function App() {
   // goals - current state, setGoals - function to update the state, 
   // initial state is an empty array of CourseGoal objects, will get added to when the add button is clicked
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    // prevGoals is the previous state of goals
    setGoals(prevGoals => {
      // Define a new goal
      const newGoal: CourseGoal = {
        id: Math.random(), 
        title: 'Learn React + TS',
        description: 'Learn it in depth'
      }
      // Return a new array with the new goal added
      return [...prevGoals, newGoal]
    });

    console.log("Goal added!");
  }
  
  return (
    <main>
      <Header image={{src: goalsImg, alt: 'A list of goals'}}>
        <h1>Your Course Goals</h1>
        {/* <p>Track your Learning Progress Below</p> */}
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>

      {/* Render the list of goals */}
      <CourseGoalList goals={goals} />


    </main>

  );
}
