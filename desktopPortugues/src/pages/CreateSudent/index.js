/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './styles.css';
import { MdCreate, MdFormatAlignLeft, MdDelete } from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import { IoIosAdd } from 'react-icons/io';
import { IconContext } from 'react-icons';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import vsuet from '../../images/ceav.png';
import api from '../../services/api';

export default function CreateStudente() {
  const [surname, setSurname] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('БАКАЛАВРИАТ');
  const [rooms, setRooms] = useState('');
  const [colleges, setCollege] = useState('');
  const [hostels, setHostel] = useState('');
  const [file, setFile] = useState('');
  const [sidebar, setSidebar] = useState(false);
  const [course, setCourse] = useState('');
  const showSidebar = () => setSidebar(!sidebar);

  async function CreateNewStudent(e) {
    e.preventDefault();
    const data = {
      surname,
      full_name: fullname,
      number_phone: phone,
      country,
      rooms,
      college: colleges,
      hostel: hostels,
      file,
      formation: course,
    };



    if (
      surname !== '' &&
      fullname !== '' &&
      phone !== '' &&
      country !== '' &&
      rooms !== '' &&
      colleges !== '' &&
      hostels !== '' &&
      course !== '' &&
      file !== ''
    ) {
      const response = await api.post('/students', data);

      if (response.status !== 400) {
        toast.success('Estudante Criado com sucesso');
      } else {
        toast.error('Estudante ja Existe');
      }
    } else {
      toast.error('Error preencha os campos !');
    }
  }

  return (
    <div id="home-page">
      <section id="all-student-home-page">
        <div id="perfil-student-home-page">
          <div id="option-student-home-page">
            <ul>
              <Link className="sess" to="/home">
                Recente
              </Link>
              <button id="createrbut" type="button" onClick={showSidebar}>
                <IoIosAdd className="ic-left" color="#cbcbd6" size={25} />
                Adicionar Estudante
              </button>

              <Link to="/editstudent">
                <MdCreate className="ic-left" color="#cbcbd6" size={25} />
                Editar Estudante
              </Link>

              <Link to="/allstudent">
                <MdFormatAlignLeft
                  className="ic-left"
                  color="#cbcbd6"
                  size={25}
                />{' '}
                Lista de Estudante
              </Link>

              <Link to="/deletstudent">
                <MdDelete className="ic-left" color="#cbcbd6" size={25} />{' '}
                Remover Estudante
              </Link>
            </ul>
          </div>

          <IconContext.Provider value={{ color: `#fff` }}>
            <nav id="tst" className={sidebar ? `nav-menu active` : `nav-menu`}>
              <div id="img-vsuet" aria-hidden onClick={showSidebar}>
                <img id="vsuet" src={vsuet} alt="rosada" />
              </div>
              <ul aria-hidden className="nav-menu-items">
                <div id="for-create-student">
                  <form id="form-student">
                    <AiIcons.AiOutlineClose />
                    <div className="name-student">
                      <div id="surname">
                        <strong>Sobrenome</strong>
                        <input
                          type="text"
                          name="Sobrenome"
                          id="input-surname"
                          placeholder="Sobrenome"
                          value={surname}
                          onChange={e => setSurname(e.target.value)}
                        />
                      </div>
                      <div id="fullname">
                        <strong>Nome Completo</strong>
                        <input
                          placeholder="Nome Completo"
                          type="text"
                          name="fullname"
                          id="input-fullname"
                          value={fullname}
                          onChange={e => setFullname(e.target.value)}
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
                          onChange={e => setPhone(e.target.value)}
                        />
                      </div>
                      <div id="country-student">
                        <strong>Grau Académico</strong>

                        <select
                          id="input-country"
                          value={country}
                          onChange={e => setCountry(e.target.value)}
                        >
                          <option value="БАКАЛАВРИАТ">БАКАЛАВРИАТ</option>
                          <option value="СПЕЦИАЛИТЕТ">СПЕЦИАЛИТЕТ</option>
                          <option value="МАГИСТРАТУРА">МАГИСТРАТУРА</option>
                          <option value="АСПИРАНТУРА">АСПИРАНТУРА</option>
                        </select>
                      </div>
                    </div>

                    <div className="name-student">
                      <div id="room-student">
                        <strong>Quarto</strong>
                        <input
                          placeholder="Quarto,ex 410"
                          type="text"
                          name=""
                          id="input-room"
                          value={rooms}
                          onChange={e => setRooms(e.target.value)}
                        />
                      </div>
                      <div id="hostel-student">
                        <strong>Dormitório</strong>
                        <select
                          id="input-hostel"
                          value={hostels}
                          onChange={e => setHostel(e.target.value)}
                        >
                          <option value="2">Общежитие 2 </option>
                          <option value="3">Общежитие 3 </option>
                          <option value="4">Общежитие 4 </option>
                          <option value="5">Общежитие 5 </option>
                          <option value="6">Общежитие 6 </option>
                          <option value="7">Общежитие 7 </option>
                        </select>
                      </div>
                    </div>
                    <div id="room-student">
                      <strong>Curso</strong>
                      <input
                        placeholder="Nome do curso"
                        type="text"
                        name=""
                        id="input-course"
                        value={course}
                        onChange={e => setCourse(e.target.value)}
                      />
                    </div>
                    <div className="name-student">
                      <div id="room-student">
                        <strong>Universidade</strong>
                        <select
                          id="select"
                          value={colleges}
                          onChange={e => setCollege(e.target.value)}
                        >
                          <option value="ВГУИТ">ВГУИТ</option>
                          <option value="БО">ВГУ</option>
                          <option value="ПКВК">ВГТУ</option>
                          <option value="ПКВК">ВГАУ</option>
                          <option value="ПКВК">ВГИИ</option>
                        </select>
                      </div>
                      <div id="hostel-student">
                        <strong>Foto do estudante</strong>
                        <input
                          placeholder="Foto do estudante"
                          type="file"
                          name="arquivo"
                          id="arquivo"
                          value={file}
                          onChange={e => {
                            setFile(e.target.files[0]);
                          }}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      id="submit-student"
                      onClick={CreateNewStudent}
                    >
                      GUARDAR OS DADOS
                    </button>
                  </form>
                </div>
              </ul>
            </nav>
          </IconContext.Provider>
        </div>
      </section>
    </div>
  );
}
