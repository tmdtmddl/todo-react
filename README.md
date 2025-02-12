# 장보기 목록 만들기 (todo app)

1.Container만들기

+관리할 상태를 정의 합니다
+todos => useState

2.Form 만들기

+todos,setTodos를 받아오기

+todo =>useState

- **대응내용**Create분만아니라 Update 상황도 고려해야함

  -payload 받아와서 수정할때만 todo포기값을 변경

  -수정하는 상황을 구별한 boolean 받아와야함

  3.Item만들기 (READ)

+todos의 todo를 출력하면 됨

+수정버튼을 눌렀을 때 Form을 그려주면 됨

+**주의**: payload로 todo전달, 수정하는 boolean전달

+삭제 기능도 필요함

+todo, todos, setTodos를 받아와야 함
