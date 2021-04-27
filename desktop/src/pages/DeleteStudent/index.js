import React, { useState, useEffect } from 'react';
import './styles.css';

import {
  MdSchool,
  MdCreate,
  MdFormatAlignLeft,
  MdDelete,
} from 'react-icons/md';

import { IoIosAdd } from 'react-icons/io';

import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
import Modal from './ModalConfirm/Modal';
import api from '../../services/api';
/* import Navlefth from '../../components/NavLefth/Navlefth'; */

export default function DeleteStudent() {
  const [show, setShow] = useState(false);
  const [allstudent, setAllStudent] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredStudenty, setFilteredStudenty] = useState([]);
  const [modalContant, setModalContant] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(`/students/`);

      setAllStudent(result.data);
      console.log(result.data);
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

  async function DelterStudenty(e, studentId) {
    // e.preventDefault();

    const response = await api.delete(`/students/${studentId}`);

    if (response.status !== 400) {
      toast.error('Estudante deletado com sucesso');
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
              <Link to="/student">
                <IoIosAdd className="ic-left" color="#cbcbd6" size={25} />
                Adicionar Estudante
              </Link>

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
          {/*  <Navlefth /> */}
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
                id="student-table-delete"
                key={item.id}
                onClick={() => {
                  setShow(true);

                  setModalContant(item);
                }}
              >
                <div id="students-h">
                  <span id="borda">2</span>
                  <span className="sp">{item.surname}</span>
                  <div id="univer-home">
                    <MdSchool color="#cbcbd6" size={20} />
                    <span className="sp">UITS</span>
                  </div>
                  <RiDeleteBin6Line
                    className="afastar-delete"
                    color="red"
                    size={20}
                  />
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

      <Modal onClose={() => setShow(false)} show={show}>
        <form id="modal-deletar">
          <div id="title-modal">
            <h3>Queres Deletar o Estudante {modalContant?.surname} ?</h3>
          </div>
          <div id="modal-button-confirm">
            <button
              id="confirm"
              type="submit"
              onClick={e => DelterStudenty(e, modalContant.id)}
            >
              DELETAR
            </button>
            <button type="submit" id="no-confirm">
              CANCELAR
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
