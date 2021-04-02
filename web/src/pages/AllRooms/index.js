
import React, { useState,   useEffect } from "react";
import "./styles.css"
import {FiChevronRight} from 'react-icons/fi'
import {MdSchool} from 'react-icons/md'
import {MdBusiness}from 'react-icons/md'
import {IoIosAdd} from 'react-icons/io'
import {MdCreate} from 'react-icons/md'
import {MdFormatAlignLeft}from 'react-icons/md'
import {MdDelete}from 'react-icons/md'
import {Link} from  'react-router-dom'
import {RiDeleteBin6Line} from 'react-icons/ri'
import Modal from "./ModalConfirm/Modal"
import api from "../../services/api";
export default function  DeleterRooms(){

  const [show, setShow] = useState(false)
  const [allstudent,setAllStudent] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredStudenty, setFilteredStudenty] = useState([]);
  const [ modalContant,setModalContant] = useState({}); 
 
  useEffect(() => {
    const fetchData = async () => {
      const result =  await api.get(`/students/`)
 
     setAllStudent(result.data);
     console.log(result.data)
    };
    
    fetchData();
  }, []);


  
  useEffect(() => {
   setFilteredStudenty(
     allstudent.filter((student) =>
       student.surname.toLowerCase().includes(search.toLowerCase())||  student.full_name.toLowerCase().includes(search.toLowerCase()) //|| student.rooms.numberofRoom.toLowerCase().includes(search.toLowerCase())
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
                         
                            <ul>
                                                      {/*<span>todos estudantes</span>*/}
                                                      <Link className="sess" to="/home">
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

                                   
                                     <Link to="/allrooms">
                                     <MdFormatAlignLeft className="ic-left" color="#cbcbd6" size={25}/>listar Quartos</Link>

                                   <Link to="/createcountry">
                                   <IoIosAdd className="ic-left" color="#cbcbd6" size={25}/>Criar País</Link>

                                

                               <Link to="/allcountry">
                               <MdFormatAlignLeft className="ic-left" color="#cbcbd6" size={25}/>Listar País</Link>


                          
                            </ul>
                        </div>
                        <div id="for-search">
                          <form id="form-input-home-page"action="">
                          <input 
                               placeholder="search students"
                               onChange={(e) => setSearch(e.target.value)}
                               />
                               <button type="submit">Search</button>

                          </form>


                        {
                          filteredStudenty.map(item=>(
                            <div 
                            id="students"
                            key={item.id}

                            onClick={() =>{
                              setShow(true);
                              
                               setModalContant(item);
                             }}
                            >
                            <span id="room-number">{item.rooms.numberofRoom}</span>
                            <span className="sp"> {item.surname} {item.full_name}</span>
                            <span className="sp">{item.country.countryStudent}</span>
                          
                            
                            <RiDeleteBin6Line 
                                  className="afastar-delete"
                                  color="red"size={20}/>
                             
                    
                        </div>

                          ))

                        }
                          

                         
                   <Modal  onClose={() => setShow(false)} show={show}>
                     <form id="modal-deletar">
                       <div id="title-modal">
                         <h3>Queres Deletar o Quarto {modalContant?.rooms?.numberofRoom} ? </h3>
                       </div>
                       <div id="modal-button-confirm">

                         <button 
                         id="confirm"
                         type="submit"
                         >
                           DELETAR
                         </button>
                         <button 
                           type="submit"
                         id="no-confirm">
                           CANCELAR
                         </button>

                       </div>


                     </form>

                   </Modal>



                         
                          
                          





                        </div>
                       
                        



                      </div>


                   </section>














               </div>
    );
}
