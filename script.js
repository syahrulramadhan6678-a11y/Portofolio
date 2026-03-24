function showskill(skill) {
    const detail = document.getElementById('skill-detail');


    if (skill === "arduino") {
        detail.innerHTML = `
        <h3>Arduino</h3>
        <p>I use Arduino to create various projects, such as sensors and device controls. </p>
        <img src="arduino.jpg">
        `;
    }
    
    else if (skill === "stm32") {
        detail.innerHTML = `
        <h3>STM32</h3>
        <p>I use it for DC motor control, ADC, and embedded systems. </p>
        <img src="stm32.jpg">
        `;
    }

    else if (skill === "autocad") {
        detail.innerHTML = `
        <h3>AutoCAD</h3>
        <p>I use AutoCAD for 2D and 3D engineering design.</p>
        `;
    }

    else if (skill === "frontend") {
        detail.innerHTML = `
        <h3>Front End</h3>
        <p>I'm a beginner in front-end development, and this is my first website. </p>
        `;
    }

     else if (skill === "network") {
        detail.innerHTML = `
        <h3>Network</h3>
        <p>I once interned as a network technician at a company, and I am also a graduate of a vocational high school with a major in computer networking. </p>
        <img src="network.jpg">
        `;
    }

     else if (skill === "devops") {
        detail.innerHTML = `
        <h3>DevOps</h3>
        <p>I once took an online course offered by Dicoding, where I learned the basics of DevOps and the fundamentals of computer networking. </p>
        <img src="devops.jpg">
        `;
    }
    }
