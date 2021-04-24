import React, { useState, useEffect } from 'react';
import './student.css';
import api from '../../services/api';

export default function Estudenty() {
  const [allstudent, setAllStudent] = useState([]);

  const [filteredStudenty, setFilteredStudenty] = useState([]);

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
      allstudent.filter(student => student.surname.toLowerCase().includes(''))
    );
  }, [allstudent]);

  return (
    <section id="section_pay">
      <div className="content_pay">
        <div className="first_1">
          <div className="col_">
            <img src="" alt="" />
            <h2>Confirma & Paga</h2>
            <span>itens</span>
          </div>
          <div className="produt_confirm">
            {filteredStudenty.map(product => (
              <div id="all" href="/produt">
                <img
                  src="https://avatars.githubusercontent.com/u/59142372?v=4"
                  alt=""
                />
                <h1 id="span_1">{product.full_name}</h1>
                <span id="span_2">{product.numberofRoom}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
