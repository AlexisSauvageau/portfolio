export const initialProjects = [
    {
        id: 12,
        title: {
            fr: "Jeu mobile de type Arcade Shooter",
            en: "Arcade Shooter Mobile Game"
        },
        type: {
            fr: "Projet scolaire",
            en: "Academic Project"
        },
        enterprise: {
            fr: "Université Lumière Lyon 2",
            en: "Lumière Lyon 2 University"
        },
        desc: {
            fr: "Développement d'un jeu mobile iOS en 2D, avec le framework SpriteKit, dans lequel le joueur doit survivre à des vagues de zombies. Gestion du highscore, du multitouch, ou encore des animations.",
            en: "Development of a 2D iOS mobile game using the SpriteKit framework, in which the player must survive waves of zombies. The project includes high-score management, multitouch controls, animations, and more."
        },
        tags: ["Swift", "Mobile", "Jeux-vidéos"],
        year: 2026,
        dates: {
            fr: "mars 2026 - avril 2026",
            en: "March 2026 - April 2026"
        },
        area: "Mobile",
        icon: "icons/zombie.svg",
        team: 2,
        languages: ["Swift"],
        tools: [
            {
                fr: "Xcode (IDE pour développement iOS)",
                en: "Xcode (IDE for iOS development)"
            },
            {
                fr: "SpriteKit (framework pour gérer des scènes avec sprites, animations, sons)",
                en: "SpriteKit (framework for handling scenes with sprites, animations and sounds)"
            }
        ],
        images: ["zombie.png"]
    },
    {
        id: 11,
        title: {
            fr: "Système d'exploitation",
            en: "Operating System"
        },
        type: {
            fr: "Projet personnel",
            en: "Personal Project"
        },
        desc: {
            fr: "Création d'un OS en partant de 0 : écriture du bootloader, du kernel, rétro-comptabilité (passage en mode protégé), implémentation du système de fichiers FAT, gestion des interruptions matérielles (clavier) et communication avec la carte graphique (en mode VGA).",
            en: "Development of an operating system from scratch: writing a bootloader and kernel, backward compatibility through protected mode, implementation of the FAT file system, hardware interrupt handling (keyboard), and communication with the graphics card in VGA mode."
        },
        tags: ["C", "Assembleur"],
        year: 2025,
        dates: {
            fr: "novembre 2025 - Aujourd'hui",
            en: "November 2025 - January 2026"
        },
        area: "System",
        icon: "icons/os.svg",
        team: 1,
        languages: [
            "Assembleur (bootloader)",
            "C (kernel)"
        ],
        tools: [
            {
                fr: "Qemu (machine virtuelle où simuler mon OS)",
                en: "QEMU (virtual machine used to run and test my operating system)"
            },
            {
                fr: "Nasm (transformer un fichier assembleur en fichier binaire)",
                en: "NASM (assembler used to convert assembly source code into binary code)"
            }
        ],
        images: ["os.png", "os2.png"]
    },
    {
        id: 10,
        title: {
            fr: "ROM Hacking",
            en: "ROM Hacking"
        },
        type: {
            fr: "Projet personnel",
            en: "Personal Project"
        },
        desc: {
            fr: "Modification de la ROM du jeu Mario Kart DS, en implémentant mes propres textures, sons, et en personnalisant le code via désassembleur pour remplacer l'item 'Banane' par un nouvel item original.",
            en: "Modification of the Mario Kart DS ROM by implementing custom textures and sounds, and modifying the game's code through reverse engineering to replace the 'Banana' item with a new original item."
        },
        tags: ["C", "ROM"],
        year: 2025,
        dates: {
            fr: "octobre 2025 - novembre 2025",
            en: "October 2025 - November 2025"
        },
        area: "System",
        icon: "icons/rom.svg",
        team: 1,
        languages: [
            "C",
            "Assembleur"
        ],
        tools: [
            {
                fr: "MKDS Course Modifier (ouvrir la ROM du jeu et extraire ses fichiers)",
                en: "MKDS Course Modifier (open the game ROM and extract its files)"
            },
            {
                fr: "Ghidra (désassembler et modifier du code binaire)",
                en: "Ghidra (disassemble and modify binary code)"
            },
            {
                fr: "Nitro Studio (modifier les fichiers sonores de la ROM)",
                en: "Nitro Studio (modify the ROM's audio files)"
            },
            {
                fr: "Nitro Explorer (modifier la ROM en intégrant mes propres fichiers)",
                en: "Nitro Explorer (modify the ROM by integrating custom files)"
            }
        ],
        images: ["rom1.png", "rom2.png"]
    },
    {
        id: 9,
        title: {
            fr: "Application de Planning Poker",
            en: "Planning Poker Application"
        },
        type: {
            fr: "Projet scolaire",
            en: "Academic Project"
        },
        enterprise: {
            fr: "Université Lumière Lyon 2",
            en: "Lumière Lyon 2 University"
        },
        desc: {
            fr: "Création d'une application WPF via C# .NET qui permet à une équipe de développeurs de faire des sessions de planning poker.",
            en: "Development of a WPF application using C# .NET that allows a team of developers to run Planning Poker sessions."
        },
        tags: ["C#", "Agile"],
        year: 2025,
        dates: {
            fr: "octobre 2025 - décembre 2025",
            en: "October 2025 - December 2025"
        },
        area: "Software",
        icon: "icons/agile.svg",
        team: 2,
        languages: [
            "C#",
            "XAML"
        ],
        tools: [
            {
                fr: "GitHub (versionner le projet)",
                en: "GitHub (version control for the project)"
            },
            {
                fr: "SCRUM (méthode agile de gestion de projet)",
                en: "SCRUM (agile project management methodology)"
            }
        ],
        images: ["poker1.png", "poker2.png"]
    },
    {
        id: 8,
        title: {
            fr: "Systèmes embarqués",
            en: "Embedded Systems"
        },
        type: {
            fr: "CDD étudiant",
            en: "Student Fixed-Term Contract"
        },
        enterprise: {
            fr: "Mini World Lyon",
            en: "Mini World Lyon"
        },
        desc: {
            fr: "Maintenance logicielle d’un parc miniature dans un job étudiant : programmation de cartes Raspberry et Arduino, révision de l’architecture informatique du parc.",
            en: "Software maintenance for a miniature park as part of a student job: programming Raspberry Pi and Arduino boards, and redesigning parts of the park's IT architecture."
        },
        tags: ["IoT", "Python", "C#"],
        year: 2025,
        dates: {
            fr: "juin 2025 - Aujourd'hui",
            en: "June 2025 - Present"
        },
        area: "IoT",
        icon: "icons/embedded_systems.svg",
        team: 1,
        languages: [
            {
                fr: "Python (Raspberry Linux)",
                en: "Python (Raspberry Linux)"
            },
            {
                fr: "C# (Raspberry Windows)",
                en: "C# (Raspberry Windows)"
            },
            {
                fr: "C (Arduino)",
                en: "C (Arduino)"
            },
            {
                fr: "XML (communication réseau)",
                en: "XML (network communication)"
            }
        ],
        tools: [
            {
                fr: "Raspberry Pi Imager (installer un OS Linux sur les Raspberry)",
                en: "Raspberry Pi Imager (install a Linux operating system on Raspberry Pi devices)"
            },
            {
                fr: "JMRI (logiciel permettant de piloter des trains depuis une Raspberry)",
                en: "JMRI (software used to control trains from a Raspberry Pi)"
            },
            {
                fr: "GitHub (versionner et centraliser les différents projets)",
                en: "GitHub (version control and centralization of the different projects)"
            },
            {
                fr: "Figma (expliquer l’architecture aux novices à l'aide de schémas)",
                en: "Figma (explain the architecture to non-technical users through diagrams)"
            }
        ],
        images: ["mini_world.png", "mini_world2.png"]
    },
    {
        id: 7,
        title: {
            fr: "Émulateur",
            en: "Emulator"
        },
        type: {
            fr: "Projet personnel",
            en: "Personal Project"
        },
        desc: {
            fr: "Création d’un émulateur Chip-8 en C, qui simule toute l’architecture (registres, RAM...) et permet de lancer des ROM pour jouer à des jeux 2D, avec la bibliothèque SDL2.",
            en: "Development of a Chip-8 emulator in C that simulates the entire architecture (registers, RAM, etc.) and runs ROMs to play 2D games using the SDL2 library."
        },
        tags: ["C", "Assembleur", "SDL"],
        year: 2025,
        dates: {
            fr: "janvier 2025",
            en: "January 2025"
        },
        area: "System",
        icon: "icons/emulator.svg",
        team: 1,
        languages: [
            {
                fr: "C",
                en: "C"
            },
            {
                fr: "Assembleur",
                en: "Assembly"
            }
        ],
        tools: [
            {
                fr: "SDL (afficher une fenêtre graphique)",
                en: "SDL (display a graphical window)"
            }
        ],
        images: ["emulateur.png"]
    },
    {
        id: 6,
        title: {
            fr: "Classification d'arbres",
            en: "Tree Classification"
        },
        type: {
            fr: "Projet scolaire",
            en: "Academic Project"
        },
        enterprise: {
            fr: "Université de Sherbrooke",
            en: "University of Sherbrooke"
        },
        desc: {
            fr: "Mise en place de 6 techniques de classification linéaire, pour prédire le type d’arbre selon les feuilles passées en entrée, et minimisation des erreurs avec la descente de gradients.",
            en: "Implementation of six linear classification techniques to predict tree species based on leaf characteristics, with error minimization using gradient descent."
        },
        tags: ["Python", "Numpy"],
        year: 2024,
        dates: {
            fr: "novembre 2024 - décembre 2024",
            en: "November 2024 - December 2024"
        },
        area: "AI",
        icon: "icons/ai.svg",
        team: 5,
        languages: [
            "Python"
        ],
        tools: [
            {
                fr: "Numpy (manipuler matrices et vecteurs)",
                en: "NumPy (manipulate matrices and vectors)"
            },
            {
                fr: "Scikit-Learn (importer des modèles de réseaux de neurones)",
                en: "Scikit-Learn (use machine learning and neural network models)"
            },
            {
                fr: "GitHub (versionner le projet)",
                en: "GitHub (version control for the project)"
            }
        ],
        images: ["ia.png", "ia2.png"]
    },
    {
        id: 5,
        title: {
            fr: "Maison intelligente",
            en: "Smart Home"
        },
        type: {
            fr: "Projet scolaire",
            en: "Academic Project"
        },
        enterprise: {
            fr: "Université de Sherbrooke",
            en: "University of Sherbrooke"
        },
        desc: {
            fr: "Déploiement d’un système réparti dans mon appartement avec divers capteurs, afin de le rendre “intelligent” : éclairage qui s’adapte à la luminosité ambiante (capteur de luminosité), boîte aux lettres qui me notifie dès que je reçois du courrier (capteur de mouvements).",
            en: "Deployment of a distributed system in my apartment using various sensors to make it 'smart': lighting that adapts to ambient brightness using a light sensor, and a mailbox that sends a notification when mail is received using a motion sensor."
        },
        tags: ["OpenHAB", "MQTT"],
        year: 2024,
        dates: {
            fr: "octobre 2024 - décembre 2024",
            en: "October 2024 - December 2024"
        },
        area: "IoT",
        icon: "icons/openhab.svg",
        team: 4,
        languages: [
            {
                fr: "Java (règles OpenHAB)",
                en: "Java (OpenHAB rules)"
            } 
        ],
        tools: [
            {
                fr: "OpenHAB (centraliser les appareils intelligents)",
                en: "OpenHAB (centralize smart devices)"
            },
            {
                fr: "MQTT (communication entre les appareils)",
                en: "MQTT (communication between devices)"
            },
            {
                fr: "Raspberry Pi (reçoit les données des capteurs et exécute les règles OpenHAB)",
                en: "Raspberry Pi (receives sensor data and runs OpenHAB rules)"
            }
        ],
        images: ["systemes_repartis.png", "systemes_repartis2.png"]
    },
    {
        id: 4,
        title: {
            fr: "Scène 3D animée",
            en: "Animated 3D Scene"
        },
        type: {
            fr: "Projet scolaire",
            en: "Academic Project"
        },
        enterprise: {
            fr: "Université de Sherbrooke",
            en: "University of Sherbrooke"
        },
        desc: {
            fr: "Création d’une scène 3D - avec OpenGL - utilisant les techniques modernes d’infographie pour les jeux-vidéos, écriture des shaders, et calcul des reflets et de l’illumination dans la scène (modèle de Phong).",
            en: "Development of a 3D scene using OpenGL and modern computer graphics techniques used in video games, including shader programming and calculation of reflections and lighting using the Phong model."
        },
        tags: ["Jeux-vidéos", "Infographie"],
        year: 2024,
        dates: {
            fr: "septembre 2024 - décembre 2024",
            en: "September 2024 - December 2024"
        },
        area: "Graphics",
        icon: "icons/gaming.svg",
        team: 3,
        languages: [
            "C++",
            "GLSL (shaders)"
        ],
        tools: [
            {
                fr: "OpenGL (faire des rendus de scènes 3D)",
                en: "OpenGL (render 3D scenes)"
            },
            {
                fr: "Blender (modéliser des objets 3D)",
                en: "Blender (model 3D objects)"
            }
        ],
        images: ["jeux.png"]
    },
    {
        id: 3,
        title: {
            fr: "Application de covoiturage",
            en: "Carpooling Application"
        },
        type: {
            fr: "Projet scolaire",
            en: "Academic Project"
        },
        enterprise: {
            fr: "Université de Sherbrooke",
            en: "University of Sherbrooke"
        },
        desc: {
            fr: "Création d’un client Android, d’un serveur REST NodeJS et d’une base de données MongoDB pour une application mobile de gestion de trajets en covoiturage. Utilisation de l’IA ML-Kit qui vérifie la validité du permis de conduire des chauffeurs.",
            en: "Development of an Android client, a Node.js REST server and a MongoDB database for a mobile carpooling application. The project uses ML Kit to verify the validity of drivers' licenses."
        },
        tags: ["Mobile", "Web"],
        year: 2024,
        dates: {
            fr: "août 2024 - décembre 2024",
            en: "August 2024 - December 2024"
        },
        area: "Mobile",
        icon: "icons/mobile.svg",
        team: 6,
        languages: [
            "Kotlin (front-end)",
            "JS (back-end)"
        ],
        tools: [
            {
                fr: "Jetpack Compose (faciliter la gestion de l'UI)",
                en: "Jetpack Compose (simplify UI development)"
            },
            {
                fr: "Node.js (créer un serveur REST)",
                en: "Node.js (create a REST server)"
            },
            {
                fr: "MongoDB (base de données contenant utilisateurs, chauffeurs et trajets)",
                en: "MongoDB (database containing users, drivers and trips)"
            },
            {
                fr: "GitHub (versionner le projet)",
                en: "GitHub (version control for the project)"
            }
        ],
        images: ["charbonheur.png"]
    },
    {
        id: 2,
        title: {
            fr: "Web Scraping",
            en: "Web Scraping"
        },
        type: {
            fr: "Projet scolaire",
            en: "Academic Project"
        },
        enterprise: {
            fr: "Université Savoie Mont Blanc",
            en: "University Savoie Mont Blanc"
        },
        desc: {
            fr: "Développement d’un site web - via la méthode agile SCRUM - récoltant des posts sur divers réseaux sociaux, permettant à des chercheurs d’étudier la sensibilité des internautes à la biodiversité. Mise en place d’un réseau de neurones qui analyse massivement les données récoltées, facilitant ainsi le travail des chercheurs.",
            en: "Development of a web application using the SCRUM agile methodology to collect posts from various social networks, allowing researchers to study public sensitivity to biodiversity. Implementation of a neural network to analyze the collected data at scale, making the researchers' work easier."
        },
        tags: ["Web", "Réseaux sociaux", "IA", "Agile"],
        year: 2023,
        dates: {
            fr: "novembre 2023 - mai 2024",
            en: "November 2023 - May 2024"
        },
        area: "Web",
        icon: "icons/network.svg",
        team: 6,
        languages: [
            "JS (front-end)",
            "Python (back-end)"
        ],
        tools: [
            {
                fr: "Flask (exécuter des scripts Python depuis une interface web)",
                en: "Flask (run Python scripts from a web interface)"
            },
            {
                fr: "Keras (créer un réseau de neurones qui analyse des phrases)",
                en: "Keras (build a neural network that analyzes sentences)"
            },
            {
                fr: "GitHub (versionner le projet)",
                en: "GitHub (version control for the project)"
            },
            {
                fr: "SCRUM (méthode agile de gestion de projet)",
                en: "SCRUM (agile project management methodology)"
            }
        ],
        images: ["web_scraping.png", "web_scraping2.png"]
    },
    {
        id: 1,

        title: {
            fr: "Agenda collaboratif",
            en: "Collaborative Calendar"
        },
        type: {
            fr: "Projet scolaire",
            en: "Academic Project"
        },
        enterprise: {
            fr: "Université Savoie Mont Blanc",
            en: "University Savoie Mont Blanc"
        },
        desc: {
            fr: "Développement d’un site web - via la méthode agile SCRUM - mettant en place un agenda collaboratif d'une entreprise fictive de chauffeurs de bus.",
            en: "Development of a web application using the SCRUM agile methodology, implementing a collaborative calendar for a fictional bus driver company."
        },
        tags: ["Web", "Agile"],
        year: 2023,
        dates: {
            fr: "janvier 2023 - mai 2023",
            en: "January 2023 - May 2023"
        },
        area: "Web",
        icon: "icons/schedule.svg",
        team: 5,
        languages: [
            "JS (front-end)",
            "PHP (back-end)"
        ],
        tools: [
            {
                fr: "Node.js (créer un serveur REST)",
                en: "Node.js (create a REST server)"
            },
            {
                fr: "AJAX (exécuter des requêtes asynchrones)",
                en: "AJAX (perform asynchronous requests)"
            },
            {
                fr: "MySQL (base de données contenant les chauffeurs et les créneaux horaires)",
                en: "MySQL (database containing drivers and time slots)"
            },
            {
                fr: "GitHub (versionner le projet)",
                en: "GitHub (version control for the project)"
            },
            {
                fr: "SCRUM (méthode agile de gestion de projet)",
                en: "SCRUM (agile project management methodology)"
            }
        ],
        images: ["gobus.png"]
    }
];