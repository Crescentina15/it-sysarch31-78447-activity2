import Card from "./Card.jsx";
import student1 from './assets/sungSuji.jpeg'
import student2 from './assets/Daeyoung.jpg'
import student3 from './assets/Harin.jpg'
import student4 from './assets/Yerim.jpg'
import student5 from './assets/doah.jpg'


const students = [
    { id: 1, name: "Sung Su-ji", image: student1, email:"sungsuji@gmail.com"},
    { id: 2, name: "Myeong Ja-eun", image: student2, email:"myeongjaeun@gmail.com"},
    { id: 3, name: "Baek Ha-rin", image: student3, email:"Haerina@gmail.com"},
    { id: 4, name: "Im Ye-rim", image: student4, email:"yerima@gmail.com"},
    { id: 5, name: "Seo Do-ah", image: student5, email:"doahya@gmail.com"},
   
  ];
export default function student(){
        return(
            <div className="card-container">
                {students.map(student => (
                    <Card key={student.id} student={student} />
                ))}
            </div>
        );
}