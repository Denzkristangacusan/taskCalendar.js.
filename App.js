let day = prompt("Please enter a day of the week (e.g., Monday, Tuesday):");

switch (day.toLowerCase()) {
    case "monday":
        console.log("Task: Go to the gym.");
        break;
    case "tuesday":
        console.log("Task: Attend team meeting.");
        break;
    case "wednesday":
        console.log("Task: Work on project report.");
        break;
    case "thursday":
        console.log("Task: Review budget proposals.");
        break;
    case "friday":
        console.log("Task: Finish any pending tasks.");
        break;
    case "saturday":
        console.log("Task: Spend time with family.");
        break;
    case "sunday":
        console.log("Task: Prepare for the upcoming week.");
        break;
    default:
        console.log("Invalid input. Please enter a valid day of the week.");
}
