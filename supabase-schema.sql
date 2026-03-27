-- ONE PhAI Supabase Schema
-- Supabase Dashboard > SQL Editor에서 실행하세요

-- 1. Startup Cup 신청 테이블
create table if not exists applications (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,

  -- 신청자 정보
  user_id uuid references auth.users(id),
  team_name text not null,
  leader_name text not null,
  leader_email text not null,
  leader_phone text,
  organization text not null,

  -- 팀 정보
  team_size int not null default 1,
  team_members jsonb default '[]'::jsonb,

  -- 신청 내용
  track text not null check (track in ('actuator_sensor', 'ai_control', 'system_integration')),
  title text not null,
  description text not null,
  motivation text,

  -- 상태 관리
  status text not null default 'pending' check (status in ('pending', 'reviewing', 'accepted', 'rejected')),
  admin_note text
);

-- 2. RLS (Row Level Security) 설정
alter table applications enable row level security;

-- 누구나 자신의 신청서 생성 가능
create policy "Users can create own applications"
  on applications for insert
  to authenticated
  with check (auth.uid() = user_id);

-- 자신의 신청서만 조회 가능
create policy "Users can view own applications"
  on applications for select
  to authenticated
  using (auth.uid() = user_id);

-- Admin은 모든 신청서 조회/수정 가능 (서비스 역할 키로 접근)
-- 참고: 실제 Admin 기능은 service_role key를 서버사이드에서 사용

-- 3. updated_at 자동 업데이트 트리거
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger applications_updated_at
  before update on applications
  for each row
  execute function update_updated_at();
