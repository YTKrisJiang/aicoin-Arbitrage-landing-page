// 移动端菜单切换
document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // 如果是移动端菜单，点击后关闭菜单
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    
    // 图表动画
    const animateCharts = () => {
        const chartBars = document.querySelectorAll('.chart-bar');
        chartBars.forEach(bar => {
            const height = bar.style.height;
            bar.style.height = '0';
            setTimeout(() => {
                bar.style.height = height;
            }, 300);
        });
    };
    
    // 监听滚动，当图表进入视口时触发动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCharts();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const chartContainer = document.querySelector('.chart-container');
    if (chartContainer) {
        observer.observe(chartContainer);
    }
    
    // 表单提交处理
    const emailForm = document.querySelector('form');
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                alert('感谢您的订阅！下载链接已发送至您的邮箱：' + emailInput.value);
                emailInput.value = '';
            } else {
                alert('请输入有效的邮箱地址');
            }
        });
    }
});