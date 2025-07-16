import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import pages and components
import Home from "./pages/Home";
import History from "./pages/History";
import Exercise from "./pages/Exercise";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";

import SingleExercise from "./components/SingleExercise";
import Cardio from "./components/Cardio";
import Resistance from "./components/Resistance";

// New components imports
import BMICalculator from "./components/BMICalculator";
import CalorieCalculator from "./components/CalorieCalculator";
import Nutrition from "./components/Nutrition";
import WorkoutPlans from "./components/WorkoutPlans";
import MacrosCalculator from "./components/MacrosCalculator";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/history" element={<History />} />
        <Route path="/history/:type/:id" element={<SingleExercise />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/exercise/cardio" element={<Cardio />} />
        <Route path="/exercise/resistance" element={<Resistance />} />

        {/* New routes added here */}
        <Route path="/bmi-calculator" element={<BMICalculator />} />
        <Route path="/calorie-calculator" element={<CalorieCalculator />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/workout-plans" element={<WorkoutPlans />} />
        <Route path="/macros-calculator" element={<MacrosCalculator />} />

        
        

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
