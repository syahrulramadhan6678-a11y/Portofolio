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
        <p>I use AutoCAD to create both 2D drawings and 3D engineering designs, focusing on accuracy, detailed visualization, and efficient modeling to support various technical and engineering projects.
</p>
        `;
    }

    else if (skill === "frontend") {
        detail.innerHTML = `
        <h3>Front End</h3>
        <p>I am a front-end developer with experience in building responsive and user-friendly websites, focusing on clean and modern design, performance optimization, and a smooth user experience across different devices. I work with technologies such as HTML, CSS, and JavaScript, and I am continuously improving my skills by exploring new frameworks and best practices to create efficient, scalable, and visually appealing web applications.
 </p>
        `;
    }

     else if (skill === "network") {
        detail.innerHTML = `
        <h3>Network</h3>
        <p>I have experience as a network technician intern at a company, and I am a graduate of a vocational high school majoring in computer networking. During my internship, I was involved in network installation, configuration, and troubleshooting, gaining practical experience in handling real-world networking issues. I also have strong hands-on expertise in fiber optic systems, including installation, splicing, testing, and maintenance, which allows me to work effectively with network infrastructure and ensure stable and reliable connectivity. Additionally, I am familiar with basic network devices such as routers, switches, and access points, and I continuously improve my skills to stay updated with current networking technologies and practices.
        </p>
        `;
    }

     else if (skill === "devops") {
        detail.innerHTML = `
        <h3>DevOps</h3>
        <p>I have completed an online course offered by Dicoding, where I learned the fundamentals of DevOps and the basics of computer networking. Through this course, I gained an understanding of concepts such as system deployment, version control, and collaboration in development workflows, as well as essential networking principles including IP addressing, protocols, and network architecture. This learning experience has helped me build a strong foundation and broaden my perspective on how software development and infrastructure work together in modern technology environments, and I continue to deepen my knowledge by exploring more advanced topics and practical implementations.
        </p>
        <img src="devops.jpg">
        `;
    }

    else if (skill === "Android Developer") {
        detail.innerHTML = `
        <h3>Android Developer</h3>
        <p>I am an Android Developer with experience in building mobile applications using Android Studio, focusing on creating user-friendly, efficient, and responsive apps. I work primarily with Java and XML to design and develop application features, manage user interfaces, and handle data processing. In addition, I have experience integrating applications with backend systems and IoT devices, enabling real-time data monitoring and functionality. I continuously improve my skills by learning new technologies and best practices to develop reliable and scalable mobile applications.
        </p>
        `;
    }
    }
