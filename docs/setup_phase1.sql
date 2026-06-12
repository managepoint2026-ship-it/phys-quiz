-- ============================================================
-- Phase 1: 学習データ同期用テーブルのセットアップ
-- Supabase ダッシュボード → SQL Editor に貼り付けて実行する
-- ============================================================

-- 1ユーザー1行で学習データを保持する
create table if not exists user_learning_data (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  wrong      jsonb default '{}'::jsonb,   -- 間違えた問題（間隔反復データ）
  quiz_log   jsonb default '{}'::jsonb,   -- 日別学習ログ（直近120日）
  trivia     jsonb default '[]'::jsonb,   -- トリビアカード所持ID
  badges     jsonb default '[]'::jsonb,   -- バッジ所持ID
  updated_at timestamptz default now()
);

-- RLS（必須）: 自分の行だけ読み書きできる
alter table user_learning_data enable row level security;

create policy "own row select" on user_learning_data
  for select using (auth.uid() = user_id);

create policy "own row insert" on user_learning_data
  for insert with check (auth.uid() = user_id);

create policy "own row update" on user_learning_data
  for update using (auth.uid() = user_id);

-- リセットボタンで自分の行を削除できるようにする
create policy "own row delete" on user_learning_data
  for delete using (auth.uid() = user_id);

-- ============================================================
-- 確認用クエリ（実行後にチェック）
-- ============================================================
-- RLS が有効になっているか:
--   select relname, relrowsecurity from pg_class where relname = 'user_learning_data';
--   → relrowsecurity が t であること
--
-- ポリシー一覧:
--   select policyname, cmd from pg_policies where tablename = 'user_learning_data';
--   → select / insert / update / delete の4つがあること

-- ============================================================
-- 注意: 既存の user_stats テーブルにも delete ポリシーが必要
-- （リセットボタンがサーバー側データを削除するため）
-- 既に存在する場合はエラーになるので、その場合はスキップしてよい
-- ============================================================
create policy "own row delete" on user_stats
  for delete using (auth.uid() = user_id);
