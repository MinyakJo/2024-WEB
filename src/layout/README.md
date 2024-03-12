# Common

많이 쓰는 태그들의 많이쓰는 스타일을 간단하게 선언 할수 있도록 보관하는 폴더

ex) 

import Div from "components/common/Div"     //import

// "flex" 에 "justify-content: row", "align-items: center" 이고 "width"이 "30%"에 "height"이 "50px"고 "border-radius"가 "50px" 인 <div> 태그
<Div flex="row" width="30%" height="50px" radius="50px">
    ...
</Div>

# info

- Div
type propsType = {
    flex?: string
    width?: string
    height?: string
    marginTop?: string
    marginBottom?: string
    marginLeft?: string
    marginRight?: string
    paddingTop?: string
    paddingLeft?: string
    paddingRight?: string
    paddingBottom?: string
    padding?: string
    backgroundColor?: string
    borderColor?: string
    radius?: string
}

- Button
type propsType = {
    flex?: string
    color?: string
    family?: string
    size?: string
    weight?: string
    backgroundColor?: string
    borderColor?: string
    radius?: string
}

- H1, H2, P
type propsType = {
    color?: string
    fontFamily?: string
    fontSize?: string
    fontWeight?: string
    lineHeight?: string
}

- Img
type propsType = {
    width?: string
    height?: string
    fit?: string
    cursor?: string
    radius?: string
}

- Input
type propsType = {
    height?: string
    family?: string
    fontSize?: string
    weight?: string
    backgroundColor?: string
    borderColor?: string
    radius?: string
    placeholderColor?: string
}

- Textarea
type propsType = {
    height?: string
    family?: string
    fontSize?: string
    weight?: string
    backgroundColor?: string
    borderColor?: string
    radius?: string
    placeholderColor?: string
    paddingRight?: string
    scrollWidth?: string
    scrollBackgroundColor?: string
    scrollRadius?: string
}