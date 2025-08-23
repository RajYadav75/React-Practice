import * as yup from 'yup';
import {ErrorMessage, Field, Formik} from "formik";
export function FormikFormComponent() {
    return (
        <div className={"container-fluid"}>
            <h3>Formik Form Component</h3>
            <h2>Register User</h2>
            <Formik initialValues={{UserName:"",Age:0,Mobile:""}}
                    validationSchema={yup.object({Mobile:yup.string().required("Mobile number is required"),UserName:yup.string().required("Username is required"),Age:yup.number().required("Age is required")})}
                    onSubmit={(values)=>{console.log(values);}}
            >
                <form>
                    <dl>
                        <dt>User Name</dt>
                        <dd>
                            <Field name="UserName" type="text" />
                        </dd>
                        <dd className={"text-danger"}>
                            <ErrorMessage name={"UserName"}/>
                        </dd>
                        <dt>Age</dt>
                        <dd>
                            <Field name="Age" type="number" />
                        </dd>
                        <dd className={"text-danger"}>
                            <ErrorMessage name={"Age"}/>
                        </dd>
                        <dt>Mobile</dt>
                        <dd>
                            <Field name="Mobile" type="text" />
                        </dd>
                        <dd className={"text-danger"}>
                            <ErrorMessage name={"Mobile"}/>
                        </dd>
                    </dl>
                    <button type="submit">Submit</button>
                </form>
            </Formik>

        </div>
    )
}