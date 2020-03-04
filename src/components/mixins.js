export function buttonstyleNormal (bg, border, color){
    return `
        background-color: ${bg};
        border: 1px solid ${border};
        color: ${color};
        
        &:hover,
        &:focus {
            opacity: .8;
        }
        
        &:focus {
            box-shodow: 0 0 4px 0 ${bg};
        }
    `
}