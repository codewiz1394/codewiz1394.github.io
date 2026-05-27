export const siteConfig = {
  name: "Adithya Mohan",
  title: "AI Engineer & Doctoral Researcher",
  description: "Portfolio website of Adithya Mohan",
  accentColor: "#1d4ed8",
  social: {
    email: "herrmohan1394@gmail.com",
    linkedin: "https://www.linkedin.com/in/adithya-mohan-770743141/",
    twitter: "",
    github: "https://github.com/codewiz1394",
    scholar: "https://scholar.google.com/citations?user=adXUG_EAAAAJ&hl=en",
    cv: "/cv.pdf",
  },
  aboutMe:
    "I work at the crossroads of robotics, safety, and intelligent decision-making — building agents that can learn, adapt, and act reliably even when faced with adversarial inputs. From training DRL agents in simulation to testing them on real vehicles equipped with LiDAR, GNSS, and camera systems, I aim to bridge the gap between research and reality in embodied AI.",
  skills: [
    "Python",
    "C++",
    "C",
    "Matlab/Simulink",
    "ROS/ROS2",
    "PyTorch",
    "Gymnasium",
    "Gazebo",
    "AWS",
    "Azure",
    "Deep Reinforcement Learning",
    "Adversarial Robustness",
    "Large Language Models",
    "Autonomous Driving",
    "Robotics",
  ],
  talks: [
    {
      title: "Adversarial Attacks in Deep Reinforcement Learning: A Call for Robust Defenses",
      event: "Munich Datageeks Event – January 2025 Edition @ CiB",
      date: "Jan 30, 2025",
      location: "Munich, Germany",
      description:
        "Explored how adversarial perturbations target DRL systems, revealing critical vulnerabilities that compromise performance and reliability. Covered key attack strategies, their implications for autonomous systems, and the emerging need for robust, scalable defense mechanisms.",
      thumbnail: "https://img.youtube.com/vi/iJKIszBQwvY/maxresdefault.jpg",
      links: {
        video: "https://www.youtube.com/watch?v=iJKIszBQwvY",
        event: "https://www.meetup.com/munich-datageeks/events/305552437/?eventOrigin=group_events_list",
        blog: "https://www.cib.de/en/ki-cib-munich-datageeks-january-edition-2025/",
      },
    },
    {
      title: "How Robust Is Your Self-Driving AI?",
      event: "AI with a Human Touch – Ep. 1",
      date: "",
      location: "",
      description:
        "A deep dive into the robustness challenges facing self-driving AI systems, examining adversarial threats and the path toward reliable autonomous driving.",
      thumbnail: "https://img.youtube.com/vi/ZD4K5SzI6hk/maxresdefault.jpg",
      links: {
        video: "https://www.youtube.com/watch?v=ZD4K5SzI6hk",
      },
    },
  ],
  research: [
    {
      title: "The Evolution of Criticality in Deep Reinforcement Learning",
      venue: "ICAART'25",
      award: "",
      image: "/icaart.png",
      description:
        "Investigates how criticality — a measure of an agent's sensitivity to state perturbations — evolves throughout the training of deep reinforcement learning agents.",
      links: {
        project: "",
        paper: "https://www.scitepress.org/Papers/2025/131142/131142.pdf",
        code: "",
        video: "",
        bibtex: `@inproceedings{karpenahalli2025evolution,
  title={The evolution of criticality in deep reinforcement learning},
  author={Karpenahalli Ramakrishna, Chidvilas and Mohan, Adithya and Zeinaly, Zahra and Belzner, Lenz},
  booktitle={Proceedings of the 17th International Conference on Agents and Artificial Intelligence (ICAART 2025)-Volume 3},
  pages={217--224},
  year={2025},
  organization={SciTePress}
}`,
      },
    },
    {
      title: "Advancing Robustness in Deep Reinforcement Learning with an Ensemble Defense Approach",
      venue: "ITSC'25",
      award: "",
      image: "/itsc25.png",
      description:
        "Proposes an ensemble-based defense framework that improves the adversarial robustness of DRL agents in autonomous driving scenarios.",
      links: {
        project: "",
        paper: "https://arxiv.org/pdf/2507.17070",
        code: "",
        video: "",
        bibtex: `@article{mohan2025advancing,
  title={Advancing robustness in deep reinforcement learning with an ensemble defense approach},
  author={Mohan, Adithya and R{\\"o}{\\ss}le, Dominik and Cremers, Daniel and Sch{\\"o}n, Torsten},
  journal={arXiv preprint arXiv:2507.17070},
  year={2025}
}`,
      },
    },
    {
      title: "UrbanIng-V2X: A Large-Scale Multi-Vehicle, Multi-Infrastructure Dataset Across Multiple Intersections for Cooperative Perception",
      venue: "NeurIPS'25",
      award: "",
      image: "/neurips25.png",
      description:
        "A large-scale cooperative perception dataset captured at three intelligent urban intersections in Ingolstadt, Germany, enabling research into V2I and V2V communication.",
      links: {
        project: "https://thi-ad.github.io/urbaning/",
        paper: "https://arxiv.org/pdf/2510.23478",
        code: "",
        video: "",
        bibtex: `@article{sekaran2025urbaning,
  title={Urbaning-v2x: A large-scale multi-vehicle, multi-infrastructure dataset across multiple intersections for cooperative perception},
  author={Sekaran, Karthikeyan Chandra and Geisler, Markus and R{\\"o}{\\ss}le, Dominik and Mohan, Adithya and Cremers, Daniel and Utschick, Wolfgang and Botsch, Michael and Huber, Werner and Sch{\\"o}n, Torsten},
  journal={Sensors},
  volume={10},
  pages={16},
  year={2025}
}`,
      },
    },
    {
      title: "DrivIng: A Large-Scale Multimodal Driving Dataset with Full Digital Twin Integration",
      venue: "IV'26",
      award: "",
      image: "/iv26.png",
      description:
        "A multimodal driving dataset with full digital twin integration, bridging the gap between simulation and real-world autonomous driving research.",
      links: {
        project: "https://thi-ad.github.io/driving/",
        paper: "https://arxiv.org/pdf/2601.15260",
        code: "",
        video: "",
        bibtex: `@article{rossle2026driving,
  title={DrivIng: A Large-Scale Multimodal Driving Dataset with Full Digital Twin Integration},
  author={R{\\"o}{\\ss}le, Dominik and Xie, Xujun and Mohan, Adithya and Sambandham, Venkatesh Thirugnana and Cremers, Daniel and Sch{\\"o}n, Torsten},
  journal={arXiv preprint arXiv:2601.15260},
  year={2026}
}`,
      },
    },
    {
      title: "Towards Robust Agents: A Survey of Adversarial Attacks and Defenses in Deep Reinforcement Learning",
      venue: "IEEE ACCESS",
      award: "",
      image: "/ieee access.png",
      description:
        "A comprehensive survey of adversarial attack strategies and defense mechanisms in deep reinforcement learning, with a focus on safety-critical applications.",
      links: {
        project: "",
        paper: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11363601",
        code: "",
        video: "",
        bibtex: `@article{mohan2026toward,
  title={Toward Robust Agents: A Survey of Adversarial Attacks and Defenses in Deep Reinforcement Learning},
  author={Mohan, Adithya and Sch{\\"o}n, Torsten},
  journal={IEEE Access},
  year={2026},
  publisher={IEEE}
}`,
      },
    },
    {
      title: "Real-Time Evaluation of Autonomous Systems under Adversarial Attacks",
      venue: "ITSC'26",
      award: "",
      image: "/itsc26.png",
      description:
        "Presents a real-time evaluation framework for assessing the performance of autonomous systems when subjected to adversarial perturbations.",
      links: {
        project: "",
        paper: "https://arxiv.org/pdf/2605.03491",
        code: "",
        video: "",
        bibtex: `@article{mohan2026real,
  title={Real-Time Evaluation of Autonomous Systems under Adversarial Attacks},
  author={Mohan, Adithya and Xie, Xujun and Sambandham, Venkatesh Thirugnana and Sch{\\"o}n, Torsten},
  journal={arXiv preprint arXiv:2605.03491},
  year={2026}
}`,
      },
    },
  ],
  projects: [
    {
      name: "Tic Tac Toe",
      description:
        "A C programming practice project implementing the classic Tic Tac Toe game.",
      link: "https://codewiz1394.github.io/projects/projects-1/",
      skills: ["C"],
    },
  ],
  experience: [
    {
      company: "Technische Hochschule Ingolstadt",
      title: "AI Researcher – Team Lead",
      dateRange: "Mar 2023 – Present",
      bullets: [
        "Developed and led a full autonomous driving stack with ROS2 for real-car deployment",
        "Researching adversarial attacks and defenses in Deep Reinforcement Learning (DRL)",
        "Published at ICAART'25, ITSC'25, NeurIPS'25, IV'26, and IEEE ACCESS",
      ],
    },
    {
      company: "Franka Emika GmbH",
      title: "AI Robotics Engineer",
      dateRange: "Aug 2022 – Dec 2022",
      bullets: [
        "Designed learning engine and modular C++ test framework for Franka robotic arms",
        "Developed safe ML pipelines and guided safety practices across the team",
      ],
    },
    {
      company: "Quantum Systems GmbH",
      title: "Robotics Software Engineer",
      dateRange: "Sep 2021 – Jul 2022",
      bullets: [
        "Built path planning GUI with PyQt for UAV landing operations",
        "Developed drone task automation stack, unit tests, and CI/CD tooling",
      ],
    },
    {
      company: "ARE23 GmbH",
      title: "Junior Robotics Engineer",
      dateRange: "Aug 2020 – Aug 2021",
      bullets: [
        "ROS-based planning and perception using OpenCV and Keras",
        "Built AWS workflows, web deployment pipelines, and internal testing suites",
      ],
    },
    {
      company: "Innok Robotics GmbH",
      title: "Master Thesis Student",
      dateRange: "Feb 2020 – Aug 2020",
      bullets: [
        "Developed robot diagnostics tool and visualization pipeline in Python and ROS",
      ],
    },
    {
      company: "Flex India Pvt. Ltd",
      title: "Senior Analyst",
      dateRange: "Aug 2016 – Aug 2018",
      bullets: [
        "Led material planning and lean automation initiatives",
        "Applied analytics (Python, R, SQL, Tableau) to optimize supply chain operations",
      ],
    },
  ],
  education: [
    {
      school: "Technische Hochschule Ingolstadt",
      degree: "Ph.D. Artificial Intelligence (Dr. rer. nat.)",
      dateRange: "Mar 2023 – Present",
      achievements: [],
    },
    {
      school: "Technische Hochschule Deggendorf",
      degree: "M.Eng. Mechatronics & Cyber Physical Systems",
      dateRange: "Mar 2019 – Mar 2021",
      achievements: [],
    },
    {
      school: "Anna University",
      degree: "B.Eng. Mechanical Engineering",
      dateRange: "Sep 2012 – May 2016",
      achievements: [],
    },
  ],
};
