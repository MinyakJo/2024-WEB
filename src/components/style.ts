// ===== Library =====

import { css } from 'styled-components'

// ===== Code =====

const setFontSize = ( value : string ): string => {

    const font_size = {
        "extra_small": "11px",
        "small": "14px",
        "medium_small": "15px",
        "medium": "16px",
        "medium_large": "22px",
        "large": "28px",
        "extra_large": "40px"
    }

    if (value === "extra_small") return font_size.extra_small
    else if (value === "small") return font_size.small
    else if (value === "medium_small") return font_size.medium_small
    else if (value === "medium") return font_size.medium
    else if (value === "medium_large") return font_size.medium_large
    else if (value === "large") return font_size.large
    else if (value === "extra_large") return font_size.extra_large
    else return value
}

const setColor = ( value : string ): string => {

    const color = {
        "white": "#FFFFFF",
        "black": "#000000",
        "900": "#191919",
        "800": "#333333",
        "700": "#4C4C4C",
        "600": "#666666",
        "500": "#7F7F7F",
        "400": "#999999",
        "300": "#B2B2B2",
        "200": "#CCCCCC",
        "100": "#E5E5E5",
        "50": "#F6F6F6",
        "10": "#FAFAFA",
        "blue": "#2E90FA",
        "sky_blue": "#B2DDFF",
        "red": "#F04438",
        "yellow": "#F8D706",
        "brown": "#2F1B1A",
        "kakako": "#F8D706",
        "none": "#00000000"
    }

    if (value === "white") return color.white
    else if (value === "black") return color.black
    else if (value === "900") return color[ 900 ]
    else if (value === "800") return color[ 800 ]
    else if (value === "700") return color[ 700 ]
    else if (value === "600") return color[ 600 ]
    else if (value === "500") return color[ 500 ]
    else if (value === "400") return color[ 400 ]
    else if (value === "300") return color[ 300 ]
    else if (value === "200") return color[ 200 ]
    else if (value === "100") return color[ 100 ]
    else if (value === "50") return color[ 50 ]
    else if (value === "10") return color[ 10 ]
    else if (value === "blue") return color.blue
    else if (value === "sky_blue") return color.sky_blue
    else if (value === "red") return color.red
    else if (value === "yellow") return color.yellow
    else if (value === "brown") return color.brown
    else if (value === "kakako") return color.kakako
    else if (value === "none") return color.none
    else return value
}

const setFlex = ( value : string ) => {

    const flex = {
        "row": css`
            display: flex;
            align-items: center;
        `,
        "row_top": css`
            display: flex;
        `,
        "row_center": css`
            display: flex;
            justify-content: center;
            align-items: center;
        `,
        "row_end": css`
            display: flex;
            justify-content: right;
            align-items: center;
        `,
        "row_between": css`
            display: flex;
            justify-content: space-between;
            align-items: center;
        `,
        
        "column": css`
            display: flex;
            flex-direction: column;
            justify-content: center;
        `,
        "column_top": css`
            display: flex;
            flex-direction: column;
        `,
        "column_center": css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `,
        "column_between": css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        `
    }

    if (value === "row") return flex.row
    else if (value === "row_top") return flex.row_top
    else if (value === "row_center") return flex.row_center
    else if (value === "row_end") return flex.row_end
    else if (value === "row_between") return flex.row_between
    else if (value === "column") return flex.column
    else if (value === "column_top") return flex.column_top
    else if (value === "column_center") return flex.column_center
    else if (value === "column_between") return flex.column_between
    else return
}

const CommonStyle = { setFontSize, setColor, setFlex }

export default CommonStyle