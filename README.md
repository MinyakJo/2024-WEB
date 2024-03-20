# 기본적인 구조


1. 가장 많이 쓰는 태그들에게 styled-component의 props를 받아 만들수 있도록 제작해 layout 폴더에 넣는다.

---

2. 사용한다.

    ex) Div태그에 width이 211px 가로로 정렬되고 높이는 가운데로 style

```
    <Div width="211px" flex="row"></Div>
```

---

3. 많이쓰지 않는 main 같은 태그는 그때 마다 제작

---

4. Div 태그에 존재하지않는 props max-width 같은 값을 원하고 그 값이 가변값이면 Div를 물려받아 새로운 Div를 만들어준다

    ex) max-width을 받는 Div 태그

```
    const StyledDiv = styled(Div)<{ maxWidth?: string }>`
        max-width: ${ props => {
            props.maxWidth ? props.maxWidth : null
        }};
    `
    <StyledDiv maxWidth={ !isMobile ? "1920px" : "550px" }></StyledDiv>
```

---

5. button, h1, p, img, input등은 모두 div태그로 감싼다, 이 태그들의 width, height, background등 글자를 제외한 style은 Div로 설정 한다

    ex) 배경이 파란색이고 폰트 사이즈가 14px 인 버튼

```
    <Div backgroundColor="blue">
        <Button fontSize="14px">
        </Button>
    </Div>
```

---

6. font는 GlobalFonts를 App에서 전역 선언

font.ts

```
const GlobalFonts = createGlobalStyle`

    @font-face {
        font-family: "medium";
        src: url(${SFDisplayMedium});
    }
    @font-face {
        font-family: "regular";
        src: url(${SFDisplayRegular});
    }
    @font-face {
        font-family: "semiBold";
        src: url(${SFDisplaySemiBold});
    }
    @font-face {
        font-family: "bold";
        src: url(${SFDisplayBold});
    }
`;
```

---

7. src/components/component 에 있는 style.ts는 color, fontSize, flex를 담고 있다

지정된 컬러나 폰트사이즈가 있으면 등록해서 간단하게 사용한다

기본적으로 layout폴더에 있는 컴포넌트들은 전부 style.ts 를 참조한다

ex) style.ts

```
const setColor = (value: string): string => {
  const color = {
    white: "#FFFFFF",
    blue: "#2E90FA",
    none: "#00000000",
  };

  switch (value) {
    case "white":
    case "blue":
    case "none":
      return color[value];
    default:
      return value;
  }
};

const CommonStyle = { setColor }

export default CommonStyle
```

ex) 따로 styled-component를 만들때

```
const StyledButtonContainer = styled(Div)`
    border: 1px solid ${CommonStyle.setColor("blue")};
`
```

# onClick 이벤트 선언 방법

1. 태그에 id를 선언 할 때 map으로 구성 돼 있거나 비슷해 구분이 필요할 경우 **id_index** 이런식으로 언더바를 넣어 선언한다

ex) map id

```
.map((e, i) => {
    <Div id={ `id_${i}` }/>
})
```
---

2. 그 후 onClick 이벤트를 등록해 읽어올 때 **split("_")** 을 이용해 분리해 switch에 넣어 사용

ex) 

```
const onClickEvent = (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as HTMLElement).id
    const type = id.split("_")[0]

    switch(type){
        case "id":
            const index = id.split("_")[1]

            <!-- index가 숫자라면 -->
            if( !isNaN( Number( index ) ) ){
                console.log( data[ index ] )
            }
            return
        default:
            return
    }
}
```
---