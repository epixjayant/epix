// Highlight the next step dynamically
document.addEventListener("DOMContentLoaded", () => {
    const roadmapSteps = document.querySelectorAll(".highlight");
    let currentStep = 0;

    // Simulate progression every 2 seconds
    setInterval(() => {
        roadmapSteps.forEach((step, index) => {
            step.style.color = index === currentStep ? "green" : "#007BFF";
        });
        currentStep = (currentStep + 1) % roadmapSteps.length;
    }, 2000);
});