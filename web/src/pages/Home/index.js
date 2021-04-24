import React, { useState } from 'react';
import './styles.css';
import { FiChevronRight } from 'react-icons/fi';
import {
  MdSchool,
  MdCreate,
  MdFormatAlignLeft,
  MdDelete,
} from 'react-icons/md';
import { IconContext } from 'react-icons';
import { IoIosAdd } from 'react-icons/io';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import vsuet from '../../images/vsuet.png';
import api from '../../services/api';

/* import Navlefth from '../../components/NavLefth/Navlefth'; */

export default function Home() {
  const [surname, setSurname] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [rooms, setRooms] = useState('');
  const [colleges, setCollege] = useState('');
  const [hostels, setHostel] = useState('');
  /*  const [file, setFile] = useState(''); */
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const [file, setPicture] = useState('');
  // const [, /* imgData */ setImgData] = useState(null);
  const onChangePicture = e => {
    if (e.target.files[0]) {
      console.log('picture: ', e.target.files[0]);
      setPicture(e.target.files[0]);
      /*  const reader = new FileReader();
      reader.addEventListener('load', () => {
        console.log('testing', reader.result);
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]); */
    }
  };
  async function CreateNewStudent(e) {
    e.preventDefault();
    /*  const { name, size } = picture; */
    console.log('ori', file);

    /*   const data = {
      surname,
      full_name: fullname,
      number_phone: phone,
      country,
      rooms,
      college: colleges,
      hostel: hostels,
       file: {
        originalname: name,
        size,
      },
      //file: picture,
    }; */
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
      hostels !== ''
      /*  file !== '' */
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
    <div
      id="home-page"
      onChange={e => {
        e.preventDefault();
      }}
    >
      <section
        id="all-student-home-page"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
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
              <input placeholder="search students" />
              <button type="submit">Search</button>
            </form>

            <div id="students">
              <span id="borda">2</span>
              <span className="sp">Yolanda Barrueco</span>
              <div id="univer-home">
                <MdSchool color="#cbcbd6" size={20} />
                <span className="sp">UITS</span>
              </div>
              <FiChevronRight color="#cbcbd6" size={20} />
            </div>

            <div id="students">
              <span id="borda">2</span>
              <span className="sp">Yolanda Barrueco</span>
              <div id="univer-home">
                <MdSchool color="#cbcbd6" size={20} />
                <span className="sp">UITS</span>
              </div>
              <FiChevronRight color="#cbcbd6" size={20} />
            </div>
            <div id="students">
              <span id="borda">2</span>
              <span className="sp">Yolanda Barrueco</span>
              <div id="univer-home">
                <MdSchool color="#cbcbd6" size={20} />
                <span className="sp">UITS</span>
              </div>
              <FiChevronRight color="#cbcbd6" size={20} />
            </div>
          </div>
        </div>
        <IconContext.Provider
          value={{ color: `#fff` }}
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <nav
            onSubmit={e => {
              e.preventDefault();
            }}
            id="tst"
            className={sidebar ? `nav-menu active` : `nav-menu`}
          >
            <div id="img-vsuet" aria-hidden onClick={showSidebar}>
              <img id="vsuet" src={vsuet} alt="rosada" />
            </div>
            <ul aria-hidden className="nav-menu-items">
              <div id="for-create-student">
                <form
                  id="form-student"
                  onSubmit={e => {
                    e.preventDefault();
                  }}
                  encType="multipart/form-data"
                >
                  <AiIcons.AiOutlineClose /* onClick={showSidebar} */ />
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
                        encType="multipart/form-data"
                        /* value={file} */
                        onChange={
                          onChangePicture /*  e.preventDefault();
                          console.log('TESTS', e.target.files[0]); */

                          /* setFile(e.target.files[0]); */
                        }
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
      </section>
    </div>
  );
}
