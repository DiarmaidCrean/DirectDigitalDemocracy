// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to current section in view
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.classList.add('mobile-menu-btn');
mobileMenuBtn.innerHTML = '☰';
document.querySelector('nav').appendChild(mobileMenuBtn);

mobileMenuBtn.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Voting System
const voteButtons = document.querySelectorAll('.vote-btn');
voteButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        voteButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        // Update progress bar (simulated)
        const progressBar = this.closest('.proposal-card').querySelector('.progress-bar');
        const progress = progressBar.querySelector(`.progress.${this.classList[1]}`);
        const currentWidth = parseInt(progress.style.width);
        progress.style.width = `${currentWidth + 10}%`;
    });
});

// Forum Interactions
const actionButtons = document.querySelectorAll('.action-btn');
actionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-thumbs-up')) {
            // Toggle like
            this.classList.toggle('liked');
            if (this.classList.contains('liked')) {
                icon.style.color = '#2563eb';
            } else {
                icon.style.color = '#6b7280';
            }
        }
    });
});

// Authentication Modal
const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');

function createAuthModal(type) {
    const modal = document.createElement('div');
    modal.className = 'auth-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>${type === 'login' ? 'Login' : 'Sign Up'}</h2>
            <form id="${type}-form">
                ${type === 'signup' ? '<input type="text" placeholder="Full Name" required>' : ''}
                <input type="email" placeholder="Email" required>
                <input type="password" placeholder="Password" required>
                <button type="submit">${type === 'login' ? 'Login' : 'Sign Up'}</button>
            </form>
            <button class="close-modal">×</button>
        </div>
    `;
    document.body.appendChild(modal);

    // Close modal
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });

    // Handle form submission
    modal.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically handle the authentication
        console.log(`${type} form submitted`);
        modal.remove();
    });
}

loginBtn.addEventListener('click', () => createAuthModal('login'));
signupBtn.addEventListener('click', () => createAuthModal('signup'));

// Dashboard Updates
function updateDashboard() {
    // Simulate real-time updates
    const activityFeed = document.querySelector('.activity-feed');
    const newActivity = document.createElement('div');
    newActivity.className = 'activity-item';
    newActivity.innerHTML = `
        <i class="fas fa-bell"></i>
        <span>New proposal available for voting</span>
        <span class="time">Just now</span>
    `;
    activityFeed.insertBefore(newActivity, activityFeed.firstChild);
}

// Simulate periodic updates
setInterval(updateDashboard, 30000); // Update every 30 seconds

// Add styles for new elements
const style = document.createElement('style');
style.textContent = `
    .auth-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal-content {
        background: white;
        padding: 2rem;
        border-radius: 0.5rem;
        position: relative;
        width: 100%;
        max-width: 400px;
    }

    .close-modal {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
    }

    .auth-modal form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
    }

    .auth-modal input {
        padding: 0.75rem;
        border: 1px solid #e5e7eb;
        border-radius: 0.5rem;
    }

    .auth-modal button[type="submit"] {
        background: #2563eb;
        color: white;
        padding: 0.75rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
    }

    .auth-modal button[type="submit"]:hover {
        background: #1d4ed8;
    }

    .mobile-menu-btn {
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        .mobile-menu-btn {
            display: block;
        }

        .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            padding: 1rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .nav-links.active {
            display: flex;
            flex-direction: column;
        }
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', function() {
    // Form submission handler
    const form = document.getElementById('feedback-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const influence = document.getElementById('influence').value;
            const email = document.getElementById('email').value;
            
            // Hide any previous messages
            document.getElementById('form-success').style.display = 'none';
            document.getElementById('form-error').style.display = 'none';
            
            // Disable the submit button while processing
            const submitButton = form.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.innerText = 'Submitting...';
            
            // Send the data to the API
            fetch('https://ddd-form-api-dc0c7b285f94.herokuapp.com/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    influence: influence,
                    email: email
                }),
            })
            .then(response => response.json())
            .then(data => {
                // Re-enable the submit button
                submitButton.disabled = false;
                submitButton.innerText = 'Submit';
                
                if (data.success) {
                    // Show success message
                    document.getElementById('form-success').style.display = 'block';
                    // Clear the form
                    form.reset();
                } else {
                    // Show error message
                    document.getElementById('form-error').style.display = 'block';
                    console.error('Form submission error:', data.message);
                }
            })
            .catch(error => {
                // Re-enable the submit button
                submitButton.disabled = false;
                submitButton.innerText = 'Submit';
                
                // Show error message
                document.getElementById('form-error').style.display = 'block';
                console.error('Form submission error:', error);
            });
        });
    }
}); 