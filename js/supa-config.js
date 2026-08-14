/* supa-config.js — ★本番★ (timeally)
 * ============================================================================
 * ★このrepoで 倉庫の向き先（URL・鍵・ref）を持ってよいのは このファイルだけ★
 *   他のどのファイルにも書かない。tests/no-hardcoded-supa.test.mjs が破りを赤にする。
 *
 * ★repo名を環境の証拠にするな★
 *   実際に `Exally-test` という名前のフォルダの中身が【代行請求の本番】だった事故がある
 *   （それを信じて本番を22時間 壊した）。判断は ★remote と この env★ でする。
 *
 * ★テスト用の supa-config.js を ここに絶対にコピーしない★
 *   前科: 直書きがスナップショットに付いてきて「テストのつもりで本番倉庫を触った」。
 *   写す道具（scripts/mirror-to-prod.mjs）は、このファイルだけ★写さない★作りにしてある。
 *
 * env = この配信がどの環境か（'test' | 'prod'）
 *   ★prod なので「テスト環境」の帯は出ない★（js/env-badge.js）。
 *   帯が本番に出るのが いちばん危ない事故なので、名札で決めて安全側に倒している。
 *
 * 倉庫: 本番倉庫（他アプリと共有）／部屋(schema): timeally
 *   アプリは public の同名の窓口(view)ごしに読む（security_invoker=true）。
 *   ★この部屋の設計図はまだ本番倉庫に当てていない★（司さんの一言があってから
 *     `node scripts/apply-schema.mjs --yes-prod`）。
 */
window.SUPA = {
  url: 'https://tnfwipbgfgjaymlszeid.supabase.co',
  key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuZndpcGJnZmdqYXltbHN6ZWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1Nzk4MzQsImV4cCI6MjA5NzE1NTgzNH0.zhKPLSlW4zxsdjsXNvqDHvtP3wBqp-EKaxbjqLGW_ek',
  env: 'prod'
};
