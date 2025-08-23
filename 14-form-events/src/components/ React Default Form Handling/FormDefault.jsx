import {useState} from "react";

export function FormDefault() {
    const [user, setUser] = useState({UserName:'',Age:0,City:''});
    function handleSubmit(event) {
        event.preventDefault();
        console.log(user);
    }

    function handleNameChange(event) {
        setUser({
            UserName: event.target.value,
            Age:user.Age,
            City:user.city,
        })
    }

    function handleAgeChange(event) {
        setUser({
            UserName: user.UserName,
            Age:event.target.value,
            City:user.city,
        })
    }

    function handleCityChange(event) {
        setUser({
            UserName: user.UserName,
            City:event.target.value,
            Age: user.Age
        })
    }

    return (
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <h3>Register</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd>
                        <input type="text" onChange={handleNameChange}/>
                    </dd>
                    <dt>Age</dt>
                    <dd>
                        <input type="number" onChange={handleAgeChange}/>
                    </dd>
                    <dt>City</dt>
                    <dd>
                        <select onChange={handleCityChange} >
                            <option >Select City</option>
                            <option >Gorakhpur</option>
                            <option >Lucknow</option>
                        </select>
                    </dd>
                </dl>
                <button>Submit</button>
            </form>
        </div>
    )
}