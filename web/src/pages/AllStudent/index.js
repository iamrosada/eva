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
import api from "../../services/api";
export default function AllStudent(){

  const [allstudent,setAllStudent] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredStudenty, setFilteredStudenty] = useState([]);
  
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

                                    <Link>
                                    <MdDelete className="ic-left" color="#cbcbd6" size={25}/>Deletar Quarto </Link>

                                     <Link>
                                     <MdFormatAlignLeft className="ic-left" color="#cbcbd6" size={25}/>listar Quartos</Link>

                                   <Link>
                                   <IoIosAdd className="ic-left" color="#cbcbd6" size={25}/>Criar País</Link>

                                 <Link>
                                 <MdCreate className="ic-left"color="#cbcbd6" size={25}/>Editar País</Link>

                               <Link>
                               <MdFormatAlignLeft className="ic-left" color="#cbcbd6" size={25}/>Listar País</Link>

                            <Link>
                            <MdDelete  className="ic-left" color="#cbcbd6" size={25}/>Deletar País</Link>

                            
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
                            id="student-table"
                            key={item.id}
                            >
                            <div id="students-h">

                                 <span id="borda">2</span>
                                   <span className="sp">{item.surname}</span>
                                   <div id="univer-home">
                                     <MdSchool color="#cbcbd6"size={20}/>
                                     <span className="sp">UITS</span>
                                   
                                   </div>
                                   <FiChevronRight color="#cbcbd6"size={20}/>
                            </div>
                            <table>
                                   <tr>
                                     <th>Name</th>
                                     <th>Telephone</th>
                                     <th>Rooms</th>
                                     <th>Country</th>
                                   </tr>
                                   <tr>
                                     <td>{item.full_name}</td>
                                     <td>{item.number_phone}</td>
                                     <td>410</td>
                                     <td>{item.country.countryStudent}</td>
                                    
                                 </tr>
                                   
                            </table>

                         </div>
                        ))} 
                          
                          
                        



                        </div>
                       
                        



                      </div>


                   </section>














               </div>
    );
}
