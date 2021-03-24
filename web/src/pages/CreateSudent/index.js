import {useState} from 'react'
import './styles.css'
import "./styles.css"
import {FiChevronRight} from 'react-icons/fi'
import {MdSchool} from 'react-icons/md'
import {MdBusiness}from 'react-icons/md'
import {IoIosAdd} from 'react-icons/io'
import {MdCreate} from 'react-icons/md'
import {MdFormatAlignLeft}from 'react-icons/md'
import {MdDelete}from 'react-icons/md'
import {Link} from  'react-router-dom'
import api from '../../services/api'
export default function CreateStudente(){

    const [surname, setSurname] = useState('');
    const [fullname, setFullname] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')
    //const [rooms, setRooms] = useState('')
    
    async function CreateNewStudent(e){
      e.preventDefault();
      const data = {surname:surname,full_name:fullname,number_phone:phone,country:country/*,rooms:rooms*/}
     
      console.log(data);
  
          if( surname!== ''&& fullname!==''&& phone!==''&& country!==''){
  
              const response = await api.post("/students",data)
             
              if(response.status!==400){
                alert('Estudante Criado com sucesso')
              }
              else{
                  alert("Studen already exits")
              }
  
          } else{
              alert('Error preencha os campos !')
          }
          
          }
  
    

    return (
               <div id="home-page">
                   <header id="header-home-page">
                      <div>
                         <span id="das-home-page">Dasboard-hostel 2</span>
                         
                      </div>
                      <div>
                          {/*<input id="input-home-page" placeholder=" search students" type="text"/> */}
                      </div>
                     
                     <div id="avatar-home-page">
                        <div id="icon-univer-page">
                        <MdBusiness size={20}/>
                      <span className="avatar-name-univer">VSUET</span> 
                        </div>
                      <span id="user-page">Luis Água Rosada</span>  
                     </div>

                   </header>

                   <section id="all-student-home-page">
                      <div id="perfil-student-home-page">
                        <div id="option-student-home-page">
                            {/*<span>todos estudantes</span>*/}
                            <ul>
                            <Link className="select" to="/home">
                               Recentes
                            </Link>
                              <Link to="/student">
                               <IoIosAdd className="ic-left" color="#cbcbd6" size={25}/>Adicionar Estudante
                               </Link>

                               <Link to="/editstudent">
                               <MdCreate className="ic-left" color="#cbcbd6" size={25}/>Editar Estudante
                               
                               </Link>
                                
       
                                 <Link to="/allstudent">
                                 <MdFormatAlignLeft className="ic-left" color="#cbcbd6" size={25}/> listar Estudante</Link>

                                  <Link to="/deletstudent">
                                  <MdDelete className="ic-left" color="#cbcbd6" size={25}/> Deletar Estudante</Link>

                                   <Link to="/createrooms">
                                   <IoIosAdd className="ic-left" color="#cbcbd6" size={25}/>Adicionar Quarto</Link>

                                    <Link to="/deleterooms">
                                    <MdDelete className="ic-left" color="#cbcbd6" size={25}/>Deletar Quarto </Link>

                                     <Link to="/allrooms">
                                     <MdFormatAlignLeft className="ic-left" color="#cbcbd6" size={25}/>listar Quartos</Link>

                                   <Link to="/createcountry">
                                   <IoIosAdd className="ic-left" color="#cbcbd6" size={25}/>Criar País</Link>

                                 <Link to="/editercountry">
                                 <MdCreate className="ic-left"color="#cbcbd6" size={25}/>Editar País</Link>

                               <Link to="/allcountry">
                               <MdFormatAlignLeft className="ic-left" color="#cbcbd6" size={25}/>Listar País</Link>

                            <Link to="/deletercountry">
                            <MdDelete  className="ic-left" color="#cbcbd6" size={25}/>Deletar País</Link>

                            
                            </ul>
                        </div>

                        <div id="for-create-student">
                            <form id="form-student">
                                <div className="name-student">
                                    <div id="surname">
                                        <strong>Surname</strong>
                                        <input 
                                         type="text" 
                                         name="surname" 
                                         id="input-surname"
                                        placeholder="Surname"
                                        value={surname}
                                        onChange={e=>setSurname(e.target.value)}
                                         />    
                                    </div>
                                    <div id="fullname">
                                        <strong>Full name</strong>
                                        <input 
                                         placeholder="Fullname"
                                         type="text" 
                                         name="fullname" 
                                         id="input-fullname"
                                         value={fullname}
                                         onChange={e=>setFullname(e.target.value)}
                                         />    
                                    </div>

                                </div>
                                

                                <div className="name-student">
                                         <div id="telefone-student">
                                             <strong>Telefone</strong>
                                          <input 
                                           placeholder="+7 9 * * * * * * * 5"
                                            type="text" 
                                            name="phone"
                                            id="input-telefone"

                                          value={phone}
                                         onChange={e=>setPhone(e.target.value)}
                                            />    
                                         </div>
                                    <div id="country-student">
                                        <strong>País</strong>
                                        <input 
                                         placeholder="Country "
                                        type="text"
                                        name="country" 
                                        id="input-country"
                                        value={country}
                                        onChange={e=>setCountry(e.target.value)}

                                        />    
                                    </div>
                                </div>

                                <div  className="name-student">
                                         <div id="room-student" >
                                             <strong>Room</strong>
                                            <input
                                             placeholder="Rooms for students " 
                                             type="text" 
                                             name="" 
                                             id="input-room"
                                           
                                             />    
                                         </div>
                                    <div id="hostel-student">
                                        <strong>Hostel</strong>
                                        <input 
                                         placeholder="hostel for students " 
                                         type="text" 
                                         name="" 
                                         id="input-hostel"/>    
                                    </div>
                                  
                                    
                                </div>


                                <button 
                                type="submit"
                                id="submit-student"
                                onClick={CreateNewStudent}
                                >
                                    SALVAR
                                </button>


                            </form>






                        </div>
                         

                      </div>


                   </section>














               </div>
    );
}

 