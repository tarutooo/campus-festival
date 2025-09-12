<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AKB festival しおり</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.css">
    <link rel="stylesheet" href="campus festival site.css">
</head>
<body id="top">
    <!-- ロゴ表示画面 -->
    <div class="logo-overlay" id="logoOverlay">
        <div class="logo-container">
            <div class="logo-animation">
                <!-- ロゴ画像を表示 -->
                <img src="http://tarutoo.but.jp/キャンフェス2025 修正版透過.png" alt="学園祭ロゴ" class="logo-image" id="mainLogo"
                     style="background: none; border: none; padding: 0; max-width: 100%; height: auto; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15); border-radius: 15px;">
            </div>
            <div class="tap-instruction">
                <p>画面をタップしてスタート</p>
            </div>
        </div>
    </div>

    <!-- ヘッダー -->
    <header class="header">
        <div class="header-content">
            <div class="logo">
                <i class="fas fa-star"></i>
                <span>秋葉原キャンパスキャンフェス 2025</span>
            </div>
        </div>
        <nav class="nav" id="nav">
                        <ul class="nav-list">
                <li><a href="#events" class="nav-link">イベント</a></li>
                <li><a href="#schedule" class="nav-link">タイムスケジュール</a></li>
                <li><a href="#projects" class="nav-link">企画一覧</a></li>
                <li><a href="#shops" class="nav-link">出店・グルメ</a></li>
                <li><a href="#map" class="nav-link">会場マップ</a></li>
                <li><a href="#info" class="nav-link">お知らせ</a></li>
            </ul>
        </nav>
    </header>

    <!-- メインコンテンツ -->
    <main class="main">
        <!-- ヒーローセクション -->
        <section id="home" class="hero">
            <div class="hero-content">
                <h1 class="hero-title">秋葉原キャンパス<br>キャンフェス 2025</h1>
                <h2 class="hero-subtitle">笑顔が実る秋を届けよう</h2>
                <p class="hero-description">
                    開催日：2025年9月20日（土）<br>
                    時間：9:00〜16:00<br>
                    会場：N高等学校 秋葉原キャンパス
                </p>
            </div>
        </section>

        <!-- 目次セクション -->
        <section class="table-of-contents">
            <div class="container">
                <h2 class="section-title">目次</h2>
                <div class="toc-grid">
                    <a href="#events" class="toc-item">
                        <div class="toc-icon"></div>
                        <h3>ステージ企画一覧</h3>
                        <p>歌みた・ライブ・DJ</p>
                    </a>
                    <a href="#schedule" class="toc-item">
                        <div class="toc-icon"></div>
                        <h3>タイムスケジュール</h3>
                        <p>イベントの時間割</p>
                    </a>
                    <a href="#projects" class="toc-item">
                        <div class="toc-icon"></div>
                        <h3>企画一覧</h3>
                        <p>全ての企画情報</p>
                    </a>
                    <a href="#shops" class="toc-item">
                        <div class="toc-icon"></div>
                        <h3>飲食</h3>
                        <p>飲み物・お菓子など</p>
                    </a>
                    <a href="#map" class="toc-item">
                        <div class="toc-icon"></div>
                        <h3>会場マップ</h3>
                        <p>各エリアの詳細図</p>
                    </a>
                    <a href="#info" class="toc-item">
                        <div class="toc-icon"></div>
                        <h3>お知らせ・注意事項</h3>
                        <p>重要な情報</p>
                    </a>
                </div>
            </div>
        </section>

        <!-- イベントセクション -->
        <section id="events" class="events">
            <div class="container">
                <h2 class="section-title">ステージ企画一覧</h2>
                <div class="events-grid">
                    <div class="event-card">
                        <div class="event-icon"></div>
                        <h3 class="event-title">NSR歌謡祭</h3>
                        <p class="event-description">ステージ設置、およびアリーナ一部を使用した歌唱企画</p>
                        <div class="event-details">
                            <span class="location">ステージ</span>
                        </div>
                    </div>
                    
                    <div class="event-card">
                        <div class="event-icon"></div>
                        <h3 class="event-title">アリーナライブ</h3>
                        <p class="event-description">カラオケ風のMVの制作を依頼してモニターで上映します</p>
                        <div class="event-details">
                            <span class="location">ステージ</span>
                        </div>
                    </div>
                    
                    <div class="event-card">
                        <div class="event-icon"></div>
                        <h3 class="event-title">/≠0k</h3>
                        <p class="event-description">ステージ上で音楽を流し、DJをします</p>
                        <div class="event-details">
                            <span class="location">ステージ</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- タイムスケジュールセクション -->
        <section id="schedule" class="schedule">
            <div class="container">
                <h2 class="section-title">タイムスケジュール</h2>
                <div class="schedule-container">
                    <div class="schedule-timeline">
                        <div class="time-slot">
                            <div class="time">11:00~11:10</div>
                            <div class="schedule-content">
                                <h3>開会式</h3>
                                <span class="location">ステージ</span>
                            </div>
                        </div>
                        
                        <div class="time-slot">
                            <div class="time">11:10〜12:40</div>
                            <div class="schedule-content">
                                <h3>NSR歌謡祭</h3>
                                <span class="location">ステージ</span>
                            </div>
                        </div>
                        
                        <div class="time-slot">
                            <div class="time">12:40〜14:20</div>
                            <div class="schedule-content">
                                <h3>≠0k DJ</h3>
                                <span class="location">ステージ</span>
                            </div>
                        </div>
                        
                        <div class="time-slot">
                            <div class="time">14:20〜16:20</div>
                            <div class="schedule-content">
                                <h3>アリーナライブ</h3>
                                <span class="location">ステージ</span>
                            </div>
                        </div>
                        
                        <div class="time-slot">
                            <div class="time">16:20〜16:30</div>
                            <div class="schedule-content">
                                <h3>閉会式</h3>
                                <span class="location">ステージ</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="schedule-notes">
                        <h3>スケジュール注意事項</h3>
                        <ul>
                            <li>時間は予定です。進行状況により変更になる場合があります</li>
                            <li>配信は13:15〜13:45です</li>
                            <li>開場時間は10:30です</li>
                            <li>各企画の詳細は企画一覧をご確認ください</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- 企画一覧セクション -->
        <section id="projects" class="projects">
            <div class="container">
                <h2 class="section-title">企画一覧</h2>
                <div class="projects-container">
                    <!-- ここに企画一覧の内容を追加予定 -->
                    <p class="placeholder-text">追加しますいつか</p>
                </div>
            </div>
        </section>

        <!-- 出店・グルメセクション -->
        <section id="shops" class="shops">
            <div class="container">
                <h2 class="section-title">出店・グルメ</h2>
                <div class="shops-grid">
                    <div class="shop-card">
                        <div class="shop-image"></div>
                        <h3 class="shop-title">バヤリース オレンジ</h3>
                        <p class="shop-description"></p>
                        <div class="shop-price">金券一枚</div>
                    </div>
                    
                    <div class="shop-card">
                        <div class="shop-image"></div>
                        <h3 class="shop-title">すっきりアップル</h3>
                        <p class="shop-description"></p>
                        <div class="shop-price">金券一枚</div>
                    </div>
                    
                    <div class="shop-card">
                        <div class="shop-image"></div>
                        <h3 class="shop-title">ポテトフライ</h3>
                        <p class="shop-description"></p>
                        <div class="shop-price">金券一枚</div>
                    </div>
                    
                    <div class="shop-card">
                        <div class="shop-image"></div>
                        <h3 class="shop-title">カントリーマウム</h3>
                        <p class="shop-description"></p>
                        <div class="shop-price">金券一枚</div>
                    </div>
                    
                    <div class="shop-card">
                        <div class="shop-image"></div>
                        <h3 class="shop-title">ハイチュウ</h3>
                        <p class="shop-description"></p>
                        <div class="shop-price">金券一枚</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 会場マップセクション -->
        <section id="map" class="map">
            <div class="container">
                <h2 class="section-title">会場マップ</h2>
                <div class="map-container">
                    <!-- アリーナマップ -->
                    <div class="map-section">
                        <h3>アリーナ間取り図</h3>
                        <div class="map-image-container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 350" class="map-display fixed-size" alt="アリーナマップ">
                                <!-- 背景 -->
                                <rect width="420" height="350" fill="#f8f9fa" stroke="#dee2e6" stroke-width="2"/>
                                
                                <!-- アリーナ外枠 -->
                                <rect x="30" y="50" width="360" height="250" fill="none" stroke="#333" stroke-width="3"/>
                                
                                <!-- アリーナ 1階席 -->
                                <rect x="40" y="60" width="150" height="40" fill="none" stroke="#666" stroke-width="2"/>
                                <text x="115" y="85" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#333">1階席</text>
                                
                                <!-- アリーナ 2階席 -->
                                <rect x="240" y="60" width="140" height="40" fill="none" stroke="#666" stroke-width="2"/>
                                <text x="310" y="85" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#333">2階席</text>
                                
                                <!-- 観覧ゾーン想定 -->
                                <rect x="130" y="150" width="140" height="70" fill="none" stroke="#666" stroke-width="2"/>
                                <text x="200" y="185" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">観覧ゾーン想定</text>
                                
                                <!-- 天井部屋・受付 -->
                                <rect x="40" y="240" width="80" height="50" fill="none" stroke="#666" stroke-width="2"/>
                                <text x="80" y="265" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#333">天井部屋</text>
                                
                                <rect x="140" y="240" width="80" height="50" fill="none" stroke="#666" stroke-width="2"/>
                                <text x="180" y="265" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#333">受付</text>
                            </svg>
                        </div>
                      
                    </div>

                    <!-- 1階席マップ -->
                    <div class="map-section">
                        <h3>窓際間取り図（1階席）</h3>
                        <div class="map-image-container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 300" class="map-display fixed-size" alt="1階席マップ">
                                <!-- 背景 -->
                                <rect width="380" height="300" fill="#f8f9fa" stroke="#dee2e6" stroke-width="2"/>
                                
                                <!-- 1階外枠 -->
                                <rect x="15" y="30" width="350" height="250" fill="none" stroke="#333" stroke-width="3"/>
                                
                                <!-- 1階内部区画 -->
                                <rect x="25" y="40" width="80" height="60" fill="none" stroke="#666" stroke-width="2"/>
                                
                                <!-- 窓際（左側） -->
                                <text x="45" y="150" font-family="Arial, sans-serif" font-size="12" fill="#333" transform="rotate(-90 45,150)">窓際</text>
                            </svg>
                        </div>
                        
                    </div>

                    <!-- 2階席マップ -->
                    <div class="map-section">
                        <h3>窓際間取り図（2階席）</h3>
                        <div class="map-image-container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 250" class="map-display fixed-size" alt="2階席マップ">
                                <!-- 背景 -->
                                <rect width="480" height="250" fill="#f8f9fa" stroke="#dee2e6" stroke-width="2"/>
                                
                                <!-- 2階外枠 -->
                                <rect x="15" y="30" width="450" height="200" fill="none" stroke="#333" stroke-width="3"/>
                                
                                <!-- 2階左側小部屋 -->
                                <rect x="25" y="40" width="100" height="80" fill="none" stroke="#666" stroke-width="2"/>
                            </svg>
                        </div>
                    </div>

                    <!-- エリア説明セクション -->
                    <div class="map-areas-info">
                        <h3>会場エリア説明</h3>
                        <div class="areas-grid">
                            <div class="building-info">
                                <h4>アリーナ</h4>
                                <ul>
                                    <li>受付・案内所</li>
                                    <li>ステージ企画ブース</li>
                                    <li>体験企画、コスプレ企画</li>
                                    <li>観覧ゾーン</li>
                                </ul>
                            </div>
                            <div class="building-info">
                                <h4>一階席</h4>
                                <ul>
                                    <li>展示企画ブース</li>
                                </ul>
                            </div>
                            <div class="building-info">
                                <h4>二階席</h4>
                                <ul>
                                    <li>食事スペース</li>
                                    <li>飲食企画ブース</li>
                                    <li>休憩スペース</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- お知らせセクション -->
        <section id="info" class="info">
            <div class="container">
                <h2 class="section-title">お知らせ・注意事項</h2>
                <div class="info-cards">
                    <div class="info-card important">
                        <div class="info-icon"></div>
                        <h3>重要なお知らせ</h3>
                        <ul>
                            <li>SNSへの投稿はやめてください</li>
                            <li>飲食は飲食ブースでお願いします</li>
                            <li>何かトラブルがあった場合、mentorや実行委員にご相談ください</li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-icon"></div>
                        <h3>保護者様へ</h3>
                        <ul>
                            <li>zoomでキャンパスの様子を発信しているためぜひごらんください</li>
                            <li>zoomのコメントに目次があるので、ご活用してください</li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-icon"></div>
                        <h3>お支払いについて</h3>
                        <ul>
                            <li>支払いは金券のみとなっております</li>
                            <li>金券は受付にて交換できます</li>
                            <li>金券は一枚100円です</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <!-- フッター -->
    <div class="quick-links" style="margin-bottom: 32px; text-align: center;">
        <a href="#top" class="quick-link">
            <i class="fas fa-arrow-up"></i>
            トップへ戻る
        </a>
    </div>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="footer-logo">
                        <i class="fas fa-star"></i>
                        <span>秋葉原キャンパス キャンフェス2025</span>
                    </div>
                    <p class="footer-description">笑顔が実る秋を届けよう</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 秋葉原キャンパス キャンパスフェスティバル実行委員</p>
            </div>
        </div>
    </footer>

    <!-- スクリプト -->
    <script src="campus festival site.js"></script>
    
    <!-- ロゴオーバーレイ制御 -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const logoOverlay = document.getElementById('logoOverlay');
            
            if (!logoOverlay) return;
            
            function closeLogoOverlay() {
                logoOverlay.classList.add('hidden');
                setTimeout(() => {
                    logoOverlay.style.display = 'none';
                }, 800);
            }
            
            // クリック/タップで閉じる
            logoOverlay.addEventListener('click', function(e) {
                e.preventDefault();
                closeLogoOverlay();
            });
            
            // タッチイベント（モバイル対応）
            logoOverlay.addEventListener('touchend', function(e) {
                e.preventDefault();
                closeLogoOverlay();
            });
            
            // キーボードでも閉じる（Enterキーまたはスペースキー）
            document.addEventListener('keydown', function(e) {
                if (logoOverlay.style.display !== 'none' && !logoOverlay.classList.contains('hidden')) {
                    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
                        e.preventDefault();
                        closeLogoOverlay();
                    }
                }
            });
            
            // 初期状態でオーバーレイを表示
            logoOverlay.style.display = 'flex';
        });
    </script>
</body>
</html>
