import React, { useState } from "react";
import "./styles.css"
import {FiChevronRight} from 'react-icons/fi'
import {MdSchool} from 'react-icons/md'
import {MdBusiness}from 'react-icons/md'
import {IoIosAdd} from 'react-icons/io'
import {MdCreate} from 'react-icons/md'
import {MdFormatAlignLeft}from 'react-icons/md'
import {MdDelete}from 'react-icons/md'
import {Link} from  'react-router-dom'
import Modal from './Modal/Modal'
export default function EditStudent(){

    const [show, setShow] = useState(false);

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
                                
       
                                 <li><MdFormatAlignLeft className="ic-left" color="#cbcbd6" size={25}/> listar Estudante</li>
                                  <li><MdDelete className="ic-left" color="#cbcbd6" size={25}/> Deletar Estudante</li>
                                   <li><IoIosAdd className="ic-left" color="#cbcbd6" size={25}/>Adicionar Quarto</li>
                                    <li><MdDelete className="ic-left" color="#cbcbd6" size={25}/>Deletar Quarto </li>
                                     <li><MdFormatAlignLeft className="ic-left" color="#cbcbd6" size={25}/>listar Quartos</li>
                                   <li><IoIosAdd className="ic-left" color="#cbcbd6" size={25}/>Criar País</li>
                                 <li><MdCreate className="ic-left"color="#cbcbd6" size={25}/>Editar País</li>
                               <li><MdFormatAlignLeft className="ic-left" color="#cbcbd6" size={25}/>Listar País</li>
                            <li><MdDelete  className="ic-left" color="#cbcbd6" size={25}/>Deletar País</li>
                            
                            </ul>
                        </div>
                        <div id="for-search">
                          <form id="form-input-home-page"action="">
                               <input placeholder="search students"/>
                               <button type="submit">Search</button>

                          </form>


                          <div 
                          id="students"
                          onClick={() => setShow(true)}
                          >
                              <span id="borda">2</span>
                              <span className="sp">Yolanda Barrueco</span>
                              <div id="univer-home">
                                <MdSchool color="#cbcbd6"size={20}/>
                                <span className="sp">UITS</span>
                               
                              </div>
                              <FiChevronRight color="#cbcbd6"size={20}/>

                          </div>
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
