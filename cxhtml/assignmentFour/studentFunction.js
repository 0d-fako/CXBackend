// 1. Function to log "Passed" or "Failed" based on score
function checkPass(score) {
    console.log(score >= 180 ? "Passed" : "Failed");
  }
  
  // 2. Function to check voting eligibility
  function checkVotingEligibility(age) {
    return age >= 18 ? "You are eligible to vote" : "Not eligible";
  }
  
  // 3. Function to assess performance based on name and score
  function assessPerformance(name, score) {
    if (score >= 90) return "Excellent";
    if (score >= 75) return "Good";
    if (score >= 50) return "Average";
    return "Fail";
  }
  
  // 4. Function to check access based on hasID and isAbove18
  function checkAccess(hasID, isAbove18) {
    return hasID && isAbove18 ? "Access granted" : "Access denied";
  }
  
  // 5. For loop to iterate through an array of scores
  function checkScores(scores) {
    for (let score of scores) {
      console.log(score > 50 ? "Pass" : "Fail");
    }
  }
  
  // 6. Arrow function to check if a student passed both Math and English
  const checkSubjectsPassed = (mathScore, englishScore) => 
    mathScore >= 50 && englishScore >= 50 ? "Yes" : "No";
  
  // 7. Function to check if a user has either an email or a phone number
  function checkContactInfo(email, phoneNumber) {
    return email || phoneNumber ? true : false;
  }
  
  // 8. Function to validate username and password
  function validateCredentials(username, password) {
    return username && password ? "Valid input" : "Invalid input";
  }
  
  // 9. Function to check if hours worked qualifies as full-time or part-time
  function checkWorkHours(hours) {
    return hours >= 40 ? "Full-time" : "Part-time";
  }
  
  // 10. Arrow function to return the larger of two numbers
  const getLargerNumber = (num1, num2) => (num1 > num2 ? num1 : num2);