import kmutnb from "../pictures/LOGO-KMUTNB.png"
import kmitl from "../pictures/kmitl-logo.png"
import kmutt from "../pictures/Kmutt-logo.png"
import Tu from "../pictures/TU_logo.png"
import './home.css'
import {Link} from "react-router-dom" 
import Select from "react-select";
import {useState} from "react"


const Home=(props)=>{
    const [userChoice, setUserChoice] = useState("Location")
    const [userChoice2, setUserChoice2] = useState("")
    const selectOptions = [
        { value: "location", label: "หอพัก"  },
        { value: "roomate", label: "รูมเมท" },
    ];
    const uniOptions = [
        { value: 'kmutnb', label: 'KMUTNB' },
        { value: 'kmitl', label: 'KMITL' },
        { value: 'kmutt', label: 'KMUTT' },
        { value: 'tu', label: 'TU' },
        { value: '', label: 'ทั้งหมด' }
    ];          
    const colorStyles = {
        control: (styles) => ({ ...styles, backgroundColor: "white" }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return { ...styles, color: data.color };
        }
    };
    return (
         <div className="Home_container">
            <div className="slogan">
                <p>T-pak เป็นได้มากกว่าที่พัก ในเว็ปนี้ .</p>
                <p>หา หอพัก , คอนโด, และ รูมเมท !</p>
            </div>
            <div className="head-container">
                <div className="head">
                    <h1>ค้นหาจาก</h1>
                    <Select className="dropdown" isSearchable={false}  defaultValue={{label:'หอพัก',value:'Location'}} options={selectOptions} onChange={(choice) => setUserChoice(choice.value)} />
                </div>
            </div>
            <div className="main">
                <Select  isSearchable={false} options={uniOptions} onChange={(choice) => setUserChoice2(choice.value)}/>
              
            </div>
            <div className="Sub-but">
                <Link to={{
                        pathname: '/location',
                        state: {userChoice,userChoice2}}}>
                    Submit
                </Link>
                
            </div>
         </div>
    )
}
export default Home;