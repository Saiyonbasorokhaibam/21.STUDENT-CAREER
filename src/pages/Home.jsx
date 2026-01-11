import { Link } from 'react-router-dom';
import Button from '../components/button/Button';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content fade-in">
                    <div className="hero-badge">
                        <span className="badge-icon">🚀</span>
                        <span>AI-Powered Career Guidance</span>
                    </div>

                    <h1 className="hero-title">
                        Discover Your <span className="gradient-text">Perfect Career</span> Path
                    </h1>

                    <p className="hero-subtitle">
                        Unlock your potential with our intelligent career guidance system.
                        Get personalized recommendations based on your interests, education,
                        and aspirations.
                    </p>

                    <div className="hero-cta">
                        <Link to="/form">
                            <Button variant="primary" size="large">
                                Start Your Journey
                            </Button>
                        </Link>
                        <Link to="/about">
                            <Button variant="secondary" size="large">
                                Learn More
                            </Button>
                        </Link>
                    </div>

                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Career Paths</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <span className="stat-number">6</span>
                            <span className="stat-label">Industry Sectors</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Personalized</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="visual-orb orb-1"></div>
                    <div className="visual-orb orb-2"></div>
                    <div className="visual-orb orb-3"></div>
                    <div className="visual-card card-1 slide-in">
                        <span className="card-emoji">💻</span>
                        <span>Technology</span>
                    </div>
                    <div className="visual-card card-2 slide-in" style={{ animationDelay: '0.2s' }}>
                        <span className="card-emoji">📊</span>
                        <span>Data Science</span>
                    </div>
                    <div className="visual-card card-3 slide-in" style={{ animationDelay: '0.4s' }}>
                        <span className="card-emoji">🎨</span>
                        <span>Design</span>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <h2 className="section-title">
                    How It <span className="gradient-text">Works</span>
                </h2>

                <div className="features-grid">
                    <div className="feature-card glass-card">
                        <div className="feature-number">01</div>
                        <div className="feature-icon">📝</div>
                        <h3>Share Your Profile</h3>
                        <p>Tell us about your education, interests, and career aspirations.</p>
                    </div>

                    <div className="feature-card glass-card">
                        <div className="feature-number">02</div>
                        <div className="feature-icon">🤖</div>
                        <h3>AI Analysis</h3>
                        <p>Our intelligent system analyzes your profile to find the best matches.</p>
                    </div>

                    <div className="feature-card glass-card">
                        <div className="feature-number">03</div>
                        <div className="feature-icon">🎯</div>
                        <h3>Get Recommendations</h3>
                        <p>Receive personalized career paths with actionable next steps.</p>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="industries">
                <h2 className="section-title">
                    Explore <span className="gradient-text">Industries</span>
                </h2>

                <div className="industries-grid">
                    {[
                        { icon: '💻', name: 'Technology', desc: 'Software, AI, Cloud' },
                        { icon: '🔬', name: 'Science', desc: 'Research, Biotech' },
                        { icon: '📈', name: 'Business', desc: 'Finance, Consulting' },
                        { icon: '🎨', name: 'Creative', desc: 'Design, Content' },
                        { icon: '🏥', name: 'Healthcare', desc: 'Medical, Therapy' },
                        { icon: '📚', name: 'Education', desc: 'Teaching, EdTech' }
                    ].map((industry, index) => (
                        <div
                            key={industry.name}
                            className="industry-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <span className="industry-icon">{industry.icon}</span>
                            <span className="industry-name">{industry.name}</span>
                            <span className="industry-desc">{industry.desc}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="cta-content glass-card">
                    <h2>Ready to Find Your Path?</h2>
                    <p>Take the first step towards your dream career today.</p>
                    <Link to="/form">
                        <Button variant="primary" size="large">
                            Get Started Free
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
