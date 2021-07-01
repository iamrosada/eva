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

import vsuet from '../../images/vsuet.png';
import api from '../../services/api';

export default function AllStudent() {
  const [surname, setSurname] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [rooms, setRooms] = useState('');
  const [colleges, setCollege] = useState('УИТС');
  const [hostels, setHostel] = useState('2');

  const [sidebar, setSidebar] = useState(false);
  const [file, setPicture] = useState('');
  const showSidebar = () => setSidebar(!sidebar);

  const onChangePicture = e => {
    if (e.target.files[0]) {
      /*  console.log('picture: ', e.target.files[0]); */
      setPicture(e.target.files[0]);
    }
  };
  async function CreateNewStudent(e) {
    e.preventDefault();

    /*  console.log('ori', file);
     */
    const data = new FormData();

    data.append('surname', surname);
    data.append('full_name', fullname);
    data.append('number_phone', phone);
    data.append('country', country);
    data.append('rooms', rooms);
    data.append('college', colleges);
    data.append('hostel', hostels);
    data.append('file', file);
    /* console.log(data); */
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
        toast.success('Студент успешно создан');
      } else {
        toast.error('Студент уже существует');
      }
    } else {
      toast.error('Ошибка заполнения полей!');
    }
  }

  const [allstudent, setAllStudent] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredStudenty, setFilteredStudenty] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get('/students');
      /*  console.log('testt', result.data); */
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
          student.full_name.toLowerCase().includes(search.toLowerCase()) ||
          student.country.countryStudent.includes(search) ||
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
                Недавний
              </Link>
              <button id="createrbut" type="button" onClick={showSidebar}>
                <IoIosAdd className="ic-left" color="#cbcbd6" size={25} />
                Добавить студента
              </button>

              <Link to="/editstudent">
                <MdCreate className="ic-left" color="#cbcbd6" size={25} />
                Редактировать студента
              </Link>

              <Link to="/allstudent">
                <MdFormatAlignLeft
                  className="ic-left"
                  color="#cbcbd6"
                  size={25}
                />{' '}
                Список Студент
              </Link>

              <Link to="/deletstudent">
                <MdDelete className="ic-left" color="#cbcbd6" size={25} />{' '}
                Удалить учащегося
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
                        <strong>Фамилия</strong>
                        <input
                          type="text"
                          name="Фамилия"
                          id="input-surname"
                          placeholder="Фамилия"
                          value={surname}
                          onChange={e => setSurname(e.target.value)}
                        />
                      </div>
                      <div id="fullname">
                        <strong>ИО</strong>
                        <input
                          placeholder="ИО"
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
                        <strong>Телефон</strong>
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
                        <strong>Страна</strong>
                        <input
                          placeholder="при.,Ангола"
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
                        <strong>Комната</strong>
                        <input
                          placeholder="Комнаты, пример 410"
                          type="text"
                          name=""
                          id="input-room"
                          value={rooms}
                          onChange={e => setRooms(e.target.value)}
                        />
                      </div>
                      <div id="hostel-student">
                        <strong>Общежитие</strong>
                        <select
                          id="input-hostel"
                          value={hostels}
                          onChange={e => setHostel(e.target.value)}
                        >
                          <option value="2">Общежитие 2 ВГУИТ</option>
                          <option value="3">Общежитие 3 ВГУИТ</option>
                          <option value="4">Общежитие 4 ВГУИТ</option>
                          <option value="5">Общежитие 5 ВГУИТ</option>
                        </select>
                      </div>
                    </div>
                    <div className="name-student">
                      <div id="room-student">
                        <strong>Факультет</strong>
                        <select
                          id="select"
                          value={colleges}
                          onChange={e => setCollege(e.target.value)}
                        >
                          <option value="УИТС">УИТС</option>
                          <option value="БО">БО</option>
                          <option value="ПКВК">ПКВК</option>
                          <option value="ПМА">ПМА</option>
                          <option value="СПО">СПО</option>
                          <option value="ТЕСТ">ТЕСТ</option>
                          <option value="ТЕХНОЛОГИЧЕСКИЙ">
                            ТЕХНОЛОГИЧЕСКИЙ
                          </option>
                          <option value="ЭИУ">ЭИУ</option>
                          <option value="ЭХТ">ЭХТ</option>
                        </select>
                      </div>
                      <div id="hostel-student">
                        <strong>Фото студента</strong>
                        <input
                          placeholder="Фото студента"
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
                      СОХРАНИТЬ
                    </button>
                  </form>
                </div>
              </ul>
            </nav>
          </IconContext.Provider>

          <div id="for-search">
            <form id="form-input-home-page" action="">
              <input
                placeholder="поиск студентов"
                onChange={e => setSearch(e.target.value)}
              />
              <button type="submit">Поиск</button>
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
                    <span className="sp">Фамилия</span>
                    <span className="rsp">{item.surname}</span>
                    <div id="univer-home">
                      <MdSchool color="#cbcbd6" size={20} />
                      <span className="sp">{item.college.name_faculty}</span>
                    </div>
                    <FiChevronRight color="#cbcbd6" size={20} />
                  </div>
                  <table>
                    <tr>
                      <th>Имя</th>
                      <th>Телефон</th>
                      <th>Комната</th>
                      <th>Страна</th>
                    </tr>
                    <tr>
                      <td>{item.full_name}</td>
                      <td>{item.number_phone}</td>
                      <td>{item.rooms.numberofRoom}</td>
                      <td>{item.country.countryStudent}</td>
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
