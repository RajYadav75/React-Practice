import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";

export function FormikFormComponentInputStateValidation() {
    return (
        <div className={"container-fluid"}>
            <h3>Formik Form-state Component Input State Validation</h3>
            <h2>Register User</h2>
            <Formik initialValues={{UserName:"",Age:0,Mobile:""}}
                    validationSchema={yup.object({Mobile:yup.string().required("Mobile number is required"),UserName:yup.string().required("Username is required"),Age:yup.number().required("Age is required")})}
                    onSubmit={(values)=>{console.log(values);}}
            >
                {
                    form =>
                        <Form>
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
                            <button disabled={!form.isValid} type="submit">Submit</button>
                            <button className={(!form.dirty)?'d-inline':"d-none"} >Save</button>
                        </Form>
                }
            </Formik>

        </div>
    )
}