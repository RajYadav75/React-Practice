import {useFormik} from "formik";

export function FormikFormValidation() {

    function ValidateUser(formData){
        let errors = {UserName:"",Age:"",City:"",Mobile:""};

        if (formData.UserName.length === 0){
            errors.UserName = "UserName is required";
        }else{
            if (formData.UserName.length < 4 ){
                errors.UserName = "UserName is too Short";
            }else{
                errors.UserName = "";
            }
        }
        if (formData.Age === ""){
            errors.Age = "Age is required";
        }else {
            if (isNaN(formData.Age)){
                errors.Age = "Age must be a number";
            }else{
                errors.Age = "";
            }
        }
        if (formData.City === "-1"){
            errors.City = "Please select at least 1 city";
        }else {
            errors.City = "";
        }
        if (formData.Mobile.match(/\+91\d{10}/)){
            errors.mobile = "";
        }else{
            errors.Mobile = "Invalid Mobile";
        }
    }

    const formik = useFormik({
        initialValues: {
            UserName:"",
            Age:0,
            City:"",
            Mobile:""
        },
        validate: ValidateUser,
        onSubmit:(user)=>{
            console.log(user)
        }
    })
    return (
        <div className="container-fluid">
            <h3>Default Formik Validation --> onchange onblur both we have to implement</h3>
            <form onSubmit={formik.handleSubmit}>
                <h3>Register</h3>
                <dl>
                    <dt>User Name:</dt>
                    <dd>
                        <input type="text" name="UserName" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    </dd>
                    <dd className={"text-danger"}>
                        {formik.errors.UserName}
                    </dd>

                    <dt>Age</dt>
                    <dd>
                        <input type="number" onChange={formik.handleChange} onBlur={formik.handleBlur} name="Age"/>
                    </dd>
                    <dd className={"text-danger"}>
                        {formik.errors.Age}
                    </dd>

                    <dt>City</dt>
                    <dd>
                        <select name={"City"} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                            <option value="-1">Select City</option>
                            <option value="Gorakhpur">Gorakhpur</option>
                            <option value="Lucknow">Lucknow</option>
                        </select>
                    </dd>
                    <dd className={"text-danger"}>{formik.errors.City}</dd>

                    <dt>Mobile</dt>
                    <dd>
                        <input type="text" name="Mobile" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
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