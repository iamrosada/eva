import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
/* import * as FaIcons from 'react-icons/fa'; */
import * as AiIcons from 'react-icons/ai';

import './Navbar.css';
import { IconContext } from 'react-icons';
import { toast } from 'react-toastify';

import vsuet from '../../images/vsuet.png';

import api from '../../services/api';

const Navbar = props => {
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };
  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);
  const [surname, setSurname] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [rooms, setRooms] = useState('');
  const [colleges, setCollege] = useState('');
  const [hostels, setHostel] = useState('');
  const [file, setFile] = useState('');
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  async function CreateNewStudent(e) {
    console.log('props', props);
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
    };

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

  return ReactDOM.createPortal(
    <>
      <IconContext.Provider onClick={props.onClose} value={{ color: `#fff` }}>
        <nav id="tst" className={sidebar ? `nav-menu active` : `nav-menu`}>
          <div id="img-vsuet" aria-hidden onClick={showSidebar}>
            <img id="vsuet" src={vsuet} alt="rosada" />
          </div>
          <ul aria-hidden className="nav-menu-items">
            <div id="for-create-student">
              <form id="form-student">
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
                      value={file}
                      onChange={e => setFile(e.target.files[0])}
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
    </>,
    document.getElementById('root')
  );
};

export default Navbar;
