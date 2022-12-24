export function Departure(){
    const Missing=true;
    return (
        <>
            <div
                style={
                    Missing?{color:'red'}:{color:'blue'}
                }
            >te {Missing?<small>extraño</small>:<h1>no extraño na</h1>}</div>
        </>
    )
}