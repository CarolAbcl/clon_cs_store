function Input({ text = 'props not found', type = 'text' }) {
  // El input recibe 2 props:
  // text = el texto que tendrá el label.
  // type = el tipo de input a utilizar (text por defecto)
  const textWoSpaces = text.replace(/\s+/g, '')
  return (
    <>
      <div>
        <input type={type} id={textWoSpaces} placeholder={text} />
        {/* ReplaceAll para eliminar los espacios de la propiedad text con el fin que queden
        como identificadores del input y se puedan enlazar con el label */}
        <label htmlFor={textWoSpaces}>{text}</label>
      </div>
      <style jsx>
        {`
          div {
            position: relative;
            width: 10%;
            padding: 24px 0 0;
            margin-top: 12px;
          }

          input {
            width: 100%;
            padding: 8px;
            border-radius: 8px;
            border: 1px solid var(--gray);
            outline: none;
            font-size: 1rem;
          }

          input::placeholder {
            color: transparent;
          }

          label {
            position: absolute;
            top: 0;
            left: 0;
            transition: all 0.3s;
            font-size: 1rem;
          }

          input:placeholder-shown ~ label {
            font-size: 1.2rem;
            left: 12px;
            top: 28px;
            cursor: text;
          }

          input:focus ~ label {
            font-size: 1rem;
            left: 0;
            top: 0px;
          }

          input:focus:placeholder-shown {
            border: 1px solid var(--primary);
          }

          input:focus:placeholder-shown ~ label {
            color: var(--primary);
          }
        `}
      </style>
    </>
  )
}

export default Input
