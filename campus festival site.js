// 学園祭しおり専用JavaScript

// DOM要素の取得
let menuToggle, nav, dayTabs, daySchedules, navLinks;

// メニュートグル機能
let menuOpen = false;

function toggleMenu() {
    menuOpen = !menuOpen;
       
    // ナビゲーションリンクにスムーズスクロール追加
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            smoothScrollTo(targetId);
            
            // ページ履歴に追加
            history.pushState(null, null, `#${targetId}`);
        });
    });
    
    // 会場マップ画像のモーダル表示機能
    setupMapModal();
    
    // 読み込み完了
    setTimeout(() => {
        showNotification('キャンフェス情報を読み込みました', 'success');
    }, 500);
});

// メニュートグル機能
function toggleMenu() {
    menuOpen = !menuOpen;
    nav.classList.toggle('active', menuOpen);
    menuToggle.innerHTML = menuOpen ? '✕' : '☰';
    
    // メニューが開いているときのアイコン変更とアニメーション
    if (menuOpen) {
        menuToggle.style.transform = 'rotate(180deg)';
    } else {
        menuToggle.style.transform = 'rotate(0deg)';
    }
}

// タイムテーブル機能
function switchDay(selectedTab, dayNumber) {
    // 全てのタブとスケジュールを非アクティブにする
    dayTabs.forEach(tab => tab.classList.remove('active'));
    daySchedules.forEach(schedule => {
        schedule.classList.remove('active');
        schedule.style.opacity = '0';
    });
    
    // 選択されたタブをアクティブにする
    selectedTab.classList.add('active');
    
    // 選択された日のスケジュールを表示
    setTimeout(() => {
        const targetSchedule = document.getElementById(`day${dayNumber}`);
        if (targetSchedule) {
            targetSchedule.classList.add('active');
            targetSchedule.style.opacity = '1';
        }
    }, 150);
    
    // タブクリックのフィードバックアニメーション
    selectedTab.style.transform = 'scale(0.95)';
    setTimeout(() => {
        selectedTab.style.transform = 'scale(1)';
    }, 150);
}

// スムーズスクロール機能
function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// 通知機能
function showNotification(message, type = 'info') {
    // 既存の通知があれば削除
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // 通知のスタイル
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '10px',
        color: 'white',
        fontWeight: 'bold',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px',
        wordWrap: 'break-word'
    });
    
    // タイプ別の背景色
    const backgrounds = {
        success: 'linear-gradient(45deg, #27ae60, #2ecc71)',
        error: 'linear-gradient(45deg, #e74c3c, #c0392b)',
        info: 'linear-gradient(45deg, #3498db, #2980b9)',
        warning: 'linear-gradient(45deg, #f39c12, #e67e22)'
    };
    
    notification.style.background = backgrounds[type] || backgrounds.info;
    
    document.body.appendChild(notification);
    
    // アニメーション開始
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 3秒後に自動削除
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
    
    // クリックで削除
    notification.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    });
}

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    console.log('学園祭しおり読み込み完了');
    
    // DOM要素の取得
    menuToggle = document.getElementById('menuToggle');
    nav = document.getElementById('nav');
    dayTabs = document.querySelectorAll('.day-tab');
    daySchedules = document.querySelectorAll('.day-schedule');
    navLinks = document.querySelectorAll('.nav-link');
    
    // メニュー機能の設定
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', toggleMenu);
        
        // ナビゲーションリンクのクリック時にメニューを閉じる
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (menuOpen) {
                    toggleMenu();
                }
            });
        });
        
        // メニュー外をクリックした時に閉じる
        document.addEventListener('click', (e) => {
            if (menuOpen && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
                toggleMenu();
            }
        });
    }
    
    // タイムテーブルタブの設定
    dayTabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const dayNumber = index + 1;
            switchDay(tab, dayNumber);
            
            // ローカルストレージに選択状態を保存
            localStorage.setItem('selectedDay', dayNumber);
        });
    });
    
    // ページ読み込み時に前回選択した日を復元
    const savedDay = localStorage.getItem('selectedDay') || '1';
    const savedDayTab = dayTabs[parseInt(savedDay) - 1];
    if (savedDayTab) {
        switchDay(savedDayTab, parseInt(savedDay));
    }
    
    // ナビゲーションリンクにスムーズスクロール追加
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            smoothScrollTo(targetId);
            
            // ページ履歴に追加
            history.pushState(null, null, `#${targetId}`);
        });
    });
    
    // 読み込み完了
    setTimeout(() => {
        showNotification('キャンフェス情報を読み込みました', 'success');
    }, 500);
});

// ユーティリティ関数
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // 既存の通知があれば削除
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // 通知要素の作成
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // スタイルの適用
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        left: 20px;
        right: 20px;
        z-index: 10000;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: 600;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        transform: translateY(-100px);
        opacity: 0;
        transition: all 0.3s ease;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    
    document.body.appendChild(notification);
    
    // アニメーション
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    }, 100);
    
    // 自動削除
    setTimeout(() => {
        notification.style.transform = 'translateY(-100px)';
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
    
    // クリックで削除
    notification.addEventListener('click', () => {
        notification.style.transform = 'translateY(-100px)';
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
}

// デバッグ用の関数
function logDeviceInfo() {
    console.log('Device Info:', {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screen: {
            width: screen.width,
            height: screen.height,
            availWidth: screen.availWidth,
            availHeight: screen.availHeight,
            colorDepth: screen.colorDepth
        },
        viewport: {
            width: window.innerWidth,
            height: window.innerHeight
        },
        pixelRatio: window.devicePixelRatio,
        orientation: screen.orientation ? screen.orientation.angle : 'unknown'
    });
}

// 開発環境でのデバッグ情報表示
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    logDeviceInfo();
    
    // デバッグパネルの表示
    window.addEventListener('load', function() {
        setTimeout(() => {
            console.log('Mobile Site Debug Mode Enabled');
        }, 1000);
    });
}

// パフォーマンス測定
window.addEventListener('load', function() {
    if ('performance' in window) {
        const perfData = performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page Load Time: ${pageLoadTime}ms`);
    }
});

// エラーハンドリング
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    showNotification('エラーが発生しました', 'error');
});

// 未処理のPromise拒否をキャッチ
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled Promise Rejection:', e.reason);
    e.preventDefault();
});
