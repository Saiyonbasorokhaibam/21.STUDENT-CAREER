import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button/Button';
import './Form.css';

const Form = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        educationLevel: '',
        interests: [],
        subjects: '',
        location: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const educationOptions = [
        { value: 'high-school', label: 'High School' },
        { value: 'undergraduate', label: 'Undergraduate (Bachelor\'s)' },
        { value: 'graduate', label: 'Graduate (Master\'s/Ph.D.)' },
        { value: 'professional', label: 'Working Professional' }
    ];

    const interestOptions = [
        { value: 'technology', label: 'Technology', icon: '💻' },
        { value: 'science', label: 'Science', icon: '🔬' },
        { value: 'business', label: 'Business', icon: '📈' },
        { value: 'creative', label: 'Creative & Design', icon: '🎨' },
        { value: 'healthcare', label: 'Healthcare', icon: '🏥' },
        { value: 'education', label: 'Education', icon: '📚' }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleInterestToggle = (interest) => {
        setFormData(prev => {
            const interests = prev.interests.includes(interest)
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest];
            return { ...prev, interests };
        });
        if (errors.interests) {
            setErrors(prev => ({ ...prev, interests: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.educationLevel) {
            newErrors.educationLevel = 'Please select your education level';
        }

        if (formData.interests.length === 0) {
            newErrors.interests = 'Please select at least one area of interest';
        }

        if (!formData.subjects.trim()) {
            newErrors.subjects = 'Please enter your favorite subjects or skills';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Save to localStorage
        localStorage.setItem('careerFormData', JSON.stringify(formData));

        // Small delay for UX
        setTimeout(() => {
            navigate('/result');
        }, 500);
    };

    return (
        <div className="form-page fade-in">
            <div className="form-container">
                <div className="form-header">
                    <h1>Tell Us About <span className="gradient-text">Yourself</span></h1>
                    <p>Share your background and interests to get personalized career recommendations.</p>
                </div>

                <form onSubmit={handleSubmit} className="career-form glass-card">
                    {/* Education Level */}
                    <div className="form-group">
                        <label className="form-label">
                            <span className="label-icon">🎓</span>
                            What is your current education level?
                        </label>
                        <select
                            name="educationLevel"
                            value={formData.educationLevel}
                            onChange={handleChange}
                            className={`form-select ${errors.educationLevel ? 'error' : ''}`}
                        >
                            <option value="">Select your education level</option>
                            {educationOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        {errors.educationLevel && (
                            <span className="error-message">{errors.educationLevel}</span>
                        )}
                    </div>

                    {/* Areas of Interest */}
                    <div className="form-group">
                        <label className="form-label">
                            <span className="label-icon">✨</span>
                            What areas interest you? (Select all that apply)
                        </label>
                        <div className="interest-grid">
                            {interestOptions.map(interest => (
                                <button
                                    key={interest.value}
                                    type="button"
                                    className={`interest-card ${formData.interests.includes(interest.value) ? 'selected' : ''}`}
                                    onClick={() => handleInterestToggle(interest.value)}
                                >
                                    <span className="interest-icon">{interest.icon}</span>
                                    <span className="interest-label">{interest.label}</span>
                                    {formData.interests.includes(interest.value) && (
                                        <span className="check-mark">✓</span>
                                    )}
                                </button>
                            ))}
                        </div>
                        {errors.interests && (
                            <span className="error-message">{errors.interests}</span>
                        )}
                    </div>

                    {/* Favorite Subjects/Skills */}
                    <div className="form-group">
                        <label className="form-label">
                            <span className="label-icon">📚</span>
                            What are your favorite subjects or skills?
                        </label>
                        <textarea
                            name="subjects"
                            value={formData.subjects}
                            onChange={handleChange}
                            className={`form-textarea ${errors.subjects ? 'error' : ''}`}
                            placeholder="e.g., Mathematics, Programming, Writing, Problem-solving, Communication..."
                            rows={4}
                        />
                        {errors.subjects && (
                            <span className="error-message">{errors.subjects}</span>
                        )}
                    </div>

                    {/* Location */}
                    <div className="form-group">
                        <label className="form-label">
                            <span className="label-icon">📍</span>
                            Where are you located? (Optional)
                        </label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="e.g., New York, USA or Remote"
                        />
                        <span className="helper-text">This helps us provide location-specific career insights.</span>
                    </div>

                    {/* Submit Button */}
                    <div className="form-actions">
                        <Button
                            type="submit"
                            variant="primary"
                            size="large"
                            fullWidth
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner-small"></span>
                                    Analyzing...
                                </>
                            ) : (
                                'Get Career Recommendations'
                            )}
                        </Button>
                    </div>
                </form>

                <div className="form-footer">
                    <p>🔒 Your information is stored locally and never shared.</p>
                </div>
            </div>
        </div>
    );
};

export default Form;
