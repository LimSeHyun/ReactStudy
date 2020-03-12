# ReactStudy
리액트의 기본 구조
```
class 클래스 명(파일이름과 동일) extends React.Component(리액트에서 제공하는 라이브러리[필수]){
  render(){
    return (
      <div>
        jsx : return 안에 있는 html 구문
  
        return 안에는 html 요소가 들어가야하는데 꼭 한개만 사용해야한다.
        그 안에는 그냥 html 코드를 사용해도 된다.
      </div>
    )
  }
}

export default 객체명;   
└ 해당 객체명으로 내보낸다.

```
---------------------------------------------------
```
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      a : "123"
      json 형태의 구문으로 들어간다.
      
      state
      기본 html은 값이 수정되었을때 전체 로딩이 필요하지만
      state는 값이 바뀐 부분만 재로딩을 한다.(부분로딩)
      └ 부분로딩시 필요한 요소
        shouldComponentUpdate(nextProps, nextState)
        ex ) return this.state !== nextState
        false 반환 시 업데이트 x
        true 반환 시 업데이트 o
      
      ----------------------------------------------------
      
      state 형식
      constructor(props){
        super(props)
        this.state = {
          json 코드
        }
      }
    }
  }

  render() {
        state 값이 바뀌었을때 render를 실행
    return (
      <div>
        
      </div>
    )
  }
}
```
---------------------------------------------------
```
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      a : 0
    }
  }

  함수가 정의되는 지역
  함수 정의 방법
  1)
  함수 명 = () =>{
    함수 내용
  }
  
  2)
  function 함수 명 (){
    함수 내용
  }

  render() {
    const {plusA} = this;
    return (
      <div>
        {this.state.a}
        <button onClick={plusA}>+</button>
        <button onClick={this.minusA}>-</button>
  
        함수 호출 방법
        - 이벤트리스너 = {this.함수 명}
        - 이벤트리스너 = {함수 명}
          └ const 상수에 this.함수명 지정해줘야 함 
          └ 1) const {함수 명} = this
            2) const 상수 명 = this.함수 명)
      </div>
    )
  }
}

```
------------------------------------------------------------

component : 재사용이 가능한 조각으로 UI를 나눈 것   
└ ex) 키보드를 이루고있는 키캡
