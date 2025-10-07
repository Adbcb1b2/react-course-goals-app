import { useRef, type FormEvent } from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void; 
}

export default function NewGoal({onAddGoal}: NewGoalProps) {
    // References to the input fields
    // Add null as initial value to avoid undefined type (dont have a value yet)
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    // Handle form submission
    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        // Reset the input fields once values have been captured
        event.currentTarget.reset();

        // Call the onAddGoal function passed as a prop
        onAddGoal(enteredGoal, enteredSummary);
    }

    // Render a form with input fields for goal and summary, and a button to add the goal
    return (
    <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your Goal</label>
            <input id="goal" type="text" ref={goal}/>
        </p>
        <p>
            <label htmlFor="summary">Short Summary</label>
            <input id="summary" type="text" ref={summary}/>
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>)
}