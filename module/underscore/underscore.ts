
type MyCss = {
    [key in keyof CSSStyleDeclaration]?:  MyCss | string | number ;
}

type MyCss2<T> = {
    [key in keyof T | string]?:  MyCss2<T> | string | number  | MyCss;
}

// const classCustom: MyCss2<MyCss> = {
//    "& name": {
//     margin: 0,
//     name: {
//         "&:state":{

//         }
//     }
//    }
   
   
// }