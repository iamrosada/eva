import { useState, useEffect} from "react"
import './styles.css'
import loginIm from "../../images/login.png"
import api from '../../services/api'


export default function SingIn(){
     
    //const [login, setlogin] = useState([]);
   

   // useEffect(()=>{
        
       // async function loadApi(){
           // const response = await api.get("/students");

            ///setlogin(response.data);
            
            //console.log(response.data);

       // }
       // loadApi();
  //  },[])
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('')

  async function handleSubmitLogin(){
    const data = {email:email,password:senha}
   
        if( email!== ''&& senha !==''){

            const response = await api.post('/session',data)
            
            if(response.status!==400){
                window.location.href='/home'
            }
            else{
                alert('Error ao fazer o login ')
            }

        } else{
            alert('Error preencha os campos !')
        }
        
        }

        function goTocadastro(){
            window.location.href='/cadastrar'
        }

    return(
       
        <div id="section">
            <div id="tm-img">
                <img id="tm"src={loginIm} alt=""/>

            </div>

            <div id="tel-login">
               <div id="tel-login-container" >
                    <h2>Login</h2>
                    <span>Digite seus dados para entrar e acessar o conteúdo.</span>
              
             
                   <input 
                   className="input" 
                   type="text" 
                   placeholder="E-mail"
                  
                   name="email"
                   autoComplete="email" 
                  
                   value={email}
                   onChange={e=>setEmail(e.target.value)}
                   
                   />
                   <input 
                   className="input"
                   type="password" 
                   placeholder="Senha"
                    name="senha"
                    required
                   value={senha}
                   onChange={e=>setSenha(e.target.value)}
                   
                   />
                   <button 
                   className="cadastrar btn"
                   type="submit"
                   onClick={handleSubmitLogin}
                   >Entrar</button>
               </div>

               <button 
               className="cadastrar tbn"
               onClick={goTocadastro}
               >Ainda não tem conta? Cadastre-se.</button>
 

            </div>


        </div>


    );


}