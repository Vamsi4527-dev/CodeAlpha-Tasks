const texts = ["Full Stack Developer", "AI & Data Science Student", "Problem Solver", "Tech Enthusiast"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typewriterElement = document.getElementById('typewriter');

        function typeWriter() {
            const currentText = texts[textIndex];
            if (isDeleting) {
                typewriterElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => isDeleting = true, 1500);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
            const typingSpeed = isDeleting ? 75:100;
            setTimeout(typeWriter, typingSpeed);
        }

        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(typeWriter, 1000);
        });