import React, { useState, useEffect } from 'react';
import './styles.css';
import { FiChevronRight } from 'react-icons/fi';
import {
  MdSchool,
  MdCreate,
  MdFormatAlignLeft,
  MdDelete,
} from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import { toast } from 'react-toastify';
import { IconContext } from 'react-icons';
import { IoIosAdd } from 'react-icons/io';

import { Link } from 'react-router-dom';
import vsuet from '../../images/vsuet.png';
import Modal from './Modal/Modal';
import api from '../../services/api';
import './Navbar.css';
/* import '../../components/Navbar/Navbar.css'; */

export default function EditStudent() {
  const [show, setShow] = useState(false);
  const [modalContant, setModalContant] = useState({});
  const [allstudent, setAllStudent] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredStudenty, setFilteredStudenty] = useState([]);
  const [college, setColleg] = useState('');
  const [usernameStudent, setUsernameStudent] = useState('');
  const [fullnameStudent, setFullnameStudent] = useState('');
  const [countries, setCountryStudent] = useState('');
  const [phoneStudent, setPhoneStudent] = useState('');
  const [hostel, setHoste] = useState('');
  const [roomStudent, setRoomStudent] = useState('');

  const [surname, setSurname] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [rooms, setRooms] = useState('');
  const [colleges, setCollege] = useState('');
  const [hostels, setHostel] = useState('');

  const [sidebar, setSidebar] = useState(false);
  const [file, setPicture] = useState('');
  const showSidebar = () => setSidebar(!sidebar);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(`/students/`);

      setAllStudent(result.data);
      /*   console.log(result.data); */
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredStudenty(
      allstudent.filter(
        student =>
          student.surname.toLowerCase().includes(search.toLowerCase()) ||
          student.full_name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, allstudent]);

  const onChangePicture = e => {
    if (e.target.files[0]) {
      /* console.log('picture: ', e.target.files[0]); */
      setPicture(e.target.files[0]);
    }
  };
  async function UpdateStudent(e, studentId) {
    e.preventDefault();
    /* console.log(`O ID${studentId}`); */

    const data = new FormData();

    data.append('surname', usernameStudent);
    data.append('full_name', fullnameStudent);
    data.append('number_phone', phoneStudent);
    data.append('country', countries);
    data.append('rooms', roomStudent);
    data.append('college', college);
    data.append('hostel', hostel);
    data.append('file', file);
    /* console.log(data); */
    if (
      usernameStudent !== '' &&
      fullnameStudent !== '' &&
      phoneStudent !== ''
    ) {
      const response = await api.put(`/students/${studentId}`, data);

      if (response.status !== 400) {
        toast.success('Estudante update com sucesso');
      }
    } else {
      toast.error('Error preencha os campos !');
    }
  }

  async function CreateNewStudent(e) {
    e.preventDefault();

    /*  console.log('ori', file); */

    const data = new FormData();

    data.append('surname', surname);
    data.append('full_name', fullname);
    data.append('number_phone', phone);
    data.append('country', country);
    data.append('rooms', rooms);
    data.append('college', colleges);
    data.append('hostel', hostels);
    data.append('file', file);
    console.log(data);
    if (
      surname !== '' &&
      fullname !== '' &&
      phone !== '' &&
      country !== '' &&
      rooms !== '' &&
      colleges !== '' &&
      hostels !== '' &&
      file !== ''
    ) {
      const response = await api.post('/students', data);

      if (response.status !== 400) {
        toast.success('Estudante Criado com sucesso');
      } else {
        toast.error('Studen already exits');
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
                Recentes
              </Link>
              <button id="creater-butt" type="button" onClick={showSidebar}>
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
                listar Estudante
              </Link>

              <Link to="/deletstudent">
                <MdDelete className="ic-left" color="#cbcbd6" size={25} />{' '}
                Deletar Estudante
              </Link>
            </ul>
          </div>

          <div id="for-search">
            <form id="form-input-home-page" action="">
              <input
                placeholder="search students"
                onChange={e => setSearch(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>

            {filteredStudenty.map(item => (
              <div
                aria-hidden
                key={item.id}
                id="students"
                onClick={() => {
                  setShow(true);
                  setModalContant(item);
                }}
              >
                <span id="borda">2</span>
                <span className="sp">
                  {item.surname} {item.full_name}
                </span>
                <div id="univer-home">
                  <MdSchool color="#cbcbd6" size={20} />
                  <span className="sp">UITS</span>
                </div>
                <FiChevronRight color="#cbcbd6" size={20} />
              </div>
            ))}

            <>
              <Modal onClose={() => setShow(false)} show={show}>
                <div id="for-create-student">
                  <form id="form-student">
                    <div className="name-student">
                      <div id="surname">
                        <strong>Username</strong>
                        <input
                          type="text"
                          name=""
                          id="input-surname"
                          placeholder={modalContant?.surname}
                          value={usernameStudent}
                          onChange={e => setUsernameStudent(e.target.value)}
                        />
                      </div>
                      <div id="fullname">
                        <strong>Full name</strong>
                        <input
                          placeholder={modalContant?.full_name}
                          type="text"
                          name=""
                          id="input-fullname"
                          value={fullnameStudent}
                          onChange={e => setFullnameStudent(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="name-student">
                      <div id="telefone-student">
                        <strong>Telefone</strong>
                        <input
                          placeholder={modalContant?.number_phone}
                          type="text"
                          name=""
                          id="input-telefone"
                          value={phoneStudent}
                          onChange={e => setPhoneStudent(e.target.value)}
                        />
                      </div>
                      <div id="country-student">
                        <strong>País</strong>
                        <input
                          placeholder={modalContant?.country?.countryStudent}
                          type="text"
                          name=""
                          id="input-country"
                          value={countries}
                          onChange={e => setCountryStudent(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="name-student">
                      <div id="room-student">
                        <strong>Room</strong>
                        <input
                          placeholder={modalContant?.rooms?.numberofRoom}
                          type="text"
                          name=""
                          id="input-room"
                          value={roomStudent}
                          onChange={e => setRoomStudent(e.target.value)}
                        />
                      </div>
                      <div id="hostel-student">
                        <strong>Hostel</strong>
                        <input
                          placeholder="hostel for students "
                          type="text"
                          name=""
                          id="input-hostel"
                          value={hostel}
                          onChange={e => setHoste(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="name-student">
                      <div id="room-student">
                        <strong>College</strong>
                        <input
                          placeholder="College for students "
                          type="text"
                          name=""
                          id="input-room"
                          value={college}
                          onChange={e => setColleg(e.target.value)}
                        />
                      </div>
                      <div id="hostel-student">
                        <strong>Photo of Student</strong>
                        <input
                          placeholder="Photo of Student"
                          type="file"
                          name="arquivo"
                          id="arquivo"
                          encType="multipart/form-data"
                          onChange={onChangePicture}
                        />
                      </div>
                    </div>

                    {/*  {console.log(`o valor de id${modalContant.id}`)} */}
                    <button
                      type="submit"
                      id="submit-student"
                      onClick={e => UpdateStudent(e, modalContant.id)}
                    >
                      SALVAR
                    </button>
                  </form>
                </div>
              </Modal>
            </>
            <IconContext.Provider value={{ color: `#fff` }}>
              <nav
                id="tst"
                className={sidebar ? `nav-menu active` : `nav-menu`}
              >
                <div id="img-vsuet" aria-hidden onClick={showSidebar}>
                  <img id="vsuet" src={vsuet} alt="rosada" />
                </div>
                <ul aria-hidden className="nav-menu-items">
                  <div id="for-create-student">
                    <form id="form-student">
                      <AiIcons.AiOutlineClose />
                      <div className="name-student">
                        <div id="surname">
                          <strong>Surname</strong>
                          <input
                            type="text"
                            name="surname"
                            id="input-surname"
                            placeholder="Surname"
                            value={surname}
                            onChange={e => setSurname(e.target.value)}
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
                          <strong>País</strong>
                          <input
                            placeholder="Country "
                            type="text"
                            name="country"
                            id="input-country"
                            value={country}
                            onChange={e => setCountry(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="name-student">
                        <div id="room-student">
                          <strong>Room</strong>
                          <input
                            placeholder="Rooms for students "
                            type="text"
                            name=""
                            id="input-room"
                            value={rooms}
                            onChange={e => setRooms(e.target.value)}
                          />
                        </div>
                        <div id="hostel-student">
                          <strong>Hostel</strong>
                          <input
                            placeholder="hostel for students "
                            type="text"
                            name=""
                            id="input-hostel"
                            value={hostels}
                            onChange={e => setHostel(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="name-student">
                        <div id="room-student">
                          <strong>College</strong>
                          <input
                            placeholder="College for students "
                            type="text"
                            name=""
                            id="input-room"
                            value={colleges}
                            onChange={e => setCollege(e.target.value)}
                          />
                        </div>
                        <div id="hostel-student">
                          <strong>Photo of Student</strong>
                          <input
                            placeholder="Photo of Student"
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
                        SALVAR
                      </button>
                    </form>
                  </div>
                </ul>
              </nav>
            </IconContext.Provider>
          </div>
        </div>
      </section>
    </div>
  );
}
