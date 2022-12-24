export function Greet(){
    const married=true;
    return (
        <h1
        style={married&&{backgroundColor:"red"}||{backgroundColor:"yellow"}}
        >tu estas {married&&'estas casado'||'estas soltero'}</h1>
    )
}