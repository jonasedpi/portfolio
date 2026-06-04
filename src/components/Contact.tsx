const Contact = () => {
    return(
        <div>
            <h1>{t("ct_contact")}</h1>
            <button><a href="mailto:jonasespinheiro@gmail.com" target="_blank" rel='noopener'>E-mail</a></button>
            <button><a href="https://github.com/jonasedpi" target="_blank" rel='noopener'>Github</a></button>
            <button><a href="https://www.linkedin.com/in/jonas-eduardo-schumann-pinheiro/" target="_blank" rel='noopener'>Linkedin</a></button>
            <button><a href="https://api.whatsapp.com/send?phone=5551999239099" target="_blank" rel='noopener'>WhatsApp</a></button>
        </div>
    );
}

export default Contact