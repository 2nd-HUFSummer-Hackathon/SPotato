# 말하는 감자
말하는 감자 팀의 repository 입니다. 

---
### 1. 메인 페이지
게스트 로그인 기능)

입장 시 닉네임, 계좌정보 입력. 사용자 고유키 발급.

매칭 태그 설정)

대분류: [음식 종류] 필수 설정 조건.

소분류: [가게]. 디폴트는 ‘상관없음’ 태그.

매칭 버튼 → 누를 경우 태그에 따른 알고리즘 작동.

---
### 1-2. 매칭 알고리즘
규칙 1. 소분류가 있을 경우

대분류-소분류와 일치하는 방에 매칭시킨다.

방이 존재하지 않을 경우 새로 창설한다.

방이 존재할 경우 인원수가 많은 방에 매칭시킨다.

규칙 2. 소분류가 없을 경우

소분류가 ‘상관없음’일 경우 대분류가 일치하는 임의의 방에 매칭시킨다.

인원수가 많은 방에 매칭시키나, 만약 해당 방의 최소배달금액이 충족된 경우 그렇지 않으면서 인원수가 많은 방에 매칭시킨다.
