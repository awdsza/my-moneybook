# my AccountBook 💰

---
URL:    
API:    

---
## 목차🗂
### [1.제작기간](https://github.com/awdsza/my-moneybook#1%EC%A0%9C%EC%9E%91%EA%B8%B0%EA%B0%84-1) 
### [2.사용기술 스택](https://github.com/awdsza/my-moneybook#2%EC%82%AC%EC%9A%A9%EA%B8%B0%EC%88%A0%EF%B8%8F)
### [3.핵심기능](https://github.com/awdsza/my-moneybook#3%ED%95%B5%EC%8B%AC%EA%B8%B0%EB%8A%A5-1)
### [4.트러블슈팅 및 해결 방법소개](https://github.com/awdsza/my-moneybook#4%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85-%EC%82%AC%EC%9A%A9%EC%9E%90%EA%B4%80%EC%A0%90%EC%97%90-%EB%94%B0%EB%A5%B8-%EA%B3%A0%EB%AF%BC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95%EC%86%8C%EA%B0%9C)
### [5.추후 추가될 기능](https://github.com/awdsza/my-moneybook#5%EC%B6%94%ED%9B%84-%EC%B6%94%EA%B0%80%EB%90%A0-%EA%B8%B0%EB%8A%A5-1)
### 1.제작기간🗓
- 2022.07~
### 2.사용기술⚙️
```Frone End```
- Babel
- Webpack
- VueJS(2.7.8)+vuex(3.6.2)+vue-router(3.5.3)

``` Back End```
- NodeJS
- NestJS
    - JWT
    - bcrypt
- MySQL8.0.3
- TypeORM

``` Why NestJS❔```
- 현재 현업에서 사용하고있는 SpringMVC와 비슷한 유형(Annotation(Provider),AOP 등)의 웹 프레임워크
- express는 자유도가 높지만, 그에 맞게 프레임워크를 설정해야하는 시간적인 단점이 있어서, **Express 기반으로 만든 NestJS는 제공하는 보일러 플레이트 코드만으로 기본적인 백엔드 API서버 개발이 가능하기 때문에 도입 결정.**
- TypeScript를 기본적으로 지원하고 있어 개인공부겸 사용.

``` CI/CD```

### 3.핵심기능🔍
- 회원가입/로그인
- 가게부 목록 조회
- 가게부 작성
- 가게부 수정
- 가게부 삭제
### 4.트러블슈팅, 사용자관점에 따른 고민 해결 방법소개🩹
### 5.추후 추가될 기능📝
1. 소비내역을 달력,주간별로 한번에 볼수있는 기능 추가.
   - 대부분 가게부 애플리케이션은 가게부 목록을 리스트로 볼수있는 뿐만아니라, 달력, 주간별로 한눈에 볼 수있게 개발이 되어있음.
2. 사용자가 직접 설정할수 있는 카테고리 추가.
   - 사용자별로 어떻게 소비했고 소득을 얻었는지에 대한 유형이 다르기 때문에, 이를 자유자재로 관리할 수 있는 페이지를 개발 예정.
