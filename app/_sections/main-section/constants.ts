// 메인 섹션 애니메이션 상수 — 타이밍은 모두 초(s) 단위

export const EASE = [0.16, 1, 0.3, 1] as const;

// 카드 진입 연출 — 화면 밖에서 제자리로
export const ENTRANCE = {
  duration: 1.0,
  ease: EASE,
  // 카드별 시작 지연 — 프라이머리부터 순차
  delay: {
    primary: 0,
    secondary1: 0.3,
    secondary2: 0.5,
    secondary3: 0.7,
    secondary4: 0.9,
  },
} as const;

// 마지막 카드가 안착하는 시점
export const ENTRANCE_END = Math.max(...Object.values(ENTRANCE.delay)) + ENTRANCE.duration;

// 프라이머리 카드 텍스트 연출 — 아래에서 한 줄씩 순차로 올라옴
export const TEXT = {
  from: 24, // 아래쪽 시작 거리(px)
  duration: 1,
  stagger: 0.1, // 줄 사이 간격
  delay: 1.8, // 카드가 안착한 뒤 시작
  ease: EASE,
} as const;

// 상하 그라데이션 오버레이 — 카드 진입이 끝난 뒤 서서히 등장
export const OVERLAY = {
  duration: 1,
  delay: ENTRANCE_END,
  ease: EASE,
} as const;
