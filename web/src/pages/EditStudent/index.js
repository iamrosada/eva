import React, { useState,   useEffect } from "react";

import {FiChevronRight} from 'react-icons/fi'
import {MdSchool} from 'react-icons/md'
import {MdBusiness}from 'react-icons/md'
import {IoIosAdd} from 'react-icons/io'
import {MdCreate} from 'react-icons/md'
import {MdFormatAlignLeft}from 'react-icons/md'
import {MdDelete}from 'react-icons/md'
import {Link} from  'react-router-dom'
import Modal from './Modal/Modal'
import api from "../../services/api";


export default function EditStudent(){

   const [ show,setShow] = useState(false);
   const [allstudent,setAllStudent] = useState([]);
   const [search, setSearch] = useState("");
   const [filteredStudenty, setFilteredStudenty] = useState([]);
   
   useEffect(() => {
     const fetchData = async () => {
       const result =  await api.get(`/students/`)
  
      setAllStudent(result.data);
     
     };
     
     fetchData();
   }, []);

   useEffect(() => {
    setFilteredStudenty(
      allstudent.filter((student) =>
        student.surname.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, allstudent]);

  
    return (
               <div id="home-page">
                   <header id="header-home-page">
                      <div>
                         <span id="das-home-page">Dasboard-hostel 2</span>
                         
                      </div>
                      <div>
                         
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

                                   <Link to="/createstudent">
                                   <IoIosAdd className="ic-left" color="#cbcbd6" size={25}/>Criar País</Link>

                                 <Link to="/editercountry">
                                 <MdCreate className="ic-left"color="#cbcbd6" size={25}/>Editar País</Link>

                               <Link to="/allcountry">
                               <MdFormatAlignLeft className="ic-left" color="#cbcbd6" size={25}/>Listar País</Link>

                            <Link to="/deletercountry">
                            <MdDelete  className="ic-left" color="#cbcbd6" size={25}/>Deletar País</Link>

                            
                            </ul>
                        </div>
                        <div id="for-search">
                          <form 
                          id="form-input-home-page"
                          action=""
                         
                          >

                               <input 
                               placeholder="search students"
                              
                               onChange={(e) => setSearch(e.target.value)}
                               />
                               <button 
                               type="submit"
                            

                               >
                                 Search</button>

                          </form>

                          

                   
                         
                        
                      {
                      filteredStudenty.map(item =>(
                          <div 
                          id="students"
                          onClick={() => setShow(true)}
                          key={item.id}
                          >
                              <span id="borda">2</span>
                              <span className="sp">{item.surname} {item.full_name}</span>
                              <div id="univer-home">
                                <MdSchool color="#cbcbd6"size={20}/>
                                <span className="sp">UITS</span>
                              </div>
                              <FiChevronRight color="#cbcbd6"size={20}/>

                          </div>
                        ))
                      }
                       
                            
                    
                           
                          
                          <Modal  onClose={() => setShow(false)} show={show}>
                      
                          <div id="for-create-student">
                            <form id="form-student">
                                <div className="name-student">
                                    <div id="surname">
                                        <strong>Surname</strong>
                                        <input 
                                         type="text" 
                                         name="" 
                                         id="input-surname"
                                        placeholder="Surname"
                                         />    
                                    </div>
                                    <div id="fullname">
                                        <strong>Full name</strong>
                                        <input 
                                         placeholder="Fullname"
                                         type="text" 
                                         name="" 
                                         id="input-fullname"/>    
                                    </div>

                                </div>
                                

                                <div className="name-student">
                                         <div id="telefone-student">
                                             <strong>Telefone</strong>
                                          <input 
                                           placeholder="+7 9 * * * * * * * 5"
                                            type="text" 
                                            name=""
                                            id="input-telefone"
                                            />    
                                         </div>
                                    <div id="country-student">
                                        <strong>País</strong>
                                        <input 
                                         placeholder="Country "
                                        type="text"
                                        name="" 
                                        id="input-country"
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
                                             id="input-room"/>    
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
                                >
                                    SALVAR
                                </button>


                            </form>






                        </div>
                          </Modal>

                          
                          
                          




                        </div>
                       
                        



                      </div>


                   </section>


               </div>
    );
}

