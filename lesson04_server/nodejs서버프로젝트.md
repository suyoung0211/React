# 프로젝트를 진행할 폴더에서 명령어 입력

### 프로젝트 초기화
C:\Class250615\React\lesson04_server>npm init -y    =>    package.json 생성

### 필요한 패키지 설치
C:\Class250615\React\lesson04_server>npm install express mongodb cors

### 프로젝트 실행 도구 (서버 코드 변경시 알아서 재시작)
C:\Class250615\React\lesson04_server>npm install express mongodb cors

### 프로젝트 실행 (db서버 실행)
C:\Class250615\React\lesson04_server>nodemon [백엔드 js 파일명 입력]

# API 라우팅 테스트

1. 모든 todo 데이터 조회 : GET 방식. http://localhost:5000/api/todos
(브라우저에서 직접 주소 입력하여 실행)

```
curl -X GET http://localhost:5000/api/todos
```

-> [{"_id":"68661bddd1bc7d79837bdbcb","id":1,"text":"리액트 수업 복습","checked":true}, ... ]

2. 새로운 todo 데이터 추가 : POST 방식. http://localhost:5000/api/todos
(브라우저에서 테스트 못함. why? db에게 보낼 데이터를 작성해야하므로 => curl 명령어로 테스트)

* 주의 : 윈도우에서는 아래와 같이 기호 사용할 것
```
curl -X POST http://localhost:5000/api/todos ^
     -H "Content-Type: application/json" ^
     -d "{\"text\":\"과제하기22\"}"
```

-> {"id":4,"text":"과제하기22","checked":false,"createdAt":"2025-07-04T02:03:54.999Z"}

3. 기존 todo 데이터의 checked 속성 수정 : PUT 방식. 단, url로 id 값 지정하는 방식

```
curl -X PUT http://localhost:5000/api/todos/3 ^
     -H "Content-Type: application/json" ^
     -d "{\"checked\": false}"
```

4. 기존 todo 데이터 삭제 : DELETE 방식. 단, url로 id 값 지정하는 방식

```
- curl -X DELETE http://localhost:5000/api/todos/3
```