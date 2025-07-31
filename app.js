//O pt,ig,es são id das opcoes que temos 
//Ao escolhermos queremos que exiba de cada forma
const linguag = {
    pt: {
        userPlaceholder: "Telefone, nome de usuário ou e-mail",
        passPlaceholder: "Senha",
        login: "Entrar",
        forgot: "Esqueceu a senha?",
        cont: "Não tem uma conta?",
        signup: "Cadastrar-se"
    },
    ig: {
        userPlaceholder: "Phone number, username or email address",
        passPlaceholder: "Password",
        login: "Login",
        forgot: "Forgot password?",
        cont: "Don't have an account?",
        signup: "Sign up"
    },
    es: {
        userPlaceholder: "Teléfono, usuario o correo electrónico",
        passPlaceholder: "Contraseña",
        login: "Iniciar sesión",
        forgot: "¿Olvidaste tu contraseña?",
        cont: "¿No tienes una cuenta?",
        signup: "Regístrate"
    }
};
function changeLang() {
    // 1. Pega o idioma selecionado no <select>
    const lang = document.getElementById('langSelect').value;

    // 2. Troca o texto do placeholder do input de usuário
    document.getElementById('user').placeholder = linguag[lang].userPlaceholder;

    // 3. Troca o texto do placeholder do input de senha
    document.getElementById('pass').placeholder = linguag[lang].passPlaceholder;

    // 4. Troca o texto do botão de login
    document.getElementById('login').textContent = linguag[lang].login;

    // 5. Troca o texto do parágrafo "Esqueceu a senha?"
    document.getElementById('forgot').textContent = linguag[lang].forgot;

    // 6. Troca o texto do parágrafo "Não tem uma conta?"
    document.getElementById('cont').textContent = linguag[lang].cont;

    // 7. Troca o texto do parágrafo "Cadastrar-se"
    document.getElementById('signup').textContent = linguag[lang].signup;
}

 function login(){
     
    //Colocando os dados nas variaveis
     let user = document.getElementById("user").value; 
     let pass = document.getElementById("pass").value;
        Swal.fire({
  
    icon: "success",
    draggable: true
    }).then(()=>{
         let user =        document.getElementById("user").value="";
     let pass = document.getElementById("pass").value="";
    });
 }
 //.then(()=>{para exibir depois do swal});

async  function esq(){
    const { value: formValues } = await Swal.fire({
  title: "Redefinir senha",
  html: `
   Digite sua nova senha: <input id="swal-input1" class="swal2-input">
   Novamente: <input id="swal-input2" class="swal2-input">
  `,
  focusConfirm: false,
  preConfirm: () => {
    return [
      document.getElementById("swal-input1").value,
      document.getElementById("swal-input2").value
    ];
  }
});
if (formValues) {
  Swal.fire({
    icon: "success",
    text:"Senha redefinida com sucesso!"
   
  });
}
}
function cadas(){
    document.getElementById("nmr").value;
    document.getElementById("sen").value;
    document.getElementById("nc").value;
    document.getElementById("nu").value;
     Swal.fire({
  
    icon: "success",
    title:"Cadastrado com sucesso!",
    draggable: true
    }).then(()=>{  
    document.getElementById("nmr").value="";
    document.getElementById("sen").value="";
    document.getElementById("nc").value="";
    document.getElementById("nu").value="";
    });


    

    };
