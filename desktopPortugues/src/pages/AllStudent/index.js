import React, { useState, useEffect } from 'react';
import './home.css';
import { FiChevronRight } from 'react-icons/fi';
import {
  MdSchool,
  MdCreate,
  MdFormatAlignLeft,
  MdDelete,
} from 'react-icons/md';

import * as AiIcons from 'react-icons/ai';
import { IoIosAdd } from 'react-icons/io';
import { IconContext } from 'react-icons';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import vsuet from '../../images/ceav.png';
import api from '../../services/api';

export default function AllStudent() {
  const [surname, setSurname] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('БАКАЛАВРИАТ');
  const [rooms, setRooms] = useState('');
  const [colleges, setCollege] = useState('ВГУИТ');
  const [hostels, setHostel] = useState('2');
  const [course, setCourse] = useState('');
  const [sidebar, setSidebar] = useState(false);
  const [file, setPicture] = useState('');
  const showSidebar = () => setSidebar(!sidebar);

  const onChangePicture = e => {
    if (e.target.files[0]) {

      setPicture(e.target.files[0]);
    }
  };
  async function CreateNewStudent(e) {
    e.preventDefault();


    const data = new FormData();

    data.append('surname', surname);
    data.append('full_name', fullname);
    data.append('number_phone', phone);
    data.append('country', country);
    data.append('rooms', rooms);
    data.append('college', colleges);
    data.append('hostel', hostels);
    data.append('formation', course);
    data.append('file', file);

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

  const [allstudent, setAllStudent] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredStudenty, setFilteredStudenty] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get('/students');
      console.log('testt', result.data);
      setAllStudent(result.data);


    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredStudenty(
      allstudent.filter(
        student =>
          student.surname.toLowerCase().includes(search.toLowerCase()) ||
          student.full_name.toLowerCase().includes(search.toLowerCase()) ||
          student.country.countryStudent.includes(search) ||
          student.college.name_faculty.includes(search) ||
          student.number_phone.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, allstudent]);

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
                          placeholder="Quarto, ex 410"
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
                    <div>
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
                          onChange={onChangePicture}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      id="submit-student"
                      onClick={CreateNewStudent}
                    >
                      GUARDAR
                    </button>
                  </form>
                </div>
              </ul>
            </nav>
          </IconContext.Provider>

          <div id="for-search">
            <form id="form-input-home-page" action="">
              <input
                placeholder="Pesquisar por nome"
                onChange={e => setSearch(e.target.value)}
              />
              <button type="submit">Pesquisar</button>
            </form>

            {filteredStudenty.map(item => (
              <div id="al" key={item.id}>
                <div id="avatar-s">
                  <img
                    /*  src={`http://localhost:3333/files/${item.imagepost.url}`} */
                    src={item.imagepost.url}
                    alt=""
                    id="avatar-stu"
                  />
                </div>
                <div id="student-table">
                  <div id="students-h">
                    <span id="borda">{item.hostel.number_hostel}</span>
                    <span className="sp">Sobrenome</span>
                    <span className="rrsp">{item.surname}</span>
                    <div id="univer-home">
                      <MdSchool color="#cbcbd6" size={20} />
                      <span className="sp">{item.college.name_faculty}</span>
                    </div>

                    <FiChevronRight color="#cbcbd6" size={20} />
                  </div>
                  <table>
                    <tr>
                      <th>Nome</th>
                      <th>Telefone</th>
                      <th>Quarto</th>
                      <th>Grau Académico</th>
                    </tr>
                    <tr>
                      <td>{item.full_name}</td>
                      <td>{item.number_phone}</td>
                      <td>{item.rooms.numberofRoom}</td>
                      <td>{item.country.countryStudent}</td>
                    </tr>
                  </table>
                  <table id="ta">
                    <tr>
                      <th>Curso</th>
                    </tr>
                    <tr>
                      <td>{item.course.formation}</td>
                    </tr>
                  </table>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
