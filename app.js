/**
 * Quantum Wellness Platform 
 * Core Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       Routing (SPA Logic)
       ========================================================================== */
    const routes = ['home', 'about', 'services', 'assessment', 'dashboard', 'appointment', 'profile', 'blog'];
    
    function navigateToHash() {
        let hash = window.location.hash.replace('#', '') || 'home';
        
        // Validation
        if (!routes.includes(hash)) hash = 'home';

        // Update active section
        document.querySelectorAll('.page-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(`section-${hash}`).classList.add('active');

        // Update Nav Links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${hash}`) {
                link.classList.add('active');
            }
        });

        window.scrollTo(0, 0);

        // Specific Page Init Logic
        if (hash === 'dashboard') {
            initDashboardCharts();
        }
        if (hash === 'home') {
            animateStats();
        }
    }

    // Listen for URL changes
    window.addEventListener('hashchange', navigateToHash);

    // Initial Routing Load
    navigateToHash();


    /* ==========================================================================
       Navbar Scroll Effect
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* ==========================================================================
       Mobile Menu Toggle (Simple Implementation)
       ========================================================================== */
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    mobileToggle.addEventListener('click', () => {
        if(navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'var(--glass-bg)';
            navLinks.style.backdropFilter = 'blur(16px)';
            navLinks.style.padding = '1rem 2rem';
            navLinks.style.gap = '1rem';
        }
    });


    /* ==========================================================================
       Home Page Animations
       ========================================================================== */
    function animateStats() {
        const assessmentEl = document.getElementById('stat-assessments');
        if(!assessmentEl) return;
        
        let start = 0;
        const end = 10452; // Simulated number
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / end));
        const increment = Math.max(1, Math.floor(end / 100)); // larger increment for speed
        
        let timer = setInterval(function() {
            start += increment;
            if(start >= end) {
                assessmentEl.innerText = end.toLocaleString() + '+';
                clearInterval(timer);
            } else {
                assessmentEl.innerText = start.toLocaleString();
            }
        }, 20);
    }

    /* ==========================================================================
       Assessment Form Multi-Step Logic
       ========================================================================== */
    const steps = document.querySelectorAll('.step');
    const nextBtns = document.querySelectorAll('.next-btn');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const progressBar = document.getElementById('assessmentProgress');
    const currentStepText = document.getElementById('currentStepText');
    const assessmentForm = document.getElementById('assessmentForm');

    let currentStep = 0;

    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentStep < steps.length - 1) {
                steps[currentStep].classList.remove('active');
                currentStep++;
                steps[currentStep].classList.add('active');
                updateProgress();
            }
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentStep > 0) {
                steps[currentStep].classList.remove('active');
                currentStep--;
                steps[currentStep].classList.add('active');
                updateProgress();
            }
        });
    });

    function updateProgress() {
        const percent = ((currentStep + 1) / steps.length) * 100;
        progressBar.style.width = `${percent}%`;
        currentStepText.textContent = currentStep + 1;
    }

    /* Form Submission Logic */
    assessmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate loading
        const subBtn = assessmentForm.querySelector('button[type="submit"]');
        const ogText = subBtn.innerHTML;
        subBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Analyzing Energy...';
        subBtn.disabled = true;

        setTimeout(() => {
            // Generate simulated scores
            // A realistic application would calculate this based on form values
            const baseScore = Math.floor(Math.random() * (95 - 65 + 1)) + 65;
            
            const results = {
                overall: baseScore,
                physical: baseScore > 80 ? baseScore - Math.floor(Math.random() * 10) : baseScore + Math.floor(Math.random() * 5),
                mental: baseScore > 80 ? baseScore - Math.floor(Math.random() * 10) : baseScore + Math.floor(Math.random() * 5),
                emotional: baseScore > 80 ? baseScore - Math.floor(Math.random() * 10) : baseScore + Math.floor(Math.random() * 5)
            };

            // Save to localStorage for Dashboard retrieval
            localStorage.setItem('latestAssessment', JSON.stringify(results));
            
            // Redirect to dashboard
            window.location.hash = 'dashboard';
            
            // Reset state
            subBtn.innerHTML = ogText;
            subBtn.disabled = false;
            steps[currentStep].classList.remove('active');
            currentStep = 0;
            steps[currentStep].classList.add('active');
            updateProgress();
            assessmentForm.reset();
            
        }, 1500); // 1.5s simulated delay
    });


    /* ==========================================================================
       Dashboard Charts (Chart.js)
       ========================================================================== */
    let gaugeChartInstance = null;
    let barChartInstance = null;

    function initDashboardCharts() {
        // Retrieve Data from localStorage or use defaults
        const rawData = localStorage.getItem('latestAssessment');
        let data = rawData ? JSON.parse(rawData) : {
            overall: 78,
            physical: 82,
            mental: 68,
            emotional: 74
        };

        // Update UI Number
        document.getElementById('finalScoreDisplay').textContent = data.overall;

        // 1. Setup Gauge Chart (Donut)
        const ctxGauge = document.getElementById('gaugeChart');
        if(ctxGauge) {
            if(gaugeChartInstance) gaugeChartInstance.destroy();
            
            // Determine color based on score
            let color = '#10b981'; // Green
            if(data.overall < 70) color = '#f59e0b'; // Warning
            if(data.overall < 50) color = '#ef4444'; // Danger

            gaugeChartInstance = new Chart(ctxGauge, {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [data.overall, 100 - data.overall],
                        backgroundColor: [color, '#e2e8f0'],
                        borderWidth: 0,
                        cutout: '80%',
                        circumference: 270,
                        rotation: 225
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { tooltip: { enabled: false }, legend: { display: false } }
                }
            });
        }

        // 2. Setup Bar Chart
        const ctxBar = document.getElementById('barChart');
        if(ctxBar) {
            if(barChartInstance) barChartInstance.destroy();
            
            barChartInstance = new Chart(ctxBar, {
                type: 'bar',
                data: {
                    labels: ['Physical Base', 'Mental Load', 'Emotional Resonance'],
                    datasets: [{
                        label: 'Index Score',
                        data: [data.physical, data.mental, data.emotional],
                        backgroundColor: [
                            'rgba(16, 185, 129, 0.7)',  // Green
                            'rgba(59, 130, 246, 0.7)',  // Blue
                            'rgba(251, 191, 36, 0.7)'   // Gold
                        ],
                        borderRadius: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            grid: { color: 'rgba(0,0,0,0.05)' }
                        },
                        x: {
                            grid: { display: false }
                        }
                    },
                    plugins: { legend: { display: false } }
                }
            });
        }

        // 3. Populate Recommendations Engine
        populateRecommendations(data);
    }

    function populateRecommendations(scores) {
        const grid = document.getElementById('recommendationsGrid');
        if(!grid) return;
        
        let html = '';

        // Physical Rec based on score
        if(scores.physical > 80) {
            html += `<div class="rec-card fade-in-up" style="border-color: #10b981;">
                        <i class="fa-solid fa-apple-whole text-accent mb-2 fa-2x"></i>
                        <h3>Maintain Rhythm</h3>
                        <p>Your physical metrics are optimal. Continue prioritizing 7-9 hours of sleep and current macro-nutrient balance.</p>
                     </div>`;
        } else {
            html += `<div class="rec-card fade-in-up" style="border-color: #f59e0b;">
                        <i class="fa-solid fa-mug-hot text-accent mb-2 fa-2x"></i>
                        <h3>Ayurvedic Adjustments</h3>
                        <p>Introduce warm, spiced teas (ginger, cumin) post-meals to combat sluggish digestion. Increase Zone 2 cardio.</p>
                     </div>`;
        }

        // Mental Rec
        if(scores.mental > 75) {
            html += `<div class="rec-card fade-in-up delay-1" style="border-color: #3b82f6;">
                        <i class="fa-solid fa-brain text-accent mb-2 fa-2x"></i>
                        <h3>Cognitive Peak</h3>
                        <p>Mental load is well managed. Use this high-focus period for deep work.</p>
                     </div>`;
        } else {
            html += `<div class="rec-card fade-in-up delay-1" style="border-color: #f59e0b;">
                        <i class="fa-solid fa-headphones text-accent mb-2 fa-2x"></i>
                        <h3>Sensory Deprivation</h3>
                        <p>Your stress baseline is slightly elevated. Implement 15 mins of non-sleep deep rest (NSDR) mid-day to reset nervous system.</p>
                     </div>`;
        }

        // Emotional/Energy Rec
        html += `<div class="rec-card fade-in-up delay-2" style="border-color: #8b5cf6;">
                    <i class="fa-solid fa-hand-holding-heart text-accent mb-2 fa-2x"></i>
                    <h3>Energy Meridian</h3>
                    <p>Acupressure mapping suggests minor tension in the pericardium meridian. Practice daily breathwork (4-7-8 method).</p>
                 </div>`;

        grid.innerHTML = html;
    }


    /* ==========================================================================
       Appointment Booking Form
       ========================================================================== */
    const bookingForm = document.getElementById('bookingForm');
    const bookingSuccess = document.getElementById('bookingSuccess');

    if(bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            bookingForm.style.display = 'none';
            bookingSuccess.style.display = 'block';
            bookingSuccess.classList.add('fade-in');
        });
    }

    /* ==========================================================================
       Blog Modal Handling
       ========================================================================== */
    window.openModal = function(element) {
        const modal = document.getElementById('blogModal');
        const card = element.closest('.blog-card');
        
        // Extract data from the card
        const tag = card.querySelector('.blog-tag').textContent;
        const time = card.querySelector('.read-time').innerHTML;
        const title = card.querySelector('h3').textContent;
        
        // Populate modal
        document.getElementById('modalTag').textContent = tag;
        document.getElementById('modalTime').innerHTML = time;
        document.getElementById('modalTitle').textContent = title;
        
        // Show modal and disable background scroll
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

    window.closeModal = function() {
        const modal = document.getElementById('blogModal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // restore scroll
    };

});
