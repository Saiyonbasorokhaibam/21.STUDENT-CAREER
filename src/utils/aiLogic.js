/**
 * Mock AI Logic for Career Guidance
 * Simulates AI analysis with conditional logic based on user inputs
 */

// Career database with recommendations based on interests and education
const careerDatabase = {
    technology: {
        careers: [
            {
                title: 'Software Engineer',
                description: 'Design, develop, and maintain software applications and systems.',
                skills: ['Programming', 'Problem Solving', 'System Design', 'Algorithms'],
                salary: '$80,000 - $150,000',
                growth: 'Very High',
                education: 'Bachelor\'s in Computer Science or related field',
                icon: '💻'
            },
            {
                title: 'Data Scientist',
                description: 'Analyze complex data to help organizations make better decisions.',
                skills: ['Python/R', 'Machine Learning', 'Statistics', 'Data Visualization'],
                salary: '$90,000 - $160,000',
                growth: 'Very High',
                education: 'Master\'s preferred in Data Science, Statistics, or related field',
                icon: '📊'
            },
            {
                title: 'Cybersecurity Analyst',
                description: 'Protect organizations from cyber threats and security breaches.',
                skills: ['Network Security', 'Threat Analysis', 'Encryption', 'Risk Assessment'],
                salary: '$75,000 - $130,000',
                growth: 'High',
                education: 'Bachelor\'s in Cybersecurity or IT',
                icon: '🔒'
            },
            {
                title: 'Cloud Architect',
                description: 'Design and oversee cloud computing strategies and implementations.',
                skills: ['AWS/Azure/GCP', 'Infrastructure', 'DevOps', 'System Architecture'],
                salary: '$120,000 - $180,000',
                growth: 'Very High',
                education: 'Bachelor\'s in Computer Science + Cloud Certifications',
                icon: '☁️'
            }
        ]
    },
    science: {
        careers: [
            {
                title: 'Research Scientist',
                description: 'Conduct research to develop new products, processes, or knowledge.',
                skills: ['Research Methods', 'Data Analysis', 'Technical Writing', 'Lab Skills'],
                salary: '$70,000 - $120,000',
                growth: 'Moderate',
                education: 'Ph.D. preferred in relevant scientific field',
                icon: '🔬'
            },
            {
                title: 'Biomedical Engineer',
                description: 'Apply engineering principles to healthcare and medicine.',
                skills: ['Biology', 'Engineering', 'Medical Devices', 'Problem Solving'],
                salary: '$65,000 - $110,000',
                growth: 'High',
                education: 'Bachelor\'s/Master\'s in Biomedical Engineering',
                icon: '🧬'
            },
            {
                title: 'Environmental Scientist',
                description: 'Study and develop solutions for environmental problems.',
                skills: ['Environmental Analysis', 'GIS', 'Policy Knowledge', 'Field Research'],
                salary: '$55,000 - $95,000',
                growth: 'Moderate',
                education: 'Bachelor\'s in Environmental Science',
                icon: '🌍'
            }
        ]
    },
    business: {
        careers: [
            {
                title: 'Product Manager',
                description: 'Lead product development from conception to launch.',
                skills: ['Strategy', 'Communication', 'Analytics', 'Leadership'],
                salary: '$100,000 - $170,000',
                growth: 'High',
                education: 'Bachelor\'s/MBA in Business or related field',
                icon: '📈'
            },
            {
                title: 'Financial Analyst',
                description: 'Analyze financial data and provide investment recommendations.',
                skills: ['Financial Modeling', 'Excel', 'Accounting', 'Data Analysis'],
                salary: '$65,000 - $120,000',
                growth: 'Moderate',
                education: 'Bachelor\'s in Finance, Economics, or Accounting',
                icon: '💹'
            },
            {
                title: 'Management Consultant',
                description: 'Help organizations improve performance and solve problems.',
                skills: ['Problem Solving', 'Analytics', 'Presentation', 'Strategy'],
                salary: '$85,000 - $180,000',
                growth: 'High',
                education: 'Bachelor\'s/MBA from top programs preferred',
                icon: '📋'
            }
        ]
    },
    creative: {
        careers: [
            {
                title: 'UX/UI Designer',
                description: 'Create intuitive and visually appealing user experiences.',
                skills: ['Figma/Sketch', 'User Research', 'Prototyping', 'Visual Design'],
                salary: '$70,000 - $130,000',
                growth: 'High',
                education: 'Bachelor\'s in Design or related field',
                icon: '🎨'
            },
            {
                title: 'Content Strategist',
                description: 'Plan and create content that engages audiences and drives goals.',
                skills: ['Writing', 'SEO', 'Analytics', 'Strategy'],
                salary: '$60,000 - $100,000',
                growth: 'Moderate',
                education: 'Bachelor\'s in Marketing, Communications, or Journalism',
                icon: '✍️'
            },
            {
                title: 'Video Game Designer',
                description: 'Create and design video game concepts, mechanics, and experiences.',
                skills: ['Game Engines', 'Storytelling', 'Level Design', 'Programming Basics'],
                salary: '$55,000 - $110,000',
                growth: 'Moderate',
                education: 'Bachelor\'s in Game Design or Computer Science',
                icon: '🎮'
            }
        ]
    },
    healthcare: {
        careers: [
            {
                title: 'Healthcare Administrator',
                description: 'Manage healthcare facilities and coordinate medical services.',
                skills: ['Management', 'Healthcare Policy', 'Finance', 'Communication'],
                salary: '$70,000 - $130,000',
                growth: 'High',
                education: 'Bachelor\'s/Master\'s in Healthcare Administration',
                icon: '🏥'
            },
            {
                title: 'Physical Therapist',
                description: 'Help patients recover movement and manage pain.',
                skills: ['Anatomy', 'Patient Care', 'Exercise Science', 'Communication'],
                salary: '$70,000 - $100,000',
                growth: 'High',
                education: 'Doctor of Physical Therapy (DPT)',
                icon: '🏃'
            },
            {
                title: 'Medical Technologist',
                description: 'Perform laboratory tests to help diagnose diseases.',
                skills: ['Lab Techniques', 'Analysis', 'Attention to Detail', 'Medical Knowledge'],
                salary: '$55,000 - $85,000',
                growth: 'Moderate',
                education: 'Bachelor\'s in Medical Technology or Clinical Lab Science',
                icon: '🧪'
            }
        ]
    },
    education: {
        careers: [
            {
                title: 'Instructional Designer',
                description: 'Create educational experiences and learning materials.',
                skills: ['Curriculum Design', 'E-learning Tools', 'Assessment', 'Communication'],
                salary: '$60,000 - $95,000',
                growth: 'Moderate',
                education: 'Bachelor\'s/Master\'s in Education or Instructional Design',
                icon: '📚'
            },
            {
                title: 'Education Technology Specialist',
                description: 'Integrate technology into educational settings.',
                skills: ['EdTech Tools', 'Training', 'Technical Support', 'Pedagogy'],
                salary: '$55,000 - $90,000',
                growth: 'High',
                education: 'Bachelor\'s in Education or Information Technology',
                icon: '🖥️'
            },
            {
                title: 'Academic Counselor',
                description: 'Guide students in their academic and career planning.',
                skills: ['Counseling', 'Career Knowledge', 'Communication', 'Empathy'],
                salary: '$45,000 - $75,000',
                growth: 'Moderate',
                education: 'Master\'s in Counseling or related field',
                icon: '🎓'
            }
        ]
    }
};

// Education level modifier
const educationModifiers = {
    'high-school': {
        message: 'Based on your high school background, here are entry-level pathways that can lead to exciting careers:',
        focusOnGrowth: true
    },
    'undergraduate': {
        message: 'With your undergraduate education, you\'re well-positioned for these career paths:',
        focusOnGrowth: false
    },
    'graduate': {
        message: 'Your graduate-level education opens doors to these advanced career opportunities:',
        focusOnGrowth: false
    },
    'professional': {
        message: 'With your professional experience, consider these leadership and specialized roles:',
        focusOnGrowth: false
    }
};

// Study tips based on career paths
const studyTips = {
    technology: [
        'Build projects on GitHub to showcase your skills',
        'Contribute to open-source projects',
        'Learn cloud platforms (AWS, Azure, or GCP)',
        'Practice coding challenges on LeetCode or HackerRank'
    ],
    science: [
        'Seek research opportunities and internships',
        'Publish papers in academic journals',
        'Attend scientific conferences and workshops',
        'Build a strong foundation in statistics and data analysis'
    ],
    business: [
        'Develop strong analytical and presentation skills',
        'Seek internships at consulting firms or corporations',
        'Network through professional organizations',
        'Consider pursuing relevant certifications (CFA, PMP)'
    ],
    creative: [
        'Build a strong portfolio showcasing your work',
        'Learn industry-standard tools (Adobe Suite, Figma)',
        'Stay updated with design trends and best practices',
        'Seek feedback and iterate on your designs'
    ],
    healthcare: [
        'Gain clinical experience through volunteering or internships',
        'Stay current with healthcare regulations and policies',
        'Develop strong patient communication skills',
        'Consider specialized certifications in your area'
    ],
    education: [
        'Gain teaching or tutoring experience',
        'Stay updated with educational technology trends',
        'Develop strong curriculum design skills',
        'Build a network with education professionals'
    ]
};

/**
 * Simulate AI analysis with delay
 * @param {Object} userData - User input data
 * @returns {Promise<Object>} - Career recommendations
 */
export const analyzeCareerPath = (userData) => {
    return new Promise((resolve) => {
        // Simulate AI processing time (1.5 - 3 seconds)
        const delay = Math.random() * 1500 + 1500;

        setTimeout(() => {
            const result = generateRecommendations(userData);
            resolve(result);
        }, delay);
    });
};

/**
 * Generate career recommendations based on user input
 * @param {Object} userData - User input data
 * @returns {Object} - Structured recommendations
 */
const generateRecommendations = (userData) => {
    const { educationLevel, interests, location } = userData;

    // Get primary interest area
    const primaryInterest = interests && interests.length > 0
        ? interests[0].toLowerCase()
        : 'technology';

    // Get careers for the interest area
    const interestData = careerDatabase[primaryInterest] || careerDatabase.technology;
    const careers = interestData.careers;

    // Get education modifier
    const eduMod = educationModifiers[educationLevel] || educationModifiers['undergraduate'];

    // Get study tips
    const tips = studyTips[primaryInterest] || studyTips.technology;

    // Generate personalized recommendation score (for display purposes)
    const generateScore = () => Math.floor(Math.random() * 15) + 85;

    // Enhance careers with match scores
    const enhancedCareers = careers.map(career => ({
        ...career,
        matchScore: generateScore()
    })).sort((a, b) => b.matchScore - a.matchScore);

    // Generate location-specific advice
    const locationAdvice = location
        ? `In ${location}, there are growing opportunities in the ${primaryInterest} sector. Consider looking into local tech hubs, startup ecosystems, and established companies in your area.`
        : 'Research local job markets and industry clusters in your region for the best opportunities.';

    return {
        summary: {
            message: eduMod.message,
            primaryField: primaryInterest.charAt(0).toUpperCase() + primaryInterest.slice(1),
            totalCareers: enhancedCareers.length,
            topMatch: enhancedCareers[0]?.title || 'Software Engineer'
        },
        careers: enhancedCareers,
        studyTips: tips,
        locationAdvice,
        nextSteps: [
            'Research specific job requirements and qualifications',
            'Identify skills gaps and create a learning plan',
            'Connect with professionals in your target field',
            'Look for internship or entry-level opportunities',
            'Join relevant professional communities and forums'
        ],
        resources: [
            { name: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/' },
            { name: 'Coursera', url: 'https://www.coursera.org/' },
            { name: 'edX', url: 'https://www.edx.org/' },
            { name: 'Udemy', url: 'https://www.udemy.com/' }
        ]
    };
};

export default analyzeCareerPath;
