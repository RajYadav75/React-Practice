import {useFormik} from "formik";

export function FormikForm() {
    const formik = useFormik({
        initialValues: {
            UserName:"",
            Age:0,
            City:"",
            Gender:"",

        },
        onSubmit: (user) => {
            console.log(user);
        }
    });
    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h3>Register</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd>
                        <input type="text" onChange={formik.handleChange} name="UserName"/>
                    </dd>
                    <dt>Age</dt>
                    <dd>
                        <input type="number" onChange={formik.handleChange} name="Age"/>
                    </dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange} >
                            <option >Select City</option>
                            <option >Gorakhpur</option>
                            <option >Lucknow</option>
                        </select>
                    </dd>
                    <dt>Gender</dt>
                    <dd>
                        <input type="radio" name="Gender" onChange={formik.handleChange} value="Male"/>
                        <label>Male</label>
                        <input type="radio" name="Gender" onChange={formik.handleChange} value="Female"/>
                        <label>Female</label>
                    </dd>
                </dl>
                <button>Submit</button>
            </form>
        </div>
    )
}