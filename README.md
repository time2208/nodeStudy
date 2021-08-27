
# React 학습을 목적으로 하고 있습니다.
* 유투부 박성준(https://www.youtube.com/channel/UCPtch39eSiADfztyrTks6pA)의 React 기초를 참고하고 있습니다.

=============
## 내용
* **create-react-app <프로젝트명>**
  * <프로젝트명>으로 React 프로젝트를 생성합니다.

* React에서는 class 대신 className 을 사용한다.
* App 안에서 최상층에는 하나의 부모(테그)만 존재해야 한다.
* 파라미터 (함수)
```javascript
<Person name={"찬"} age={34}></Person>

import React from 'react';
  const Person = (props) => (
     <div>
        <h1>이름: {props.name} 나이는: {props.age}</h1>
     </div>
)
```
* 파라미터 (class)
```javascript
<Person name={"찬"} age={34}></Person>

import React from 'react';

class Person extends React.Componect{
   render(){
      return (
         <div>
            <h1>이름: {this.props.name} 나이는: {this.props.age}</h1>
         </div>
      )
   }
}
```
