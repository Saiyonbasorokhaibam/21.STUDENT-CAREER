import { Link } from 'react-router-dom';
import Button from '../components/button/Button';
import Card from '../components/card/Card';
import './About.css';

const About = () => {
    return (
        <div className="about-page fade-in">
            <div className="about-container">
                {/* Header */}
                <div className="about-header">
                    <h1>About <span className="gradient-text">AI Career Guide</span></h1>
                    <p className="about-intro">
                        Discover how our intelligent career guidance system works and
                        helps students find their perfect career path.
                    </p>
                </div>

                {/* How It Works */}
                <section className="about-section">
                    <h2>🤖 How Our AI Works</h2>
                    <Card className="info-card">
                        <div className="info-content">
                            <p>
                                Our career guidance system uses intelligent algorithms to analyze your profile
                                and match you with suitable career paths. Here's how it works:
                            </p>
                            <ol className="process-list">
                                <li>
                                    <strong>Profile Analysis:</strong> We analyze your education level,
                                    interests, and skills to understand your background.
                                </li>
                                <li>
                                    <strong>Career Matching:</strong> Our system compares your profile against
                                    a comprehensive database of career paths across multiple industries.
                                </li>
                                <li>
                                    <strong>Personalized Recommendations:</strong> Based on the analysis,
                                    we generate tailored career recommendations with match scores.
                                </li>
                                <li>
                                    <strong>Actionable Guidance:</strong> We provide study tips,
                                    next steps, and learning resources specific to your chosen field.
                                </li>
                            </ol>
                        </div>
                    </Card>
                </section>

                {/* Transparency Notice */}
                <section className="about-section">
                    <h2>⚡ Important Notice</h2>
                    <div className="notice-card glass-card">
                        <div className="notice-icon">ℹ️</div>
                        <div className="notice-content">
                            <h3>About Our Recommendations</h3>
                            <p>
                                This tool uses a <strong>simulated AI system</strong> with pre-defined career
                                data and matching algorithms. While our recommendations are based on
                                industry research and common career pathways, they should be used as
                                a starting point for your career exploration.
                            </p>
                            <p className="mt-md">
                                For comprehensive career guidance, we recommend:
                            </p>
                            <ul>
                                <li>Consulting with career counselors at your institution</li>
                                <li>Conducting informational interviews with professionals</li>
                                <li>Researching specific job requirements and market trends</li>
                                <li>Exploring internship and mentorship opportunities</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="about-section">
                    <h2>✨ Key Features</h2>
                    <div className="features-grid">
                        <div className="feature-item glass-card">
                            <span className="feature-icon">🔒</span>
                            <h3>Privacy First</h3>
                            <p>All your data stays on your device. We use localStorage for complete privacy.</p>
                        </div>
                        <div className="feature-item glass-card">
                            <span className="feature-icon">🎯</span>
                            <h3>Personalized</h3>
                            <p>Get career recommendations tailored to your unique interests and background.</p>
                        </div>
                        <div className="feature-item glass-card">
                            <span className="feature-icon">📚</span>
                            <h3>Comprehensive</h3>
                            <p>Explore careers across technology, science, business, creative, healthcare, and education.</p>
                        </div>
                        <div className="feature-item glass-card">
                            <span className="feature-icon">🚀</span>
                            <h3>Actionable</h3>
                            <p>Receive practical study tips and next steps to pursue your dream career.</p>
                        </div>
                    </div>
                </section>

                {/* Industries */}
                <section className="about-section">
                    <h2>🏢 Industries Covered</h2>
                    <div className="industries-list">
                        {[
                            { icon: '💻', name: 'Technology', careers: 'Software Engineering, Data Science, Cybersecurity, Cloud Architecture' },
                            { icon: '🔬', name: 'Science', careers: 'Research Science, Biomedical Engineering, Environmental Science' },
                            { icon: '📈', name: 'Business', careers: 'Product Management, Financial Analysis, Management Consulting' },
                            { icon: '🎨', name: 'Creative', careers: 'UX/UI Design, Content Strategy, Game Design' },
                            { icon: '🏥', name: 'Healthcare', careers: 'Healthcare Administration, Physical Therapy, Medical Technology' },
                            { icon: '📚', name: 'Education', careers: 'Instructional Design, EdTech, Academic Counseling' }
                        ].map((industry) => (
                            <div key={industry.name} className="industry-item glass-card">
                                <span className="industry-icon">{industry.icon}</span>
                                <div className="industry-info">
                                    <h4>{industry.name}</h4>
                                    <p>{industry.careers}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="about-section">
                    <h2>❓ Frequently Asked Questions</h2>
                    <div className="faq-list">
                        <Card className="faq-item">
                            <h4>Is this a real AI?</h4>
                            <p>
                                Our system uses algorithmic matching based on predefined career data.
                                While it provides intelligent recommendations, it's a rule-based system
                                rather than a machine learning model.
                            </p>
                        </Card>
                        <Card className="faq-item">
                            <h4>Is my data stored anywhere?</h4>
                            <p>
                                No. All your information is stored locally in your browser's localStorage.
                                We don't collect or transmit any personal data.
                            </p>
                        </Card>
                        <Card className="faq-item">
                            <h4>How accurate are the recommendations?</h4>
                            <p>
                                Our recommendations are based on common career pathways and industry research.
                                They serve as a starting point for exploration, not definitive career decisions.
                            </p>
                        </Card>
                        <Card className="faq-item">
                            <h4>Can I retake the assessment?</h4>
                            <p>
                                Yes! Simply click "Start Over" on the results page or navigate to the form
                                to update your profile and get new recommendations.
                            </p>
                        </Card>
                    </div>
                </section>

                {/* CTA */}
                <section className="about-cta">
                    <div className="cta-content glass-card">
                        <h2>Ready to Explore Your Career Path?</h2>
                        <p>Take our quick assessment and discover careers that match your interests.</p>
                        <Link to="/form">
                            <Button variant="primary" size="large">
                                Start Your Journey
                            </Button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
