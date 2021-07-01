import React, { useState, useEffect } from 'react';
import './styles.css';

import {
  MdSchool,
  MdCreate,
  MdFormatAlignLeft,
  MdDelete,
} from 'react-icons/md';
import { IoIosAdd } from 'react-icons/io';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Navbar.css';
import * as AiIcons from 'react-icons/ai';

import { RiDeleteBin6Line } from 'react-icons/ri';

import vsuet from '../../images/ceav.png';
import Modal from './ModalConfirm/Modal';
import api from '../../services/api';

export default function DeleteStudent() {
  const [show, setShow] = useState(false);
  const [allstudent, setAllStudent] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredStudenty, setFilteredStudenty] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [modalContant, setModalContant] = useState({});
  const [file, setPicture] = useState('');

  const [surname, setSurname] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('БАКАЛАВРИАТ');
  const [rooms, setRooms] = useState('');
  const [colleges, setCollege] = useState('УИТС');
  const [hostels, setHostel] = useState('2');
  const [course, setCourse] = useState('');
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
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(`/students/`);

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
          student.number_phone.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, allstudent]);

  async function DelterStudenty(e, studentId) {
    e.preventDefault();

    const response = await api.delete(`/students/${studentId}`);

    if (response.status !== 400) {
      toast.success('Estudante Apagado Com Sucesso');
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

          <div id="for-search">
            <form id="form-input-home-page" action="">
              <input
                placeholder="Pesquisar por nome"
                onChange={e => setSearch(e.target.value)}
              />
              <button type="submit">Pesquisar</button>
            </form>

            {filteredStudenty.map(item => (
              <div
                aria-hidden
                id="student-table-delete"
                key={item.id}
                onClick={() => {
                  setShow(true);

                  setModalContant(item);
                }}
              >
                <div id="students-h">
                  <span id="borda">{item.hostel.number_hostel}</span>
                  <span className="sp">Nome</span>
                  <span className="rsp">{item.surname}</span>
                  <div id="univer-home">
                    <MdSchool color="#cbcbd6" size={20} />
                    <span className="sp">{item.college.name_faculty}</span>
                  </div>
                  <RiDeleteBin6Line
                    className="afastar-delete"
                    color="red"
                    size={20}
                  />
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal onClose={() => setShow(false)} show={show}>
        <form id="modal-deletar">
          <div id="title-modal">
            <h3>Você quer remover o Estudante {modalContant?.surname} ?</h3>
          </div>
          <div id="modal-button-confirm">
            <button
              id="confirm"
              type="submit"
              onClick={e => {
                DelterStudenty(e, modalContant.id);
                setShow(false);
              }}
            >
              EXCLUIR
            </button>
            <button
              onClick={() => {
                setShow(false);
              }}
              type="submit"
              id="no-confirm"
            >
              CANCELAR
            </button>
          </div>
        </form>
      </Modal>
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
    </div>
  );
}
