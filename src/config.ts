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
  research: [
    {
      title: "The Evolution of Criticality in Deep Reinforcement Learning",
      venue: "ICAART'25",
      award: "",
      description:
        "Investigates how criticality — a measure of an agent's sensitivity to state perturbations — evolves throughout the training of deep reinforcement learning agents.",
      links: { project: "", paper: "", code: "", bibtex: "", video: "" },
    },
    {
      title: "Advancing Robustness in Deep Reinforcement Learning with an Ensemble Defense Approach",
      venue: "ITSC'25",
      award: "",
      description:
        "Proposes an ensemble-based defense framework that improves the adversarial robustness of DRL agents in autonomous driving scenarios.",
      links: { project: "", paper: "", code: "", bibtex: "", video: "" },
    },
    {
      title: "UrbanIng-V2X: A Large-Scale Multi-Vehicle, Multi-Infrastructure Dataset Across Multiple Intersections for Cooperative Perception",
      venue: "NeurIPS'25",
      award: "",
      description:
        "A large-scale cooperative perception dataset captured at three intelligent urban intersections in Ingolstadt, Germany, enabling research into V2I and V2V communication.",
      links: { project: "https://thi-ad.github.io/urbaning/", paper: "", code: "", bibtex: "", video: "" },
    },
    {
      title: "DrivIng: A Large-Scale Multimodal Driving Dataset with Full Digital Twin Integration",
      venue: "IV'26",
      award: "",
      description:
        "A multimodal driving dataset with full digital twin integration, bridging the gap between simulation and real-world autonomous driving research.",
      links: { project: "", paper: "", code: "", bibtex: "", video: "" },
    },
    {
      title: "Towards Robust Agents: A Survey of Adversarial Attacks and Defenses in Deep Reinforcement Learning",
      venue: "IEEE ACCESS",
      award: "",
      description:
        "A comprehensive survey of adversarial attack strategies and defense mechanisms in deep reinforcement learning, with a focus on safety-critical applications.",
      links: { project: "", paper: "", code: "", bibtex: "", video: "" },
    },
    {
      title: "Real-Time Evaluation of Autonomous Systems under Adversarial Attacks",
      venue: "ITSC'26",
      award: "",
      description:
        "Presents a real-time evaluation framework for assessing the performance of autonomous systems when subjected to adversarial perturbations.",
      links: { project: "", paper: "", code: "", bibtex: "", video: "" },
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
