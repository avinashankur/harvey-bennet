"use client"
const ButtonDark = () => {

    const darkModeToggler = () => {
        document.body.classList.toggle('dark-mode-variables');
     }


  return <button onClick={darkModeToggler} className="clr_border w-8 h-8  rounded-xl border shadow">♥</button>;
};

export default ButtonDark;
