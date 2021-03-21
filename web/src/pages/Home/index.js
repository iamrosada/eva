import "./styles.css"
import {FiChevronRight} from 'react-icons/fi'
import {MdSchool} from 'react-icons/md'
import {MdBusiness}from 'react-icons/md'
import {IoIosAdd} from 'react-icons/io'
import {MdCreate} from 'react-icons/md'
import {MdFormatAlignLeft}from 'react-icons/md'
import {MdDelete}from 'react-icons/md'
import {Link} from  'react-router-dom'
export default function Home(){


  function newStudent(){


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

                               <Link>
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


                          <div id="students">
                              <span id="borda">2</span>
                              <span className="sp">Yolanda Barrueco</span>
                              <div id="univer-home">
                                <MdSchool color="#cbcbd6"size={20}/>
                                <span className="sp">UITS</span>
                               
                              </div>
                              <FiChevronRight color="#cbcbd6"size={20}/>

                          </div>

                          
                          <div id="students">
                              <span id="borda">2</span>
                              <span className="sp">Yolanda Barrueco</span>
                              <div id="univer-home">
                                <MdSchool color="#cbcbd6"size={20}/>
                                <span className="sp">UITS</span>
                               
                              </div>
                              <FiChevronRight color="#cbcbd6"size={20}/>

                          </div>
                          <div id="students">
                              <span id="borda">2</span>
                              <span className="sp">Yolanda Barrueco</span>
                              <div id="univer-home">
                                <MdSchool color="#cbcbd6"size={20}/>
                                <span className="sp">UITS</span>
                               
                              </div>
                              <FiChevronRight color="#cbcbd6"size={20}/>

                          </div>







                        </div>
                       
                        



                      </div>


                   </section>














               </div>
    );
}
