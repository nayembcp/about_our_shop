function showToast(message){
      let t=document.getElementById('toast');
      if(!t){
        t=document.createElement('div');
        t.id='toast';
        Object.assign(t.style,{
          position:'fixed',left:'50%',bottom:'25px',transform:'translateX(-50%)',
          background:'#163b24',color:'#fff',padding:'11px 18px',borderRadius:'9px',
          zIndex:'9999',fontSize:'13px',boxShadow:'0 5px 20px rgba(0,0,0,.2)'
        });
        document.body.appendChild(t);
      }
      t.textContent=message;t.style.display='block';
      clearTimeout(window.toastTimer);
      window.toastTimer=setTimeout(()=>t.style.display='none',2500);
    }