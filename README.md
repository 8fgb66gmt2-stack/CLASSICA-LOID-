# CLASSICA：LOID ― 薔薇の棺と、愛の旋律 ―

架空のオリジナルTVアニメーション企画のための、公式サイト風ファンメイド・ウェブサイトです。

## GitHub Pages
- 公開ブランチ：`main`
- 公開ディレクトリ：リポジトリルート（`/`）
- ビルド方式：GitHub Pages / Deploy from a branch
- `.nojekyll` 配置済み

GitHub の **Settings → Pages → Build and deployment** で Source を **Deploy from a branch**、Branch を **main / (root)** に設定してください。

## Site map
- `index.html` — TOP
- `introduction/index.html` — INTRODUCTION
- `story/index.html` — STORY / 24話エピソード枠
- `character/index.html` — CHARACTER INDEX
- `character/*/index.html` — 主要人物8名の個別プロフィール
- `music/index.html` — MUSIC ARCHIVE / MUSEK
- `staff/index.html` — STAFF & CAST（候補・起用案）
- `onair/index.html` — ON AIR
- `news/index.html` — NEWS
- `special/index.html` — SPECIAL
- `archive/index.html` — 音樂を手掛かりにしたARG第一段階
- `404.html` — Not Found

## Assets and data
- `assets/css/style.css` — 共通デザイン・レスポンシブ・アクセシビリティ
- `assets/js/main.js` — ナビゲーション、ニュース読込、ARG照合
- `assets/images/` — オリジナル装飾SVG
- `assets/data/characters.json` — キャラクター管理データ
- `assets/data/episodes.json` — 全24話の管理枠
- `assets/data/music.json` — 音樂担当案
- `assets/data/news.json` — ニュース（初期状態は空）
- `assets/data/special.json` — SPECIAL管理データ

各ページは静的HTMLを持つため、JSON読込やJavaScriptに失敗しても基本情報を閲覧できます。リンクはGitHub PagesのプロジェクトURLを想定した相対パスです。

## Content policy
- キャラクター画像は未提供のため、既存作品画像や無関係な人物写真で代用していません。
- CV・音樂担当・スタッフ起用案は候補として明記し、正式決定と誤認させません。
- 未確定の各話内容、放送日、ニュース、音源、動画は創作していません。
- ARG進行状況はブラウザー内のローカルストレージにのみ保存。個人情報の収集・送信はありません。
- ARG第一段階は公開済みのムジーク情報を照合する内容。物語の真相はENDING用の構造として保留します。

## Design
象牙色（`#F3EBDD`）、古金（`#B69A62`）、臙脂（`#702D3A`）、深紅（`#781E32`）を基調とした、耽美ゴシック × 玲瓏浪漫。外部フォント・大型フレームワーク・外部解析サービスは使用していません。

## Notice
本サイトおよび作品設定は創作企画に基づく架空のものです。実在の作品・団体・出演者とは関係ありません。