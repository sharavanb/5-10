// 获取公司名称的第一个单词或首字母
function getLogoText() {
    // 从页面标题中获取公司名称（标题格式：公司名字 - Smart Rehabilitation Solutions）
    const companyName = document.title.split('-')[0].trim();
    
    // 如果公司名称包含空格，返回第一个单词
    // 否则返回首字母
    const words = companyName.split(' ');
    return words.length > 1 ? words[0] : companyName.charAt(0);
}

// 生成随机颜色
function getRandomColor() {
    const colors = [
        '#FF6B6B', // 红色
        '#4ECDC4', // 青色
        '#45B7D1', // 蓝色
        '#96CEB4', // 绿色
        '#FFEEAD', // 黄色
        '#D4A5A5', // 粉色
        '#9B59B6'  // 紫色
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// 更新所有logo元素
function updateLogoElements() {
    const logoText = getLogoText();
    const color = getRandomColor();
    
    // 更新主logo
    const logoContainer = document.querySelector('.logo-container');
    if (logoContainer) {
        logoContainer.innerHTML = `<div class="text-logo" style="color: ${color}">${logoText}</div>`;
    }
    
    // 更新页脚logo
    const footerLogo = document.querySelector('.footer-logo');
    if (footerLogo) {
        footerLogo.outerHTML = `<div class="text-logo footer-text-logo" style="color: ${color}">${logoText}</div>`;
    }
    
    // 更新favicon
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/svg+xml';
    favicon.href = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50%" x="50%" dominant-baseline="middle" text-anchor="middle" font-size="80" fill="${encodeURIComponent(color)}">${logoText}</text></svg>`;
    
    // 移除旧的favicon
    const existingFavicon = document.querySelector('link[rel="icon"]');
    if (existingFavicon) {
        existingFavicon.remove();
    }
    document.head.appendChild(favicon);
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', updateLogoElements); 