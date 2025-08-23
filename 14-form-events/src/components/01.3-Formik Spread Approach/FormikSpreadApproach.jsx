import * as yup from "yup";
import {useFormik} from "formik";

export function FormikSpreadApproach() {
    const formik = useFormik({
        initialValues: {
            UserName: "",
            Age: 0,
            City: "",
            Mobile: ""
        },
        validationSchema: yup.object({
            UserName: yup.string().required("User Name is required").min(4, "Name too Short"),
            Age: yup.number().required("Age is required").min(14, "Minimum Age is required 14").max(30, "Age max 30"),
            Mobile: yup.string().required("Mobile number is required").matches(/\+91\d{10}/, "Invalid mobile number"),
        }),
        onSubmit: (user) => {
            console.log(user)
        }
    })
    return (
        <div className="container-fluid">
            <h3>Formik Spread Approach(best) -- Doesn't need onblur & onchange</h3>
            <form onSubmit={formik.handleSubmit}>
                <h3>Register</h3>
                <dl>
                    <dt>User Name:</dt>
                    <dd>
                        <input type="text" name="UserName" {...formik.getFieldProps("UserName")} />
                    </dd>
                    <dd className={"text-danger"}>
                        {formik.errors.UserName}
                    </dd>

                    <dt>Age</dt>
                    <dd>
                        <input type="number" {...formik.getFieldProps("Age")} name="Age"/>
                    </dd>
                    <dd className={"text-danger"}>
                        {formik.errors.Age}
                    </dd>

                    <dt>City</dt>
                    <dd>
                        <select name={"City"} {...formik.getFieldProps("City")}>
                            <option value="-1">Select City</option>
                            <option value="Gorakhpur">Gorakhpur</option>
                            <option value="Lucknow">Lucknow</option>
                        </select>
                    </dd>
                    <dd className={"text-danger"}>{formik.errors.City}</dd>

                    <dt>Mobile</dt>
                    <dd>
                        <input type="text" name="Mobile" {...formik.getFieldProps("Mobile")} />
                    </dd>
                    <dd className={"text-danger"}>
                        {formik.errors.Mobile}
                    </dd>
                </dl>
                <button type={"submit"}>Submit</button>
            </form>
        </div>
    )
}