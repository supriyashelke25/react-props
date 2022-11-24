import "./Student.css";

function Student(props){
    return(
        <div className="student-container">
            <h1>{props.studentName}</h1>
            <b className="name"> College Name: </b><span className="info">{props.college}</span><br/>
            <b className="name"> Course Name: </b><span className="info">{props.course}</span>
        </div>
    )
}
export default Student 