import {useEffect, useState} from "react";
import axios from "axios";

export function Courses() {
    const [course, setCourse] = useState([{
        title:"",
        rating:0,
        faculty:"",
        duration:"",
        start:"",
        image:""
    }]);
    useEffect(() => {
        axios.get("courses.json")
            .then((response) => {
                setCourse(response.data);
            })
    }, []);
    return (
        <div className={"container-fluid"}>
            <main className="d-flex">
                {
                    course.map((courses) => (
                        <div className={"card p-2 m-2"} key={courses.title}>
                            <img src={courses.image} alt="courses" className="card-img-top" height={"130"}/>
                            <div className="card-header text-center">
                                <div>{courses.title}</div>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <span className="bi bi-star-fill text-warning"></span>
                                    <span className="bi bi-star-fill text-warning"></span>
                                    <span className="bi bi-star-fill text-warning"></span>
                                    <span className="bi bi-star-fill text-warning"></span>
                                    <span className="bi bi-star-fill text-warning"></span>
                                    <span >{courses.rating}</span>
                                </div>
                                <dl className="row">
                                    <dt className="col-5">Start</dt>
                                    <dd className="col-7">{courses.start}</dd>
                                    <dt className="col-5">Duration</dt>
                                    <dd className="col-7">{courses.duration}</dd>
                                    <dt className="col-5">By</dt>
                                    <dd className="col-7 h6">{courses.faculty}</dd>
                                </dl>
                            </div>
                        </div>
                    ))
                }
            </main>
        </div>
    )
}