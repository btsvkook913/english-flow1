English Flow
============

這是一個可直接部署到 GitHub Pages 的純前端英語學習網站。

檔案
----

index.html
網站主要頁面與結構。

style.css
網站介面與響應式手機版樣式。

script.js
英文單字、文法、聽力題目、練習系統、間隔複習、生字本、統計功能。

README.txt
網站使用與部署說明。


目前功能
--------

1. 小學程度
2. 國中程度
3. 高中程度
4. TOEIC 程度

5. 聽音拼寫
6. 英文發音
7. 句子聽寫
8. 文法選擇題
9. 生字本
10. 收藏單字
11. 今日複習
12. 間隔複習
13. 學習統計
14. 連續學習天數
15. 深色模式
16. 手機版介面
17. 電腦版介面


學習資料
--------

學習進度會使用瀏覽器 localStorage 儲存。

因此目前不需要資料庫。

不同手機、電腦之間不會自動同步學習進度。


語音
----

英文發音使用瀏覽器內建 Speech Synthesis。

不同裝置與瀏覽器可能使用不同的英文語音。


GitHub Pages
------------

將以下檔案放在 Repository 根目錄：

index.html
style.css
script.js
README.txt

GitHub：

Settings
→ Pages
→ Build and deployment
→ Source
→ Deploy from a branch
→ Branch: main
→ Folder: / (root)
→ Save


重要
----

index.html 必須位於 Repository 最外層。

正確：

english-flow/
├── index.html
├── style.css
├── script.js
└── README.txt


錯誤：

english-flow/
└── comekey_style/
    ├── index.html
    ├── style.css
    └── script.js


題庫
----

目前題庫為自行建立的英文學習內容。

沒有使用 ComeKey 的原始程式碼或原始題庫。

後續可以繼續擴充：

小學單字
國中單字
高中單字
TOEIC 單字
文法
聽力
閱讀
TOEIC Part 1
TOEIC Part 2
TOEIC Part 3
TOEIC Part 4
TOEIC Part 5
TOEIC Part 6
TOEIC Part 7
