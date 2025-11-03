// 创建背景粒子效果
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // 随机属性
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const opacity = Math.random() * 0.5 + 0.1;
        const animationDelay = Math.random() * 20;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.opacity = opacity;
        particle.style.animationDelay = `${animationDelay}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// 联系表单处理
function setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// 打字机效果
function setupTypewriter() {
    const typewriterElement1 = document.getElementById('typewriter1');
    const typewriterElement2 = document.getElementById('typewriter2');
    
    if (!typewriterElement1 || !typewriterElement2) return;
    
    const text1 = "Hello! I'm Ghz, passionate about exploring the intersection of semiconductors, physics and computer science.";
    const text2 = "Here I share my learning journey, projects, and thoughts on various topics.";
    
    let i = 0;
    let j = 0;
    const speed = 70; // 打字速度，单位毫秒
    
    function typeWriter1() {
        if (i < text1.length) {
            typewriterElement1.innerHTML += text1.charAt(i);
            i++;
            setTimeout(typeWriter1, speed);
        } else {
            // 第一段打字完成，移除第一段的光标，添加第二段的光标
            typewriterElement1.classList.remove('active');
            typewriterElement1.classList.add('finished');
            typewriterElement2.classList.add('active');
            
            // 开始第二段打字
            setTimeout(typeWriter2, 500);
        }
    }
    
    function typeWriter2() {
        if (j < text2.length) {
            typewriterElement2.innerHTML += text2.charAt(j);
            j++;
            setTimeout(typeWriter2, speed);
        } else {
            // 第二段打字完成，移除光标
            typewriterElement2.classList.remove('active');
            typewriterElement2.classList.add('finished');
        }
    }
    
    // 延迟启动打字效果，让页面先加载
    setTimeout(typeWriter1, 1000);
}

// 平滑滚动效果
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 初始化所有功能
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    setupContactForm();
    setupTypewriter();
    setupSmoothScroll();
});
