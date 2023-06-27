import logo from '../assets/img/VectorLogoNooblar.svg'
import overwhelmedStudent from '../assets/img/landing/overwhelmedStudent.jpg'
import graduatedStudents from '../assets/img/landing/graduatedStudents.jpg'
import tutoringSession from '../assets/img/landing/tutoringSession.jpg'
export default function LandingPage({ }) {
    return (
        <div className='landing'>
            <div className="landing-header landing-section">
                <h2> Welcome to Nooblar: <br /> Your Path from Noob to Scholar!</h2>
                <div className='bind-img-p'>
                    <img src={tutoringSession} alt="A student seems to enjoy his session with a you professional" />
                    <p>Nooblar is the ultimate tutoring app that connects you with qualified tutors to unlock your potential.</p>
                </div>
                {/* <p style={{ backgroundImage: `url(${tutoringSession})` }}>Nooblar is the ultimate tutoring app that connects you with qualified tutors to unlock your potential.</p> */}
            </div>

            <div className="landing-feature landing-section">
                <h3>Features</h3>
                <div className='conditional-flex'>
                    <div className='card smolcard one'>
                        <h5>Simple Appointment Management</h5>
                        <p> Effortlessly schedule tutoring sessions with your preferred tutors. Stay organized with our intuitive agenda feature.</p>
                    </div>
                    <div className='card smolcard two'>
                        <h5>Real-time Notifications</h5>
                        <p>Receive instant updates on session confirmations, reminders, and important announcements to stay on top of your learning.</p>
                    </div>
                    <div className='card smolcard three'>
                        <h5>Seamless Zoom Integration</h5>
                        <p>Connect with tutors through high-quality online sessions using our integrated Zoom functionality. No hassle, just learning.</p>
                    </div>
                </div>
            </div>

            <div className="landing-hero landing-section conditional-flex">
                <div>
                    <h4>Elevate Your Learning Experience</h4>
                    <div className='bind-img-p'>
                        <p>Tired of feeling lost in a sea of textbooks? Say goodbye to confusion and frustration!</p>
                        <img src={overwhelmedStudent} alt="A student surrounded by books, looking overwhelmed" />
                    </div>
                </div>
                <div>
                    <h4>Connect with Expert Tutors</h4>
                    <div className='bind-img-p'>
                        <p>Seamless Platform for Scheduling Online or Offline Tutoring with experts tutors!</p>
                        <img src={graduatedStudents} alt="Illustration of a student with a graduation cap, holding a smartphone" />
                    </div>
                </div>
            </div>



            <div className="landing-testimonials landing-section">
                <h3>Join Thousands of Students and Tutors</h3>
                <p className='card bigcard'>
                    <em>
                        "Nooblar has been a game-changer for my tutoring business. It's so easy to connect with students and provide quality sessions."
                    </em>
                    Emily, Math Tutor
                </p>
                <p className='card bigcard'>
                    <em>
                        "Noolar has been a game-changer for me. I saw my grades soar, my focus and interest in class return, and my confidence grew."
                    </em>
                    Sarah, 10th grade student
                </p>
            </div>

            <div className="landing-call-to-action landing-section">
                <h3>Ready to Embark on Your Journey?</h3>
                <p>Start your transformation from noob to scholar today! Sign up for Nooblar and connect with top-notch tutors.</p>
            </div>

            <div className="landing-benefits landing-section">
                <h3>Benefits</h3>
                <div className='conditional-flex'>
                    <div className='card smolcard'>
                        <h5>Vast Tutor Network</h5>
                        <p>Choose from a wide range of tutors, including teachers, graduates, and industry professionals, ensuring expertise in every subject.</p>
                    </div>
                    <div className='card smolcard'>
                        <h5>Flexible Learning Options</h5>
                        <p>Seamlessly switch between in-person and online sessions based on your preferences and availability.</p>
                    </div>
                </div>
            </div>

            <div className="landing-footer landing-section">
                <h3>Ready to Start Your Journey?</h3>
                <p>Sign up for Nooblar now and embark on your path from noob to scholar!</p>
                <input type="button" value="Sign Up Now" className='main_color_btn' onClick={() => { window.location.href = "/registration" }} />
            </div>

            <div className="landing-outro landing-section">
                <div>
                    <h2>Nooblar </h2>
                    <h4>Empowering Students, Connecting Minds</h4>
                    <p>Unlock your academic potential, connect with expert tutors, and thrive with Nooblar.</p>
                </div>
                <ul>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/tos">Terms of Service</a></li>
                    <li><a href="/sources">Sources</a></li>
                </ul>
                <a href="/landing"><img src={logo} alt="nooblar logo" className='landing-logo' /></a>
            </div>




        </div>
    );
}