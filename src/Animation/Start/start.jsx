import React, { useRef, useEffect } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef(null);
  let mouseX = 0;
  let mouseY = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const numStars = 80;
    const stars = [];

    // إنشاء النجوم
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
        opacity: Math.random(), // إضافة شفافية عشوائية للوميض
        twinkleSpeed: Math.random() * 0.05 + 0.02, // سرعة وميض مختلفة لكل نجم
      });
    }

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.beginPath();

        // إضافة التوهج
        ctx.shadowBlur = 45;  // التوهج
        ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';  // لون التوهج

        // تطبيق الشفافية على النجوم لتطبيق تأثير الوميض
        ctx.globalAlpha = Math.abs(Math.sin(star.opacity)); // يجعل الوميض متذبذبًا

        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
      });

      // إعادة الشفافية الافتراضية بعد رسم النجوم
      ctx.globalAlpha = 1;
    };

    const updateStars = () => {
      stars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;
        if (star.x < 0 || star.x > canvas.width) star.vx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.vy *= -1;

        // تحديث الشفافية للوميض
        star.opacity += star.twinkleSpeed;
        if (star.opacity > Math.PI * 2) star.opacity = 0; // إعادة تعيين الدورة
      });
    };

    const drawLines = () => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      stars.forEach((star) => {
        const dx = star.x - mouseX;
        const dy = star.y - mouseY;
        const distanceSquared = dx * dx + dy * dy;

        if (distanceSquared < 150 * 150) {
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }
      });
    };

    const animate = () => {
      drawStars();
      updateStars();
      drawLines();
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default StarryBackground;