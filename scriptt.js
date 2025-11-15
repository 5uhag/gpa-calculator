function calculateGoalGPA() {
    // --- 1. Get all the values ---
    const currentCGPA = parseFloat(document.getElementById('current_cgpa').value);
    const creditsCompleted = parseFloat(document.getElementById('credits_completed').value);
    const targetCGPA = parseFloat(document.getElementById('target_cgpa').value);
    const currentCredits = parseFloat(document.getElementById('current_credits').value);

    // --- 2. Check for missing data ---
    if (isNaN(currentCGPA) || isNaN(creditsCompleted) || isNaN(targetCGPA) || isNaN(currentCredits)) {
        alert("Please fill in all four fields with valid numbers.");
        return;
    }

    // --- 3. The "Goal-Seeking" Math ---
    const totalCredits = creditsCompleted + currentCredits;
    const requiredTotalPoints = targetCGPA * totalCredits;
    const currentPoints = currentCGPA * creditsCompleted;
    const pointsNeededThisSemester = requiredTotalPoints - currentPoints;
    const requiredSemesterGPA = pointsNeededThisSemester / currentCredits;
    
    // --- 4. Show the result ---
    const resultDiv = document.getElementById('gpa-result');
    resultDiv.style.display = 'block';
    const gpaFormatted = requiredSemesterGPA.toFixed(2);

    if (requiredSemesterGPA > 10.0) { // Or whatever your max GPA is
        resultDiv.style.backgroundColor = '#ffebee'; // Red
        resultDiv.style.color = '#c62828';
        resultDiv.innerHTML = `To reach a ${targetCGPA} CGPA, you would need a GPA of <b>${gpaFormatted}</b> this semester. This is likely impossible.`;
    } else if (requiredSemesterGPA < 0) {
        resultDiv.style.backgroundColor = '#e8f5e9'; // Green
        resultDiv.style.color = '#2e7d32';
        resultDiv.innerHTML = `Your target is already met! You just need to score above a <b>0.00</b> this semester.`;
    } else {
        resultDiv.style.backgroundColor = '#e8f5e9'; // Green
        resultDiv.style.color = '#2e7d32';
        resultDiv.innerHTML = `To reach your goal of a ${targetCGPA} CGPA, you need to score an average GPA of <b>${gpaFormatted}</b> this semester.`;
    }
}