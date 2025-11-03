// 动态加载公共组件
function loadComponents() {
    // 加载页脚组件
    fetch('assets/components.html')
        .then(response => response.text())
        .then(html => {
            // 将组件内容插入到页面中
            document.body.insertAdjacentHTML('beforeend', html);
        })
        .catch(error => {
            console.error('Error loading components:', error);
        });
}

// 在DOM加载完成后加载组件
document.addEventListener('DOMContentLoaded', function() {
    loadComponents();
});
