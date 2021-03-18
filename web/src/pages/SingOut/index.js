import {useState} from 'react';
import './styles.css'
import out from "../../images/out.png"


import api from '../../services/api'


export default function SingOut(){

    const [nome, setNome]= useState('');
    const [email, setEmail]= useState('');
    const [senha, setSenha]= useState('');

   async function handleSubmit(){
        const data = {name:nome,email:email,password:senha}
       
     if(nome !=='' && email !== ''&& senha !==''){

        const response = await api.post('/manager',data)
        
        if(response.status!==400){
            window.location.href='/home'
        }
        else{
             alert('Error ao cadastar o usuario!')
          }

     } else{
        alert('Error preencha os campos !')
     }
       
    }
     function goTologin(){
        window.location.href='/'
     }
    return (
        <div id="section">
        

        <div id="tel-sing">
           <div id="tel-sing-container" >
                <h2>Cadastro.</h2>
                <span>Digite seus dados para entrar e acessar o conteúdo.</span>
          
         
               <input
                name="nome"
                className="input"
                type="text"
                placeholder="Nome"
               
                value={nome}
                onChange={e=> setNome(e.target.value)}
                   
                   />
               <input 
               name="email" 
               className="input"
               autoComplete="email" 
               type="text" 
               placeholder="E-mail"
               
               value={email}
               onChange={e=>setEmail(e.target.value)}
               />
               <input 
               name="senha"
                className="input" 
                type="password" 
                required
                autoComplete="senha"
                placeholder="Senha"
                
                value={senha}
                onChange={e=>setSenha(e.target.value)}
                />
               
               <button 
               className="cadastrar btn"
               type="submit"
               onClick={handleSubmit}
               >Cadastrar</button>
           </div>

           <button 
           className="cadastrar tbn"
           onClick={goTologin}
           >
               Já tem uma conta? Faça login.
               </button>


        </div>

        <div id="tm-img-sing">
            <img id="tm-sing"src={out} alt=""/>

        </div>


    </div>



    );

}