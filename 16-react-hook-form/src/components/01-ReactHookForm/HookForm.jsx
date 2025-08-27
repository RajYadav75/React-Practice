import {useForm} from "react-hook-form";

export function HookForm() {
    const {register,handleSubmit,formState:{errors}} =useForm();
    
    const submit = (values)=>{
        console.log(values);
    }
    return (
        <div className="container-fluid">
            <form onSubmit={handleSubmit(submit)}>
                <h3>Register</h3>
                <dl>
                    <dt>User Name </dt>
                    <dd>
                        <input type="text" {...register("Name", {required: true,minLength:4})} name={"Name"}/>
                    </dd>
                    <dd className="text-danger">
                        {
                            (errors.Name?.type==='required')?<span>Name Required</span>:<span></span>&&(errors.Name?.type==="minLength")?<span>Name Too Short</span>:<span></span>
                        }
                    </dd>
                    <dt>
                        Age
                    </dt>
                    <dd>
                        <input type="text" name={"Age"} {...register("Age",{required:true,min:15,max:30})}/>
                    </dd>
                </dl>
                <button type={"submit"}>Submit</button>
            </form>
        </div>
    )
}