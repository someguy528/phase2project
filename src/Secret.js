import React from "react";

function Secret(){
    // if (!solved) return <Redirect to="/" />

    function Clock() {
        const [time, setTime] = useState(new Date());
        useEffect(() => {
          setInterval(() => {
            setTime(new Date());
          }, 1000);
        }, []);
        return <div>The Date is: {time.toString()}</div>;
      };

    return (
        <div>
            <h1>You Solved It!</h1>
        </div>
    )
};

export default Secret;