function showskill(skill) {
    const detail = document.getElementById('skill-detail');


    if (skill === "Embedded system & IoT Developer") {
        detail.innerHTML = `
        <h3>Arduino</h3>
        <p>I use microcontrollers such as Arduino, ESP32, and STM32 to develop a variety of embedded system projects, including sensor-based monitoring, automation, and IoT applications. I am experienced in interfacing different types of sensors, processing real-time data, and implementing communication protocols like serial, I2C, and SPI. Additionally, I build systems that can transmit data to servers or mobile applications for monitoring purposes, combining both hardware and software integration. Through these projects, I focus on creating efficient, reliable, and practical solutions for real-world applications.</p>

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
