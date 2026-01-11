import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { analyzeCareerPath } from '../utils/aiLogic';
import Card from '../components/card/Card';
import Button from '../components/button/Button';
import './Result.css';

const Result = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState(null);
    const [activeTab, setActiveTab] = useState('careers');

    useEffect(() => {
        // Get form data from localStorage
        const storedData = localStorage.getItem('careerFormData');

        if (!storedData) {
            // No data found, redirect to form
            navigate('/form');
            return;
        }

        const parsedData = JSON.parse(storedData);

        // Analyze career path using mock AI
        const fetchResults = async () => {
            try {
                const recommendations = await analyzeCareerPath(parsedData);
                setResults(recommendations);
            } catch (error) {
                console.error('Error analyzing career path:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [navigate]);

    const handleStartOver = () => {
        localStorage.removeItem('careerFormData');
        navigate('/form');
    };

    if (loading) {
        return (
            <div className="result-page">
                <div className="loading-container fade-in">
                    <div className="loading-animation">
                        <div className="loading-orb"></div>
                        <div className="loading-ring"></div>
                    </div>
                    <h2>Analyzing Your Profile</h2>
                    <p>Our AI is finding the best career paths for you...</p>
                    <div className="loading-steps">
                        <div className="loading-step active">
                            <span className="step-icon">📊</span>
                            <span>Processing interests</span>
                        </div>
                        <div className="loading-step">
                            <span className="step-icon">🔍</span>
                            <span>Matching careers</span>
                        </div>
                        <div className="loading-step">
                            <span className="step-icon">✨</span>
                            <span>Generating recommendations</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!results) {
        return (
            <div className="result-page">
                <div className="error-container glass-card fade-in">
                    <h2>Oops! Something went wrong.</h2>
                    <p>We couldn't analyze your profile. Please try again.</p>
                    <Button variant="primary" onClick={handleStartOver}>
                        Try Again
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="result-page fade-in">
            {/* Header */}
            <div className="result-header">
                <div className="header-badge">
                    <span>🎯</span>
                    <span>AI Analysis Complete</span>
                </div>
                <h1>Your Career <span className="gradient-text">Recommendations</span></h1>
                <p className="header-subtitle">{results.summary.message}</p>
            </div>

            {/* Summary Cards */}
            <div className="summary-grid">
                <div className="summary-card glass-card">
                    <span className="summary-icon">🏆</span>
                    <span className="summary-value">{results.summary.topMatch}</span>
                    <span className="summary-label">Top Match</span>
                </div>
                <div className="summary-card glass-card">
                    <span className="summary-icon">📁</span>
                    <span className="summary-value">{results.summary.primaryField}</span>
                    <span className="summary-label">Primary Field</span>
                </div>
                <div className="summary-card glass-card">
                    <span className="summary-icon">🛤️</span>
                    <span className="summary-value">{results.summary.totalCareers}</span>
                    <span className="summary-label">Career Paths</span>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="tab-nav">
                <button
                    className={`tab-btn ${activeTab === 'careers' ? 'active' : ''}`}
                    onClick={() => setActiveTab('careers')}
                >
                    💼 Career Paths
                </button>
                <button
                    className={`tab-btn ${activeTab === 'tips' ? 'active' : ''}`}
                    onClick={() => setActiveTab('tips')}
                >
                    📝 Study Tips
                </button>
                <button
                    className={`tab-btn ${activeTab === 'next' ? 'active' : ''}`}
                    onClick={() => setActiveTab('next')}
                >
                    🚀 Next Steps
                </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
                {/* Careers Tab */}
                {activeTab === 'careers' && (
                    <div className="careers-grid">
                        {results.careers.map((career, index) => (
                            <Card
                                key={career.title}
                                variant="career"
                                animate={true}
                                delay={index * 100}
                                icon={career.icon}
                                title={career.title}
                            >
                                <div className="career-content">
                                    <div className="match-badge">
                                        <span className="match-score">{career.matchScore}%</span>
                                        <span className="match-label">Match</span>
                                    </div>

                                    <p className="career-description">{career.description}</p>

                                    <div className="career-details">
                                        <div className="detail-item">
                                            <span className="detail-icon">💰</span>
                                            <div>
                                                <span className="detail-label">Salary Range</span>
                                                <span className="detail-value">{career.salary}</span>
                                            </div>
                                        </div>
                                        <div className="detail-item">
                                            <span className="detail-icon">📈</span>
                                            <div>
                                                <span className="detail-label">Growth</span>
                                                <span className="detail-value">{career.growth}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="career-education">
                                        <span className="detail-icon">🎓</span>
                                        <span>{career.education}</span>
                                    </div>

                                    <div className="card-tags">
                                        {career.skills.map(skill => (
                                            <span key={skill} className="card-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}

                {/* Tips Tab */}
                {activeTab === 'tips' && (
                    <div className="tips-section fade-in">
                        <Card className="tips-card">
                            <h3 className="tips-title">📚 Study Tips for {results.summary.primaryField}</h3>
                            <ul className="tips-list">
                                {results.studyTips.map((tip, index) => (
                                    <li key={index} className="tip-item">
                                        <span className="tip-number">{index + 1}</span>
                                        <span>{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Card className="location-card">
                            <h3 className="tips-title">📍 Location Insights</h3>
                            <p>{results.locationAdvice}</p>
                        </Card>

                        <Card className="resources-card">
                            <h3 className="tips-title">🔗 Learning Resources</h3>
                            <div className="resources-grid">
                                {results.resources.map((resource, index) => (
                                    <a
                                        key={index}
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="resource-link"
                                    >
                                        {resource.name}
                                        <span className="link-arrow">→</span>
                                    </a>
                                ))}
                            </div>
                        </Card>
                    </div>
                )}

                {/* Next Steps Tab */}
                {activeTab === 'next' && (
                    <div className="next-section fade-in">
                        <Card className="next-card">
                            <h3 className="next-title">🚀 Your Action Plan</h3>
                            <div className="next-steps">
                                {results.nextSteps.map((step, index) => (
                                    <div key={index} className="next-step">
                                        <div className="step-marker">
                                            <span className="step-num">{index + 1}</span>
                                        </div>
                                        <div className="step-content">
                                            <p>{step}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                )}
            </div>

            {/* Actions */}
            <div className="result-actions">
                <Button variant="secondary" onClick={handleStartOver}>
                    Start Over
                </Button>
                <Link to="/about">
                    <Button variant="ghost">
                        How This Works
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Result;
