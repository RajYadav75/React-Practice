import {useState} from "react";

export function EMICalculator() {
    const [amount, setAmount] = useState(100000);
    const [years, setYears] = useState(1);
    const [rate, setRate] = useState(10.45);
    const [emi, setEmi] = useState(0);
    const [toggle, showToggle] = useState("d-none");

    function handleAmountChange(event) {
        setAmount(event.target.value);
    }

    function handleYearChange(event) {
        setYears(event.target.value);
    }

    function handleRateChange(event) {
        setRate(event.target.value);
    }

    function handleCalculateClick() {
        var P = parseInt(amount);
        var R = parseFloat(rate) / 12 / 100;
        var N = parseInt(years) * 12;
        var EMI = P * R * (Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
        setEmi(Math.round(EMI).toLocaleString("en-in", {style: "currency", currency: "INR"}));
        showToggle("d-block");
    }

    return (
        <div className={"container-fluid bg-secondary"} style={{height: '100vh'}}>
            <h3 className="text-white text-center">Personal Loan EMI Calculator</h3>
            <div className={"bg-light m-4 p-4"}>
                <div className="row my-3">
                    <div className="col">
                        Amount you need &#8377; <input type="text" size="15" value={amount}
                                                       onChange={handleAmountChange}/>
                    </div>
                    <div className="col">
                        for <input type="text" size="2" onChange={handleYearChange} value={years}/> Years
                    </div>
                    <div className="col">
                        Interest Rate <input type="text" onChange={handleRateChange} value={rate}
                                             size="4"/>%
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="range" onChange={handleAmountChange} className="form-range" min="100000"
                               max="1000000" value={amount}/>
                        <div>
                            <span>&#8377; 1,00,000</span>
                            <span className="float-end">&#8377; 10,00,000</span>
                        </div>
                    </div>

                    <div className="col">
                        <input type="range" className="form-range" onChange={handleYearChange} value={years} min={"1"}
                               max={"5"}/>
                        <div>
                            <span>1</span>
                            <span className="float-end">5</span>
                        </div>
                    </div>
                    <div className="col">
                        <input type="range" className="form-range" onChange={handleRateChange} value={rate}
                               min={"10.45"} max={"18.45"}/>
                        <div>
                            <span>10.45%</span>
                            <span className="float-end">18.45%</span>
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col text-end">
                        <button className="btn btn-primary" onClick={handleCalculateClick}>Calculate</button>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col text-center">
                        <div className="toggle">
                            Your Monthly EMI is <span className="fs-4 fw-bold text-primary">{emi}</span> for next {years*12} months
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}