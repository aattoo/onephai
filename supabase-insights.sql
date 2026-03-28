-- Insights 테이블 (Insight 글 CRUD)
create table if not exists insights (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,

  -- 작성자
  user_id uuid references auth.users(id) not null,
  author_name text not null,
  author_initial text not null default '',

  -- 글 내용
  title text not null,
  summary text not null,
  content text default '',
  category text not null default 'school' check (category in ('school', 'industry', 'research', 'collab')),
  tags text[] default '{}',
  quote text,
  featured boolean default false,
  gradient text not null default 'from-slate-700 to-slate-900',
  lang text not null default 'ko' check (lang in ('ko', 'en')),

  -- 상태
  status text not null default 'published' check (status in ('draft', 'published', 'archived'))
);

-- RLS 활성화
alter table insights enable row level security;

-- 누구나 published 글 조회 가능
create policy "Anyone can view published insights"
  on insights for select
  using (status = 'published');

-- 인증된 사용자: 자신의 글 생성
create policy "Authenticated users can create insights"
  on insights for insert
  to authenticated
  with check (auth.uid() = user_id);

-- 인증된 사용자: 자신의 글 수정
create policy "Users can update own insights"
  on insights for update
  to authenticated
  using (auth.uid() = user_id);

-- Admin: 모든 글 조회 (draft 포함)
create policy "Admins can view all insights"
  on insights for select
  to authenticated
  using (is_admin());

-- Admin: 모든 글 수정
create policy "Admins can update all insights"
  on insights for update
  to authenticated
  using (is_admin());

-- Admin: 글 삭제
create policy "Admins can delete insights"
  on insights for delete
  to authenticated
  using (is_admin());

-- updated_at 자동 업데이트
create trigger insights_updated_at
  before update on insights
  for each row
  execute function update_updated_at();
