const knowledge = [
    {
        keywords: [
            "hello",
            "hi",
            "hey",
            "good morning",
            "good afternoon",
            "good evening"
        ],
        response: "Hello! I am MakerBot 🤖. How can I help you with Makerspace today?"
    },

    {
        keywords: [
            "what is makerspace",
            "what is maker space",
            "about makerspace",
            "about maker space",
            "tell me about makerspace"
        ],
        response: "Makerspace is a student-run organization and innovation hub under the Department of Electronic and Computer Engineering. It is the DREAM Workshop for BIG Ideas! Makerspace provides a community for makers, promotes maker culture, and gives students the equipment and space needed to turn ideas into reality."
    },

    {
        keywords: [
            "why was makerspace created",
            "purpose of makerspace",
            "why makerspace exists",
            "reason for makerspace"
        ],
        response: "Makerspace was created to give students, especially ECE students, a dedicated space to work on personal projects, explore ideas, and grow beyond academic learning. Unlike academic labs, Makerspace is your own space to create and experiment."
    },

    {
        keywords: [
            "who runs makerspace",
            "management",
            "makerspace team",
            "exco"
        ],
        response: "Makerspace is managed by a dedicated EXCO team consisting of four core members, secretaries, and Makerspace helpers. As a Department of Electronic and Computer Engineering affiliated group, ECE professors also provide guidance and support."
    },

    {
        keywords: [
            "where is makerspace",
            "makerspace location",
            "location of makerspace",
            "where can i find makerspace",
            "find makerspace"
        ],
        response: "Makerspace is located at Room 3125A, Lift 25/26, 3rd floor, HKUST."
    },

    {
        keywords: [
            "opening hours",
            "when is makerspace open",
            "is makerspace open",
            "what time does makerspace open",
            "hours"
        ],
        response: "Makerspace is open on weekdays from 9 AM to 5 PM. It is closed on weekends and public holidays. Access after office hours is only allowed when an EXCO member is present and permits it."
    },

    {
        keywords: [
            "who can join",
            "who can become member",
            "eligibility",
            "can i join",
            "join makerspace"
        ],
        response: "Any ECE student can become a Makerspace member! Students from any year and exchange students can join. Membership is free. You only need to complete the ELEC0001 safety course and two induction workshops."
    },

    {
        keywords: [
            "membership fee",
            "cost",
            "price",
            "how much does membership cost"
        ],
        response: "Makerspace membership is completely free. There is no membership fee."
    },

    {
        keywords: [
            "how to become member",
            "membership application",
            "apply for makerspace",
            "join process"
        ],
        response: "Membership applications open at the start of every Fall semester. Interested students must complete the ELEC0001 safety course and two induction workshops. After successful completion, students receive Makerspace membership access."
    },

    {
        keywords: [
            "previous experience",
            "need experience",
            "need knowledge",
            "beginner"
        ],
        response: "No previous experience is needed! Anyone can join Makerspace. You only need to complete the required safety course and induction workshops."
    },

    {
        keywords: [
            "renew membership",
            "membership renewal",
            "renew"
        ],
        response: "Membership renewal is based on a point system. At the end of the year, your participation and projects completed contribute to your points. You need the required minimum points to renew your membership."
    },

    {
        keywords: [
            "cancel membership",
            "leave makerspace",
            "quit makerspace"
        ],
        response: "There is no formal cancellation process. You can simply choose not to continue as a member. However, Makerspace will definitely miss having you around!"
    },

    {
        keywords: [
            "equipment",
            "facilities",
            "what equipment",
            "what machines",
            "what can i use",
            "tools in makerspace"
        ],
        response: "Makerspace has many facilities including 3D printers, laser cutters, CNC machines, soldering stations, electronics components, robotics equipment, and mechanical workspaces. We also provide Arduino, Raspberry Pi, prototyping equipment, and many other tools."
    },

    {
        keywords: [
            "3d printer",
            "3d printing",
            "print"
        ],
        response: "Yes, Makerspace has 3D printers available for members. 3D printing services are free for Makerspace members."
    },

    {
        keywords: [
            "laser cutter",
            "laser cutting"
        ],
        response: "Yes, Makerspace has laser cutters. Members need proper training and approval from EXCO before using them."
    },

    {
        keywords: [
            "cnc",
            "cnc machine"
        ],
        response: "Yes, Makerspace has CNC equipment available for members."
    },

    {
        keywords: [
            "arduino",
            "raspberry pi",
            "electronics components"
        ],
        response: "Makerspace provides many electronics components including Arduino, Raspberry Pi, and other prototyping parts. Check the Parts Database page for more details."
    },

    {
        keywords: [
            "booking equipment",
            "reserve equipment",
            "equipment reservation"
        ],
        response: "There is no equipment booking system. If the equipment is available, members can use it. Please avoid unnecessarily occupying resources for too long."
    },

    {
        keywords: [
            "workshops",
            "events",
            "training"
        ],
        response: "Makerspace organizes regular workshops covering different topics. Workshops are usually held weekly or bi-weekly. Check the Events page for upcoming workshops."
    },

    {
        keywords: [
            "workshop cost",
            "workshop fee",
            "free workshop"
        ],
        response: "Makerspace workshops are free for members. Students of all experience levels are welcome."
    },

    {
        keywords: [
            "host workshop",
            "conduct workshop",
            "teach workshop"
        ],
        response: "Students may suggest or host workshops. Contact the internal development team. If there is enough interest, the EXCO may organize the workshop."
    },

    {
        keywords: [
            "project",
            "build",
            "personal project"
        ],
        response: "You can build personal projects in Makerspace! We encourage students to explore ideas, prototype, collaborate, and create. However, course projects should generally not be done in Makerspace."
    },

    {
        keywords: [
            "robot",
            "robotics"
        ],
        response: "Yes, you can build robots in Makerspace. We have robotics equipment and tools available. However, robotics team projects should use their dedicated team laboratories."
    },

    {
        keywords: [
            "safety",
            "rules",
            "damage equipment"
        ],
        response: "Members must complete safety training before using Makerspace resources. Please use equipment responsibly. Careless use may result in penalties or loss of membership access."
    },

    {
        keywords: [
            "community",
            "meet makers",
            "discord",
            "whatsapp"
        ],
        response: "Makerspace has an active maker community through WhatsApp and Discord. You can meet other makers, collaborate on projects, and share ideas."
    },

    {
        keywords: [
            "contact",
            "email",
            "feedback",
            "problem"
        ],
        response: "For questions, feedback, or problems, contact Makerspace at ecemakers@ust.hk or reach out through the Makerspace WhatsApp community."
    },

    {
        keywords: [
            "instagram",
            "social media"
        ],
        response: "Follow Makerspace on Instagram: @ecemakerspace_hkust"
    }

];


module.exports = knowledge;