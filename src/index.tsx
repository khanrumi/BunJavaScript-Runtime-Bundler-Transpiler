// import fetchUser from "./githubAPI";

// (async () => {
//     try {
//         const userData = await fetchUser('bradtraversy');
//         const h1Element = document.querySelector('h1'); // Get the h1 element
        
//         if (h1Element) { // Check if h1Element is not null
//             h1Element.innerHTML = JSON.stringify(userData, null, 2); // Set innerHTML
//         } else {
//             console.error("The <h1> element does not exist in the document.");
//         }
//     } catch (error) {
//         console.error("Error fetching user data:", error);
//     }
// })();



import React from 'react'; // Correct capitalization for React
import { createRoot } from 'react-dom/client'; // Correct import for createRoot

const root = createRoot(document.getElementById('root')); // Fixed capitalization of 'createRoot'

const App = () => {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <h1>Hello World</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button> {/* Fixed event handler attribute */}
        </div>
    );
}

root.render(<App />);

